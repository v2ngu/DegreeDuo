import React, { useState } from 'react';
import './CourseSearch.css';
import SearchByDepartmentAndLevel from './Components/SearchByDepartmentAndLevel.jsx';
import SearchByCoreCurriculumAndFlags from './Components/SearchByCoreCurriculumAndFlags.jsx';
import SearchByUniqueCourseNumber from './Components/SearchByUniqueCourseNumber.jsx';
import ClassSuggestion from './Components/ClassSuggestion.jsx';
import axios from 'axios';

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
    axios.get('http://127.0.0.1:5000/search', {
      params: {
        searchOption,
        ...searchParams,
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
            <div className="results-header">
              <div>Department</div>
              <div>Course ID</div>
              <div>Course Name</div>
              <div>Day</div>
              <div>Hour</div>
              <div>Room</div>
              <div>Instruction Mode</div>
              <div>Instructor Name</div>
              <div>Status</div>
              <div>Flags</div>
              <div>Level</div>
              <div>Core Curriculum</div>
            </div>
            <div className="results-scroll">
              {results.map((course, index) => (
                <div key={index} className="course-item">
                  <div>{course.department}</div>
                  <div>{course.course_id}</div>
                  <div>{course.course_name}</div>
                  <div>{course.day}</div>
                  <div>{course.hour}</div>
                  <div>{course.room}</div>
                  <div>{course.instruction_mode}</div>
                  <div>{course.instructor_name}</div>
                  <div>{course.status}</div>
                  <div>{course.flags}</div>
                  <div>{course.level}</div>
                  <div>{course.cc}</div>
                </div>
              ))}
            </div>
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
