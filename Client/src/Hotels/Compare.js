import React, { useState, useEffect } from "react";
import ComparedHotel from "./ComparedHotel";
import css from "./Compare.module.css";
import { useParams } from "react-router-dom";

const Compare = () => {
  const { id1, id2, id3 } = useParams();

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setStatus(true);
        },
        () => {
          console.log("Unable to retrieve your location");
        }
      );
    }
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.header}>Compraing Hotels</h1>
      <div className={css.services}>
        {id1 && status === true && (
          <ComparedHotel hotel={id1} lng={longitude} lat={latitude} />
        )}
        {id2 && status === true && (
          <ComparedHotel hotel={id2} lng={longitude} lat={latitude} />
        )}
        {id3 && status === true && (
          <ComparedHotel hotel={id3} lng={longitude} lat={latitude} />
        )}
      </div>
    </div>
  );
};
export default Compare;
