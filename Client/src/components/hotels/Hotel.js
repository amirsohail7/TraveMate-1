import React from "react";
import { Link } from "react-router-dom";
import { HotelContext } from "../../context";
import "./Hotels.css";

const Hotel = ({ hotel }) => {
  const { id, name, _id, images, price } = hotel;

  return (
    <HotelContext.Consumer>
      {({ toCompare, addToCompare, removeFromCompare }) => {
        const productsToCompare = toCompare.filter((item) => item.id === id);
        /* const isCompare =
          productsToCompare.length !== 0
            ? "product__thumb--compare-remove"
            : ""; */

        const removeBtn = (
          <button
            onClick={() => removeFromCompare(id)}
            className="compare-add
            compare-remove"
            type="button"
          >
            Remove
          </button>
        );
        const addBtn = (
          <button
            onClick={() => addToCompare(hotel)}
            className="compare-add"
            type="button"
          >
            Compare
          </button>
        );
        return (
          <article className="hotel">
            <div className="img-container">
              <div className="price-top">
                <h6>Rs.{price}</h6>
                <p>per night</p>
              </div>
              <div>
                <img src={images[0]} alt="single hotel" />
                <Link to={`/hotels/${_id}`} className="btn-primary hotel-link">
                  Details
                </Link>
                {<>{productsToCompare.length !== 0 ? removeBtn : addBtn}</>}
              </div>
            </div>
            <p className="hotel-info">{name}</p>
          </article>
        );
      }}
    </HotelContext.Consumer>
  );
};
export default Hotel;
