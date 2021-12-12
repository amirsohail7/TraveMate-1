import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  border-radius: 15px;
  /* border:${(props) => `1px solid ${props.theme.border}`}; */
  padding: 0px 0px 18px;
  background: #fff;
  /* background: ${(props) => `linear-gradient(
    45deg, ${props.theme.primary}, ${props.theme.secondary}
  )`}; */
  height: 300px;
  width: 300px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CardPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  /* border: ${(props) => `1px solid ${props.theme.border}`}; */
`;

const UserInfo = styled.div`
  display: block;
`;
const UserLink = styled.span`
  display: inherit;
`;
const UserDp = styled.img`
  border-radius: 50%;
  height: 40px;
  float: left;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  color: #000000;
  font-weight: 900;
  float: none;
  overflow: hidden;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
const Date = styled.div`
  color: #000000;
  font-weight: 600;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
const Description = styled.p`
  color: #808080;
  font-weight: 500;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
const Actions = styled.div`
  color: #000000;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`;
const Action = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #000000;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
    /* background: ${(props) => props.theme.primary}; */
  }
`;

const CardTemplate = ({
  cp,
  link,
  dp,
  title,
  date,
  description,
  comments,
  likes,
  views,
  actions,
}) => (
  <StyledContainer>
    <CardPhoto src={cp} />
    <UserInfo>
      <UserLink>
        <a href={link}>
          <UserDp src={dp}></UserDp>
          <Title>{title}</Title>
        </a>
      </UserLink>
      <Date>{date}</Date>
    </UserInfo>
    <Description>{description}</Description>
    <Actions>
      {actions.map(({ label }) => (
        <Action>{label}</Action>
      ))}
    </Actions>
  </StyledContainer>
);
export default CardTemplate;
