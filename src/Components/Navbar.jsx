import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ toggleTheme }) => {
  return (

    <div className="navbar">
      <div className="logo"> 
      <img src="./images/ico-dh.png" alt="Odonto"/> 
      </div>
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacto">Contact</Link></li>
        <li><Link to="/favs">Favorites</Link></li>
        <button onClick={toggleTheme}> <img src="./images/ico-moon_change_theme.png" alt="Moon Icon"/></button>
      </ul>
    </div>   
  );
};

export default Navbar;

