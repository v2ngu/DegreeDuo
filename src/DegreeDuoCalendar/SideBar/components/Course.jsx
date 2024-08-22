import React, { useState } from 'react';

function Course({ courseid, name, instructor, time, color, days, flag }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col mt-2 w-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Course Info */}
      <div className="flex gap-2 items-center w-full">
        <div 
          className="flex shrink-0 self-stretch my-auto w-3 h-3 rounded-full" 
          style={{ backgroundColor: color }} 
        />
        <div className="self-stretch my-auto text-xs font-medium leading-none text-white w-[142px]">
          {courseid}
        </div>
        <div className="flex gap-1 items-center self-stretch my-auto text-xs font-semibold leading-none whitespace-nowrap text-zinc-400">
          {time}
        </div>
      </div>
      <div className="flex-1 shrink gap-2.5 pl-5 w-full text-xs font-medium leading-none text-white cursor-pointer">
        {name}
      </div>

      {/* Dropdown Content with Smooth Transition */}
      <div
        className={`pl-5 overflow-hidden transition-all duration-500 ease-in-out ${isHovered ? 'max-h-45' : 'max-h-0'}`}
        style={{ transitionProperty: 'max-height' }}
      >
        <div className="mt-1 text-xs font-medium leading-none text-white">
          <div className="text-zinc-400">Instructor: {instructor}</div>
          <div className="text-zinc-400">Start Time: {time.split(' - ')[0]}</div>
          <div className="text-zinc-400">End Time: {time.split(' - ')[1]}</div>
          <div className="text-zinc-400">Flag: {flag}</div>
        </div>
      </div>
    </div>
  );
}

export default Course;
