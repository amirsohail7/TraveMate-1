import React from 'react';
import styled from 'styled-components';
import AddHotel from './Services/AddHotel';
import AddRestaurant from './Services/AddRestaurant';
import AddTour from './Services/AddTour';
import { themeColor, hoverEffect } from "../../utils";
import {FaEdit} from "react-icons/fa";
import { Link } from 'react-router-dom';

function Services(_props) {
  console.log(_props);
    return(
        <Container>
            <TitleText>
            Add a Service
            </TitleText>
            <Row1>
            <a href="http://localhost:3000/AddRestaurantForum" >
              <AddRestaurant/>
            </a>
            <a href="http://localhost:3000/AddHotelForm" >
              <AddHotel/>
            </a>
            <a href="http://localhost:3000/AddTourForm" >
              <AddTour/>
            </a>
            </Row1>
            <TitleText>
            Your Services
            </TitleText>
            <Row2>
              <ServiceContainer>
                <TitleText>Restaurants</TitleText>
              {_props.Restaurants && _props.Restaurants.map((Restaurant)=>
                <Service key={Restaurant._id}>
                  <a href={`http://localhost:3000/restaurantdetail/${Restaurant._id}`}>  
                  {Restaurant.name}
                  </a>
                  <span>
                  <Link to={`/Provider/update/restaurant/${Restaurant._id}`}>
                    <FaEdit/>
                    </Link>
                    </span>
                </Service>
              )}
              </ServiceContainer>
              <ServiceContainer>
              <TitleText>Hotel</TitleText>
              {_props.Hotels && _props.Hotels.map((Hotel)=>
                <Service key={Hotel._id}> 
                <a href={`http://localhost:3000/hoteldetail/${Hotel._id}`}> 
                  {Hotel.name}
                  </a>
                  <span><Link to={`/Provider/update/hotel/${Hotel._id}`}><FaEdit/></Link></span>
                </Service>
              )}
              </ServiceContainer>
              <ServiceContainer>
              <TitleText>Tours</TitleText>
              {_props.Tours && _props.Tours.map((Tours)=>
                <Service key={Tours._id}>
                  <a href={`http://localhost:3000/tourdetail/${Tours._id}`}> 
                  {Tours.name}
                  </a>
                  <span><Link to={`/Provider/update/tour/${Tours._id}`}><FaEdit/></Link></span>
                </Service>
              )}
              </ServiceContainer>
              
            </Row2>
        </Container>
    );
}

const Container =styled.div`
    margin: 1rem 1rem 1rem 4rem;
`;
const TitleText = styled.h3`
   padding:15px;

`;

const Row1 = styled.div`
    display:flex;
    flex-direction: row;
    gap: 3rem;
`;

const Row2 = styled.div`
    display:flex;
    flex-direction: row;
    gap: 3rem;
`;

const ServiceContainer =styled.div`
  display:flex;
  flex-direction: column;
  height: max-content;
`;

const Service =styled.div`
  display: block;
  height: 100%;
  width: 18rem;
  background-color: white;
  margin-bottom: 10px;
  padding: 1rem;
  border-radius: 0.6rem;
  color: #2e2d2d;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
    cursor:pointer;
  }

  span{
    float: right;
    &:hover {
    box-shadow: rgba(4, 4, 243, 0.719) 0px 1px 0px;
    cursor:pointer;
  }
  }
`;
export default Services;