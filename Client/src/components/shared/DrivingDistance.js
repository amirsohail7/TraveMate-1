import React, { useState } from "react";
//var axios = require("axios").default;
import axios from "axios";

function DrivingDistance(_props) {
  const [details, setDetails] = useState(null);

  var options = {
    method: "GET",
    url: "https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix",
    params: {
      origins: `${_props.ulat},${_props.ulng}`,
      destinations: `${_props.slat},${_props.slng}`,
    },
    headers: {
      "x-rapidapi-host": "trueway-matrix.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setDetails(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div>
      {details && (
        <div>
          <h4>Distance : {details.distances[0] / 1000} km</h4>
          <h4>
            Duration : {Math.floor(details.durations[0] / 3600)} h{" "}
            {Math.floor((details.durations[0] % 3600) / 60)} m
          </h4>
        </div>
      )}
    </div>
  );
}

export default DrivingDistance;
