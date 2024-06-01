import React from 'react';
import './Register.css';

function RegisterPage() {
  return (
    <div className="register-container">
      <h1 className="title">degreeDuo</h1>
      <div className="register-box">
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
            <input type="text" name="major" required />
          </div>
          <div className="form-group">
            <label>Minor</label>
            <input type="text" name="minor" required />
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
  );
}

export default RegisterPage;
