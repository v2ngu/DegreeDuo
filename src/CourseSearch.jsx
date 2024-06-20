import React, { useState } from 'react';
import './CourseSearch.css';
import SearchByDepartmentAndLevel from './Components/SearchByDepartmentAndLevel.jsx';
import SearchByCoreCurriculumAndFlags from './Components/SearchByCoreCurriculumAndFlags.jsx';
import SearchByUniqueCourseNumber from './Components/SearchByUniqueCourseNumber.jsx';
import ClassSuggestion from './Components/ClassSuggestion.jsx';
import axios from 'axios'

function CourseSearchTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [results, setResults] = useState([]);

  const tabs = [
    'Search by Department and Level', 
    'Search by Core Curriculum and Flags', 
    'Search by Unique Course Number', 
    'Class Suggestion'
  ];

  const handleSearch = async (searchOption, { department, level, coreCurriculum, flags, uniqueNumber }) => {
    axios.get('http://127.0.0.1:5000/search', {
      params: {
        searchOption,
        department,
        level,
        coreCurriculum,
        flags, 
        uniqueNumber,
      }
    })
    .then(response => {
      console.log('Response:', response.data);
      // Handle success
      setResults(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error
    });
  };

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
            {activeTab === 0 && <SearchByDepartmentAndLevel handleSearch={handleSearch} results={results} />}
            {activeTab === 1 && <SearchByCoreCurriculumAndFlags handleSearch={handleSearch} results={results} />}
            {activeTab === 2 && <SearchByUniqueCourseNumber handleSearch={handleSearch} results={results} />}
            {activeTab === 3 && <ClassSuggestion />}
          </div>
        </div>
          <div className="results">
          <h2>Results</h2>
          <div className="results-content">
            <pre>{JSON.stringify(results, null, 2)}</pre>
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