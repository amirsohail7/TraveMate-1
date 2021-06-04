import React from "react";

const ComparedProduct = ({ hotel }) => {
  const {name, price, facilities } = hotel;

  return (
    <>
      <ul className="compare-row">
        <li className="compared-data">
          <span className="compare-text">{name}</span>
        </li>
        <li className="compared-data">Rs.{price}</li>
        <ul className="facilities"> 
          {facilities.map((item, index) => (
            <li key={index}>{item}</li> //styling of this class and "facilities" in SingleHotel.js are overridding each other
          ))}
        </ul>
      </ul>
    </>
  );
};
export default ComparedProduct;
