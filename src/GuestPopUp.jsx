import { useNavigate } from 'react-router-dom';
import './styles/GuestPopUp.css';
import BackComponent from './Components/BackComponent';
import Title from './Components/Title';

function GuestProfile() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleTitleClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="guest-profile-container">
        <Title text="degreeDuo" onClick={handleTitleClick} />
        <div className="guest-box">
          <div className="back-button-container">
            <BackComponent to="/" />
          </div>
          <button className="login-button" onClick={() => navigateTo("/schedule")}>Create Myself: Fall</button>
          <button className="login-button" onClick={() => navigateTo("/coursesearch")}>AI Generated Schedule</button>
          <button className="login-button" onClick={() => navigateTo("/courselist")}>Create Myself: Spring</button>
        </div>
      </div>
      <div className="banner">
        Inspire LLC™
      </div>
    </>
  );
}

export default GuestProfile;
