import React from "react";
import "./setting.css";
import Nav from "../nav/Nav";
import Slider from "../slider/slider";

const Setting = () => {
  return (
    <div className="setting">
      <Slider />
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="extable">
            <table className="table table-hover table-dark col-12">
              <thead>
                <tr>
                  <th colSpan="3" scope="col" className="one">
                    Information
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th colSpan="2">Hana</th>
                </tr>
                <tr>
                  <th>User Name</th>
                  <th colSpan="2">hanamilad9@gmail.com</th>
                </tr>
                <tr>
                  <th>Number</th>
                  <th colSpan="2">01207465753</th>
                </tr>
                <tr>
                  <th>Address</th>
                  <th colSpan="2">Cairo</th>
                </tr>
                <tr>
                  <th>Payment Methode</th>
                  <th colSpan="2">
                    <i class="fa-brands fa-paypal"></i>PayPal
                  </th>
                </tr>
                <tr>
                  <th>Password</th>
                  <th colSpan="2">
                    <input type={"password"} value="123456789" />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
