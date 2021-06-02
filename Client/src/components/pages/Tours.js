import React from "react";
import "../../App.css";
import DirectoryItem from "../shared/DirectoryItem";
import axios from "axios";
import useFetch from "../shared/useFetch";
import "./Tours.css";
import { Card } from "react-bootstrap/";

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
      <div className="side_bar">
        <Card title>Filters</Card>
      </div>

      <div className="items">
        <h3>Tour Packages</h3>
        <div className="directory_container">
          {error && <div>{error}</div>}
          {isPending && <div className="loader"></div>}
          {tours && <DirectoryItem tours={tours} />}
        </div>
      </div>
    </div>
  );
};

export default Tours;
