// TimeSlot.jsx
import React from 'react';

const TimeSlot = ({ time }) => {
  return (
    <div className="flex items-center justify-center w-full text-xs text-black pb-11">
      {time}
    </div>
  );
};

export default TimeSlot;
