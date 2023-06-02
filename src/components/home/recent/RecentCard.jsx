import React, { useState, useEffect } from "react";
import list from "./Data.json";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AddProdectInItemPage } from "../../../redux/counterSlice";
import { useDispatch } from "react-redux";

const RecentCard = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const unit = (item) => {
    dispatch(AddProdectInItemPage(item));
  };
  const [data, setData] = useState(list);
  let wishList = (dataIndex) => {
    if (data[dataIndex]["favourite"]) {
      if (data[dataIndex]["likes"] >= 1) {
        data[dataIndex]["likes"] = data[dataIndex]["likes"] - 1;
      }
    } else data[dataIndex]["likes"] = data[dataIndex]["likes"] + 1;

    data[dataIndex]["favourite"] = !data[dataIndex]["favourite"];

    setData(data);
    setIsLoading(!isLoading);
  };

  return (
    <>
      <div className="content grid3 mtop">
        {data.map((item, index) => {
          return (
            <div className="box shadow" key={item.id}>
              <Link
                to="/Item"
                onClick={() => {
                  unit(item);
                }}
              >
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
              </Link>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        item.category === "For Sale"
                          ? "#25b5791a"
                          : "#ff98001a",
                      color:
                        item.category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {item.category}
                  </span>
                  <span onClick={() => wishList(index)}>
                    <i
                      className="fa fa-heart"
                      style={{ color: item.favourite ? "red" : "grey" }}
                    ></i>{" "}
                    <span>{item.likes}</span>
                  </span>
                </div>
                <h4>{item.name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {item.location}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{item.price}</button>
                </div>
                <span>{item.type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
