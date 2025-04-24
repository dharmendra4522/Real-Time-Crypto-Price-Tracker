import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../app/store";
import { updatePrices } from "./cryptoSlice";
import "./cryptoTable.css"; // Assuming you have a CSS file for styling

const CryptoTable = () => {
    const dispatch = useDispatch<AppDispatch>();
    const assets = useSelector((state: RootState) => state.crypto.assets);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(updatePrices());
        }, 2000);
        return () => clearInterval(interval);
    }, [dispatch]);

    console.log("Assets:", assets);


    return (
        <div style={{ overflowX: "auto" }}>
            <table className="crypto-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>1h %</th>
                        <th>24h %</th>
                        <th>7d %</th>
                        <th>Market Cap</th>
                        <th>24h Volume</th>
                        <th>Circulating Supply</th>
                        <th>Max Supply</th>
                        <th>7D Chart</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map(asset => (
                        <tr key={asset.id}>
                            <td>{asset.id}</td>
                            <td><img src={asset.logo} alt={asset.symbol} width="24" aria-label={`${asset.name} Logo`} /></td>
                            <td>{asset.name}</td>
                            <td>{asset.symbol}</td>
                            <td>${asset.price.toLocaleString()}</td>
                            <td style={{ color: asset.change1h >= 0 ? "green" : "red" }}>
                                {asset.change1h}%
                            </td>
                            <td style={{ color: asset.change24h >= 0 ? "green" : "red" }}>
                                {asset.change24h}%
                            </td>
                            <td style={{ color: asset.change7d >= 0 ? "green" : "red" }}>
                                {asset.change7d}%
                            </td>
                            <td>${asset.marketCap.toLocaleString()}</td>
                            <td>${asset.volume24h.toLocaleString()}</td>
                            <td>{asset.circulatingSupply.toLocaleString()}</td>
                            <td>{asset.maxSupply.toLocaleString()}</td>
                            <td><img src={asset.chartImage} width="80" alt="chart" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoTable;
