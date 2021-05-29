import React from "react";
import styled from "styled-components";

/* import CommentAdd from '../shared/Comments/CommentAdd' */

const ArticleContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-flow: column;
  background: white;
  align-items: center;
`;

const ArticleHeader = styled.h2`
  max-width: 70%;
  overflow-wrap: break-word;
`;
const Date = styled.section`
 color: grey;
`;

const ArticleImage = styled.img`
  max-width: 70%;
  overflow-wrap: break-word;
`;
const ArticleDescription = styled.article`
  max-width: 70%;
  overflow-wrap: break-word;
`;
/* const CommentContainer=styled.div`` */

const Article = ({ heading, date, picture, discription }) => (
  <ArticleContainer>
    <ArticleHeader>{heading}</ArticleHeader>
    <Date>{date}</Date>
    <ArticleImage src={picture} />
    <ArticleDescription>{discription}</ArticleDescription>
  </ArticleContainer>
);

export default Article;
