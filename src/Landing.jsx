import React from 'react';
import './Landing.css';

function LandingPage() {
  return (
    <>
      <div className="landing-container">
        <div>
          <h1 className="title">degreeDuo</h1>
        </div>
        <div className="button-container">
          <button className="guest-button">USE DEGREE PLANNER AS GUEST</button>
          <button className="login-button">Login</button>
          <button className="register-button">Register</button>
        </div>
      </div>
      <div className="banner">
        Inspire LLC™
      </div>
    </>
  );
}

export default LandingPage;
