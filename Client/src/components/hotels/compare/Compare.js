import React from 'react';
import { HotelContext } from "../../../context";
import ComparedProduct from './ComparedProduct';
import "./Compare.scss";

const Compare = () => {
  return (
    <HotelContext.Consumer>
      {({ toCompare }) => {
        if (toCompare.length >= 2) {
          const productsToCompare = toCompare.map((hotel) => (
            <ComparedProduct key={hotel.id} hotel={hotel} />
          ));
          return (
            <div
              className="compare"
              style={{ transform: `translate(-50%, calc(100% - ${74 * (toCompare.length + 1)}px)` }}
            >
              <ul className="compare-row">
                <li className="compared-data compare-head">Product</li>
                <li className="compared-data compare-head">Price</li>
                <li className="compared-data compare-head">Facilities</li>
              </ul>
              {productsToCompare}
            </div>
          );
        }
        return null;
      }}
    </HotelContext.Consumer>
  );
};

export default Compare;