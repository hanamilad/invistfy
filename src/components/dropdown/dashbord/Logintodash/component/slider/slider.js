import React from "react";
import { Link } from "react-router-dom";
import "./slider.css";

const Slider = () => {
  return (
    <div className="slider">
      <ul>
        <li>
          <div className="logo"><i className="fa-solid fa-user-tie"></i></div>
        </li>

        <li>
          <Link to="/Homedashboard">
            <i className="fa-solid fa-house-chimney"></i>
          </Link>
        </li>

        <li>
          <Link to="Inform">
            <i className="fa-solid fa-user"></i>
          </Link>
        </li>

        <li>
          <Link to="Body">
          <i className="fa-solid fa-money-bill-transfer"></i>
          </Link>
        </li>
        <li>
          <Link to="units">
          <i class="fa-solid fa-layer-group"></i>
          </Link>
        </li>
        <li>
          <Link to="/Addindash">
          <i class="fa-solid fa-circle-plus"></i>
          </Link>
        </li>

        <li>
      <Link to="Setting">
          <i className="fa-solid fa-gear"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Slider;
