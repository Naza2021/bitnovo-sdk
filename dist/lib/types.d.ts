export type IntegratorsParamsExternal = Partial<{
    /** Default crypto currency to display when the widget loads, example: USDT_POLYGON | USDC_ETHEREUM */
    defaultCrypto: string;
    /** Parameter to exclude specific crypto currencies: USDT_POLYGON,USDC_ETHEREUM */
    excludeCryptos: string[] | string;
    /**Select the specific crypto currencies to display, example:  USDT_POLYGON,USDC_ETHEREUM */
    onlyCryptos: string[] | string;
    /**Select the specific crypto currencies to display, example:  POLYGON,ETHEREUM */
    excludeCryptoNetworks: string[] | string;
    /**Select the specific crypto currencies to display, example:  POLYGON,ETHEREUM */
    onlyCryptoNetworks: string[] | string;
    /**String of wallet addresses that can be supplied to the widget, example: BTC:1GDufEqaTG95rnYSydQZVFmVLzMbWkZ7bk,USDT_POLYGON:0xb794f5ea0ba39494ce839613fffba74279579268 */
    wallets: string[] | string;
    /**String of wallet addresses that can be supplied to the widget, example: POLYGON:0xb794f5ea0ba39494ce839613fffba74279579268,ETHEREUM:0xb794f5ea0ba39494ce839613fffba74279579268 */
    networkWallets: string[] | string;
    /**Parameter to prevent the end-user from editing the wallet address. */
    isAddressEditable: boolean;
    /**Parameter to prevent the amount from being changed by the end-user */
    isAmountEditable: boolean;
}>;
export type IntegratorsParams = Partial<{
    /** Default crypto currency to display when the widget loads, example: USDT_POLYGON | USDC_ETHEREUM */
    defaultCrypto: string;
    /** Parameter to exclude specific crypto currencies: USDT_POLYGON,USDC_ETHEREUM */
    excludeCryptos: string[];
    /**Select the specific crypto currencies to display, example:  USDT_POLYGON,USDC_ETHEREUM */
    onlyCryptos: string[];
    /**Select the specific crypto currencies to display, example:  POLYGON,ETHEREUM */
    excludeCryptoNetworks: string[];
    /**Select the specific crypto currencies to display, example:  POLYGON,ETHEREUM */
    onlyCryptoNetworks: string[];
    /**String of wallet addresses that can be supplied to the widget, example: BTC:1GDufEqaTG95rnYSydQZVFmVLzMbWkZ7bk,USDT_POLYGON:0xb794f5ea0ba39494ce839613fffba74279579268 */
    wallets: string[];
    /**String of wallet addresses that can be supplied to the widget, example: POLYGON:0xb794f5ea0ba39494ce839613fffba74279579268,ETHEREUM:0xb794f5ea0ba39494ce839613fffba74279579268 */
    networkWallets: string[];
    /**Parameter to prevent the end-user from editing the wallet address. */
    isAddressEditable: boolean;
    /**Parameter to prevent the amount from being changed by the end-user */
    isAmountEditable: boolean;
}>;
export type IntegratorsParamsInternal = Partial<{
    /**String of wallet addresses that can be supplied to the widget, example: BTC:1GDufEqaTG95rnYSydQZVFmVLzMbWkZ7bk,USDT_POLYGON:0xb794f5ea0ba39494ce839613fffba74279579268 */
    wallets: Record<string, string>;
    /**String of wallet addresses that can be supplied to the widget, example: POLYGON:0xb794f5ea0ba39494ce839613fffba74279579268,ETHEREUM:0xb794f5ea0ba39494ce839613fffba74279579268 */
    networkWallets: Record<string, string>;
}>;
export type ScreenQueryParams = Partial<{
    screen: RAMPSCREENS;
    redirect?: string;
    trade?: boolean;
    disableNav?: boolean;
    disableTabsNav?: boolean;
    params?: {
        tab?: 'comprar' | 'vender';
    };
    defaultCurrencyCode?: string;
    defaultCurrencyCode1?: string;
    defaultAmount?: string;
    externalRedirect?: boolean;
    modal: string;
    modalScreen: string;
    defaultNetwork: string;
    loginMode: boolean;
    urlRedirect: string;
    theme: 'dark' | 'light';
    themeStorage: 'string';
    integration: 'stellar' | 'integrator';
    email: string;
    apiKey: string;
    flow: 'buy' | 'sell' | 'swap' | 'exchange';
    /** Stellar params */
    transaction_id: string;
    token: string;
}> & IntegratorsParams;
type RAMPSCREENS = 'CardsScreen' | 'Swap' | 'StartLogin' | 'ConnectWallet' | 'SendVerificationCodeSms' | 'ContinueInMobile' | 'VerificationCode' | 'BillingAddressInactive' | 'BillingAddressActive' | 'EnterCardDetails' | 'PurchaseSummary' | 'SellSummary' | 'SellTransferDetails' | 'PaymentMethods' | 'SellMethods' | 'SellScreen' | 'DepositMethods' | 'VerificationCompleted' | 'VerificationErrorQr' | 'WireTransfer' | 'SuccessfulPurchase' | 'PaymentError' | 'WalletEuro' | 'Exchange' | 'SumsubScreen' | 'ValidateEmail' | 'ValidateSMS' | 'ValidateOTPPass' | 'SetPassword' | 'ValidateCode' | 'SummaryCoupon' | 'WithdrawMethods' | 'WithdrawSummary' | 'WithdrawDetails' | 'WITHDRAACCOUNTS' | 'HISTORY' | 'SwapCalculator' | 'SWAPSUMMARY';
type TypeWithItem<T extends string, U> = {
    type: T;
} & U;
export type RampMessages = TypeWithItem<'kyc-event', {
    event: 'fiscal-address-success';
}> | TypeWithItem<'external-redirect', {
    event: 'external-redirect';
    currency: PurchaseCryptocurrencies;
    screen: string;
    redirect?: string;
    defaultAmount?: string;
}> | TypeWithItem<'loading', {
    event: 'success';
}> | TypeWithItem<'screen-change', {}>;
type PurchaseCryptocurrencies = {
    symbol: string;
    minAmount: number;
    maxAmount: number;
    rateFactor?: number;
    enabled?: boolean;
    serviceFee?: number;
    rate: number;
    networkCryptoFee: number;
    requestPaymentTag?: boolean;
    walletRegex: RegExp;
    label?: string;
    value?: string;
    groupBy?: string;
    isPrivacyCrypto?: boolean;
    network?: string;
    networks: {
        symbol: string;
        walletRegex: string;
        maxAmount: number;
        minAmount: number;
        networkCryptoFee: number;
    }[];
};
export {};
