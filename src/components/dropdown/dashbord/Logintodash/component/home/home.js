import React from "react";
import "./home.css";
import Nav from "../nav/Nav";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Chart from "../chart/Chart";
import ChangingProgressProvider from "../chart/animation/Animatio";
import Slider from "../slider/slider";


const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="cart">
              <div className="number-views">
                <div className="number">
                  <p>1504</p>
                </div>
                <div className="text">
                  <h4>views</h4>
                </div>
              </div>
              <div className="icon">
                <i className="fa-solid fa-eye"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="cart">
              <div className="number-sales">
                <div className="number">
                  <p>140</p>
                </div>
                <div className="text">
                  <h4>sales</h4>
                </div>
              </div>
              <div className="icon">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="cart">
              <div className="number-comment">
                <div className="number">
                  <p>200</p>
                </div>
                <div className="text">
                  <h4>Like</h4>
                </div>
              </div>
              <div className="icon">
                <i className="fa-solid fa-comment"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="cart">
              <div className="number-earning">
                <div className="number">
                  <p>$1700</p>
                </div>
                <div className="text">
                  <h4>earning</h4>
                </div>
              </div>
              <div className="icon">
                <i className="fa-solid fa-money-bill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="persent container-fluid">
        <div className="row show">
          <div className="col-lg-5 col-md-5 col-sm-12 Circule">
            <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]} 
            >
               {percentage => (
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        )}
            </ChangingProgressProvider>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 ">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
