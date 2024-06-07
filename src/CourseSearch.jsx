import React from 'react';
import { useNavigate } from 'react-router-dom';



function CourseSearchPage() {

    const navigate = useNavigate();

    const handleNavigation = (path) => {
      navigate(path);
    };
    return (

        <div className="CourseSearch-container">

        </div>
      
  );
}

export default RegisterPage;