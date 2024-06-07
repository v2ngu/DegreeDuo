import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseSearch.css'; 
import { Outlet } from "react-router-dom";

function CourseSearch() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('search-department'); // State to track active tab

  const handleNavigation = (path) => {
    navigate(path);
    setActiveTab(path); // Update active tab when navigating
  };

  return (
    <>
      <div className="CourseSearch-container">
        <div>
          <h1 className="title">degreeDuo</h1>
        </div>
        <div className="button-container">
          {/* Your content goes here */}
        </div>
      </div>
      <div className="tabs">
        <button onClick={() => handleNavigation('search-department')} className={activeTab === 'search-department' ? "active-tab tab-button" : "tab-button"}>
          Search by Department and Level
        </button>
        <button onClick={() => handleNavigation('search-core-curriculum')} className={activeTab === 'search-core-curriculum' ? "active-tab tab-button" : "tab-button"}>
          Search by Core Curriculum and Flags
        </button>
        <button onClick={() => handleNavigation('search-course-number')} className={activeTab === 'search-course-number' ? "active-tab tab-button" : "tab-button"}>
          Search by Unique Course Number
        </button>
        <button onClick={() => handleNavigation('class-suggestion')} className={activeTab === 'class-suggestion' ? "active-tab tab-button" : "tab-button"}>
          Class Suggestion
        </button>
        <button onClick={() => handleNavigation('/')} className="back-button">
          Back
        </button>
      </div>
      <div className="banner">
        Inspire LLC™
      </div>
      {/* Conditional rendering based on active tab */}
      {activeTab === 'search-department' && <SearchByDepartment />}
      {activeTab === 'search-core-curriculum' && <SearchByCoreCurriculum />}
      {activeTab === 'search-course-number' && <SearchByCourseNumber />}
      {activeTab === 'class-suggestion' && <ClassSuggestion />}
    </>
  );
}

export default CourseSearch;
