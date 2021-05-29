//this is parent components to all the blog card here we will render all user posts

import React from "react";
import styled from 'styled-components';
import BlogCard from "./BlogCard";

const StyledContainer=styled.div`
 
`
const Hero=styled.div`
  background: url('/images/chitral.jpg') center center/cover no-repeat;
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  color: #fff;
  font-size: 90px;
`
const CardConatainer=styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  
`

const Heading=styled.h1`
  display:inline-block;
  margin-top:10px;
  margin-bottom:10px;
  font-size:40px;
  font-weight:400;
  border-bottom:1px solid black;
  
`

export default function BlogHome() {
  return (
    <StyledContainer>
    <Hero>TraveMate Community</Hero>
    <Heading>Featured Posts</Heading>
    <CardConatainer>
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    </CardConatainer>
    
    </StyledContainer>
  );
}
