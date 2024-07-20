import React from 'react';
import './styles/Schedule.css';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const times = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
];

function Schedule() {
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

  const renderScheduleGrid = () => {
    const grid = [];

    // Add time slots to the first column
    times.forEach((time, timeIndex) => {
      grid.push(<div key={`time-${time}`} className="time-slot">{time}</div>);

      // Add empty slots for each day
      days.forEach(day => {
        grid.push(
          <div key={`${day}-${time}`} className="empty-slot"></div>
        );
      });
    });

    return grid;
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
        <button className="left-button">Schedule</button>
        <button className="right-button">Search/Add Classes</button>
      </div>
      <div className="schedule-container">
        <div className="time-slot"></div> {/* Empty top-left corner */}
        {renderDayHeaders()}
        {renderScheduleGrid()}
      </div>
    </div>
  );
}

export default Schedule;
