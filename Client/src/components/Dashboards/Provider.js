import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Sidebar from "./components/ProviderComponents/Sidebar";
import MainContent from "./components/ProviderComponents/MainContent";
import Services from "./components/ProviderComponents/Services";
import UpdateProfile from "./components/ProviderComponents/Forms/UpdateProfile";
import EditRestaurant from "./components/ProviderComponents/Forms/EditRestaurant";
import EditHotel from "./components/ProviderComponents/Forms/EditHotel";
import EditTour from "./components/ProviderComponents/Forms/EditTour";
import Bookings from "./components/ProviderComponents/Bookings";
import { useParams } from "react-router-dom";

const Provider = () => {
  const { view, type, id } = useParams();
  console.log(type);
  console.log(id);
  const user = localStorage.getItem("userID");
  const [providerData, setProviderData] = useState();
  console.log(providerData);

  useEffect(() => {
    axios
      .get(`http://localhost:3040/Provider/${user}`)
      .then((response) => {
        setProviderData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Container>
        <Sidebar />
        {view === "Dashboard" && <MainContent />}
        {view === "Services" && providerData && (
          <Services
            Restaurants={providerData.Restaurant}
            Hotels={providerData.Hotel}
            Tours={providerData.Tours}
          />
        )}
        {view === "Profile" && providerData && (
          <UpdateProfile provider={providerData} />
        )}
        {view === "update" && type === "restaurant" && providerData && (
          <EditRestaurant restaurant={providerData.Restaurant} />
        )}
        {view === "update" && type === "hotel" && providerData && (
          <EditHotel hotel={providerData.Hotel} />
        )}
        {view === "update" && type === "tour" && providerData && (
          <EditTour tour={providerData.Tours} />
        )}
        {view === "Bookings" && providerData && (
          <Bookings provider={providerData.Tours} />
        )}
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default Provider;
