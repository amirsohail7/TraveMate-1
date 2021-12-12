import axios from "axios";
import React, { useEffect, useState } from "react";
import css from './Compare.module.css'

const ComparedHotel = (_props) => {
  const [hotel, setHotel] = useState(null);
  console.log(_props);
  let arr = _props.hotel;
  console.log(arr)


  useEffect(() => {
    axios
      .get(`http://localhost:3040/hotel/${arr}`)
      .then((response) => {
        console.log(response.data);
        setHotel(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
    {hotel &&
      <div className={css.compare_fields}>
      <h3>Name</h3><li className={css.compared_name}>{hotel.name}
      </li>
      <h3>Reviews Count</h3><li className={css.compared_rating}>{hotel.numberOfReviews}</li>
      <h3>Rating</h3><li className={css.compared_rating}>{hotel.rating}</li>
      <h3>Amenities</h3><li className={css.compared_rating}>{hotel.amenities.map((item, index) => (
        <li key={index}>{item}</li> 
      ))}</li>
      </div>
          }
    </div>
  );
};

export default ComparedHotel;

/* <ul className={css.compare_col}>
        <li className={css.compared_data}>
          <span className={css.compare_text}>Name {hotel.name}</span>
        </li>
        <li className={css.compared_data}>Rating {hotel.rating}</li>
        <ul className={css.facilities}>
          { {hoteldata.aminities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}}
        </ul>
      </ul> */