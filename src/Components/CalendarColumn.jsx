import React from 'react';

const CalendarColumn = ({ index, bgColor = 'bg-white', shadowClass = 'shadow-sm' }) => (
  <div className={`flex flex-col ${index === 0 || index === 6 ? 'bg-white' : bgColor} ${shadowClass} border-r border-gray-200 w-[145px] h-full column-container`}>
    {Array.from({ length: 22 }).map((_, rowIndex) => (
      <div key={rowIndex} className={`flex w-full ${rowIndex % 2 === 0 ? 'bg-gray-50' : bgColor} min-h-[36px] border-b bg-white`} />
    ))}
  </div>
);

export default CalendarColumn;
