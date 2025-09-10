import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";
import logo from "./assets/logo.jpg"; // replace with your logo

function SignUpPage() {
  const [journeyType, setJourneyType] = useState(""); // selected journey
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  const handleCreateAccount = () => {
    navigate("/otp", { state: { from: "/signup", type: "signup", phone: "+91 9876543210" } });
  };

  return (
    <div className="signup-page-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-center">WAYPORT</div>
        <Link to="/">
          <button className="login-btn">Home</button>
        </Link>
      </nav>

      {/* Signup Form */}
      <div className="signup-form-container">
        {/* Company Logo */}
        <img src={logo} alt="Company Logo" className="company-logo" />

        {/* Join Us Text */}
        <h2 className="join-text">Join Us</h2>

        {/* Two stacked <p> tags */}
        <p className="info-text">Start your journey with Wayport</p>
        <p className="info-text">Sign up to continue</p>

        {/* Two small info cards */}
        <div className="info-cards">
          <div className="info-card">🚀 Fast Booking</div>
          <div className="info-card">📱 Easy Access</div>
        </div>

        {/* Choose Your Journey */}
        <p className="choose-journey-text">Choose Your Journey</p>
        <div className="journey-options">
          <div
            className={`journey-card ${journeyType === "passenger" ? "selected" : ""}`}
            onClick={() => setJourneyType("passenger")}
          >
            <span className="radio-circle"></span>
            Passenger
          </div>
          <div
            className={`journey-card ${journeyType === "captain" ? "selected" : ""}`}
            onClick={() => setJourneyType("captain")}
          >
            <span className="radio-circle"></span>
            Captain
          </div>
        </div>

        {/* Full Name */}
        <label className="form-label">Full Name</label>
        <input type="text" placeholder="Enter your full name" className="signup-input" />
        <small className="input-helper">Enter your name</small>

        {/* Phone Number */}
        <label className="form-label">Phone Number</label>
        <input type="text" placeholder="Enter your phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} className="signup-input" />
        <small className="input-helper">Enter your phone number</small>

        {/* Create Account Button */}
        <button onClick={handleCreateAccount} className="create-account-btn">
        Create Account
      </button>

        {/* Already have account */}
        <p className="signup-text">
          Already have an account? <Link to="/login" className="signup-link">Sign In</Link>
        </p>

        {/* Company Details */}
        <div className="company-details">
          <ul>
            <li>Fast and reliable service</li>
            <li>24/7 Customer support</li>
            <li>Safe and secure</li>
            <li>Nationwide coverage</li>
            <li>Easy booking process</li>
          </ul>
        </div>

        {/* Terms & Conditions */}
        <div className="terms-container">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className="terms-label">
            By continuing I agree to the <span className="terms-link">Terms & Conditions</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
