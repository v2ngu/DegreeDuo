import React from 'react';
import DegreeDuo from './DegreeDuo';
import CourseList from '../SideBar/components/CourseList';
import CourseDay from '../SideBar/components/CourseDay';
import Calendar from '../Calendar/components/Calendar';
function DegreeDuoContainer() {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-[300px] bg-zinc-900">
        <DegreeDuo />
      </div>
      <div className="flex-1">
        <Calendar />
      </div>
    </div>
  );
}

export default DegreeDuoContainer;
