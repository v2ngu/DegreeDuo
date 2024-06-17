import React, { useState } from 'react';
import './CourseSearch.css';
import SearchByDepartmentAndLevel from './assets/components/SearchByDepartmentAndLevel.jsx';
import SearchByCoreCurriculumAndFlags from './assets/components/SearchByCoreCurriculumAndFlags.jsx';
import SearchByUniqueCourseNumber from './assets/components/SearchByUniqueCourseNumber.jsx';
import ClassSuggestion from './assets/components/ClassSuggestion.jsx';

function CourseSearchTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [results, setResults] = useState([]);

  const tabs = [
    'Search by Department and Level', 
    'Search by Core Curriculum and Flags', 
    'Search by Unique Course Number', 
    'Class Suggestion'
  ];

  const handleSearch = async (searchOption, searchParams) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchOption, ...searchParams }),
      });
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error:', error);
    }
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
      </div>
      <div className="banner">
        Inspire LLC™
      </div>
    </>
  );
}

export default CourseSearchTabs;