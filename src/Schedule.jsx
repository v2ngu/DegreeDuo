import React, { useState, useEffect } from 'react';
import './styles/Schedule.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Title from './Components/Title.jsx';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// const times = [
//   '8:00 AM', '8:30 AM',  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
//   '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
//   '6:00 PM', '7:00 PM', '8:00 PM',
// ];

const times = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM',
];



function Schedule() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  
  const handleTitleClick = () => {
    navigate('/');
  };
  


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/data-api/rest/Schedule', {
          baseURL: 'http://localhost:4280'
          // baseURL: 'https://witty-stone-04723010f.5.azurestaticapps.net'
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
    console.log(hours, minutes);
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
        <Title text="degreeDuo" onClick={handleTitleClick} />
      </div>
      <h1 style={styles.title}>Fall 2024 Schedule</h1>
      <div style={styles.navBar}>
        <div style={styles.navItem} onClick={() => navigate('/schedule')}>SCHEDULE</div>
        <div style={{ ...styles.navItem, ...styles.activeNavItem }} onClick={() => navigate('/coursesearch')}>SEARCH/ADD CLASSES</div>
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

const styles = {
  container: {
    fontFamily: 'Jura, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    color: '#bf5701',
    fontSize: '2em',
    textAlign: 'center',
  },
  navBar: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  navItem: {
    padding: '10px 20px',
    fontSize: '1.2em',
    cursor: 'pointer',
  },
  activeNavItem: {
    backgroundColor: '#e0e0e0',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
    borderBottom: '1px solid #ccc',
  },
  tab: {
    padding: '10px 20px',
    cursor: 'pointer',
  },
  activeTab: {
    fontWeight: 'bold',
    borderBottom: '2px solid #bf5701',
  },
  tabContent: {
    marginBottom: '20px',
  },
  results: {
    textAlign: 'center',
  },
  resultsTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  noResults: {
    color: 'red',
    fontSize: '1.2em',
  },
};

export default Schedule;
