//this is page which opens after user click any card on BlogHome.js here we will have 
//UserInfo of individual who posted a blog and have comment section available to others

import React from "react";
import styled from "styled-components";
import UserInfo from "../shared/UserInfo";
import Article from "./Article";
import {Comments} from '../Comments/Comments';


const StyledContainer = styled.article`
`;

const BlogContent = styled.article``;

const CommentContainer=styled.div`
  
 
`

export default function UserBlog() {
  const date = new Date().toLocaleDateString();

  return (
    <StyledContainer>
      <BlogContent>
        <UserInfo
          link="/userblog"
          dp="/images/small.jpg"
          username="Xzzz"
          bio="asdasd asd asd asd asd asd h"
          action="Follow"
        />
        <Article
          heading="Travel"
          date={date}
          picture="/images/chitral2.jpg"
          discription="Chitral is the most beautiful and peaceful district of 
          Pakistan situated at the North most in Khyber-Pakhtunkhwa province. ...
         A narrow strip of Wakhan Corridor separates Chitral from Tajikistan in the north. 
         Chitral is famous for its natural beauty, the simplicity of its residents and its unique culture"
        />
        <CommentContainer>       
        <Comments />
        </CommentContainer>
      </BlogContent>
    </StyledContainer>
  );
}
