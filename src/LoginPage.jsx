import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import logo from "./assets/logo.jpg"; // replace with your company logo

function LoginPage() {
    const navigate = useNavigate();

  const handleSendOtp = () => {
    navigate("/otp", { state: { from: "/login", type: "login", phone: "+91 9876543210" } });
  };
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-center">WAYPORT</div>
        <Link to="/">
          <button className="login-btn">Home</button>
        </Link>
      </nav>

      {/* Login form container */}
      <div className="login-page-container">
        <div className="login-box">
          {/* Company Logo */}
          <img src={logo} alt="Company Logo" className="company-logo" />

          {/* Welcome text */}
          <h2 className="welcome-text">Welcome to Wayport</h2>

          {/* Two stacked <p> tags */}
          <p className="info-text">Your journey starts here.</p>
          <p className="info-text">Login to continue</p>

          {/* Two small divs in 2-column layout */}
          <div className="info-cards">
            <div className="info-card">🚀 Fast Booking</div>
            <div className="info-card">📱 Easy Access</div>
          </div>

          {/* Phone number input */}
          <input
            type="tel"
            placeholder="Enter Phone Number"
            className="login-input"
          />

          {/* Send OTP button */}
          <button onClick={handleSendOtp} className="login-button">
        Send OTP
      </button>

          {/* Sign up link */}
          <p className="signup-text">
            Don’t have an account? <Link to="/signup" className="signup-link">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;


