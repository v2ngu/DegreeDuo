import React from 'react';
import CalendarDay from './CalendarDay';

const CalendarWeek = () => {
  const weekDays = [
    { day: 'SUN', date: '21', isActive: true },
    { day: 'MON', date: '22', isActive: false },
    { day: 'TUE', date: '23', isActive: false },
    { day: 'WED', date: '24', isActive: false },
    { day: 'THU', date: '25', isActive: false },
    { day: 'FRI', date: '26', isActive: false },
    { day: 'SAT', date: '27', isActive: true },
  ];

  return (
    <div className="flex flex-wrap items-start min-w-[240px] max-md:max-w-full week-container">
      {weekDays.map((dayData, index) => (
        <CalendarDay key={index} {...dayData} />
      ))}
    </div>
  );
};

export default CalendarWeek;
