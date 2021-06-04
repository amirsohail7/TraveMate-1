import React, { Component } from "react";
import { HotelContext } from "../../../context";
import Banner from "../Banner";
import { Link } from "react-router-dom";
import StyledHero from "../StyledHero";
import "../Hotels.css";
import {Comments} from '../../Comments/Comments'

export default class SingleHotel extends Component {
  constructor(props) {
    super(props);
    //we are not passing any props to this component but  using react router props to access slug variable
    //to see what these props are, console log here and then click any hotels,check th console where router props
    //can be seen which include hitory,location and match(which we are using here for slug)
    /* console.log(this.props); */
    this.state = {
      slug: this.props.match.params.slug, //this will be unique for each and ever hotel clicked
    };
  }
  static contextType = HotelContext;

  render() {
    const { getHotel } = this.context;
    const hotel = getHotel(this.state.slug);
    //if hotel is not in data or is deleted here we show some messege
    if (!hotel) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/hotels/" className="btn-primary">
            back to hotels homepage
          </Link>
        </div>
      );
    }

    //destructering of room object
    const { name, price, description, facilities, images } = hotel;
    //like i did object destructering for hotel, here i am destructering images array
    //for the purpose of leaving hero image out of hotel gallery and clearing destructering
    //and (... is called spread ) operator concept
    const [main, ...defaultImages] = images;
    /* console.log(defaultImages); */
    return (
      <>
        <StyledHero img={main}>
          <Banner title={`${name}`}>
            <Link to="/hotels/" className="btn-primary">
              Back
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-hotel">
          <div className="single-hotel-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>

          <div className="single-hotel-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price :Rs.{price}</h6>
            </article>
          </div>
        </section>
        <section className="hotel-facilities">
          <h3>Facilities </h3>
          <ul className="facilities">
            {facilities.map((item, index) => (
              <li key={index}> {item}</li>
            ))}
          </ul>
        </section>
        <Comments/>
      </>
    );
  }
}
