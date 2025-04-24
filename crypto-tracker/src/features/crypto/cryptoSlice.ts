import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Asset {
    id: number;
    logo: string;
    name: string;
    symbol: string;
    price: number;
    percentChange1h: number;
    percentChange24h: number;
    percentChange7d: number;
    marketCap: number;
    volume24h: number;
    circulatingSupply: number;
    maxSupply: number;
    chartImage?: string; // Optional
}

interface CryptoState {
    assets: Asset[];
}

const initialState: CryptoState = {
    assets: [
        {
            id: 1,
            logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
            name: "Bitcoin",
            symbol: "BTC",
            price: 30000,
            percentChange1h: 0.5,
            percentChange24h: -0.2,
            percentChange7d: 3.2,
            marketCap: 600000000000,
            volume24h: 35000000000,
            circulatingSupply: 19000000,
            maxSupply: 21000000,
        },
        // Add 4 more sample assets
    ],
};

const cryptoSlice = createSlice({
    name: "crypto",
    initialState,
    reducers: {
        updatePrices: (state) => {
            state.assets = state.assets.map((asset) => ({
                ...asset,
                price: +(asset.price * (1 + (Math.random() - 0.5) / 50)).toFixed(2),
                percentChange1h: +(Math.random() * 2 - 1).toFixed(2),
                percentChange24h: +(Math.random() * 2 - 1).toFixed(2),
                volume24h: +(asset.volume24h * (1 + (Math.random() - 0.5) / 10)).toFixed(0),
            }));
        },
        updateAssets: (state, action: PayloadAction<Asset[]>) => {
            state.assets = action.payload;
        },
    },
});

export const { updatePrices, updateAssets } = cryptoSlice.actions;

export default cryptoSlice.reducer;
