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
  
  const colorMap = new Map();
  
  export const getColorForCourse = (courseId) => {
    if (colorMap.has(courseId)) {
      return colorMap.get(courseId);
    }
    
    if (rainbowColors.length === 0) return '#FFFFFF'; // Fallback color if list is empty
  
    const randomIndex = Math.floor(Math.random() * rainbowColors.length);
    const color = rainbowColors[randomIndex];
    rainbowColors.splice(randomIndex, 1); // Remove the selected color
    colorMap.set(courseId, color);
    return color;
  };
  