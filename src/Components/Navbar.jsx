import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/detail">Detail</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>

      <button>Change theme</button>
    </nav>
  );
};

export default Navbar;