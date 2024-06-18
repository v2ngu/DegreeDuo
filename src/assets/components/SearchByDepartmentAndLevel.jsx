import React, { useState } from 'react';

function SearchByDepartmentAndLevel({ handleSearch, results }) {
  const [department, setDepartment] = useState('');
  const [level, setLevel] = useState('');

  const departments = [
    { value: 'CS', label: 'Computer Science' },
    { value: 'TS', label: 'Tutorial Course' },
    { value: 'UGS', label: 'Undergraduate Study' },
    { value: 'E', label: 'English' },
    { value: 'CL', label: 'Classical Languages' },
    // Add more departments as needed
  ];

  const levels = [
    { value: 'Lower', label: 'Lower' },
    { value: 'Upper', label: 'Upper' },
  ];

  const onSearch = () => {
    handleSearch('Department and Level', { department, level });
  };

  return (
    <div className="tab-content active" role="tabpanel">
      <div className="search-row">
        <select
          className="dropdown"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept.value} value={dept.value}>
              {dept.label}
            </option>
          ))}
        </select>
        <select
          className="dropdown"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">Select Level</option>
          {levels.map((lvl) => (
            <option key={lvl.value} value={lvl.value}>
              {lvl.label}
            </option>
          ))}
        </select>
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

export default SearchByDepartmentAndLevel;
