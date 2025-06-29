// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
<footer className="footer">
  <div className="footer-content">
    <p>© {new Date().getFullYear()} Sunshine Smart Kids. All rights reserved.</p>
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  </div>
</footer>
 

    
  );
};

export default Footer;
