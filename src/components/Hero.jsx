import heroImage from '../assets/heroimage.png'
import React from 'react';
import './Hero.css'; // Import the corresponding CSS file

const Hero = () => {
  return (
    <div className="hero">
        <img src={heroImage} alt="Hero" className="heroimage" />
      <div className="hero-content">
        <div className="hero-text-box">
        <h1>Welcome to UpShop</h1>
        <p>Where You Can Shop For <span className="anything">Anything!</span></p>
      </div>
    </div>
    </div>
  );
};

export default Hero;
