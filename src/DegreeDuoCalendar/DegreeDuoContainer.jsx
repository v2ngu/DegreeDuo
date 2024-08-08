import React from 'react';
import DegreeDuo from './DegreeDuo';
import CourseList from './CourseList';
import CourseDay from './CourseDay';
import Calendar from './Calendar';
function DegreeDuoContain() {
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

export default DegreeDuoContain;
