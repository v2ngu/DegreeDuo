import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseSearch.css'; 
import { Outlet } from "react-router-dom";

function CourseSearchTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [department, setDepartment] = useState('');
  const [level, setLevel] = useState('');
  const [results, setResults] = useState([]);

  const tabs = [
    'Search by Department and Level', 
    'Search by Core Curriculum and Flags', 
    'Search by Unique Course Number', 
    'Class Suggestion'
  ];

  const handleSearch = async () => {
    const response = await fetch('http://localhost:5000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        searchOption: 'Department and Level',
        department,
        level,
      }),
    });

    const data = await response.json();
    setResults(data);
  };

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

  return (
    <>
      <div className="landing-container">
        <div>
          <h1 className="title">degreeDuo</h1>
        </div>
        <div className="container">
          <div className="tabs" role="tablist">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab ${activeTab === index ? 'active' : ''}`}
                role="tab"
                tabIndex={0}
                aria-selected={activeTab === index}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="tab-contents">
            {activeTab === 0 && (
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
                  <button className="search-button" onClick={handleSearch}>Search</button>
                </div>
                <div className="results">
                  <h2>Results</h2>
                  <div className="results-content">
                    {results.map((course, index) => (
                      <div key={index} className="course-item">
                        {course.course_name} - {course.instructor_name} - {course.day} - {course.hour}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="tab-content" role="tabpanel">
                Search by Core Curriculum and Flags Content
              </div>
            )}
            {activeTab === 2 && (
              <div className="tab-content" role="tabpanel">
                Search by Unique Course Number Content
              </div>
            )}
            {activeTab === 3 && (
              <div className="tab-content" role="tabpanel">
                Class Suggestion Content
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="banner">
        Inspire LLC™
      </div>
    </>
  );
}

export default CourseSearchTabs;
