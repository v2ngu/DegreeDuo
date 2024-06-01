import React from 'react';
import './Landing.css';
import { Outlet } from "react-router-dom";

function LandingPage() {

  return (
    <>
      <div className="landing-container">
        <div>
          <h1 className="title">degreeDuo</h1>
        </div>
        <Outlet/>
      </div>
      <div className="banner">
        Inspire LLC™
      </div>
    </>
  );
}

export default LandingPage;
