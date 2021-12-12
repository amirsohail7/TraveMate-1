import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import css from "./HotelDetail.module.css";
import { Rating } from "@mui/material";
import GoogleMapComponent from "../components/shared/GoogleMapComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import PinDropIcon from "@mui/icons-material/PinDrop";
import WriteReview from "../components//shared/WriteReview";
import ServiceReview from "../components/shared/ServiceReview";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotelDetail, setHotelDetail] = useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3040/hotel/${id}`)
      .then((response) => {
        setHotelDetail(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!hotelDetail) return null;
  console.log(hotelDetail.name);

  return (
    <div>
      
        <div className={css.container}>
          <div className={css.Header}>
            <h2>
              <span>
                <ArrowBackIcon />{" "}
              </span>
              Hotel Detail
            </h2>
            <h2>{hotelDetail.name}</h2>
          </div>
          <div className={css.Info}>
            <div className={css.Left_side}>
              <h2>Hotel Information</h2>
              <p>
                <span>
                  <EmailIcon />
                </span>
                Email {hotelDetail.email}
              </p>
              <p>
                <span>
                  <PinDropIcon />
                </span>
                Address {hotelDetail.address}
              </p>
            </div>
            <div className={css.Right_side}>
              <p>Price Level {hotelDetail.priceLevel}</p>
              <Rating name="read-only" value={hotelDetail.rating} readOnly />
              <p>Reviews {hotelDetail.reviewsCount}</p>
            </div>
          </div>
          <div className={css.Bottom_half}>
            <div className={css.sidebyside}>
              <div className={css.Photos}>
                <h2>Gallery</h2>
              </div>

              <div className={css.map_container}>
                <GoogleMapComponent
                  lng={hotelDetail.longitude}
                  lat={hotelDetail.latitude}
                />
              </div>
            </div>
            <div className={css.Reviews}>
              <WriteReview service={hotelDetail._id} serviceType="Hotel" />
              <h2>Traveler Feedback</h2>
              <ServiceReview Reviews={hotelDetail.reviews} />
            </div>
          </div>
        </div>
    </div>
  );
};
export default HotelDetails;
