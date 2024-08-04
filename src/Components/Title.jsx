import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text, onClick }) => {
  return (
    <div 
      className="text-[#bf5701] text-9xl font-jura mb-5 cursor-pointer"
      onClick={onClick}
    >
      degreeDuo
    </div>
  );
};

Title.propTypes = {
  onClick: PropTypes.func,
};

export default Title;
