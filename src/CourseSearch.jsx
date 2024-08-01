import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from './Components/Title.jsx';
import SearchByDepartmentAndLevel from './Components/SearchByDepartmentAndLevel';
import SearchByCoreCurriculumAndFlags from './Components/SearchByCoreCurriculumAndFlags';
import ClassSuggestion from './Components/ClassSuggestion';
import SearchByUniqueCourseNumber from './Components/SearchByUniqueCourseNumber';

const CourseSearch = () => {
  const [activeTab, setActiveTab] = useState('Department and Level');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleTitleClick = () => {
    navigate('/');
  };

  const handleSearch = (searchType, searchParams) => {
    console.log(`Searching by ${searchType} with params:`, searchParams);
    // Simulate search logic
    setResults([]);
  };

  return (
    <div style={styles.container}>
                 <Title text="degreeDuo" onClick={handleTitleClick} />
      <h1 style={styles.title}>Fall 2024 Schedule</h1>
      <div style={styles.navBar}>
        <div style={styles.navItem} onClick={() => navigate('/schedule')}>SCHEDULE</div>
        <div style={{ ...styles.navItem, ...styles.activeNavItem }} onClick={() => navigate('/search-add-classes')}>SEARCH/ADD CLASSES</div>
      </div>
      <div style={styles.tabs}>
        <div style={{ ...styles.tab, ...(activeTab === 'Department and Level' ? styles.activeTab : {}) }} onClick={() => setActiveTab('Department and Level')}>SEARCH BY DEPARTMENT AND LEVEL</div>
        <div style={{ ...styles.tab, ...(activeTab === 'Core Curriculum and Flags' ? styles.activeTab : {}) }} onClick={() => setActiveTab('Core Curriculum and Flags')}>SEARCH BY CORE CURRICULUM AND FLAGS</div>
        <div style={{ ...styles.tab, ...(activeTab === 'Unique Number' ? styles.activeTab : {}) }} onClick={() => setActiveTab('Unique Number')}>SEARCH BY UNIQUE COURSE NUMBER</div>
        <div style={{ ...styles.tab, ...(activeTab === 'Class Suggestions' ? styles.activeTab : {}) }} onClick={() => setActiveTab('Class Suggestions')}>CLASS SUGGESTIONS</div>
      </div>
      <div style={styles.tabContent}>
        {activeTab === 'Department and Level' && <SearchByDepartmentAndLevel handleSearch={handleSearch} results={results} />}
        {activeTab === 'Core Curriculum and Flags' && <SearchByCoreCurriculumAndFlags handleSearch={handleSearch} results={results} />}
        {activeTab === 'Unique Number' && <SearchByUniqueCourseNumber handleSearch={handleSearch} results={results} />}
        {activeTab === 'Class Suggestions' && <ClassSuggestion />}
      </div>
      <div style={styles.results}>
        <h2 style={styles.resultsTitle}>RESULTS</h2>
        {results.length === 0 ? (
          <p style={styles.noResults}>**NO SEARCH RESULTS**</p>
        ) : (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Jura, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    color: '#bf5701',
    fontSize: '2em',
  },
  navBar: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  navItem: {
    padding: '10px 20px',
    fontSize: '1.2em',
    cursor: 'pointer',
  },
  activeNavItem: {
    backgroundColor: '#e0e0e0',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
    borderBottom: '1px solid #ccc',
  },
  tab: {
    padding: '10px 20px',
    cursor: 'pointer',
  },
  activeTab: {
    fontWeight: 'bold',
    borderBottom: '2px solid #bf5701',
  },
  tabContent: {
    marginBottom: '20px',
  },
  results: {
    textAlign: 'center',
  },
  resultsTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  noResults: {
    color: 'red',
    fontSize: '1.2em',
  },
};

export default CourseSearch;