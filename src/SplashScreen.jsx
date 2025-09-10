import React, { useEffect, useState } from "react";
import "./SplashScreen.css";
import logo from "./assets/logo.jpg";

const SplashScreen = ({ onFinish }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true); // trigger fade-in
    const timer = setTimeout(() => {
      onFinish(); // after 3 sec -> go to home
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <div className={`splash-content ${fade ? "fade-in" : ""}`}>
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
        <h1 className="site-name">WAYPORT</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
