import React, { useRef, useEffect } from 'react';

const CoursePopup = ({ course, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the popup
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!course) return null; // If no course is selected, don't render the popup

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    popup: {
      display: 'flex',
      width: '300px',
      backgroundColor: '#333',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    blueSide: {
      backgroundColor: '#4A90E2',
      width: '20%',
    },
    content: {
      padding: '15px',
      color: '#FFF',
      width: '80%',
    },
    courseCode: {
      fontSize: '1rem',
      margin: '0',
    },
    courseTitle: {
      fontSize: '1.2rem',
      margin: '5px 0',
    },
    instructor: {
      fontSize: '0.9rem',
      margin: '5px 0',
      color: '#CCC',
    },
    courseInfo: {
      fontSize: '0.8rem',
      margin: '2px 0',
    },
    labTitle: {
      fontSize: '1rem',
      margin: '10px 0 0 0',
    },
    labTime: {
      fontSize: '0.8rem',
      margin: '2px 0',
    },
    labLocation: {
      fontSize: '0.8rem',
      margin: '2px 0',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '10px',
    },
    button: {
      backgroundColor: '#444',
      color: '#FFF',
      border: 'none',
      borderRadius: '5px',
      padding: '5px 10px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.popup} ref={popupRef}>
        <div style={styles.blueSide}></div>
        <div style={styles.content}>
          <h3 style={styles.courseCode}>{course.COURSEID}</h3>
          <h2 style={styles.courseTitle}>{course.NAME}</h2>
          <p style={styles.instructor}>{course.PROFESSOR}</p>
          <p style={styles.courseInfo}>{course.COURSEINFO}</p> {/* Assuming COURSEINFO is the right field */}
          <p style={styles.courseInfo}>{course.LOCATION}</p> {/* Assuming LOCATION is the right field */}
          <p style={styles.courseInfo}>{course.METHOD}</p> {/* Assuming METHOD is the right field */}
          <h3 style={styles.labTitle}>LAB</h3>
          <p style={styles.labTime}>{course.LABTIME}</p> {/* Assuming LABTIME is the right field */}
          <p style={styles.labLocation}>{course.LABLOCATION}</p> {/* Assuming LABLOCATION is the right field */}
          <div style={styles.buttonContainer}>
            <button style={styles.button}>Replace</button>
            <button style={styles.button} onClick={onClose}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePopup;
