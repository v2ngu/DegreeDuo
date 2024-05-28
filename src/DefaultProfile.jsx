import { useNavigate } from 'react-router-dom';

const DefaultProfile = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="button-container">
      <button className="guest-button">USE DEGREE PLANNER AS GUEST</button>
      <button className="login-button" onClick={() => navigateTo("/login")}>Login</button>
      <button className="register-button">Register</button>
    </div>
  );
};

export default DefaultProfile;
