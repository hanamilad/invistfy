import React, { useState } from "react";
import Heading from "../../common/Heading";
import "./hero.css";
import axiosRequest from "../../../services/axiosRequest";
import LocalStorageService from "../../../services/localstorage";

const Hero = () => {
  const [country, setCountry] = useState("");
  const [city, setcity] = useState("");
  const [minprice, setminPrice] = useState("");
  const [maxprice, setmaxPrice] = useState("");
  const [type, setType] = useState("");
  const [results, setResults] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const url = `/property/search/`;
      const params = {
        country,
        minprice,
        maxprice,
        city,
        type,
      };
  
      const response = await axiosRequest.get(url, { params });
  
      if (response.status === 200) {
        const searchData = response.data;
        console.log(searchData);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Search Your Next Home "
            subtitle="Find new & featured property located in your local city."
          />

          <form className="flex search-box" onSubmit={handleSubmit}>
            <div className="box">
              <span>governorate</span>
              <input
                type="text"
                placeholder="governorate"
                id="country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="box">
              <span>City</span>
              <input
                type="text"
                placeholder="City"
                id="city"
                name="city"
                value={city}
                onChange={(e) => setcity(e.target.value)}
              />
            </div>
            <div className="box">
              <span>Property Type</span>
              <input
                type="text"
                placeholder="Property Type"
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className="box">
              <span>minPrice</span>
              <input
                type="text"
                placeholder="min Price"
                id="price"
                name="price"
                value={minprice}
                onChange={(e) => setminPrice(e.target.value)}
              />
            </div>
            <div className="box">
              <span>maxPrice</span>
              <input
                type="text"
                placeholder="min Price"
                id="price"
                name="price"
                value={maxprice}
                onChange={(e) => setmaxPrice(e.target.value)}
              />
            </div>
            <button className="btn1">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
