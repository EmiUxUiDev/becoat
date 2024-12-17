import React from 'react';
import Navbar from './Navbar';
import logo from '../assets/BeCoatIsologo30x15.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Becoat Logo" className="logo" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;