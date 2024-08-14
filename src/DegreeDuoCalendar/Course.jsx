import React from 'react';

function Course({ courseid, name, instructor, time, color }) {
  return (
    <div className="flex flex-col mt-2 w-full">
      <div className="flex gap-2 items-center w-full">
        <div className={`flex shrink-0 self-stretch my-auto w-3 h-3 ${color} rounded-full`} />
        <div className="self-stretch my-auto text-xs font-medium leading-none text-white w-[142px]">
          {courseid}
        </div>
        <div className="flex gap-1 items-center self-stretch my-auto text-xs font-semibold leading-none whitespace-nowrap text-zinc-400">
          {time}
        </div>
      </div>
      <div className="flex-1 shrink gap-2.5 pl-5 w-full text-xs font-medium leading-none text-white">
        {name}
      </div>
      <div className="gap-2.5 pl-5 w-full text-xs leading-none text-zinc-400">
        {instructor}
      </div>
    </div>
  );
}

export default Course;
