import React from 'react';
import './Landing.css';
// import Navbar from './assets/compenents/Navbar';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function LandingPage() {

  return (
    <>
      <div className="landing-container">
        <div>
          <h1 className="title">degreeDuo</h1>
        </div>
        <Outlet/>
          { <div className="button-container">
            <button className="guest-button">USE DEGREE PLANNER AS GUEST</button>
            <button className="login-button" >Login</button>
            <Link to="/login" className="login-button">Login</Link>
            <Link to="/register" className="register-button">Register</Link>

            <button className="register-button">Register</button>
          </div>  }
      </div>
      <div className="banner">
        Inspire LLC™
      </div>
    </>
  );
}

export default LandingPage;
