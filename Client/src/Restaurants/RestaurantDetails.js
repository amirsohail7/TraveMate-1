import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import css from "./RestaurantDetail.module.css";
import { Rating } from "@mui/material";
import GoogleMapComponent from "../components/shared/GoogleMapComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import PinDropIcon from "@mui/icons-material/PinDrop";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import WriteReview from "../components/shared/WriteReview";
import ServiceReview from "../components/shared/ServiceReview";
import DisplayImagesList from "../components/shared/DisplayImagesList";
import FetchWeather from "../components/shared/FetchWeather";
import Reservations from "./Reservations";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState(null);
  const [error, setError] = useState(null);
  const [reservation, setReservation] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3040/restaurant/${id}`)
      .then((response) => {
        setRestaurantDetail(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!restaurantDetail) return null;

  const handle_reservation = () => {
    setReservation(!reservation);
    console.log(reservation);
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
              Restaurant Detail
            </h2>
            <h2>{restaurantDetail.name}</h2>
          </div>
          <div className={module.coloumn3}>
            <button
              className={css.paymentbutton}
              onClick={() => handle_reservation()}
            >
              Make Reservations
            </button>
            {reservation && <Reservations restaurant={restaurantDetail} />}
          </div>
        </div>
        <div className={css.Info}>
          <div className={css.coloumn1}>
            <h2 className={css.title}>Restaurant Information</h2>
            <p>
              <span>
                <EmailIcon />
              </span>
              Email {restaurantDetail.email}
            </p>
            <p>
              <span>
                <RestaurantMenuIcon />
              </span>
              cuisine {restaurantDetail.cuisine}
            </p>
            <p>
              <span>
                <PinDropIcon />
              </span>
              Address {restaurantDetail.address}
            </p>
          </div>
          <div className={css.coloumn2}>
            <p className={css.muted}>{restaurantDetail.priceLevel}</p>
            <Rating
              name="read-only"
              value={restaurantDetail.rating}
              readOnly
              precision={0.5}
            />
            <p>Reviews {restaurantDetail.reviewsCount}</p>
          </div>
          <div className={css.coloumn3}>
            <FetchWeather
              lat={restaurantDetail.latitude}
              lon={restaurantDetail.longitude}
            />
          </div>
        </div>
        <div className={css.Bottom_half}>
          <div className={css.sidebyside}>
            <div className={css.Photos}>
              <h2>Gallery</h2>
              <DisplayImagesList photos={restaurantDetail.photos} />
            </div>

            <div className={css.map_container}>
              <GoogleMapComponent
                lng={restaurantDetail.longitude}
                lat={restaurantDetail.latitude}
              />
            </div>
          </div>
          <div className={css.Reviews}>
            <WriteReview
              service={restaurantDetail._id}
              serviceType={css.restaurantDetail}
            />
            <h2>Traveler Feedback</h2>
            <ServiceReview Reviews={restaurantDetail.reviews} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantDetails;
