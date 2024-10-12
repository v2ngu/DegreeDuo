import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseDay from './CourseDay';
import { getColorForCourse } from '../../../util/colorUtils'; // Import the color utility

function CourseList() {
  const [courseDays, setCourseDays] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/data-api/rest/Schedule', {
          baseURL: 'https://witty-stone-04723010f.5.azurestaticapps.net/',
          // baseURL: 'http://localhost:4280'
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
    "TTh": "Tue-Thu",
  };

  const groupCoursesByDays = (courses) => {
    const grouped = {};

    courses.forEach((course) => {
      const days = course.DAYS;
      const fullDays = dayMapping[days] || days; // Use the mapping or fallback to the original string

      if (!grouped[fullDays]) {
        grouped[fullDays] = {
          day: fullDays,
          hours: 0, // Initialize hours for each day
          courses: []
        };
      }

      // Use regex to find the first number in COURSEID
      const numberRegex = /\d/;
      const match = course.COURSEID.match(numberRegex);
      const firstNumber = match ? parseInt(match[0], 10) : 0; // Convert to integer and default to 0 if not found
      grouped[fullDays].hours += firstNumber; // Add the first number to the total hours

      // Assign a color and ensure consistency using the utility
      const color = getColorForCourse(course.COURSEID);

      grouped[fullDays].courses.push({
        courseid: course.COURSEID,
        name: course.NAME,
        time: `${course.STARTTIME} - ${course.ENDTIME}`,
        instructor: course.PROFESSOR,
        color: color
      });
    });

    return Object.values(grouped);
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
