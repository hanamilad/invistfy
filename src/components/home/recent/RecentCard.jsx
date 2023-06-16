import React, { useState, useEffect } from "react";
import list from "./Data.json";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  AddItemToList,
  AddProdectInItemPage,
  DeletItemFromList,
} from "../../../redux/counterSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import axiosRequest from "../../../services/axiosRequest";

const RecentCard = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const unit = (item) => {
    dispatch(AddProdectInItemPage(item));
  };
  const [data, setData] = useState(list);
  const [User, setUser] = useState(true);
  let wishList = (dataIndex, item) => {
    if (User) {
      if (data[dataIndex]["favourite"]) {
        if (data[dataIndex]["likes"] >= 1) {
          data[dataIndex]["likes"] = data[dataIndex]["likes"] - 1;
        }
        dispatch(DeletItemFromList(item));
      } else {
        data[dataIndex]["likes"] = data[dataIndex]["likes"] + 1;
        dispatch(AddItemToList(item));
      }
      data[dataIndex]["favourite"] = !data[dataIndex]["favourite"];
    } else {
      Swal.fire("pleas Login first ");
    }
    setData(data);
    setIsLoading(!isLoading);
  };
  useEffect(() => {
    axiosRequest.get("property/unit").then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
      setIsLoading(false);
    });
  }, [isLoading]);

  if (isLoading) return <>Loading...</>;
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
                  <img src={item.cover ?? "../images/list/p-1.png"} alt="" />
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
                    {item.category ?? "For Sale"}
                  </span>
                  <span onClick={() => wishList(index, item)}>
                    <i
                      className="fa fa-heart"
                      style={{ color: item.is_liked ? "red" : "grey" }}
                    ></i>{" "}
                    <span>{item.likes ?? 60}</span>
                  </span>
                </div>
                <h4>{item.title}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {item.city}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{item.price} EGP</button>
                </div>
                <span>{item.type_property ?? "Apartment"}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
