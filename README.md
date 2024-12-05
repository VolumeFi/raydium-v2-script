# raydium-v2-script

## clmm

### run this command to install node modules

```sh
npm install
```

or

```sh
yarn
```

### please copy the src/config.ts.template file and name it config.ts and input your YOUR_WALLET_SECRET_KEY and YOUR_RPC_URL if you are going to use private key

### input your YOUR_RPC_URL in config_ledger.ts if you use ledger.

### create pool

#### if you use wallet private key

```sh
npm run dev src/clmm/createPool.ts [mint1_token_address] [mint2_token_address]
```

or

```sh
yarn dev src/clmm/createPool.ts [mint1_token_address] [mint2_token_address]
```

e.g. If you are going to create RAY/SOL pool, then here it is.

```sh
npm run dev src/clmm/createPool.ts 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R So11111111111111111111111111111111111111112
```

or

```sh
yarn dev src/clmm/createPool.ts 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R So11111111111111111111111111111111111111112
```

#### if yo use ledger wallet

```sh
npm run dev src/clmm/createPoolLedger.ts [mint1_token_address] [mint2_token_address]
```

or

```sh
yarn dev src/clmm/createPoolLedger.ts [mint1_token_address] [mint2_token_address]
```

e.g. If you are going to create RAY/SOL pool, then here it is.

```sh
npm run dev src/clmm/createPoolLedger.ts 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R So11111111111111111111111111111111111111112
```

or

```sh
yarn dev src/clmm/createPoolLedger.ts 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R So11111111111111111111111111111111111111112
```

### create position

#### if you use wallet private key

```sh
npm run dev src/clmm/createPosition.ts [pool_id] [input_token1_amount] [start_price] [end_price]
```

or

```sh
yarn dev src/clmm/createPosition.ts [pool_id] [input_token1_amount] [start_price] [end_price]
```

e.g.

```sh
npm run dev src/clmm/createPosition.ts 61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht 0.000001 0.000001 100000
```

or

```sh
yarn dev src/clmm/createPosition.ts 61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht 0.000001 0.000001 100000
```

#### if you use ledger wallet

```sh
npm run dev src/clmm/createPositionLedger.ts [pool_id] [input_token1_amount] [start_price] [end_price]
```

or

```sh
yarn dev src/clmm/createPositionLedger.ts [pool_id] [input_token1_amount] [start_price] [end_price]
```

e.g.

```sh
npm run dev src/clmm/createPositionLedger.ts 61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht 0.000001 0.000001 100000
```

or

```sh
yarn dev src/clmm/createPositionLedger.ts 61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht 0.000001 0.000001 100000
```

### close position

#### if you use wallet private key

```sh
npm run dev src/clmm/closePosition.ts [pool_id]
```

or

```sh
yarn dev src/clmm/closePosition.ts [pool_id]
```

e.g.

```sh
npm run dev src/clmm/closePosition.ts 61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht
```

or

```sh
yarn dev src/clmm/closePosition.ts 61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht
```

#### if you use ledger wallet

```sh
npm run dev src/clmm/closePositionLedger.ts [pool_id]
```

or

```sh
yarn dev src/clmm/closePositionLedger.ts [pool_id]
```

e.g.

```sh
npm run dev src/clmm/closePositionLedger.ts 61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht
```

or

```sh
yarn dev src/clmm/closePositionLedger.ts 61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht
```

### lock position

If you are going to lock your position permanently, run this command.

#### if you use wallet private key

```sh
npm run dev src/clmm/lockPosition.ts [position_nft_mint_address]
```

or

```sh
yarn dev src/clmm/lockPosition.ts [position_nft_mint_address]
```

#### if you use ledger wallet

```sh
npm run dev src/clmm/lockPositionLedger.ts [position_nft_mint_address]
```

or

```sh
yarn dev src/clmm/lockPositionLedger.ts [position_nft_mint_address]
```

### increase liqudity

#### if you use wallet private key

```sh
npm run dev src/clmm/increaseLiquidity.ts [pool_id] [input_token1_amount] [slippage]
```

or

```sh
yarn dev src/clmm/increaseLiquidity.ts [pool_id] [input_token1_amount] [slippage]
```

e.g. increase liquidty in RAY/USDC pool

```sh
npm run dev src/clmm/increaseLiquidity.ts 61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht 0.1 0.05
```

or

```sh
yarn dev src/clmm/increaseLiquidity.ts 61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht 0.1 0.05
```

#### if you use ledger wallet

```sh
npm run dev src/clmm/increaseLiquidityLedger.ts [pool_id] [input_token1_amount] [slippage]
```

or

```sh
yarn dev src/clmm/increaseLiquidityLedger.ts [pool_id] [input_token1_amount] [slippage]
```

e.g. increase liquidty in RAY/USDC pool

```sh
npm run dev src/clmm/increaseLiquidityLedger.ts 61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht 0.1 0.05
```

or

```sh
yarn dev src/clmm/increaseLiquidityLedger.ts 61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht 0.1 0.05
```

### decrease liqudity

#### if you use wallet private key

```sh
npm run dev src/clmm/decreaseLiquidity.ts [pool_id]
```

or

```sh
yarn dev src/clmm/decreaseLiquidity.ts [pool_id]
```

e.g. decrease liquidty in RAY/USDC pool

```sh
npm run dev src/clmm/decreaseLiquidity.ts 61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht
```

or

```sh
yarn dev src/clmm/decreaseLiquidity.ts 61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht
```

#### if you use ledger wallet

```sh
npm run dev src/clmm/decreaseLiquidityLedger.ts [pool_id]
```

or

```sh
yarn dev src/clmm/decreaseLiquidityLedger.ts [pool_id]
```

e.g. decrease liquidty in RAY/USDC pool

```sh
npm run dev src/clmm/decreaseLiquidityLedger.ts 61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht
```

or

```sh
yarn dev src/clmm/decreaseLiquidityLedger.ts 61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht
```

