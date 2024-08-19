// colorUtils.js
const rainbowColors = [
    '#FF0000', // Red
    '#FF7F00', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#0000FF', // Blue
    '#4B0082', // Indigo
    '#8B00FF', // Violet
  ];
  
  export const getColorForCourse = (courseId) => {
    const colorIndex = Math.abs(courseId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % rainbowColors.length;
    return rainbowColors[colorIndex];
  };
  