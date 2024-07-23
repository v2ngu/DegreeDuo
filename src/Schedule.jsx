import React, { useState, useEffect } from 'react';
import './styles/Schedule.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const times = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'
];







function Schedule() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/data-api/rest/Schedule', {
          baseURL: 'https://witty-stone-04723010f.5.azurestaticapps.net' // Use the unified URL
        });
        setCourses(response.data.value); // Update the state with the fetched courses
      } catch (error) {
        setError(error.message); // Update the state with the error message
      }
    };

    fetchCourses(); // Call the function to fetch courses
  }, []); // Empty dependency array means this effect runs once after the initial render

  const renderScheduleGrid = () => {
    const grid = [];

    // Add time slots to the first column
    times.forEach((time, timeIndex) => {
      grid.push(<div key={`time-${time}`} className="time-slot">{time}</div>);

      // Add empty slots for each day
      days.forEach(day => {
        // Check if there's an event at this time and day
        const course = courses.find(course => course.day === day && course.time === time);
        if (course) {
          grid.push(
            <div key={`${day}-${time}`} className="event-slot">{course.name}</div>
          );
        } else {
          grid.push(
            <div key={`${day}-${time}`} className="empty-slot"></div>
          );
        }
      });
    });

    return grid;
  };


  const navigateTo = (path) => {
    navigate(path);
  };

  const renderTimeSlots = () => {
    return times.map(time => (
      <div key={time} className="time-slot">{time}</div>
    ));
  };

  const renderDayHeaders = () => {
    return days.map(day => (
      <div key={day} className="day-header">{day}</div>
    ));
  };

  return (
    <div>
      <div className="title-container">
        <div className="title">degreeDuo</div>
      </div>
      <div className="subtitle-container">
        <div className="subtitle">Fall 2025 Schedule</div>
      </div>
      <div className="button-container">
        <button className="left-button" onClick={() => navigateTo("/schedule")}>Schedule</button>
        <button className="login-button" onClick={() => navigateTo("/coursesearch")}>Search/Add Classes</button>
      </div>
      <div className="schedule-container">
        <div className="time-slot"></div>
        {renderDayHeaders()}
        {renderScheduleGrid()}
      </div>
    </div>
  );
}

export default Schedule;
