import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Title from './Components/Title.jsx';
import SearchByDepartmentAndLevel from './Components/SearchByDepartmentAndLevel';
import SearchByCoreCurriculumAndFlags from './Components/SearchByCoreCurriculumAndFlags';
import ClassSuggestion from './Components/ClassSuggestion';
import SearchByUniqueCourseNumber from './Components/SearchByUniqueCourseNumber';
import './styles/CourseSearch.css'; // Import the CSS file

const CourseSearch = () => {
  const [activeTab, setActiveTab] = useState('Department and Level');
  const [results, setResults] = useState([]);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/data-api/rest/Courses', {
          baseURL: 'http://localhost:4280' // Adjust this URL as needed
        });
        
        // Check if the response is JSON
        if (response.headers['content-type'].includes('application/json')) {
          setCourses(response.data.value);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (error) {
        console.error('Error fetching courses:', error.message);
        setError('Failed to fetch courses. Please try again later.');
      }
    };

    fetchCourses();
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    // Reset results when the active tab changes
    setResults([]);
  }, [activeTab]);

  const handleSearch = (searchType, searchParams) => {
    console.log(`Searching by ${searchType} with params:`, searchParams);
    let filteredResults = [];
    switch (searchType) {
      case 'Department and Level':
        filteredResults = courses.filter(course => 
          course.Department === searchParams.department && 
          course.Level === searchParams.level
        );
        break;
      case 'Core Curriculum and Flags':
        filteredResults = courses.filter(course => 
          course.CoreCurriculum === searchParams.coreCurriculum && 
          course.Flags.includes(searchParams.flags)
        );
        break;
      case 'Unique Number':
        filteredResults = courses.filter(course => 
          course['Course ID'] ==   searchParams.uniqueNumber,
        );
        console.log(filteredResults)
        break;
      case 'Class Suggestions':
        // Implement your logic for class suggestions
        break;
      default:
        break;
    }
    setResults(filteredResults);
  };

  return (
    <div style={styles.container}>
      <Title text="degreeDuo" onClick={handleTitleClick} />
      <h1 style={styles.title}>Fall 2024 Schedule</h1>
      <div style={styles.navBar}>
        <div style={styles.navItem} onClick={() => navigate('/degreeduocontain')}>SCHEDULE</div>
        <div style={{ ...styles.navItem, ...styles.activeNavItem }} onClick={() => navigate('/coursesearch')}>SEARCH/ADD CLASSES</div>
      </div>
      <div style={styles.tabs}>
        <div style={{ ...styles.tab, ...(activeTab === 'Department and Level' ? styles.activeTab : {}) }} onClick={() => setActiveTab('Department and Level')}>SEARCH BY DEPARTMENT AND LEVEL</div>
        <div style={{ ...styles.tab, ...(activeTab === 'Core Curriculum and Flags' ? styles.activeTab : {}) }} onClick={() => setActiveTab('Core Curriculum and Flags')}>SEARCH BY CORE CURRICULUM AND FLAGS</div>
        <div style={{ ...styles.tab, ...(activeTab === 'Unique Number' ? styles.activeTab : {}) }} onClick={() => setActiveTab('Unique Number')}>SEARCH BY UNIQUE COURSE NUMBER</div>
        <div style={{ ...styles.tab, ...(activeTab === 'Class Suggestions' ? styles.activeTab : {}) }} onClick={() => setActiveTab('Class Suggestions')}>CLASS SUGGESTIONS</div>
      </div>
      <div style={styles.tabContent}>
        {activeTab === 'Department and Level' && <SearchByDepartmentAndLevel handleSearch={handleSearch} />}
        {activeTab === 'Core Curriculum and Flags' && <SearchByCoreCurriculumAndFlags handleSearch={handleSearch} />}
        {activeTab === 'Unique Number' && <SearchByUniqueCourseNumber handleSearch={handleSearch} />}
        {activeTab === 'Class Suggestions' && <ClassSuggestion />}
      </div>
      <div className="results">
        <h2 className="resultsTitle">RESULTS</h2>
        {results.length === 0 ? (
          <p className="noResults">**NO SEARCH RESULTS**</p>
        ) : (
          <div className="results-content">
            {results.map((course) => (
              <div key={course.CourseID} className="course-item">
                <div className="course-name">{course.CourseName}</div>
                <div className="course-details">
                <div className="course-detail">Department: {course.Department}</div>
                  <div className="course-detail">Course ID: {course['Course ID']}</div>
                  <div className="course-detail">Day: {course.Day}</div>
                  <div className="course-detail">Hour: {course.Hour}</div>
                  <div className="course-detail">Room: {course.Room}</div>
                  <div className="course-detail">Instruction Mode: {course['Instruction Mode']}</div>
                  <div className="course-detail">Instructor Name: {course['Instructor Name']}</div>
                  <div className="course-detail">Status: {course.Status}</div>
                  <div className="course-detail">Flags: {course.Flags}</div>
                </div>
              </div>
            ))}
          </div>
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
};

export default CourseSearch;
