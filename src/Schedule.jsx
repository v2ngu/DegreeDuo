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
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/data-api/rest/Schedule', {
          baseURL: 'http://localhost:4280'
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
            <div 
              key={`${day}-${time}`} 
              className="event-slot" 
              onClick={() => setSelectedCourse(course)}
            >
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

  const closeModal = () => {
    setSelectedCourse(null);
  };

  const removeCourse = (courseId) => {
    setCourses(courses.filter(course => course.ID !== courseId));
    closeModal();
  };

  const renderCourseModal = () => {
    if (!selectedCourse) return null;

    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>{selectedCourse.NAME}</h2>
          <p>Professor: {selectedCourse.PROFESSOR}</p>
          <p>Days: {selectedCourse.DAYS}</p>
          <p>Time: {selectedCourse.STARTTIME} - {selectedCourse.ENDTIME}</p>
          <div className="modal-buttons">
            <button onClick={closeModal}>Close</button>
            <button onClick={() => removeCourse(selectedCourse.ID)}>Remove</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="title-container mb-4">
        <div className="title text-10xl font-bold text-center">degreeDuo</div>
      </div>
      <div className="subtitle-container mb-8">
        <div className="subtitle text-xl text-center text-gray-700">Fall 2025 Schedule</div>
      </div>
      <div className="button-container flex justify-center space-x-4 mb-8">
        <button className="left-button bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600" onClick={() => navigateTo("/schedule")}>Schedule</button>
        <button className="login-button bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-600" onClick={() => navigateTo("/coursesearch")}>Search/Add Classes</button>
      </div>
      <div className="schedule-container bg-white p-4 rounded shadow-md">
        <div className="time-slot mb-4"> </div>
        {renderDayHeaders()}
        {renderScheduleGrid()}
      </div>
      {renderCourseModal()}
    </div>
  );
}

export default Schedule;
