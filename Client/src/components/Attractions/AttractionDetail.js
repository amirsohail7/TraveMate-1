import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import css from "./AttractionDetail.module.css";
import { Rating } from "@mui/material";
import GoogleMapComponent from "../shared/GoogleMapComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import PinDropIcon from "@mui/icons-material/PinDrop";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import WriteReview from "../shared/WriteReview";
import ServiceReview from "../shared/ServiceReview";
import DisplayImagesList from "../shared/DisplayImagesList";
import FetchWeather from "../shared/FetchWeather";

const AttractionDetail = () => {
  const { id } = useParams();
  const [attractionDetail, setAttractionDetail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3040/attraction/${id}`)
      .then((response) => {
        setAttractionDetail(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!attractionDetail) return null;

  return (
    <div>
      <div className={css.container}>
        <div className={css.Header}>
          <h2>
            <span>
              <ArrowBackIcon />{" "}
            </span>
            Restaurant Detail
          </h2>
          <h2>{attractionDetail.name}</h2>
        </div>
        <div className={css.Info}>
          <div className={css.coloumn1}>
            <h2 className={css.title}>Restaurant Information</h2>
            <p>
              <span>
                <EmailIcon />
              </span>
              Email {attractionDetail.email}
            </p>

            <p>
              <span>
                <PinDropIcon />
              </span>
              Address {attractionDetail.address}
            </p>
          </div>
          <div className={css.coloumn2}>
            <p className={css.muted}>{attractionDetail.priceLevel}</p>
            <Rating
              name="read-only"
              value={attractionDetail.rating}
              readOnly
              precision={0.5}
            />
          </div>
          <div className={css.coloumn3}>
            <FetchWeather
              lat={attractionDetail.latitude}
              lon={attractionDetail.longitude}
            />
          </div>
        </div>
        <div className={css.Bottom_half}>
          <div className={css.sidebyside}>
            <div className={css.Photos}>
              <h2>Gallery</h2>
              <DisplayImagesList photos={attractionDetail.photos} />
            </div>

            <div className={css.map_container}>
              <GoogleMapComponent
                lng={attractionDetail.longitude}
                lat={attractionDetail.latitude}
              />
            </div>
          </div>
          <div className={css.Reviews}>
            <WriteReview
              service={attractionDetail._id}
              serviceType="attractionDetail"
            />
            <h2>Feedback</h2>
            <ServiceReview Reviews={attractionDetail.reviews} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AttractionDetail;
