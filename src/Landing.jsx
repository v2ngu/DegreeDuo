import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from './Universal Components/Title.jsx';
import './styles/Landing.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  
  return (
    <div className="flex flex-col items-center justify-between h-[90vh]">
      <div>
        <Title />
      </div>
      <div className="flex flex-col items-center mb-[40vh]">
        <button 
          className="rounded-lg w-52 h-12 mb-5 bg-black text-white border-none cursor-pointer transition ease-in-out duration-300 hover:bg-[#333]" 
          onClick={() => handleNavigation("/guestpopup")}
        >
          Continue as Guest
        </button>
        <button 
          className="rounded-lg w-52 h-12 mb-5 bg-[#FFA652] border-none cursor-pointer transition ease-in-out duration-300 hover:bg-[#FF8C00]" 
          onClick={() => handleNavigation("/login")}
        >
          Login
        </button>
        <button 
          className="rounded-lg w-52 h-12 mb-5 bg-[#FFA652] border-none cursor-pointer transition ease-in-out duration-300 hover:bg-[#FF8C00]" 
          onClick={() => handleNavigation("/register")}
        >
          Register
        </button>
      </div>
      <div className="w-full bg-[#e0e0e0] text-center py-2 fixed bottom-0 left-0">
        Welcome to degreeDuo - a platform for students to find their ideal study buddy!
      </div>
    </div>
  );
}

export default LandingPage;
