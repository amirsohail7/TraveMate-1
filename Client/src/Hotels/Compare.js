import React, { useState } from "react";
import ComparedHotel from "./ComparedHotel";
import css from "./Compare.module.css";
import { useParams } from "react-router-dom";

const Compare = () => {
  const { id1, id2, id3 } = useParams();

  let x = id1;

  return (
    <div><h1 className={css.heading}>Detail Comparison</h1>
    <div className={css.hotels}>
      {id1 && <ComparedHotel hotel={x} />}
      {id2 && <ComparedHotel hotel={id2} />}
      {id3 && <ComparedHotel hotel={id3} />}
    </div>
    </div>
  );
};
export default Compare;
