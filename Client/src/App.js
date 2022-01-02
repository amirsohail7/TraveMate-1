import React from "react";
import Navbar from "./components/home/Navbar";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* import Hotels from "./components/hotels/pages/Hotels";
import SingleHotel from "./components/hotels/pages/SingleHotel"; */
import DestinationHome from "./components/destinations/HomePage";
import Resturants from "./Restaurants/Restaurants";
import BlogHome from "./components/blog/BlogHome";
import Signin from "./components/signin/Signin";
import Form from "./components/signup/Form";
import Blogs from "./components/blog/Blogs";
import BlogDetails from "./components/blog/BlogDetails";
import { HotelProvider } from "./context";
import "semantic-ui-css/semantic.min.css";
import AddRestaurantForum from "./components/Dashboards/components/ProviderComponents/Forms/AddRestaurantForum";
import AddHotelForm from "./components/Dashboards/components/ProviderComponents/Forms/AddHotelForm";
import AddBlogForm from "./components/Dashboards/components/TravelerComponents/Forms/AddBlogForm";
import AddTourForum from "./components/Dashboards/components/ProviderComponents/Forms/AddTourForum";
import Tours from "./components/Tours/Tours";
import ExploreNearby from "./components/explore/ExploreNearby";
import Traveler from "./components/Dashboards/Traveler";
import Provider from "./components/Dashboards/Provider";
import Tourdetails from "./components/Tours/TourDetails";
import RestaurantDetails from "./Restaurants/RestaurantDetails";

import Dashboard from "./components/admin/Dashboard";
import Crawler from "./components/crawler/Crawler";
import Hotels from "./Hotels/Hotels";
import HotelDetails from "./Hotels/HotelDetails";
import Compare from "./Hotels/Compare";
import ResCompare from "./Restaurants/Compare";
import AttractionDetail from "./components/Attractions/AttractionDetail";
import Attractions from "./components/Attractions/Attractions";
import PayByCard from "./components/stripe/PayByCard";
import Updatebooking from "./components/stripe/Updatebooking";

function App() {
  return (
    <>
      <HotelProvider>
        <Router>
          <Navbar />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tours" component={Tours} />
            <Route path="/tourdetail/:id" exact component={Tourdetails} />
            <Route path="/destination" exact component={DestinationHome} />
            <Route path="/hotels" component={Hotels} />
            <Route path="/hoteldetail/:id" exact component={HotelDetails} />
            <Route path="/resturants" component={Resturants} />
            <Route
              path="/restaurantdetail/:id"
              exact
              component={RestaurantDetails}
            />
            <Route path="/blogs" component={Blogs} />
            <Route path="/blogdetail/:id" exact component={BlogDetails} />
            <Route path="/attractions" component={Attractions} />
            <Route
              path="/attractionDetail/:id"
              exact
              component={AttractionDetail}
            />
            <Route path="/signup" component={Form} />
            <Route path="/signin" component={Signin} />
            <Route path="/AddRestaurantForum" component={AddRestaurantForum} />
            <Route path="/AddTourForm" component={AddTourForum} />
            <Route path="/AddHotelForm" component={AddHotelForm} />
            <Route path="/AddBlogForm" component={AddBlogForm} />
            <Route
              path="/Provider/:view/:type?/:id?"
              exact
              component={Provider}
            />
            <Route
              path="/Traveler/:view/:type?/:id?"
              exact
              component={Traveler}
            />
            <Route path="/ExploreNearby" component={ExploreNearby} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/crawler" component={Crawler} />
            <Route path="/compare/:id1/:id2/:id3?" exact component={Compare} />
            <Route
              path="/rescompare/:id1/:id2/:id3?"
              exact
              component={ResCompare}
            />
            <Route path="/book/:type/:id" component={PayByCard} />
            <Route path="/updatebooking" component={Updatebooking} />
          </Switch>
        </Router>
      </HotelProvider>
    </>
  );
}

export default App;
