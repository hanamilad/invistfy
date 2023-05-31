import React from "react";
import Heading from "../../common/Heading";
import { View3D } from "../../data/Data";
import "./style.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const View3d = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading
            title="3D products"
            subtitle="Lorem ipsumHere you can look at the property with a good 3D view"
          />

          <div className="content grid3 mtop">
            {View3D.map((item, index) => (
              <Link to={item.link} className="box" key={index}>
                <img src={item.cover} alt="" />
                <div className="overlay">
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Bedrooms}</label>
                    <label>{item.Bathrooms}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default View3d;
