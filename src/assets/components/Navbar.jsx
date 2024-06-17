import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create this file for styling the Navbar

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-title">
        degreeDuo
      </Link>
      <div className="navbar-buttons">
        <Link to="/login" className="navbar-button">
          Login
        </Link>
        <Link to="/register" className="navbar-button">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
