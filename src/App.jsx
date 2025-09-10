import React, { useState } from "react";
import SplashScreen from "./SplashScreen";
import HomePage from "./HomePage"; // your team’s main page

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <HomePage />
      )}
    </>
  );
}

export default App;

