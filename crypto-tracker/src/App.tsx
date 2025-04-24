import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { updateAssets } from "./features/crypto/cryptoSlice";
import CryptoTable from "./features/crypto/cryptoTable";

function App() {
  const dispatch = useDispatch();
  const assets = useSelector((state: RootState) => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAssets = assets.map(asset => ({
        ...asset,
        price: +(asset.price * (1 + (Math.random() - 0.5) / 50)).toFixed(2),
        percentChange1h: +(Math.random() * 2 - 1).toFixed(2),
        percentChange24h: +(Math.random() * 2 - 1).toFixed(2),
        volume24h: +(asset.volume24h * (1 + (Math.random() - 0.5) / 10)).toFixed(0),
      }));
      dispatch(updateAssets(newAssets));
    }, 2000);

    return () => clearInterval(interval);
  }, [assets]);

  return <CryptoTable />;
}

export default App;
