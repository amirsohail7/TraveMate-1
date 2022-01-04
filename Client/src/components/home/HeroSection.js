import React from 'react';
import '../../App.css';
import { Button } from '../shared/Button';
import './HeroSection.css';
import LocationSearch from '../shared/LocationSearch';
import Popup from "../chatbot/Popup"

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      
      <div className='hero-btns'>
        <Button
          link='/destination'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Your Recommendations
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          GALLERY <i className='fa fa-camera' />
        </Button>
        <Popup/>
      </div>
    </div>
  );
}

export default HeroSection;
