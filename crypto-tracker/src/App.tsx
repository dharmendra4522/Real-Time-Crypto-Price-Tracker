// App.tsx or main component
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePrices } from "./features/crypto/cryptoSlice";
import CryptoTable from "./features/crypto/cryptoTable"; // Update path if needed
import { AppDispatch } from "./app/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 1500); // every 1.5 seconds

    return () => clearInterval(interval); // cleanup
  }, [dispatch]);

  return (
    <div>
      <h1>Live Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
