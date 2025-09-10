import React from "react";
import "./HomePage.css";
import logo from "./assets/logo.jpg";
const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-center">WAYPORT</div>
        <button className="login-btn">Login</button>
      </nav>

      {/* Scrollable Page Content */}
      <div className="home-content">
        <img src={logo} alt="Company Logo" className="company-logo" />
        <h1>WAYPORT 🚀</h1>
        <p>Building the future, one line of code at a time.</p>
      </div>
    </div>
  );
};

export default HomePage;

