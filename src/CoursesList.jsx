import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/data-api/rest/Schedule', {
          baseURL: 'https://witty-stone-04723010f.5.azurestaticapps.net' // Use the unified URL
        });
        setCourses(response.data.value); // Adjust if your API structure is different
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCourses();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Course List</h1>
      {courses.length === 0 ? (
        <p>No courses available</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.ID}>
              <h2>{course.NAME}</h2>
              <p>Professor: {course.PROFESSOR}</p>
              <p>Days: {course.DAYS}</p>
              <p>Time: {course.STARTTIME} - {course.ENDTIME}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CoursesList;
