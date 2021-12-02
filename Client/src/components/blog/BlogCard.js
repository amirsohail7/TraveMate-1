//this coponent is created by shared and reusable componen CardTemplate.js
//cp(card picture), dp and link can be filled by form provided to user when they want to post something

import React from "react";
import styled from "styled-components";
import { FaCommentAlt, FaThumbsUp, FaRegEye } from "react-icons/fa";
import CardTemplate from "../shared/CardTemplate";

const StyledRoot = styled.div`
  /* padding: 50px 12px; */
`;
const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: 3px 3px 3px;
`;
const BlogCard = ({ blogs }) => {
  const date = new Date().toLocaleDateString();
  const onCommentClick = () => alert("You clicked comments");
  const onLikesClick = () => alert("You clicked comments");
  const onViewsClick = () => alert("You clicked comments");
  const buttons = [
    {
      label: (
        <>
          <FaCommentAlt /> 0 Comments
        </>
      ),
      onClick: onCommentClick,
    },
    {
      label: (
        <>
          <FaThumbsUp /> 242 Likes
        </>
      ),
      onClick: onLikesClick,
    },
    {
      label: (
        <>
          <FaRegEye /> 187288 Views
        </>
      ),
      onClick: onViewsClick,
    },
  ];
  return (
    <StyledRoot>
      <StyledContainer>
        {blogs.map((blog) => (
          <CardTemplate
            cp="/images/chitral2.jpg"
            link={`/userblog/${blog._id}`}
            dp="/images/small.jpg"
            title={blog.Title}
            date={date}
            description={blog.Description}
            actions={buttons}
          />
        ))}
      </StyledContainer>
    </StyledRoot>
  );
};
export default BlogCard;
