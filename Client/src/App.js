import React from "react";
import Navbar from "./components/home/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hotels from "./components/hotels/pages/Hotels";
import SingleHotel from "./components/hotels/pages/SingleHotel";
import DestinationHome from "./components/destinations/DestinationHome";
import Resturants from "./components/pages/Resturants";
import BlogHome from "./components/blog/BlogHome";
import Signin from "./components/signin/Signin";
import Form from "./components/signup/Form";
import UserBlog from "./components/blog/UserBlog";
import { HotelProvider } from "./context";
import "semantic-ui-css/semantic.min.css";
import AddRestaurantForum from "./components/pages/Provider/Forms/AddRestaurantForum";
import AddHotelForm from "./components/pages/Provider/Forms/AddHotelForm";
import AddBlogForm from "./components/pages/Traveler/Forms/AddBlogForm";
import AddTourForum from "./components/pages/Provider/Forms/AddTourForum";
import ProviderDash from "./components/pages/Provider/ProviderDash";
import TravelerDash from "./components/pages/Traveler/TravelerDash";
import Tours from "./components/pages/Tours";
import Chatbot from './components/chatbot/Chatbot/Chatbot'

function App() {
  return (
    <>
      <HotelProvider>
        <Router>
          <Navbar />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tours" component={Tours} />
            <Route path="/destinations" component ={DestinationHome}/>
            <Route path="/hotels" component={Hotels} />
            <Route path="/hotels/:slug" exact component={SingleHotel} />
            <Route path="/resturants" component={Resturants} />
            <Route path="/blog" component={BlogHome} />
            <Route path="/userblog" component={UserBlog} />
            <Route path="/signup" component={Form} />
            <Route path="/signin" component={Signin} />
            <Route path="/AddRestaurantForum" component={AddRestaurantForum} />
            <Route path="/AddTourForum" component={AddTourForum} />
            <Route path="/AddHotelForm" component={AddHotelForm} />
            <Route path="/AddBlogForm" component={AddBlogForm} />
            <Route path="/ProviderDash" component={ProviderDash} />
            <Route path="/TravelerDash" component={TravelerDash} />
            <Route path="/chatbot" component={Chatbot}/>
          </Switch>
        </Router>
      </HotelProvider>
    </>
  );
}

export default App;
