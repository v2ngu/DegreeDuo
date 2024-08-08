import React from 'react';
import CalendarWeek from '../Components/CalendarWeek';
import CalendarGrid from '../Components/CalendarGrid';
import TimeSlot from '../Components/TimeSlot';
import { useNavigate } from 'react-router-dom';



function Calendar() {
  const navigate = useNavigate();
  
  const navigateTo = (path) => {
      navigate(path);
    };
  return (
    <div className="p-4 bg-white w-full">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Fall 2024</h2>
        <button className="p-2 rounded bg-gray-200" onClick={() => navigateTo("/coursesearch")}>Add Course</button>
      </header>
      <section className="calendar-container flex gap-3 items-start w-4/5 h-full pl-10 max-md:pl-5 overflow-x-auto">
        {/* Time slots on the left */}
        <div className="flex flex-col w-9 time-slot-container pt-10 mt-5">
          {['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'].map((time, index) => (
            <TimeSlot key={index} time={time} />
          ))}
        </div>
        
        {/* Calendar content */}
        <div className="flex flex-col w-full h-full min-w-[1050px]">
          <CalendarWeek />
          <CalendarGrid />
        </div>
        

      </section>
    </div>
  );
}

export default Calendar;
