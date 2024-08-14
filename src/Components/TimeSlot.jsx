// TimeSlot.jsx
import React from 'react';

const TimeSlot = ({ time }) => {
  return (
    <div className="flex items-center justify-center w-full h-[72px] text-xs text-gray-600 border-b border-gray-200">
      {time}
    </div>
  );
};

export default TimeSlot;
