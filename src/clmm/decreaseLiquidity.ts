import { ApiV3PoolInfoConcentratedItem, ClmmKeys } from '@raydium-io/raydium-sdk-v2'
import BN from 'bn.js'
import { initSdk, txVersion } from '../config'
import { isValidClmm } from './utils'

export const decreaseLiquidity = async (pool_id: string) => {
  try {
    const raydium = await initSdk()

    let poolInfo: ApiV3PoolInfoConcentratedItem
    // SOL-USDC pool
    const poolId = pool_id
    let poolKeys: ClmmKeys | undefined

    if (raydium.cluster === 'mainnet') {
      // note: api doesn't support get devnet pool info, so in devnet else we go rpc method
      // if you wish to get pool info from rpc, also can modify logic to go rpc method directly
      const data = await raydium.api.fetchPoolById({ ids: poolId })
      poolInfo = data[0] as ApiV3PoolInfoConcentratedItem
      if (!isValidClmm(poolInfo.programId)) throw new Error('target pool is not CLMM pool')
    } else {
      const data = await raydium.clmm.getPoolInfoFromRpc(poolId)
      poolInfo = data.poolInfo
      poolKeys = data.poolKeys
    }

    const allPosition = await raydium.clmm.getOwnerPositionInfo({ programId: poolInfo.programId })
    if (!allPosition.length) throw new Error('user do not have any positions')

    const position = allPosition.find((p) => p.poolId.toBase58() === poolInfo.id)
    if (!position) throw new Error(`user do not have position in pool: ${poolInfo.id}`)

    /** code below will get on chain realtime price to avoid slippage error, uncomment it if necessary */
    // const rpcData = await raydium.clmm.getRpcClmmPoolInfo({ poolId: poolInfo.id })
    // poolInfo.price = rpcData.currentPrice
    const { execute } = await raydium.clmm.decreaseLiquidity({
      poolInfo,
      poolKeys,
      ownerPosition: position,
      ownerInfo: {
        useSOLBalance: true,
        // if liquidity wants to decrease doesn't equal to position liquidity, set closePosition to false
        closePosition: true,
      },
      liquidity: position.liquidity,
      amountMinA: new BN(0),
      amountMinB: new BN(0),
      txVersion,
      // optional: set up priority fee here
      // computeBudgetConfig: {
      //   units: 600000,
      //   microLamports: 46591500,
      // },
    })

    // don't want to wait confirm, set sendAndConfirm to false or don't pass any params to execute
    const { txId } = await execute({ sendAndConfirm: true })
    console.log('withdraw liquidity from clmm position:', { txId: `https://explorer.solana.com/tx/${txId}` })
    process.exit() // if you don't want to end up node execution, comment this line
  } catch (err) {
    console.error(err)
    process.exit()
  }
}

/** uncomment code below to execute */
decreaseLiquidity(process.argv[2])
