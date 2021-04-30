import React, { useEffect, useState } from "react";
import { Offline } from "./components";
import { Router } from "./config";
import { Splash } from "./pages";

function App() {
  const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);
  const [isLoading, setIsLoadiang] = useState(true);

  const handleOffileStatus = () => {
    setOfflineStatus(!navigator.onLine);
  };

  useEffect(() => {
    handleOffileStatus();
    window.addEventListener("online", handleOffileStatus);
    window.addEventListener("offline", handleOffileStatus);
    console.log("offline status: ", offlineStatus);

    setTimeout(() => {
      setIsLoadiang(false);
    }, 1500);

    return () => {
      window.removeEventListener("online", handleOffileStatus);
      window.removeEventListener("offline", handleOffileStatus);
    };
  }, [offlineStatus]);

  return (
    <>
      {isLoading ? (
        <Splash />
      ) : (
        <>
          {offlineStatus && <Offline />}
          <Router />
        </>
      )}
    </>
  );
}

export default App;
