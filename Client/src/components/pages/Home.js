import React from 'react';
import '../../App.css';
import Cards from '../home/Cards';
import HeroSection from '../home/HeroSection';
import Footer from '../home/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
