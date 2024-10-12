import React, { useRef, useEffect } from 'react';

const CoursePopup = ({ course, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!course) return null;

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
    colorSide: {
      backgroundColor: course.color || '#4A90E2', // Use course color or default to blue
      width: '20%',
    },
    content: {
      padding: '15px',
      color: '#FFF',
      width: '80%',
    },
    courseCode: {
      fontSize: '0.75rem',
      margin: '0',
      color: '#FFF',
      fontWeight: '500',
    },
    courseTitle: {
      fontSize: '0.75rem',
      margin: '5px 0',
      color: '#FFF',
      fontWeight: '600',
    },
    instructor: {
      fontSize: '0.75rem',
      margin: '5px 0',
      color: '#D1D5DB', // Match sidebar font color
    },
    courseInfo: {
      fontSize: '0.75rem',
      margin: '2px 0',
      color: '#D1D5DB', // Match sidebar font color
    },
    labTitle: {
      fontSize: '0.75rem',
      margin: '10px 0 0 0',
      color: '#FFF',
      fontWeight: '600',
    },
    labTime: {
      fontSize: '0.75rem',
      margin: '2px 0',
      color: '#D1D5DB', // Match sidebar font color
    },
    labLocation: {
      fontSize: '0.75rem',
      margin: '2px 0',
      color: '#D1D5DB', // Match sidebar font color
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
        <div style={{ ...styles.colorSide, backgroundColor: course.color }}></div>
        <div style={styles.content}>
          <h3 style={styles.courseCode}>{course.COURSEID}</h3>
          <h2 style={styles.courseTitle}>{course.NAME}</h2>
          <p style={styles.instructor}>{course.PROFESSOR}</p>
          <p style={styles.courseInfo}>Start Time: {course.STARTTIME}</p>
          <p style={styles.courseInfo}>End Time: {course.ENDTIME}</p>
          <h3 style={styles.labTitle}>LAB</h3>
          <p style={styles.labTime}>{course.LABTIME || 'N/A'}</p>
          <p style={styles.labLocation}>{course.LABLOCATION || 'N/A'}</p>
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
