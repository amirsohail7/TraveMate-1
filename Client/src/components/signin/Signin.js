import React, { useState } from 'react';
import FormSignin from './FormSignin';
import SigninSuccess from './SigninSuccess';
import './Signin.css';

const Signin = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='images/flowers.jpg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignin submitForm={submitForm} />
        ) : (
          <SigninSuccess />
        )}
      </div>
    </>
  );
};

export default Signin;