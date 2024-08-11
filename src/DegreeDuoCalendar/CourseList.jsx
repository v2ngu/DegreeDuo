import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseDay from './CourseDay';

function CourseList() {
  const [courseDays, setCourseDays] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/data-api/rest/Schedule', {
          // baseURL: 'https://witty-stone-04723010f.5.azurestaticapps.net'
          baseURL: 'http://localhost:4280'
        });
        const courses = response.data.value;

        const groupedCourses = groupCoursesByDays(courses);
        setCourseDays(groupedCourses);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCourses();
  }, []);

  const groupCoursesByDays = (courses) => {
    const grouped = {};

    courses.forEach((course) => {
      const days = course.DAYS; // Use the entire DAYS string for grouping (e.g., 'MWF')

      if (!grouped[days]) {
        grouped[days] = {
          day: days, // Keep the DAYS string as the identifier
          hours: 0,
          courses: []
        };
      }

      const start = new Date(`1970-01-01T${convertTo24HourFormat(course.STARTTIME)}Z`);
      const end = new Date(`1970-01-01T${convertTo24HourFormat(course.ENDTIME)}Z`);
      const hours = (end - start) / (1000 * 60 * 60); // Calculate hours difference
      grouped[days].hours += hours;
      grouped[days].courses.push({
        id: course.ID,
        code: course.ID.match(/^[A-Z\s]+\d+[A-Z]?/)[0], 
        name: course.NAME,
        instructor: course.PROFESSOR,
        time: `${course.STARTTIME} - ${course.ENDTIME}`,
        color: 'bg-gray-500' // Adjust color as needed
      });
    });

    return Object.values(grouped);
  };

  const convertTo24HourFormat = (time) => {
    const [timePart, modifier] = time.split(' ');
    let [hours, minutes] = timePart.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
  };

  return (
    <section className="flex overflow-hidden flex-col pb-48 mt-4 w-full">
      <div className="flex flex-col mb-0 w-full">
        <div className="flex gap-2 justify-center items-center w-full text-sm leading-loose">
          <h3 className="gap-1 self-stretch my-auto font-bold text-blue-500">
            COURSE LIST
          </h3>
          <div className="flex gap-1 items-start self-stretch my-auto whitespace-nowrap">
            <div className="flex gap-1 items-start">
              <span className="text-amber-700">
                {courseDays.reduce((sum, day) => sum + day.hours, 0)}
              </span>
              <span className="text-white text-opacity-70">hours</span>
            </div>
          </div>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {courseDays.map((day, index) => (
          <CourseDay key={index} {...day} />
        ))}
      </div>
    </section>
  );
}

export default CourseList;
