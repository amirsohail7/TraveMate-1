import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({destinations}) => {
  console.log(destinations);
  return (
    <>
      {destinations.map((destination) => (
        <li className="cards__item" key={destination._id}>
          <Link className="cards__item__link" to="/">
            <div className="cards__item__info">
              <h6 className="cards__item__text">{destination.name}</h6>
              <h5 className="cards__item__text">{destination.address}</h5>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};

export default CardItem;
