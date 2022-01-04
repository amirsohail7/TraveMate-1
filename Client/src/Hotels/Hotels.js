import React from "react";
import { useState } from "react";
import DirectoryItem from "./DirectoryItem.js";
import useFetch from "../components/shared/useFetch";
import css from "./Hotels.module.css";
import { Rating } from "@mui/material";
import {
  Slider,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import {
  byNameAsc,
  byNameDsc,
  byRatingAsc,
  byRatingDsc,
} from "../components/shared/sort";
import Search from "./SearchHotels";

const Hotels = () => {
  const [val, setVal] = useState([1000, 15000]);
  const [priceRange, setPriceRange] = useState("");
  const [rating, setRating] = useState("");
  const [cuisine, setCuisine] = useState([]);
  const [order, setOrder] = useState(null);
  const [change, setChange] = useState("");
  //const [restaurants, setRestaurants] = useState([]);

  const updateVal = (e, item) => {
    setVal(item);
    let range = "PKR " + val[0] + " - PKR " + val[1];
    setPriceRange(range);
    console.log(priceRange);
  };

  const getValue = (e) => {
    let data = cuisine;
    data.push(e.target.value);
    setCuisine(data);
    console.log(cuisine);
  };

  const {
    error,
    isPending,
    data: hotels,
  } = useFetch("http://localhost:3040/hotel/");
  /* console.log(hotels) */

  const filter = () => {
    if (order === "Name asc") {
      hotels.sort(byNameAsc);
    }
    if (order === "Name dsc") {
      hotels.sort(byNameDsc);
    }
    if (order === "Rating asc") {
      hotels.sort(byNameAsc);
    }
    if (order === "Rating dsc") {
      hotels.sort(byNameDsc);
    }

    console.log(hotels);
    setChange(order);
  };

  return (
    <div className={css.main}>
      <div className={css.Header}>
        <h1>HOTELS</h1>
        <p>Browse over 200+ hotels</p>
      </div>
      <div className={css.items}>
        <div className={css.filters}>
          <div className={css.card}>
            <h4>Filter</h4>
            <p>{rating} Star</p>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className={css.card}>
            <h4>Price Range</h4>
            <p>
              PKR {val[0]} - PKR {val[1]}
            </p>
            <Slider
              value={val}
              min={0}
              max={40000}
              step={1000}
              onChange={updateVal}
            />
          </div>
          <button className={css.btn} onClick={() => filter()}>
            Apply Filter
          </button>
          <div className={css.search_bar}>
          <Search/>
          </div>
        </div>
        <div className={css.right_side}>
          <select
            style={{ width: 100 }}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="Name asc">Name ↓</option>
            <option value="Name dsc">Name ↑</option>
            <option value="Rating asc">Rating ↓</option>
            <option value="Rating dsc">Rating ↑</option>
          </select>
          <div className={css.directory_container}>
            {error && <div>{error}</div>}
            {isPending && <div className={css.loader}></div>}
            {hotels && <DirectoryItem hotels={hotels} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
