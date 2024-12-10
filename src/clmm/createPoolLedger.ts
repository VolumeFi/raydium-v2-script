import { CLMM_PROGRAM_ID, DEVNET_PROGRAM_ID } from '@raydium-io/raydium-sdk-v2'
import { PublicKey } from '@solana/web3.js'
import { initSdk, txVersion } from '../config_ledger'
import Decimal from 'decimal.js'
import BN from 'bn.js'
import { devConfigs } from './utils'

export const createPool = async (mint1_token_address: string, mint2_token_address: string, initial_price: Decimal, config_id: number) => {
  try {
    const raydium = await initSdk({ loadToken: true })

    if (!raydium) {
      console.error('raydium is undefined')
      process.exit()
    }

    // you can call sdk api to get mint info or paste mint info from api: https://api-v3.raydium.io/mint/list
    // RAY
    // const mint1 = await raydium.token.getTokenInfo('4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R')
    // const mint1 = await raydium.token.getTokenInfo('7QN7Bq8Hh9cU5UZdQ4n2AWvuxFeeXr7aGgvQNG9ERZJC')  // GRAIN
    const mint1 = await raydium.token.getTokenInfo(mint1_token_address) 
    // USDT
    // const mint2 = await raydium.token.getTokenInfo('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB')
    // const mint2 = await raydium.token.getTokenInfo('So11111111111111111111111111111111111111112') // SOL
    const mint2 = await raydium.token.getTokenInfo(mint2_token_address)
    const clmmConfigs = await raydium.api.getClmmConfigs()
    // const clmmConfigs = devConfigs // devnet configs

    const { execute } = await raydium.clmm.createPool({
      programId: CLMM_PROGRAM_ID,
      // programId: DEVNET_PROGRAM_ID.CLMM,
      mint1,
      mint2,
      ammConfig: { ...clmmConfigs[config_id], id: new PublicKey(clmmConfigs[config_id].id), fundOwner: '', description: '' },
      initialPrice: initial_price,
      startTime: new BN(0),
      txVersion,
      // optional: set up priority fee here
      // computeBudgetConfig: {
      //   units: 600000,
      //   microLamports: 46591500,
      // },
    })

    // don't want to wait confirm, set sendAndConfirm to false or don't pass any params to execute
    const { txId } = await execute({ sendAndConfirm: true })
    console.log('clmm pool created:', { txId: `https://explorer.solana.com/tx/${txId}` })
    process.exit() // if you don't want to end up node execution, comment this line
  } catch (err) {
    console.error(err)
    process.exit()
  }
  
}

/** uncomment code below to execute */
createPool(process.argv[2], process.argv[3], new Decimal(process.argv[4]), parseInt(process.argv[5]))
