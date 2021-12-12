import React, { useState, useEffect } from "react";
import axios from "axios";
import css from "./FetchWeather.module.css";

const FetchWeather = (_props) => {
  const [weather, setWeather] = useState({});

  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    params: {
      lat: _props.lat,
      lon: _props.lon,
      lang: "en",
      units: "metric",
    },
    headers: {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
    },
  };

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        let data = response.data;
        setWeather(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      {weather.main && (
        <div className={css.city}>
          <p className={css.city_title}>
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </p>
          <div className={css.city_temp}>
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className={css.info}>
            <img
              className={css.city_icon}
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p className={css.conditions}>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default FetchWeather;
