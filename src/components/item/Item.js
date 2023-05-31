import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Item.css";
import { Pagination } from "swiper";
import { useSelector } from "react-redux";
import { selectoritem } from "../../redux/counterSlice";
export default function Item() {
  const item = useSelector(selectoritem);
  return (
    <div className="item container-fluid">
      {item.map((item) => {
        return (
          <div className="unit row" key={item.id}>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={item.cover} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={item.cover} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={item.cover} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={item.cover} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 text-area">
              <span
                style={{
                  background:
                    item.category === "For Sale" ? "#25b5791a" : "#ff98001a",
                  color: item.category === "For Sale" ? "#25b579" : "#ff9800",
                }}
              >
                {item.category}
              </span>
              <div className="des"><h2>{item.name}</h2></div>
              <div className="simpledetails">
                <div className="Property-type">
                  Property type: <span>{item.type}</span>
                </div>
                <div className="Bedrooms">
                  Bedrooms: <span>{item.Bedrooms}</span>
                </div>
                <div className="Property-size">
                  Property size: <span>{item.PropertySize}m</span>
                </div>
                <div className="Bathrooms">
                  Bathrooms: <span> {item.Bathrooms}</span>
                </div>
              </div>
              <div className="loction">Location: <span > {item.location} </span></div>
              <div className="price">Price:{item.price}</div>
              <div className="agent-inf">
                <div className="photo"><img src="./images/customer/team-1.jpg" alt="" /></div>
                <div className="name">Name:<span>hana</span></div>
                <div className="phone">Phone:<span>01207465753</span></div>
              </div>
            </div>
           
          </div>
        );
      })}
    </div>
  );
}
