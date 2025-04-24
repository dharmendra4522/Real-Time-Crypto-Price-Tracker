import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sampleData } from '../../data/sampleData';
import { CryptoAsset as AssetType } from "../../types/crypto";

export interface Asset extends AssetType {
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
    assets: sampleData.map((asset) => ({
        ...asset,
        percentChange1h: 0, // Default value
        percentChange24h: 0, // Default value
        percentChange7d: 0,  // Default value
    })),
};

const cryptoSlice = createSlice({
    name: "crypto",
    initialState,
    reducers: {
        updatePrices: (state) => {
            state.assets = state.assets.map((asset) => ({
                ...asset,
                // logo: "/media/images/bitcoin.svg.png",
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
