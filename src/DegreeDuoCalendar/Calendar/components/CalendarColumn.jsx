import React from 'react';
import '../styles/CalendarColumn.css';

const CalendarColumn = ({ index, courses, onCourseClick }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

  const filteredCourses = courses.filter(course => {
    const courseDays = course.DAYS.split('');
    const dayMapping = {
      'S': 0,  // Sunday
      'M': 1,  // Monday
      'T': 2,  // Tuesday
      'W': 3,  // Wednesday
      'Th': 4, // Thursday
      'F': 5,  // Friday
      'S': 6   // Saturday
    };
    return courseDays.some(cd => dayMapping[cd] === index);
  });

  const getTimeSlotIndex = (startTime) => {
    const [time, period] = startTime.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    // Convert time to 24-hour format
    if (period === 'PM' && hours !== 12) {
      hours += 12;
    }
    if (period === 'AM' && hours === 12) {
      hours = 0;
    }

    let totalMinutes = hours * 60 + minutes;
    return Math.floor((totalMinutes - 8 * 60) / 30);  // Start time is 8:00 AM
  };

  // Function to adjust the color's opacity
  const adjustColorOpacity = (color, opacity) => {
    const rgba = color.startsWith('#') ? hexToRgba(color, opacity) : color;
    return rgba;
  };

  // Convert hex color to rgba with specified opacity
  const hexToRgba = (hex, opacity) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <div className="column-container">
      <div className="column-header">{daysOfWeek[index]}</div>
      <div className="time-slots-grid">
        {filteredCourses.map((course, courseIndex) => {
          const startIndex = getTimeSlotIndex(course.STARTTIME);
          const endIndex = getTimeSlotIndex(course.ENDTIME);
          const rowSpan = endIndex - startIndex;

          return (
            <div
              key={courseIndex}
              className="course-block"
              style={{
                gridRow: `${startIndex + 1} / span ${rowSpan}`, // Span the rows
                backgroundColor: adjustColorOpacity(course.color, 0.3), // Adjust opacity here
                border: `2px solid ${course.color}`, // Border with the original color
                padding: '4px',
                margin: '2px',
                color: 'black', // Ensure text color is visible
                fontWeight: 'bold',
                borderRadius: '4px',
              }}
              onClick={() => onCourseClick(course)} // Handle click event
            >
              <span className="course-name">{course.NAME}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarColumn;
