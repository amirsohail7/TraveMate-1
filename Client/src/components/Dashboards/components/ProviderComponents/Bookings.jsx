import React , {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { themeColor, hoverEffect } from "../../utils";
import Badge from "./Badge";


import axios from "axios";

function Booking(){
    const [bookings , setBookings]=useState();
    const id = localStorage.getItem("userID");

    useEffect(() => {
        axios
          .get(`http://localhost:3040/booking/bookings/${id}`)
          .then((response) => {
            setBookings(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);


    return(
        <Container>
            <TitleText>Bookings</TitleText>
            <SubContainer>

            {bookings && bookings.map((booking)=>(
                <BookingCard>
                    <h3>{booking.service.name}</h3>
                    <p>{booking.serviceType}</p>
                    <p>{booking.createdAt}</p>
                    <p> by : {booking.traveler.username}</p>
                    <p>to : {booking.provider.company}</p>
                    <p>{booking.description}</p>
                    <p>Seats : {booking.seats}</p>
                    
                    {booking.serviceType === "Restaurant" && 
                      <p>Reservation : {booking.time} </p>
                    }
                    {booking.serviceType === "Hotel" && 
                    <div><p>Dates: </p>
                    <p>{booking.dfrom}</p>
                    <p>{booking.dto}</p></div>
                      
                    }

                    <p>Payment Mode: {booking.paymentType}</p>
                    {booking.paymentStatus === "paid" &&
                    <p>Payment status : <span><Badge content="Paid" paid /></span></p>
                    }
                    {booking.paymentStatus === "pending" &&
                    <p>Payment status : <span><Badge content="Pending" pending /></span></p>
                    }
                    
                </BookingCard>
            ))}
            </SubContainer>
    </Container>
    );
}

const Container = styled.div`
  width: 85%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const BookingCard = styled.div`
  height: max-content;
  width: 20rem;
  margin:1rem;
  background-color: whitesmoke;
  padding: 1rem;
  
  color: #8f8f8f;
  border: 2px solid lightgray;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }`;

const TitleText = styled.h2`
padding:15px;

`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;

export default Booking;