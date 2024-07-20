import { useNavigate } from 'react-router-dom';
import './styles/GuestPopUp.css';
import BackComponent from './Components/BackComponent';


function GuestProfile() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <>
    <div className="guest-profile-container">
      <h1 className="title">degreeDuo</h1>
      <div className="guest-box">
          <div className="back-button-container">
                  <BackComponent to="/" />
          </div>
        <button className="login-button" onClick={() => navigateTo("/courselist")}>Create Myself: Fall</button>
        <button className="login-button" onClick={() => navigateTo("/coursesearch")}>AI Generated Schedule</button>
        <button className="login-button">Create Myself: Spring</button>
      </div>
    </div>
    <div className="banner">
                Inspire LLC™
    </div>
    </>
  );
}

export default GuestProfile;
