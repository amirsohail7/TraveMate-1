import React, { useState, useEffect } from "react";
import HotelCard from "./HotelCard";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import css from '../home/Cards.module.css'

let hotelAPI = "http://localhost:3040/hotelRec/recommendHotel/39";
let RestaurantAPI =
  "http://localhost:3040/restaurantRec/recommendRestaurant/39";
const requestOne = axios.get(hotelAPI);
const requestTwo = axios.get(RestaurantAPI);


function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
const HomePage = () => {
  const [hotels, setHotels] = useState(null);
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          setHotels(responseOne.data);
          setRestaurants(responseTwo.data);
          // use/access the results
          console.log(responseOne, responseTwo);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <> 
    <ImageList
      sx={{ height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <div className={css.cards}>
      <h1>Check these amazing hotels</h1>
      <div className={css.cards__container}>
        <div className={css.mapcards__wrapper}>
          <ul className={css.cards__items}>
            {hotels && <HotelCard hotels={hotels} />}
          </ul>
        </div>
      </div>
      <h1>Check these amazing restaurants</h1>
      <div className={css.cards__container}>
        <div className={css.cards__wrapper}>
          <ul className={css.cards__items}>
            {restaurants && <RestaurantCard restaurants={restaurants} />}
          </ul>
        </div>
      </div>
    </div>
    </> 
  );
};

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      cols: 2,
    },
  ];

export default HomePage;

