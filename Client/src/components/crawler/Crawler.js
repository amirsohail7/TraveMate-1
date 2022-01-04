import React, { useState,useEffect } from 'react';
import css from "./Crawler.module.css";
import CrawlerItem from './CrawlerItem';
import axios from "axios";

const Crawler=()=> {
const [packages,setPackages]=useState(null);

  useEffect(() => {
    axios
    .get("http://localhost:3040/crawler/bot")
    .then((response)=>{
      setPackages(response.data);
    })
    .catch((error)=>{
      console.log(error);
    });
  }, []);

  return (
    <div className={css.cards}>
      <h1>Crawled Tour packages!</h1>
      <div className={css.cards__container}>
        <div className={css.cards__wrapper}>
          <ul className={css.cards__items}>
          {packages && <CrawlerItem packages={packages} />}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Crawler;
