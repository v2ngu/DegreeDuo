import { useNavigate } from 'react-router-dom';
import Title from './Components/Title';
import BackComponent from './Components/BackComponent';
import './styles/Register.css';

const majors = [
  '',
  'Aerospace Engineering',
  'Biology',
  'Computer Science',
  'Electrical Engineering',
  'Mechanical Engineering',
  // Add more majors here
];

const minors = [
  '',
  'Business Administration',
  'Computer Science',
  'Mathematics',
  'Psychology',
  'Statistics',
  // Add more minors here
];

function RegisterPage() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleTitleClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="register-container">
        <Title text="degreeDuo" onClick={handleTitleClick} />
        <div className="register-box">
          <div className="back-button-container">
            <BackComponent to="/" />
          </div>
          <form className="register-form">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" required />
            </div>
            <div className="form-group">
              <label>Birth Date</label>
              <div className="birth-date">
                <input type="text" name="birthDay" placeholder="Day" required />
                <input type="text" name="birthMonth" placeholder="Month" required />
                <input type="text" name="birthYear" placeholder="Year" required />
              </div>
            </div>
            <div className="form-group">
              <label>Major</label>
              <select name="major" required>
                {majors.map((major) => (
                  <option key={major} value={major}>{major}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Minor</label>
              <select name="minor" required>
                {minors.map((minor) => (
                  <option key={minor} value={minor}>{minor}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Next Semester</label>
              <input type="text" name="nextSemester" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Confirm Email</label>
              <input type="email" name="confirmEmail" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" required />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" required />
            </div>
            <button type="submit" className="register-button">Register</button>
          </form>
        </div>
      </div>
      <div className='banner'>
        Inspire LLC™
      </div>
    </>
  );
}

export default RegisterPage;
