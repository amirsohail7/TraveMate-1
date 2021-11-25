import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./RestaurantDetail.css";
import { Rating } from "@mui/material";
import GoogleMapComponent from "../components/GoogleMapComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import PinDropIcon from "@mui/icons-material/PinDrop";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import WriteReview from "../components/WriteReview";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurantDetail, setTourDetail] = useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3040/restaurant/${id}`)
      .then((response) => {
        setTourDetail(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!restaurantDetail) return null;
  console.log(restaurantDetail.name);

  return (
    <div>
      {restaurantDetail.map((restaurant) => (
        <div className="container">
          <div className="Header">
            <h2>
              <span>
                <ArrowBackIcon />{" "}
              </span>
              Restaurant Detail
            </h2>
            <h2>{restaurant.name}</h2>
          </div>
          <div className="Info">
            <div className="Left_side">
              <h2>Restaurant Information</h2>
              <p>
                <span>
                  <EmailIcon />
                </span>
                Email {restaurant.email}
              </p>
              <p>
                <span>
                  <RestaurantMenuIcon />
                </span>
                cuisine {restaurant.cuisine}
              </p>
              <p>
                <span>
                  <PinDropIcon />
                </span>
                Address {restaurant.address}
              </p>
            </div>
            <div className="Right_side">
              <p>Price Level {restaurant.priceLevel}</p>
              <Rating name="read-only" value={restaurant.rating} readOnly />
              <p>Reviews {restaurant.reviewsCount}</p>
            </div>
          </div>
          <div className="Bottom_half">
            <div className="sidebyside">
              <div className="Photos">
                <h2>Gallery</h2>
              </div>

              <div className="map-container">
                <GoogleMapComponent />
              </div>
            </div>
            <div className="Reviews">
              <WriteReview service="345345" serviceType="Hotel" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RestaurantDetails;
