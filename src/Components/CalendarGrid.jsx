// CalendarGrid.jsx
import React, { useEffect, useState } from 'react';
import CalendarColumn from './CalendarColumn';
import TimeSlot from './TimeSlot';
import axios from 'axios';

const CalendarGrid = () => {
  const [courses, setCourses] = useState([]);
  const timeSlots = [
    "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
    "7:00 PM", "8:00 PM", "9:00 PM"
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/data-api/rest/Schedule', {
          baseURL: 'http://localhost:4280'
          // baseURL: 'https://witty-stone-04723010f.5.azurestaticapps.net'
        });
        setCourses(response.data.value);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="flex h-full">
      {/* Time slots column */}
      <div className="flex flex-col w-[70px]">
        {timeSlots.map((time, index) => (
          <TimeSlot key={index} time={time} />
        ))}
      </div>

      {/* Calendar columns */}
      <div className="flex flex-1">
        {Array.from({ length: 7 }).map((_, index) => (
          <CalendarColumn key={index} index={index} courses={courses} />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
