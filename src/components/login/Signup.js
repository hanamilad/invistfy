import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "react-phone-number-input/style.css";  
import signuplogo from "./images/signup.jpg"


const Signup = () => {
  return (
    <div className="Signup" id="Signup">
      <div className="container">
        <div className="form_container">
          <div className="left">
            <img className="img" src={signuplogo} alt="signup" />
          </div>
          <div className="right">
            <h2 className="from_heading">Create Account</h2>
            <input
              type="text"
              className="input"
              placeholder="Username"
              name="username"
            />
            <input
              type="text"
              className="input"
              placeholder="Email"
              name="email"
            />
            <input
              type="password"
              className="input"
              placeholder="password"
              name="password"
            />
            <input
              type="password"
              className="input"
              placeholder="confirm Password"
              name="confirm Password"
            />
            <input
              type="tel"
              className="input"
              placeholder="phone"
              name="phone"

            />
            <Link to="/log" className="btn">Sign Up</Link>
            <p className="text">
              Already Have Account ? <Link to="/log">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
