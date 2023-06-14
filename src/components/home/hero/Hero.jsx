import React, { useState } from "react";
import Heading from "../../common/Heading";
import "./hero.css";
import axiosRequest from "../../../services/axiosRequest";

const Hero = () => {
  const [country, setCountry] = useState("");
  const [city, setcity] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [results, setResults] = useState("hana");

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosRequest
      .get("/property/search", {
        params: {
          country,
          price,
          city,
          type,
        },
      })
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Search Your Next Home "
            subtitle="Find new & featured property located in your local city."
          />

          <form className="flex search-box">
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
              <span>Price</span>
              <input
                type="text"
                placeholder="min Price"
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
