import React  from "react";
import list from "./Data.json";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AddProdectInItemPage} from "../../../redux/counterSlice";
import { useDispatch } from "react-redux";


const RecentCard = () => {

  const dispatch = useDispatch();
  const unit = (item) => {
    dispatch(AddProdectInItemPage(item));
  };

  return (
    <>
      <div className="content grid3 mtop">
        {list.map((item) => {
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
                  <span  >
                    <i className="fa fa-heart"></i> <span>{0}</span>
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
