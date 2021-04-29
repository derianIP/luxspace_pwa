import React, { useEffect, useState } from "react";
import { Offline } from "./components";
import { Home } from "./pages";

function App() {
  const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);

  const handleOffileStatus = () => {
    setOfflineStatus(!navigator.onLine);
  };

  useEffect(() => {
    handleOffileStatus();
    window.addEventListener("online", handleOffileStatus);
    window.addEventListener("offline", handleOffileStatus);
    console.log("offline status: ", offlineStatus);
    return () => {
      window.removeEventListener("online", handleOffileStatus);
      window.removeEventListener("offline", handleOffileStatus);
    };
  }, [offlineStatus]);

  return (
    <>
      {offlineStatus && <Offline />}
      <Home />
    </>
  );
}

export default App;
