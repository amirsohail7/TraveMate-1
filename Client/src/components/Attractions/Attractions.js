import React from "react";
import { useState, useEffect } from "react";
import DirectoryItem from "./DirectoryItem";
import css from "./Attractions.module.css";
import { Rating } from "@mui/material";
import {
  Slider,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import { byNameAsc, byNameDsc, byRatingAsc, byRatingDsc } from "../shared/sort";
import axios from "axios";

const Attractions = () => {
  const [val, setVal] = useState([1000, 15000]);
  const [priceRange, setPriceRange] = useState("");
  const [rating, setRating] = useState(0);
  const [order, setOrder] = useState(null);
  const [change, setChange] = useState(false);
  const [attractions, setAttractions] = useState();

  const updateVal = (e, item) => {
    setVal(item);
    let range = "PKR " + val[0] + " - PKR " + val[1];
    setPriceRange(range);
    console.log(priceRange);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3040/attraction/")
      .then((response) => {
        setAttractions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const SortData = () => {
    if (order === "Name asc") {
      attractions.sort(byNameAsc);
    }
    if (order === "Name dsc") {
      attractions.sort(byNameDsc);
    }
    if (order === "Rating asc") {
      attractions.sort(byRatingAsc);
    }
    if (order === "Rating dsc") {
      attractions.sort(byRatingDsc);
    }
  };

  const filterData = () => {
    let filtered = [];
    if (rating != 0) {
      filtered = attractions.filter(function (ele) {
        return ele.rating == rating;
      });
      setAttractions(filtered);
    }
  };

  const handleClick = () => {
    SortData();
    filterData();
    setChange(!change);
    console.log(attractions);
  };

  return (
    <div className={css.main}>
      <div className={css.Header}>
        <h1>Attractions</h1>
        <p> intersting places to visit</p>
      </div>
      <div className={css.items}>
        <div className={css.filters}>
          <div className={css.card}>
            <h4>Filter</h4>
            <p>{rating} Star</p>
            <Rating
              name="simple-controlled"
              value={rating}
              precision={0.5}
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
          <button className={css.btn} onClick={() => handleClick()}>
            Apply Filter
          </button>
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
            {!attractions && <div className={css.loader}></div>}
            {attractions && <DirectoryItem attractions={attractions} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attractions;
