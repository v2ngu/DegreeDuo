import React from 'react';
import CourseDay from './CourseDay';

const courseDays = [
  {
    day: 'MON-WES-FRI',
    hours: 6,
    courses: [
      {
        code: 'C S 329E',
        name: 'ELEMENTS OF DATABASE',
        instructor: 'PALACIOS, JOAQUIN MARCOS',
        time: '09:00 – 10:30 AM',
        color: 'bg-blue-500'
      },
      {
        code: 'C S 303E',
        name: 'ELEMS OF COMPUTERS/PROGRAMMING',
        instructor: 'KAUR, AMRITA',
        time: '10:30 – 12:30 AM',
        color: 'bg-emerald-400'
      }
    ]
  },
  {
    day: 'TUES-THURS',
    hours: 10,
    courses: [
      {
        code: 'C S 439',
        name: 'PRINCIPLES OF COMPUTER SYS-C S',
        instructor: 'ELNOZAHY, MOOTAZ N',
        time: '10:00 – 12:00 AM',
        color: 'bg-amber-400'
      },
      {
        code: 'C S 331',
        name: 'C S 331 ALGORITHMS AND COMPLEXITY',
        instructor: 'PLAXTON, C GREG',
        time: '12:00 – 02:00 PM',
        color: 'bg-red-500'
      },
      {
        code: 'C S 311H',
        name: 'DISCRETE MATH COMP SCI: HONORS',
        instructor: 'CHATTERJEE, SIDDHARTHA',
        time: '05:00 – 6:30 PM',
        color: 'bg-pink-500'
      }
    ]
  }
];

function ListCourses() {
  return (
    <section className="flex overflow-hidden flex-col pb-48 mt-4 w-full">
      <div className="flex flex-col mb-0 w-full">
        <div className="flex gap-2 justify-center items-center w-full text-sm leading-loose">
          <h3 className="gap-1 self-stretch my-auto font-bold text-blue-500">
            COURSE LIST
          </h3>
          <div className="flex gap-1 items-start self-stretch my-auto whitespace-nowrap">
            <div className="flex gap-1 items-start">
              <span className="text-amber-700">16</span>
              <span className="text-white text-opacity-70">hours</span>
            </div>
          </div>
        </div>
        {courseDays.map((day, index) => (
          <CourseDay key={index} {...day} />
        ))}
      </div>
    </section>
  );
}

export default ListCourses;