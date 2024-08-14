import React from 'react';

const CalendarColumn = ({ index, courses }) => {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'Th', 'F', 'S'];

  const filteredCourses = courses.filter(course => {
    const courseDays = course.DAYS.split('');
    const dayMapping = {
      'S': 0,  // Sunday
      'M': 1,  // Monday
      'T': 2,  // Tuesday
      'W': 3,  // Wednesday
      'Th': 4, // Thursday
      'F': 5,  // Friday
      'Sa': 6  // Saturday
    };
    return courseDays.some(cd => dayMapping[cd] === index);
  });

  const getTimeSlotIndex = (startTime) => {
    const [hours, minutes] = startTime.split(':');
    let totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
    if (startTime == "09:00 AM"){
      console.log("hours: ", hours);
      console.log("minutes:", minutes)
      console.log("totalMinutes: ", totalMinutes);
    }
    return Math.floor((totalMinutes - 7 * 60) / 60);  // 7 AM is the start time
  };

  return (
    <div className="column-container">
      <div className="column-header">{daysOfWeek[index]}</div>
      {Array.from({ length: 24 }).map((_, rowIndex) => {
        const course = filteredCourses.find(c => getTimeSlotIndex(c.STARTTIME) === rowIndex);

        return (
          <div key={rowIndex} className="time-slot">
            {course && (
              <div className="course-block">
                {course.NAME}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarColumn;
