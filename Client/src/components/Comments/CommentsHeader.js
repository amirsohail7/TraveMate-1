import React from 'react';
import './CommentsHeader.scss';

export function CommentsHeader(props) {
  return (
    <div className='comments-header'>
      <h4>{props.amountComments} Comments</h4>
    </div>
  );
}