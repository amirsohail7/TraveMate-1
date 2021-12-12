import React from "react";
import Navbar from "./components/home/Navbar";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hotels from "./components/hotels/pages/Hotels";
import SingleHotel from "./components/hotels/pages/SingleHotel";
import DestinationHome from "./components/destinations/DestinationHome";
import Resturants from "./Restaurants/Restaurants";
import BlogHome from "./components/blog/BlogHome";
import Signin from "./components/signin/Signin";
import Form from "./components/signup/Form";
import UserBlog from "./components/blog/UserBlog";
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
import AttractionDetail from "./components/Attractions/AttractionDetail";
import Attractions from "./components/Attractions/Attractions";
import Test from "./components/Test";
import PayByCard from "./components/stripe/PayByCard";

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
            <Route
              path="/destination/:results"
              exact
              component={DestinationHome}
            />
            <Route path="/hotels" component={Hotels} />
            <Route path="/hotels/:slug" exact component={SingleHotel} />
            <Route path="/resturants" component={Resturants} />
            <Route
              path="/restaurantdetail/:id"
              exact
              component={RestaurantDetails}
            />
            <Route path="/attractions" component={Attractions} />
            <Route
              path="/attractionDetail/:id"
              exact
              component={AttractionDetail}
            />
            <Route path="/blog" component={BlogHome} />
            <Route path="/userblog/:id" component={UserBlog} />
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
            <Route path="/Traveler" component={Traveler} />
            <Route path="/ExploreNearby" component={ExploreNearby} />
            <Route path="/book/:type/:id" component={PayByCard} />
            <Route path="/test" component={Test} />
          </Switch>
        </Router>
      </HotelProvider>
    </>
  );
}

export default App;
