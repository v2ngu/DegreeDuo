import React from 'react';

const CalendarDay = ({ day, date, isActive }) => {
  return (
    <div className={`flex flex-col px-2 pt-1 pb-4 shadow-sm ${isActive ? 'bg-white' : 'bg-white'} border-r bg-white w-[145px] day-container`}>
      <div className="text-xs font-bold leading-tight text-zinc-500">
        {day}
      </div>
      <div className="text-2xl font-medium leading-none text-black">{date}</div>
    </div>
  );
};

export default CalendarDay;
