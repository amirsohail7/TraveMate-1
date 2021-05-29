import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const UserInfoContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-flow:row;
  background: whitesmoke;
  align-items: center;
`;

const UserLink = styled.a`
  display: block;
  flex-flow:column;
  text-decoration:none;
  /* float:left; */
`;

const UserDp = styled.img`
  border-radius: 50%;
  height: 50px;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const UserId=styled.div`
display:flex;
flex-direction:column;


`
const UserName = styled.a`
  color: #000000;
  text-decoration:none;
  font-weight: 900;
  float: none;
  overflow: hidden;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const UserBio = styled.section`
  color: grey;
  font-size:0.8rem;
  //use max-width and overflow togather to work
  max-width:50%;
  overflow-wrap: break-word;
  text-align: center;
  text-decoration:none;
  font-weight: 300;
  
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const ButtonContainer=styled.div`
 
`

/* const SocialLinks=styled.section`
    //maping of social link buttons and making this section generic
` */

const UserInfo = ({ link, dp, username, bio}) => (
  <UserInfoContainer>
    <UserLink href={link}>
        <UserDp src={dp}></UserDp>
    </UserLink>
    <UserId>
    <UserName href={link}>{username}</UserName>
    <UserBio>{bio}</UserBio>
    </UserId>
    <ButtonContainer><Button
      className="btns"
      buttonStyle="btn--primary"
      buttonSize="btn--small"
      onClick={console.log("heyy")}
    >
      Follow
    </Button>
    </ButtonContainer>
  </UserInfoContainer>
);

export default UserInfo;
