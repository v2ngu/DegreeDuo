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

  const dayMapping = {
    "M": "Mon",
    "T": "Tue",
    "W": "Wed",
    "R": "Thu",
    "F": "Fri",
    "MWF": "Mon-Wed-Fri",
    "TR": "Tue-Thu",
    // Add other combinations as needed
  };

  const groupCoursesByDays = (courses) => {
    const grouped = {};
  
    courses.forEach((course) => {
      const days = course.DAYS;
      const fullDays = dayMapping[days] ; // Use the mapping or fallback to the original string

      if (!grouped[fullDays]) {
        grouped[fullDays] = {
          day: fullDays,
          hours: 0,
          courses: []
        };
      }

      const start = new Date(`1970-01-01T${convertTo24HourFormat(course.STARTTIME)}:00Z`);
      const end = new Date(`1970-01-01T${convertTo24HourFormat(course.ENDTIME)}:00Z`);
      const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60); // Convert milliseconds to hours

      grouped[fullDays].hours += hours;
      
      grouped[fullDays].courses.push({
        courseid: course.COURSEID,
        name: course.NAME,
        time: `${course.STARTTIME} - ${course.ENDTIME}`,
        instructor: course.PROFESSOR,
        color: 'bg-red-500'
      });
    });
  
    return Object.values(grouped);
  };
  

  const convertTo24HourFormat = (time) => {
    const [timePart, modifier] = time.split(' ');
    let [hours, minutes] = timePart.split(':');
    hours = parseInt(hours, 10);
  
    if (modifier === 'PM' && hours !== 12) {
      hours += 12;
    } else if (modifier === 'AM' && hours === 12) {
      hours = 0;
    }
  
    return `${hours.toString().padStart(2, '0')}:${minutes}`;
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
