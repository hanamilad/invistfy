import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const LoginDash = () => {
  const history = useHistory();
  const handelcheek = () => {
    history.push("/Homedashboard");
  };
  return (
    <div className="bg-image shadow-2-strong">
      <div
        className="mask d-flex align-items-center h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-md-8">
              <form
                className="bg-white  rounded-5 shadow-5-strong p-5"
                onSubmit={handelcheek}
              >
                <div className="form-outline mb-4">
                  <input type="email" className="form-control" required />
                  <label className="form-label">Email address</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" className="form-control" required />
                  <label className="form-label">Password</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDash;
