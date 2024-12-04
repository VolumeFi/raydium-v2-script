import { Raydium, TxVersion, parseTokenAccountResp } from '@raydium-io/raydium-sdk-v2'
import { Connection, Keypair, clusterApiUrl } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID, TOKEN_2022_PROGRAM_ID } from '@solana/spl-token'
import bs58 from 'bs58'
import { LedgerWalletAdapter } from '@solana/wallet-adapter-ledger'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

export const connection = new Connection('<YOUR_RPC_URL>') //<YOUR_RPC_URL>
// export const connection = new Connection(clusterApiUrl('devnet')) //<YOUR_RPC_URL>
export const txVersion = TxVersion.V0 // or TxVersion.LEGACY
const cluster = 'mainnet' // 'mainnet' | 'devnet'

let raydium: Raydium | undefined
export const initSdk = async (params?: { loadToken?: boolean }) => {
  if (raydium) return raydium
  if (connection.rpcEndpoint === clusterApiUrl('mainnet-beta'))
    console.warn('using free rpc node might cause unexpected error, strongly suggest uses paid rpc node')
  console.log(`connect to rpc ${connection.rpcEndpoint} in ${cluster}`)
  
  // Create a Ledger wallet adapter
  const wallet = new LedgerWalletAdapter()
  // Connect to the Ledger wallet
  await wallet.connect()

  // Get the public key from the Ledger wallet
  const publicKey = wallet.publicKey;
  if (publicKey) {
    console.log(`Connected to wallet: ${publicKey.toBase58()}`);
    
    // Example: Fetch the balance of the wallet
    const balance = await connection.getBalance(publicKey);
    console.log(`Balance: ${balance / 1e9} SOL`);

    const owner = wallet.publicKey;

    raydium = await Raydium.load({
      owner,
      connection,
      cluster,
      disableFeatureCheck: true,
      disableLoadToken: !params?.loadToken,
      blockhashCommitment: 'finalized',
      // urlConfigs: {
      //   BASE_HOST: '<API_HOST>', // api url configs, currently api doesn't support devnet
      // },
    })
  
    /**
     * By default: sdk will automatically fetch token account data when need it or any sol balace changed.
     * if you want to handle token account by yourself, set token account data after init sdk
     * code below shows how to do it.
     * note: after call raydium.account.updateTokenAccount, raydium will not automatically fetch token account
     */
  
    /*  
    raydium.account.updateTokenAccount(await fetchTokenAccountData())
    connection.onAccountChange(owner.publicKey, async () => {
      raydium!.account.updateTokenAccount(await fetchTokenAccountData())
    })
    */
  
    return raydium
  } else {
    console.error('Failed to get public key from Ledger wallet');
    return raydium
  }
}

// export const fetchTokenAccountData = async () => {
//   const solAccountResp = await connection.getAccountInfo(owner.publicKey)
//   const tokenAccountResp = await connection.getTokenAccountsByOwner(owner.publicKey, { programId: TOKEN_PROGRAM_ID })
//   const token2022Req = await connection.getTokenAccountsByOwner(owner.publicKey, { programId: TOKEN_2022_PROGRAM_ID })
//   const tokenAccountData = parseTokenAccountResp({
//     owner: owner.publicKey,
//     solAccountResp,
//     tokenAccountResp: {
//       context: tokenAccountResp.context,
//       value: [...tokenAccountResp.value, ...token2022Req.value],
//     },
//   })
//   return tokenAccountData
// }

export const grpcUrl = '<YOUR_GRPC_URL>'
export const grpcToken = '<YOUR_GRPC_TOKEN>'
