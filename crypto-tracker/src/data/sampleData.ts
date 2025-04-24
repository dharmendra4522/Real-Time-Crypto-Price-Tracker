import { CryptoAsset } from "../types/crypto";

export const sampleData: CryptoAsset[] = [
    {
        id: 1,
        logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
        name: "Bitcoin",
        symbol: "BTC",
        price: 93759.48,
        change1h: 0.43,
        change24h: 0.93,
        change7d: 11.11,
        marketCap: 1861618902186,
        volume24h: 43874950947,
        circulatingSupply: 19850000,
        maxSupply: 21000000,
        chartImage: "/btc-chart.png"
    },
    // Add 4 more coins similarly
];
