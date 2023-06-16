import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "react-phone-number-input/style.css";
import signuplogo from "./images/signup.jpg";
import { useState } from "react";
import axiosRequest from "../../services/axiosRequest";
import LocalStorageService from "../../services/localstorage";
import { useHistory } from "react-router-dom";
import ToasterConfig from "../../services/ToasterConfig";

const Signup = () => {
  const [first_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setpassword2] = useState("");
  const [phone_number, setphone] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      first_name,
      email,
      password,
      password2,
      phone_number,
    };
    axiosRequest
      .post("api/token/register/", data)
      .then((response) => {
        LocalStorageService.setToken(response.data.access);
        history.push("/log");
        // console.log(response);
      })
      .catch((err) => {
        ToasterConfig(err.response.data.message, "error");
        // console.log(err, "a7a");
      });
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = {
  //     first_name,
  //     email,
  //     password,
  //     password2,
  //     phone_number,
  //   };
  //   fetch('https://elshaf3y.pythonanywhere.com/api/token/register/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json()
  //     )
  //     .then((responseData) => {
  //       // LocalStorageService.setToken(responseData.data.access)
  //       // history.push("/log");
  //       console.log(responseData);
  //     })
  //     .catch((error) => {

  //       console.error(error);
  //     });
  // };

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
              value={first_name}
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
              value={password2}
              onChange={(event) => setpassword2(event.target.value)}
            />
            <input
              type="tel"
              className="input"
              placeholder="phone"
              value={phone_number}
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
