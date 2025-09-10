import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./OtpPage.css";
import logo from "./assets/logo.jpg"; // replace with your logo
import { FaArrowLeft } from "react-icons/fa"; // back arrow icon

function OtpPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const phone = location.state?.phone || "";
  const previousPage = location.state?.from || "/"; // default to home if not set
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [counter, setCounter] = useState(30);

  // Countdown timer
  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // only numbers
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // keep only last digit
    setOtp(newOtp);
    // auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 4) {
      alert("Please enter all 4 digits");
      return;
    }
    alert(`OTP verified: ${enteredOtp}`);
    navigate("/"); // navigate to home or dashboard
  };

  const handleResend = () => {
    alert("OTP resent!");
    setCounter(30);
    setOtp(["", "", "", ""]);
  };

  return (
    <div className="otp-page-container">
      <div className="otp-box">
        {/* Top bar */}
        <div className="otp-top">
          <FaArrowLeft className="back-arrow" onClick={() => navigate(previousPage)} />
          <h2 className="otp-heading">Verify Phone</h2>
        </div>

        {/* Company logo */}
        <img src={logo} alt="Company Logo" className="otp-logo" />

        {/* Text and description */}
        <p className="otp-text">We have sent a verification code to your number</p>
        

        {/* OTP input boxes */}
        <div className="otp-input-container">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              id={`otp-${idx}`}
              type="text"
              value={digit}
              maxLength="1"
              onChange={(e) => handleChange(idx, e.target.value)}
              className="otp-input"
            />
          ))}
        </div>

        {/* Resend section */}
        <p className="otp-resend-text">
          {counter > 0 ? `Didn't receive the code? Resend in ${counter}s` : 
            <span className="resend-btn" onClick={handleResend}>Resend OTP</span>}
        </p>

        {/* Verify button */}
        <button className="otp-verify-btn" onClick={handleVerify}>
          Verify & Continue
        </button>

        {/* Company info */}
        <div className="otp-company-info">
          <ul>
            <li>Fast and reliable service</li>
            <li>24/7 customer support</li>
            <li>Safe and secure</li>
            <li>Nationwide coverage</li>
            <li>Easy booking process</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OtpPage;
