# Bitnovo SDK

### Installation

You can use any package manager:

```npm
npm i bitnovo-sdk
```

```npm
pnpm i bitnovo-sdk
```

```npm
yarn add bitnovo-sdk
```

### React Integration

```javascript
import { BitnovoRamp } from 'bitnovo-sdk'
<BitnovoRamp config={{ apiKey: '' }} />
```

### React + Typescript

```typescript
import { BitnovoRamp, BitnovoRampProps } from 'bitnovo-sdk'

interface MyOwnBitnovoRampProps extends BitnovoRampProps {}

const MyOwnBitnovoRamp: React.FC<MyOwnBitnovoRampProps> = ({ ...props }) => {
  return <BitnovoRamp {...props} />
}

<MyOwnBitnovoRamp config={{ apiKey: '' }} />
```

### Vanilla Integration

Javascript:

```javascript
import { initBitnovoRamp } from 'bitnovo-sdk'

initBitnovoRamp({
  config: { apiKey: 'B2X2gbgpOrdaw16yV2ZKD' },
  selector: '#bitnovo-ramp',
  height: '660px',
  width: '420px'
})
```

HTML:

```html
<div id="bitnovo-ramp" />
```

### Any JS Framework Integration (Svelte, PReact, SolidJs)

```javascript
import { initBitnovoRamp } from 'bitnovo-sdk'

// Any function that runs only once upon rendering or mounting a component.
  useEffect(() => {
    initBitnovoRamp({
      config: { apiKey: 'B2X2gbgpOrdaw16yV2ZKD' },
      selector: '#bitnovo-ramp',
      height: '660px',
      width: '420px'
    })
  }, [])

//HTML required to be rendered within the component.
<div id="bitnovo-ramp" />
```

## Parameters

### URL Parameters

| Property                | Description                                                          | Example                                                                                                    |
| ----------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `defaultCrypto`         | Default cryptocurrency to load the widget                            | `"USDT_POLYGON,USDC_ETHEREUM"`                                                                             |
| `excludeCryptos`        | Parameter to exclude specific cryptocurrencies                       | `"USDT_POLYGON,USDC_ETHEREUM"`                                                                             |
| `onlyCryptos`           | Select specific cryptocurrencies to display                          | `"USDT_POLYGON,USDC_ETHEREUM"`                                                                             |
| `excludeCryptoNetworks` | Select cryptocurrency networks to exclude                            | `"POLYGON,ETHEREUM"`                                                                                       |
| `onlyCryptoNetworks`    | Select specific cryptocurrency networks to display                   | `"POLYGON,ETHEREUM"`                                                                                       |
| `wallets`               | Wallet addresses that can be provided to the widget                  | `"BTC:1GDufEqaTG95rnYSydQZVFmVLzMbWkZ7bk,USDT_POLYGON:0xb794f5ea0ba39494ce839613fffba74279579268"`         |
| `networkWallets`        | Network-specific wallet addresses that can be provided to the widget | `"POLYGON:0xb794f5ea0ba39494ce839613fffba74279579268,ETHEREUM:0xb794f5ea0ba39494ce839613fffba74279579268"` |
| `isAddressEditable`     | Parameter to prevent the end user from editing the wallet address    | `true`/`false`                                                                                             |
| `isAmountEditable`      | Parameter to prevent the end user from changing the amount           | `true`/`false`                                                                                             |
| `apiKey`                | API key created from the developer panel                             | `B2X2gbgpOrdaw16yV2ZKD`                                                                                    |

### SDK Parameters

If the SDK is used, all parameters have their respective typing, and it is not necessary to write them as if they were query parameters, for example:

```javascript
{
    apiKey: 'B2X2gbgpOrdaw16yV2ZKD',
    excludeCryptos: ['USDT_TRON', 'USDC_ETHEREUM'],
    wallets: ['BTC:1GDufEqaTG95rnYSydQZVFmVLzMbWkZ7bk']
}
```
