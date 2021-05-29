import React from 'react';
import './Rating.scss';
import {Icon} from "semantic-ui-react";
import {getShortNumberString} from './number-format';

export function Rating(props) {
  let likeCount = props.likeCount !== 0 ? props.likeCount : null;

  if(props.likeCount ) {
    const amountLikes = parseFloat(props.likeCount);

    // Now that we have calculated the percentage, we bring the numbers into a better readable format
    likeCount = getShortNumberString(amountLikes);

  }
  return (
    <div className='rating'>
      <div >
        <Icon name='thumbs outline up'/>
        <span>{likeCount}</span>
      </div>
    </div>
  );
}