//this is page which opens after user click any card on BlogHome.js here we will have
//UserInfo of individual who posted a blog and have comment section available to others

import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import UserInfo from "../shared/UserInfo";
import Article from "./Article";
import { Comments } from "../Comments/Comments";
import { useParams } from "react-router-dom";

const StyledContainer = styled.article``;

const BlogContent = styled.article``;

const CommentContainer = styled.div``;

export default function UserBlog() {
  const { id } = useParams();
  const date = new Date().toLocaleDateString();
  const [blogDetail, setBlogDetail] = useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3040/blog/${id}`)
      .then((response) => {
        setBlogDetail(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!blogDetail) return null;
  console.log(blogDetail.Name);

  return (
    <StyledContainer>
      <BlogContent>
        {blogDetail.map((blog) => (
          <div>
            <UserInfo
              link="/userblog"
              dp="/images/small.jpg"
              username={blog.author.username}
              bio="Traveling is therapy"
              action="Follow"
            />
            <Article
              heading={blog.Title}
              date={date}
              picture="/images/chitral2.jpg"
              discription={blog.Description}
            />
          </div>
        ))}

        <CommentContainer>
          <Comments />
        </CommentContainer>
      </BlogContent>
    </StyledContainer>
  );
}
