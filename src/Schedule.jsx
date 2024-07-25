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
          baseURL: 'https://witty-stone-04723010f.5.azurestaticapps.net/'
        });
        setCourses(response.data.value);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCourses();
  }, []);

  const renderScheduleGrid = () => {
    const grid = [];

    // Add time slots to the first column
    times.forEach((time, timeIndex) => {
      grid.push(<div key={`time-${time}`} className="time-slot">{time}</div>);

      days.forEach(day => {
        // Check if there's a course at this time and day
        const course = courses.find(course => {
          const courseDays = course.DAYS.split('');
          const courseStartTime = new Date(`1970-01-01T${convertTo24HourFormat(course.STARTTIME)}`);
          const courseEndTime = new Date(`1970-01-01T${convertTo24HourFormat(course.ENDTIME)}`);
          const gridTime = new Date(`1970-01-01T${convertTo24HourFormat(time)}`);
          const courseDayMapping = {
            'M': 'Monday',
            'T': 'Tuesday',
            'W': 'Wednesday',
            'Th': 'Thursday',
            'F': 'Friday'
          };

          return courseDays.some(cd => courseDayMapping[cd] === day) &&
                 gridTime >= courseStartTime &&
                 gridTime < courseEndTime;
        });

        if (course) {
          grid.push(
            <div key={`${day}-${time}`} className="event-slot">
              {course.NAME}
            </div>
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

  const convertTo24HourFormat = (time12h) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');

    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
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
