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

If you are going to use private key, please copy the src/config.ts.template file and name it config.ts and input your YOUR_WALLET_SECRET_KEY and YOUR_RPC_URL.

If you use ledger, input your YOUR_RPC_URL in config_ledger.ts.

### create pool

This is the current config option. Please chhose correct one for your pool.

```
[
  {
    config_id: 0,
    id: '9iFER3bpjf1PTTCQCfTRu17EJgvsxo9pVyA9QWwEuX4x',
    index: 4,
    protocolFeeRate: 120000,
    tradeFeeRate: 100,
    tickSpacing: 1,
    fundFeeRate: 40000,
    defaultRange: 0.005,
    defaultRangePoint: [ 0.001, 0.003, 0.005, 0.008, 0.01 ]
  },
  {
    config_id: 1,
    id: 'EdPxg8QaeFSrTYqdWJn6Kezwy9McWncTYueD9eMGCuzR',
    index: 6,
    protocolFeeRate: 120000,
    tradeFeeRate: 200,
    tickSpacing: 1,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [ 0.01, 0.05, 0.1, 0.2, 0.5 ]
  },
  {
    config_id: 2,
    id: '9EeWRCL8CJnikDFCDzG8rtmBs5KQR1jEYKCR5rRZ2NEi',
    index: 7,
    protocolFeeRate: 120000,
    tradeFeeRate: 300,
    tickSpacing: 1,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [ 0.01, 0.05, 0.1, 0.2, 0.5 ]
  },
  {
    config_id: 3,
    id: '3h2e43PunVA5K34vwKCLHWhZF4aZpyaC9RmxvshGAQpL',
    index: 8,
    protocolFeeRate: 120000,
    tradeFeeRate: 400,
    tickSpacing: 1,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [ 0.01, 0.05, 0.1, 0.2, 0.5 ]
  },
  {
    config_id: 4,
    id: '3XCQJQryqpDvvZBfGxR7CLAw5dpGJ9aa7kt1jRLdyxuZ',
    index: 5,
    protocolFeeRate: 120000,
    tradeFeeRate: 500,
    tickSpacing: 1,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [ 0.01, 0.05, 0.1, 0.2, 0.5 ]
  },
  {
    config_id: 5,
    id: 'E64NGkDLLCdQ2yFNPcavaKptrEgmiQaNykUuLC1Qgwyp',
    index: 1,
    protocolFeeRate: 120000,
    tradeFeeRate: 2500,
    tickSpacing: 60,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [ 0.01, 0.05, 0.1, 0.2, 0.5 ]
  },
  {
    config_id: 6,
    id: 'A1BBtTYJd4i3xU8D6Tc2FzU6ZN4oXZWXKZnCxwbHXr8x',
    index: 3,
    protocolFeeRate: 120000,
    tradeFeeRate: 10000,
    tickSpacing: 120,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [ 0.01, 0.05, 0.1, 0.2, 0.5 ]
  },
  {
    config_id: 7,
    id: 'Gex2NJRS3jVLPfbzSFM5d5DRsNoL5ynnwT1TXoDEhanz',
    index: 9,
    protocolFeeRate: 120000,
    tradeFeeRate: 20000,
    tickSpacing: 120,
    fundFeeRate: 40000,
    defaultRange: 0.1,
    defaultRangePoint: [ 0.01, 0.05, 0.1, 0.2, 0.5 ]
  }
]
```

#### if you use wallet private key


```sh
npm run dev src/clmm/createPool.ts [mint1_token_address] [mint2_token_address] [initial_price] [config_id]
```

or

```sh
yarn dev src/clmm/createPool.ts [mint1_token_address] [mint2_token_address] [initial_price] [config_id]
```

e.g. If you are going to create RAY/SOL pool, then here it is.

```sh
npm run dev src/clmm/createPool.ts 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R So11111111111111111111111111111111111111112 1 0
```

or

```sh
yarn dev src/clmm/createPool.ts 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R So11111111111111111111111111111111111111112 1 0
```

#### if yo use ledger wallet

```sh
npm run dev src/clmm/createPoolLedger.ts [mint1_token_address] [mint2_token_address] [initial_price] [config_id]
```

or

```sh
yarn dev src/clmm/createPoolLedger.ts [mint1_token_address] [mint2_token_address] [initial_price] [config_id]
```

e.g. If you are going to create RAY/SOL pool, then here it is.

```sh
npm run dev src/clmm/createPoolLedger.ts 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R So11111111111111111111111111111111111111112 1 0
```

or

```sh
yarn dev src/clmm/createPoolLedger.ts 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R So11111111111111111111111111111111111111112 1 0
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

