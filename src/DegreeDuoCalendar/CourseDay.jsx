import React from 'react';
import Course from './Course';

function CourseDay({ day, hours, courses }) {
  return (
    <>
      <div className="flex gap-10 justify-between items-start mt-2 w-full text-sm leading-loose whitespace-nowrap">
        <div className="gap-1 font-bold text-white text-opacity-70">
          {day}
        </div>
        <div className="flex gap-1 items-start">
          <div className="flex gap-1 items-start">
            <div className="text-amber-700">{hours}</div>
            <div className="text-white text-opacity-70">hours</div>
          </div>
        </div>
      </div>
      {courses.map((course, index) => (
        <Course key={index} {...course} />
      ))}
    </>
  );
}

export default CourseDay;
