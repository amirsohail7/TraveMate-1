import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TourDetails = () => {
  const { id } = useParams();
  const [tourDetail, setTourDetail] = useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3040/tour/${id}`)
      .then((response) => {
        setTourDetail(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!tourDetail) return null;
  console.log(tourDetail.Name);

  return (
    <div>
      {tourDetail.map((tour) => (
        <div>
          <h2>{tour.Name}</h2>
          <p>Destination {tour.Destination}</p>
          <p>Departure from : {tour.DepartureLocation}</p>
          <p>{tour.Departure}</p>
          <p>{tour.Description}</p>
          <p>PKR {tour.Price}</p>
          <p>{tour.tourStatus}</p>
          <p>Provider : {tour.provider.username}</p>
        </div>
      ))}
    </div>
  );
};
export default TourDetails;
