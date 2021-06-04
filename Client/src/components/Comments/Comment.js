import React from 'react';
import './Comment.scss';
import {Button, Image} from "semantic-ui-react";
import {Rating} from '../rating/Rating';

export function Comment(props) {
  
  //after connection with database user can click on like button which 
  //will be used here as props to increase like count and showing username and picture
  /* if (!props.comment) {
    return <div/>;
  }
  const topLevelComment = props.comment.snippet.topLevelComment;
  const {authorProfileImageUrl, authorDisplayName, textOriginal} = topLevelComment.snippet;
  const likeCount = topLevelComment.snippet.likeCount;
 */
  return (
    <div className='comment'>
      <Image className='user-image' src={'/images/small.jpg'} circular />
      <div>
        <div className='user-name'>XYZ</div>
        <span>Comment text</span>
        <div className='comment-actions'>
          <Rating likeCount={1}/> <Button size='mini' compact>REPLY</Button>
        </div>
      </div>
    </div>
  );
}