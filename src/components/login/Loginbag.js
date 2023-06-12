import React, { useCallback, useState } from "react";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import "./Login.css";
import { Link } from "react-router-dom";
import loginlogo from "./images/login.jpg";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
const REDIRECT_URI = window.location.href;

// logout

const Loginbage = () => {
  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState(null);

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);
  return (
    <div className="Login" id="login">
      <div className="container">
        <div className="form_container">
          <div className="left">
            <img className="img" src={loginlogo} alt="login" />
          </div>
          <form className="right">
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

            <LoginSocialGoogle
              isOnlyGetToken
              client_id={process.env.REACT_APP_GG_APP_ID || ""}
              onLoginStart={onLoginStart}
              onResolve={({ provider, data }) => {
                setProvider(provider);
                setProfile(data);
                console.log({
                  provider: provider,
                  profile: data,
                });
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>
            <LoginSocialFacebook
              isOnlyGetToken
              appId={process.env.REACT_APP_FB_APP_ID || ""}
              onLoginStart={onLoginStart}
              onResolve={({ provider, data }) => {
                setProvider(provider);
                setProfile(data);
                console.log({
                  provider: provider,
                  profile: data,
                });
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <FacebookLoginButton />
            </LoginSocialFacebook>
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
