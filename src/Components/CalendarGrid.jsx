import React, { useEffect, useState } from 'react';
import CalendarColumn from './CalendarColumn';
import axios from 'axios';

const CalendarGrid = () => {
  const [courses, setCourses] = useState([]);

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
    <div className="flex flex-wrap items-start self-stretch h-full min-w-[240px] max-md:max-w-full grid-container">
      {Array.from({ length: 7 }).map((_, index) => (
        <CalendarColumn key={index} index={index} courses={courses} />
      ))}
    </div>
  );
};

export default CalendarGrid;
