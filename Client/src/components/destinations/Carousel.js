import React, { useState } from "react";
import Slider from "react-slick";
import LeftArrow from "../../images/left-arrow.svg";
import RightArrow from "../../images/right-arrow.svg";
import Card from "./Card";

export default function Carousel({ hotels }) {
  console.log(hotels);
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div className="card__container">
      <h1>{hotels.title}</h1>
      <Slider {...settings} className="card__container--inner">
        
         
            <div className="card__container--inner--card" >
              {/* here we can render hotels,restaurants tours and recommendations */}
              <h5>{hotels.name}</h5>
            </div>
          
        
      </Slider>
    </div>
  );
}
