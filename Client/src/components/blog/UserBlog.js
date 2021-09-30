//this is page which opens after user click any card on BlogHome.js here we will have
//UserInfo of individual who posted a blog and have comment section available to others

import React from "react";
import styled from "styled-components";
import UserInfo from "../shared/UserInfo";
import Article from "./Article";
import { Comments } from "../Comments/Comments";
import { useParams } from "react-router-dom";
import useFetch from "../shared/useFetch";

const StyledContainer = styled.article``;

const BlogContent = styled.article``;

const CommentContainer = styled.div``;

export default function UserBlog() {
  const { id } = useParams();
  const date = new Date().toLocaleDateString();

  const {
    error,
    isPending,
    data: blogDetails,
  } = useFetch(`http://localhost:3040/blog/${id}`);
  console.log(blogDetails);

  return (
    <StyledContainer>
      <BlogContent>
        <UserInfo
          link="/userblog"
          dp="/images/small.jpg"
          username={blogDetails.author.username}
          bio="Traveling is therapy"
          action="Follow"
        />
        <Article
          heading={blogDetails.Title}
          date={date}
          picture="/images/chitral2.jpg"
          discription={blogDetails.Description}
        />
        <CommentContainer>
          <Comments />
        </CommentContainer>
      </BlogContent>
    </StyledContainer>
  );
}
