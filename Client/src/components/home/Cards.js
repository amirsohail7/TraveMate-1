import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Trending Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/islamabad2.jpg'
              text='explore one of world most beautiful capitals'
              label='Islamabad'
              path='/hotels'
            />
            <CardItem
              src='images/chitral.jpg'
              text='explore natural beauty and unique culture'
              label='Chitral'
              path='/hotels'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/hunza.jpg'
              text='explore valley which is refered as heaven on earth'
              label='Hunza'
              path='/hotels'
            />
            <CardItem
              src='images/murree.jpg'
              text='Popular picnic destination of Pakistan'
              label='Murree'
              path='/hotels'
            />
            <CardItem
              src='images/abbotabad.jpg'
              text='City blessed with pleasant weather all year round'
              label='Abbotabad'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
