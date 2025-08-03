import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Discover the Latest Tech</h1>
        <p>Shop smart, shop premium.</p>
        <Link to="/products" className="hero-button">Shop Now</Link>
      </div>
    </div>
  );
};

export default Hero;
