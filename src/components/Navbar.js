/* import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/#hero">Inicio</Link></li>
        <li><Link to="/#problems">Problemas</Link></li>
        <li><Link to="/#testimonials">Testimonios</Link></li>
        <li><Link to="/#contact">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar; */
import React from 'react';
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#problems">Problemas</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;