import React, { Component } from "react";
import items from "./data";

const HotelContext = React.createContext();

class HotelProvider extends Component {
  state = {
    hotels: [],
    toCompare:[]
  };

  componentDidMount() {
    // this.getData();
    let hotels = this.formatData(items);
    this.setState({
      hotels,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let hotel = { ...item.fields, images, id };
      return hotel;
    });
    return tempItems;
  }

  //we will use the slug variable which we passing in Link in Hotel.js component
  //and use this function in SingleHotel.js component to get clicked hotel route
  //inthis function we use hotels[] in state ...spread it and return hotel wrt slug

  getHotel = (slug) => {
    let tempHotels = [...this.state.hotels];
    const hotel = tempHotels.find((hotel) => hotel.slug === slug);
    return hotel;
  };

 /*  handleAddToCompare = (hotel) => {
    if (this.toCompare.length < 2) {
      this.setCompare([...this.toCompare, hotel]);
    }
  }; */

  handleAddToCompare=(hotel)=>{
    /* let temp=[this.state.toCompare]; */ 
    if(this.state.toCompare.length<2){
      this.setState(
        {toCompare:[...this.state.toCompare,hotel]}
      )
    }

  }

  /* handleRemoveFromCompare = (id) => {
    const removedProduct = this.toCompare.filter((hotel) => hotel.id !== id);
    this.setCompare(removedProduct);
  }; */

  handleRemoveFromCompare = (id) => {
    const removedProduct = this.state.toCompare.filter((hotel) => hotel.id !== id);
    this.setState(
      {toCompare:removedProduct}
    )
    }

  render() {
    return (
      <HotelContext.Provider
        value={{
          ...this.state, //here we are making everything in context.js i.e state or function i.e //getHotel available in context and to the children wrapped in HotelProvider
          getHotel: this.getHotel,
          addToCompare:this.handleAddToCompare,
          removeFromCompare:this.handleRemoveFromCompare
        }}
      >
        {this.props.children}
      </HotelContext.Provider>
    );
  }
}
const HotelConsumer = HotelContext.Consumer;

export { HotelProvider, HotelConsumer, HotelContext };

/* export function withHotelConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <HotelConsumer>
        {value => <Component {...props} context={value} />}
      </HotelConsumer>
    );
  };
} */
