import React from "react";
import { price } from "../../data/Data";

const PriceCard = () => {
  return (
    <>
      <div className="content flex mtop">
        {price.map((item) => (
          <div className="box shadow" key={item.id}>
            <div className="top">
              <div className="">
                <img src={item.img} alt="" />
              </div>
              <h3>{item.plan}</h3>
            </div>

            <h1>
              <span className="point">point</span>
              {item.price}
            </h1>
            <p>{item.ptext}</p>

            <ul>
              {item.list.map((val,index) => {
                const { icon, text, change } = val;
                return (
                  <li key={index}>
                    <label
                      style={{
                        background:
                          change === "color" ? "#dc35451f" : "#27ae601f",
                        color: change === "color" ? "#dc3848" : "#27ae60",
                      }}
                    >
                      {icon}
                    </label>
                    <p>{text}</p>
                  </li>
                );
              })}
            </ul>
            <button
              className="btn5"
              style={{
                background: item.plan === "Standard" ? "#27ae60" : "#fff",
                color: item.plan === "Standard" ? "#fff" : "#27ae60",
              }}
            >
              Start {item.plan}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PriceCard;
