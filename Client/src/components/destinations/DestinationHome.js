import React, { useState,useEffect } from 'react'
import Carousel from './Carousel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import axios from "axios";


const DestinationHome=()=>{
  const [hotels,setHotels]=useState(null);
  useEffect(() => {
    axios
    .get("http://localhost:3040/hotelRec/recommendHotel/39")
    .then((response)=>{
      setHotels(response.data);
    })
    .catch((error)=>{
      console.log(error);
    });
  }, []);
  return (
    <div>
    {<Carousel title="Recommended Hotels" hotels={hotels}/>}
    </div>
  )
}

export default DestinationHome