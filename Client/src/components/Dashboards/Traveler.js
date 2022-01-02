import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Sidebar from "./components/TravelerComponents/Sidebar";
import TravelerContent from "./components/TravelerComponents/TravelerContent";
import UpdateProfile from "./components/TravelerComponents/Forms/UpdateProfile";
import { useParams } from "react-router-dom";
import Bookings from "./components/TravelerComponents/Bookings";

const Traveler = () => {
  const { view, type, id } = useParams();
  console.log(type);
  console.log(id);
  const user = localStorage.getItem("userID");
  const [travelerData, setTravelerData] = useState();
  console.log(travelerData);

  useEffect(() => {
    axios
      .get(`http://localhost:3040/Traveler/${user}`)
      .then((response) => {
        setTravelerData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Container>
        <Sidebar />

        {view === "Dashboard" && <TravelerContent />}

        {view === "Profile" && travelerData && (
          <UpdateProfile traveler={travelerData} />
        )}
        {view === "Bookings" && travelerData && (
          <Bookings traveler={travelerData.Tours} />
        )}
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default Traveler;
