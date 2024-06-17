import { useNavigate } from 'react-router-dom';
import './styles/Landing.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="landing-container">
        <div>
          <h1 className="title">degreeDuo</h1>
        </div>
        <div className="button-container">
          <button className="guest-button">
            USE DEGREE PLANNER AS GUEST
          </button>
          <button onClick={() => handleNavigation('/login')} className="login-button">
            Login
          </button>
          <button onClick={() => handleNavigation('/register')} className="register-button">
            Register
          </button>
        </div>
      </div>
      <div className="banner">
        Inspire LLC™
      </div>
    </>
  );
}

export default LandingPage;
