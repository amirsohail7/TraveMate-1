import React from "react";
import styled from "styled-components";
import AvatarImage from "../../assets/room-6.jpeg";
import AvatarImage2 from "../../assets/room-4.jpeg";
import { cardShadow, hoverEffect, themeColor } from "../../utils";

function Bookings() {
  return (
    <YourBookings>
      <Booking>
        <Avatar>
          <img src={AvatarImage} alt="" />
        </Avatar>
        <Detail>
          <Title>Marriot</Title>
          <SubTitle>26 - 29 October,2021</SubTitle>
        </Detail>
      </Booking>
      <Booking>
        <Avatar>
          <img src={AvatarImage2} alt="" />
        </Avatar>
        <Detail>
          <Title>Pearl Continental</Title>
          <SubTitle>1-3 November,2021</SubTitle>
        </Detail>
      </Booking>
      <AllBookings>See all bookings</AllBookings>
    </YourBookings>
  );
}

const YourBookings = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const Booking = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
    
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllBookings = styled.h5`
  text-align: end;
  color: ${themeColor};
  cursor: pointer;
`;

export default Bookings;
