import React from 'react';

const TimeSlot = ({ time }) => {
  return (
    <div className="flex items-center justify-center w-full h-[36px] text-xs text-gray-600 border-b border-gray-200 pt-5 mb-9">      {time}
    </div>
  );
};

export default TimeSlot;
