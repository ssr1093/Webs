// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyWebsite</div>
      <ul className="nav-links">
  <li>
    <Link to="home" smooth={true} duration={500}>Home</Link>
  </li>
  <li>
    <Link to="contact" smooth={true} duration={500}>Contact</Link>
  </li>
</ul>

    </nav>
  );
};

export default Navbar;
