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
import { useHistory } from "react-router-dom";
import DisplayImagesList from "../components/shared/DisplayImagesList";
import FetchWeather from "../components/shared/FetchWeather";

const HotelDetails = () => {
  const history = useHistory();
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

  const Submit = () => {
    history.push(`/book/Hotel/${id}`);
  };

  return (
    <div>
      <div className={css.container}>
        <div className={css.Header}>
          <div className={css.coloumn1}>
            <h2>
              <span>
                <ArrowBackIcon />{" "}
              </span>
              Hotel Detail
            </h2>
            <h2>{hotelDetail.name}</h2>
          </div>
          <div className={css.coloumn3}>
            <button className={css.btn} onClick={() => Submit()}>
              Make a Booking
            </button>
          </div>
        </div>

        <div className={css.Info}>
          <div className={css.coloumn1}>
            <h2 className={css.title}>Hotel Information</h2>
            <p>
              <span>
                <EmailIcon />
              </span>
              {hotelDetail.email}
            </p>
            <p>
              <span>
                <PinDropIcon />
              </span>
              {hotelDetail.address}
            </p>
          </div>
          <div className={css.coloumn2}>
            <p>Price Level : {hotelDetail.priceLevel}</p>
            <Rating name="read-only" value={hotelDetail.rating} readOnly />
            <p>Reviews : {hotelDetail.reviewsCount}</p>
          </div>
          <div className={css.coloumn3}>
            <FetchWeather
              lat={hotelDetail.latitude}
              lon={hotelDetail.longitude}
            />
          </div>
        </div>
        <div className={css.Bottom_half}>
          <div className={css.sidebyside}>
            <div className={css.Photos}>
              <h2>Gallery</h2>
              <DisplayImagesList photos={hotelDetail.photos} />
            </div>

            <div className={css.map_container}>
              <GoogleMapComponent
                lng={hotelDetail.longitude}
                lat={hotelDetail.latitude}
              />
            </div>
          </div>
          <div className={css.Reviews}>
            <WriteReview
              service={hotelDetail._id}
              serviceType="Hotel"
              reviews={hotelDetail.reviews.length}
              rating={hotelDetail.rating}
            />
            <h2>Traveler Feedback</h2>
            <ServiceReview Reviews={hotelDetail.reviews} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HotelDetails;
