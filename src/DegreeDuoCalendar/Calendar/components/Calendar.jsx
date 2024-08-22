import React, { useEffect, useState } from 'react';
import TimeSlot from '../../../Components/TimeSlot';
import CalendarColumn from './CalendarColumn';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getColorForCourse } from '../../../util/colorUtils'; // Import the color utility
import '../styles/Calendar.css';

function Calendar() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/data-api/rest/Schedule', {
          baseURL: 'http://localhost:4280',
        });
        const courses = response.data.value;

        // Apply the same color assignment logic
        const coursesWithColors = courses.map(course => ({
          ...course,
          color: getColorForCourse(course.COURSEID),
        }));

        setCourses(coursesWithColors);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="p-4 bg-white w-full">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Fall 2024</h2>
        <button className="p-2 rounded bg-gray-200" onClick={() => navigateTo("/coursesearch")}>Add Course</button>
      </header>
      <section className="calendar-container flex gap-3 items-start w-4/5 h-full pl-10 max-md:pl-5 overflow-x-auto">
        <div className="flex flex-col w-9 time-slot-container mt-7">
          {['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'].map((time, index) => (
            <TimeSlot key={index} time={time} />
          ))}
        </div>
        <div className="flex flex-col w-full h-full min-w-[1050px]">
          <div className="grid-container">
            {Array.from({ length: 7 }).map((_, index) => (
              <CalendarColumn key={index} index={index} courses={courses} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Calendar;
