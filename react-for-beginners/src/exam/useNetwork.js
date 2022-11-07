import { useEffect, useRef, useState } from "react";
import "./styles.css";

const useNetwork = (onchange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onchange === "function") {
      onchange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

   return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};

export default function App() {
  const handelNetworkChange = (online) => {
    console.log(online ? "we just went online" : "we are offline");
  };
  const onLine = useNetwork(handelNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "ONLINE" : "OFFLINE"}</h1>
    </div>
  );
}
