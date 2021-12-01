import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import { FaSearchLocation } from "react-icons/fa";
import "./LocationSearch.css";
import { Link } from "react-router-dom";

export default function LocationSearch() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    //coodinates is declared here but i bam not using it right now thats why its blur
    lat: null, // we can use these two lat and long variables to store the coordinates as coordinates.lat or coordinates.long
    lng: null, // we get in 'latLng' variable inside handleSelect function
  });

  const handleSelect = async (value) => {
    //this function recieves string of what location user is slected and then these two geocodeByAddress
    const results = await geocodeByAddress(value); //and getLatLang are helper function provided by react-places-autocomplete package
    const latLng = await getLatLng(results[0]); // to convert this string value using google api array of results and then we can
    setAddress(value); // access the first result and get the coordinates back from that the latitude and longitude
    setCoordinates(latLng); //and then we can update ourstate so we can show to the user what they've selected
    /* console.log(results[0]); */
  };

  /*  const handleSelect = (address, placeId, suggestion) => {
  const results = await geocodeByAddress(address);

} */

  const onError = (status, clearSuggestions) => {
    console.log("Google Maps API returned error with status: ", status);
    clearSuggestions();
  };

  return (
    <div className="locationsearch">
      <PlacesAutocomplete id="autocomplete"
        value={address} //this is what user typed in location search bar
        onChange={setAddress} //when typing location setAddress function is being called and state is being updated
        onSelect={handleSelect} //when user select any loctaion only then this handleSelect function is called
        onError={onError}
        shouldFetchSuggestions={address.length > 1}
        searchOptions={{componentRestrictions: { country: ['pak'] }, types: ['(cities)']}}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="locationsearch-container">
            <div className="searchbar">
              <input
                className="input-text"
                {...getInputProps({ placeholder: "where to go?" })}
              />
              <button className="search-button">
                <FaSearchLocation />
              </button>
            </div>
            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff", //inline stylying is used here, proper styling to be done later
                };

                return (
                  <div
                    className="suggestions"
                    {...getSuggestionItemProps(suggestion, { style })}
                  >
                    <Link to="../destinations/DestinationHome">{suggestion.description}</Link>
                    {/* we are using link tag to open destination page, 
                    make it dyanimc after page is designed*/}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
