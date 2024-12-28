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
import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/BeCoatIsologo30x15.png";

const Navbar = () => {
  return (
    <header className="header">
      
        <img src={logo} alt="Logo de Becoat" className="logo" />
        <p>Tú mejor opción en pintura proyectada</p>
    {/*     <label className="nav_label">
          <input type="checkbox" className="nav_checkbox" name="" id="" />
        </label>

      <nav className="navbar">
        <ul>
          <li className="nav_element">
            <a href="#hero">Inicio</a>
          </li>
          <li className="nav_element">
            <a href="#problems">Problemas</a>
          </li>
          <li className="nav_element">
            <a href="#testimonials">Testimonios</a>
          </li>
          <li className="nav_cta">
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Navbar;
