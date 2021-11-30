import React from "react";
import { useState } from "react";
import DirectoryItem from "./DirectoryItem";
import useFetch from "../components/shared/useFetch";
import css from "./Restaurants.module.css";
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

const Restaurants = () => {
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
    data: restaurants,
  } = useFetch("http://localhost:3040/restaurant/");

  const filter = () => {
    if (order === "Name asc") {
      restaurants.sort(byNameAsc);
    }
    if (order === "Name dsc") {
      restaurants.sort(byNameDsc);
    }
    if (order === "Rating asc") {
      restaurants.sort(byNameAsc);
    }
    if (order === "Rating dsc") {
      restaurants.sort(byNameDsc);
    }

    console.log(restaurants);
    setChange(order);
  };

  return (
    <div className={css.main}>
      <div className={css.Header}>
        <h1>RESTAURANTS</h1>
        <p>Browse over 200+ Restaurants</p>
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
            <h4>Cuisine</h4>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Pakistani"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Pakistani"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Chinese"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Chinese"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Barbecue"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Barbecue"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Vegetarian"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Vegetarian"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Italian"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Italian"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Cafe"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Cafe"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Middle Eastern"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Middle Eastern"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Fast Food"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Fast Food"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="European"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="European"
              />
            </FormGroup>
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
            {restaurants && <DirectoryItem restaurants={restaurants} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
