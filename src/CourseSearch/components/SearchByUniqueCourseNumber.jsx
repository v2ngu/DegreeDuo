import React, { useState } from 'react';
import '../styles/SearchByUniqueCourseNumber.css'; // Import CSS if needed

function SearchByUniqueCourseNumber({ handleSearch, results }) {
  const [uniqueNumber, setUniqueNumber] = useState('');

  const onSearch = () => {
    handleSearch('Unique Number', { uniqueNumber });
  };

  return (
    <div className="tab-content active" role="tabpanel">
      <div className="search-row">
        <input
          type="text"
          className="input"
          value={uniqueNumber}
          onChange={(e) => setUniqueNumber(e.target.value)}
          placeholder="Enter Unique Course Number"
        />
        <button className="search-button" onClick={onSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchByUniqueCourseNumber;
