// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
