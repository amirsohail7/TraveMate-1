import React ,{useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import Badge from "./Badge";
import AvatarImage from "../../assets/R.png";
import { darkThemeColor } from "../../utils";

 function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>Abdul Hadi</Name>
        <Linkspan to="/Provider/Profile">
        <Badge content="Profile" />
        </Linkspan>
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Linkspan to="/Provider/Dashboard">
            <RiHomeLine />
            <h3>Dashboard</h3>
          </Linkspan>
          <Linkspan to="/Provider/Services">
            <RiFileCopyLine />
            <h3>Services</h3>
          </Linkspan>
          <Linkspan to="/Provider/Bookings">
            <FaWallet />
            <h3>Bookings</h3>
          </Linkspan>
          <Linkspan to="/Provider/Reports">
            <AiOutlinePieChart />
            <h3>Reports</h3>
          </Linkspan>
        </Links>
        <ContactContainer>
          <span>Having troubles?</span>
          <a href="#">Contact us : TraveMate@gmail.com </a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 15%;
  height: 97vh !important;
  
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  //border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Linkspan = styled(Link)`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.3rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 15%;
  }
`;

const ContactContainer = styled.div`
  width: 85%;
  background-color: #091322;
  color: #c4c4c4;
  margin: auto;
  margin-top: 10%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: smaller;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;

