import React from 'react';

const CalendarColumn = ({ index, courses }) => {
  const dayMapping = {
    0: 'S',  // Sunday
    1: 'M',  // Monday
    2: 'T',  // Tuesday
    3: 'W',  // Wednesday
    4: 'Th', // Thursday
    5: 'F',  // Friday
    6: 'Sa'  // Saturday
  };

  const filteredCourses = courses.filter(course => {
    const courseDays = course.DAYS.split('');
    return courseDays.some(cd => cd === dayMapping[index]);
  });

  const getTimeSlotIndex = (time) => {
    const [hours, minutes] = time.split(':');
    let hour = parseInt(hours);
    const isPM = time.includes('PM');
    if (isPM && hour !== 12) hour += 12;  // Convert to 24-hour format
    if (!isPM && hour === 12) hour = 0;  // Adjust for 12 AM case
    return (hour - 7) * 2 + (minutes === '30' ? 1 : 0);  // Calculate slot index
  };

  return (
    <div className={`flex flex-col shadow-sm border-r border-gray-200 w-[145px] h-full column-container`}>
      {Array.from({ length: 26 }).map((_, rowIndex) => {
        const course = filteredCourses.find(c => {
          const startIndex = getTimeSlotIndex(c.STARTTIME);
          const endIndex = getTimeSlotIndex(c.ENDTIME);
          return rowIndex >= startIndex && rowIndex < endIndex;
        });

        return (
          <div key={rowIndex} className={`flex w-full min-h-[18px] border-b ${course ? 'bg-orange-200' : 'bg-gray-50'}`}>
            {course && rowIndex === getTimeSlotIndex(course.STARTTIME) && (
              <div className="text-xs font-semibold text-black">
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
