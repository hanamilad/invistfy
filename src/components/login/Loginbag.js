import React, { useCallback, useState } from "react";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import "./Login.css";
import { Link } from "react-router-dom";
import loginlogo from "./images/login.jpg";
import axiosRequest from "../../services/axiosRequest";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import LocalStorageService from "../../services/localstorage";
import { useHistory } from 'react-router-dom';




const Loginbage = () => {
  const history = useHistory();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState(null);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    LocalStorageService.clearToken();
  }, []);

const handleSubmit = async (event) => {
    event.preventDefault();
   
      const response = await axiosRequest.post("api/token/login/", { email, password })
.then((response)=>{
      LocalStorageService.setToken("token from backend");
      history.push('/')
      console.log(response);
    })
    .catch((err)=>{
      console.log(err);
    }) 
    
  };


  return (
    <div className="Login" id="login">
      <div className="container">
        <div className="form_container">
          <div className="left">
            <img className="img" src={loginlogo} alt="login" />
          </div>
          <form className="right" onSubmit={handleSubmit} >
            <h2 className="from_heading">Members Log in</h2>
            <input
              type="text"
              className="input"
              placeholder="Email"
              value={email}
              name="Email"
              required
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="text"
              className="input"
              placeholder="Password"
              name="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <button
              type="submit"
              className="btn"
            >
             Log In
            </button>
            <p className="text">or</p>

            <LoginSocialGoogle
              isOnlyGetToken
              client_id={process.env.REACT_APP_GG_APP_ID || ""}
              // onLoginStart={onLoginStart}
              onResolve={({ provider, data }) => {
                setProvider(provider);
                setProfile(data);
                history.push('/');
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
              // onLoginStart={onLoginStart}
              onResolve={({ provider, data }) => {
                setProvider(provider);
                setProfile(data);
                history.push('/');
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
