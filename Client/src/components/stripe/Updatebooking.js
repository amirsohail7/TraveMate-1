import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Updatebooking = () => {
  const history = useHistory();
  let id = localStorage.getItem("booking");
  let paymentType = "Online";
  let paymentStatus = "paid";
  useEffect(() => {
    const booking = {
      paymentType,
      paymentStatus,
    };
    axios
      .put(`http://localhost:3040/booking/update/${id}`, booking)
      .then((response) => {
        if (response.status === 200) {
          alert("Payment Successfull!");
        }

        history.push("/Traveler/Bookings");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div></div>;
};

export default Updatebooking;
