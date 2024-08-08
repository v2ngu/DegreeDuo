import React from 'react';
import DegreeDuo from './DegreeDuo';
import ListCourses from './ListCourses';

function DegreeDuoContainer() {
  return (
    <div className="flex flex-col items-center bg-zinc-900 min-h-screen">
      <DegreeDuo />
      <ListCourses />
    </div>
  );
}

export default DegreeDuoContainer;
