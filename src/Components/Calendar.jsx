import React from 'react';
import TimeSlot from './TimeSlot';
import CalendarGrid from './CalendarGrid';
import CalendarWeek from './CalendarWeek';

const Calendar = () => (
  <section className="calendar-container flex gap-3 items-start w-full h-full pl-12 max-md:pl-5 max-md:max-w-full">
    {/* Time slots on the left */}
    <div className="flex flex-col time-slot-container">
      {['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'].map((time, index) => (
        <TimeSlot key={index} time={time} />
      ))}
    </div>
    
    {/* Calendar content */}
    <div className="flex flex-col w-full h-full">
      <CalendarWeek />
      <CalendarGrid />
    </div>
  </section>
);

export default Calendar;
