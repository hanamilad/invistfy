import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="container-fluid Nav">
      <div className="row">
        <div className="col-lg-7 col-md-7 col-sm-12">
          <form action="">
            <input
              type="search"
              className="form-control"
              placeholder="search"
            />
          </form>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <ul>
            <li>
              <Link to="/"><button className="btn btn-primary">Back To Home</button></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
