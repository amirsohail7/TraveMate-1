import React, { useState } from "react";
import ComparedRestaurant from "./ComparedRestaurant"
import css from "./Compare.module.css";
import { useParams } from "react-router-dom";

const Compare = () => {
  const { id1, id2, id3 } = useParams();

  let x = id1;

  return (<div>
    <h1 className={css.heading}>Detail Comparison</h1>
    <div className={css.restaurants}>
      {id1 && <ComparedRestaurant restaurant={x} />}
      {id2 && <ComparedRestaurant restaurant={id2} />}
      {id3 && <ComparedRestaurant restaurant={id3} />}
    </div>
    </div>
  );
};
export default Compare;
