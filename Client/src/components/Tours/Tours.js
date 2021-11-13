import React from "react";
import "../../App.css";
import DirectoryItem from "./DirectoryItem";
import useFetch from "../shared/useFetch";
import "./Tours.css";

//fetch restaurants from data base and store in const x useeffect to fetch
/*async function get_tours() {
    const response = await axios.get('http://localhost:3040/tours/')
    .then(() => {
        console.log('data recieved successfully')
    })
    return response
}*/

const Tours = () => {
  const {
    error,
    isPending,
    data: tours,
  } = useFetch("http://localhost:3040/tour/");

  return (
    <div className="main">
      <div>
        <h1>Tour Packages</h1>
      </div>
      <div className="items">
        <div className="directory_container">
          {error && <div>{error}</div>}
          {isPending && <div className="loader"></div>}
          {tours && <DirectoryItem tours={tours} />}
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

export default Tours;
