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
import { useHistory } from "react-router-dom";
import ToasterConfig from "../../services/ToasterConfig";

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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
    };

    axiosRequest
      .post("api/token/login/", data)
      .then((response) => {
        console.log(response.data.data.)
        // LocalStorageService.getService().setToken();
        // ToasterConfig(response.data.messsage, "success");
      })
      .catch((error) => {
        // console.log(error);
        ToasterConfig(error.response.data.message, "error");
      });
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = {
  //     email,
  //     password,
  //   };
  //   fetch("https://elshaf3y.pythonanywhere.com/api/token/login/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((responseData) => {
  // LocalStorageService.setToken(responseData.data.access)
  //       // history.push("/");
  //       console.log(responseData);
  //     })
  //     .catch((error) => {
  //       // Handle any errors
  //       console.error(error);
  //     });
  // };

  return (
    <div className="row text-center p-4">
      <div className="col-md-12">
        <div
          className="Login w-100 justify-content-center container-fluid"
          id="login"
        >
          <div className="form_container row p-4">
            <div className="left col-md-6">
              <img className="img" src={loginlogo} alt="login" />
            </div>
            <form className="right col-md-6" onSubmit={handleSubmit}>
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
              <button type="submit" className="btn">
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
                  history.push("/");
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
                  history.push("/");
                }}
                onReject={(err) => {
                  console.log(err);
                }}
              >
                <FacebookLoginButton />
              </LoginSocialFacebook>
              <p className="text">
                Don't have an account ? <Link to="/signup">Signup</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loginbage;
