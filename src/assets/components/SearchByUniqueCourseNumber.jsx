import React, { useState } from 'react';

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
      <div className="results">
        <h2>Results</h2>
        <div className="results-content">
          {results.map((course, index) => (
            <div key={index} className="course-item">
              {course.course_name} (ID: {course.course_id})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchByUniqueCourseNumber;
