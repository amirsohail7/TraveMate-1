import React from "react";
import DirectoryItem from "./DirectoryItem";
import useFetch from "../components/shared/useFetch";
import "./Restaurants.css";

//fetch restaurants from data base and store in const x useeffect to fetch

const Restaurants = () => {
  const {
    error,
    isPending,
    data: restaurants,
  } = useFetch("http://localhost:3040/restaurant/");

  return (
    <div className="main">
      <div>
        <h1>RESTAURANTS</h1>
      </div>
      <div className="items">
        <div className="directory_container">
          {error && <div>{error}</div>}
          {isPending && <div className="loader"></div>}
          {restaurants && <DirectoryItem restaurants={restaurants} />}
        </div>
        <div>
          <h1>filters</h1>
          <h1>destination</h1>
          <h1>price</h1>
          <h1>sort</h1>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
