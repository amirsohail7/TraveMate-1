import React, { useEffect, useState } from "react";
import Hotel from "./Hotel";
import Title from "./Title";
import Compare from "./compare/Compare";
import axios from "axios";

const HotelsList = () => {
  const [hotels, setHotels] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3040/attraction/")
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  hotels = hotels.map((hotel) => {
    return <Hotel key={hotel.id} hotel={hotel} />;
  });

  return (
    <section className="featured-hotels">
      <Title title="Hotels" />
      <div className="featured-hotels-center">{hotels}</div>
      <Compare />
    </section>
  );
};
export default HotelsList;
