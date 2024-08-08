import React from 'react';
import CalendarColumn from './CalendarColumn';

const CalendarGrid = () => (
  <div className="flex flex-wrap items-start self-stretch h-full min-w-[240px] max-md:max-w-full grid-container">
    {Array.from({ length: 7 }).map((_, index) => (
      <CalendarColumn key={index} index={index} />
    ))}
  </div>
);

export default CalendarGrid;
