import React, { Component } from "react";
import { HotelContext } from "../../context";
import Hotel from "./Hotel";
import Title from "./Title";
import Compare from "./compare/Compare";

export default class HotelsList extends Component {
  static contextType = HotelContext;

  render() {
    let { hotels } = this.context;
    hotels = hotels.map((hotel) => {
      return <Hotel key={hotel.id} hotel={hotel} />;
    });
    return (
      <section className="featured-hotels">
        <Title title="Hotels" />
        <div className="featured-hotels-center">{hotels}</div>
        <Compare/>
      </section>
    );
  }
}
