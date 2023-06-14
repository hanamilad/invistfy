import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "react-phone-number-input/style.css";
import signuplogo from "./images/signup.jpg";
import { useState } from "react";
import axiosRequest from "../../services/axiosRequest";
import LocalStorageService from "../../services/localstorage";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setphone] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axiosRequest
      .post("api/token/register/", {
        name,
        email,
        password,
        confirmPassword,
        phone,
      })
      .then((response) => {
        if (password !== confirmPassword) {
          alert("password not match");
        } else {
          LocalStorageService.setToken(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3MTA4NjU1LCJpYXQiOjE2ODY2NzY2NTUsImp0aSI6ImRkYzkxOTYyZmEzMTRhZWU5YmM4YjhhMTkyMDliZDdlIiwidXNlcl9pZCI6MX0.FNuHBv3q05rMnjGKSdxOEC8u_KZnCTE5XIkjAStyfks"
          );
          history.push("/log");
          console.log(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Signup" id="Signup">
      <div className="container">
        <div className="form_container">
          <div className="left">
            <img className="img" src={signuplogo} alt="signup" />
          </div>
          <form className="right" onSubmit={handleSubmit}>
            <h2 className="from_heading">Create Account</h2>
            <input
              type="text"
              className="input"
              placeholder="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="text"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              className="input"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <input
              type="password"
              className="input"
              placeholder="confirm Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <input
              type="tel"
              className="input"
              placeholder="phone"
              value={phone}
              onChange={(event) => setphone(event.target.value)}
            />
            <button type="submit" className="btn">
              Sign Up
            </button>
            <p className="text">
              Already Have Account ? <Link to="/log">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
