import React, { Component } from "react";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const customizeMap = {
  width: "450px",
  height: "275px",
};

class GoogleMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cords: [{ latitude: 33.65022340794778, longitude: 73.15564750343597 }],
    };
  }

  drawMarker = () => {
    return this.state.cords.map((store, i) => {
      return (
        <Marker
          key={i}
          id={i}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => console.log("Event Hanlder Called")}
        />
      );
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        style={customizeMap}
        zoom={14}
        initialCenter={{
          lat: 33.65022340794778,
          lng: 73.15564750343597,
        }}
      >
        {this.drawMarker()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
})(GoogleMapComponent);
