import React  from "react";
import "./Login.css";
import { Link,} from "react-router-dom";
import logofac from './images/facebook.png'
import logogoogel from "./images/google.png"
import loginlogo from "./images/login.jpg"


const Loginbage = () => {

  return (
    <div className="Login" id="login">
      <div className="container">
        <div className="form_container">
          <div className="left">
            <img className="img" src={loginlogo} alt="login" />
          </div>
          <form className="right" >
            <h2 className="from_heading">Members Log in</h2>
            <input
              type="text"
              className="input"
              placeholder="Email"
              name="Email"
              required
            />
            <input
              type="text"
              className="input"
              placeholder="Password"
              name="Password"
              required
            />
            <button type="submit" className="btn">
              Log In
            </button>
            <p className="text">or</p>
            <button className="google_btn">
              <img src={logogoogel} alt="google icon" />
              <span>Sing in with Google</span>
            </button>
            <button className="Facebook_btn">
              <img src={logofac} alt="Facebook icon" />
              <span>Sing in with Facebook</span>
            </button>
            <p className="text">
              New Here ? <Link to="/signup">Sing Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Loginbage;
