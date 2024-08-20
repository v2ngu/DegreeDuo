import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './Landing.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import GuestProfile from './GuestPopUp.jsx';
import CoursesList from './CoursesList.jsx';
import Schedule from './Schedule.jsx'
import SignInForm from './Components/SignInForm.jsx';
import './index.css'; // Ensure this import is at the top
import DegreeDuoContainer from './DegreeDuoCalendar/Container/DegreeDuoContainer.jsx';
import CourseSearch from './CourseSearch/components/CourseSearch.jsx';

const router = createBrowserRouter([
  {
    path: '/coursesearch',
    element: <CourseSearch />,
  },
  {
    path: '/courselist',
    element: <CoursesList />,
  },
  {
    path: '/schedule',
    element: <Schedule />,
  },
  {
    path: '/signinForm',
    element: <SignInForm />,
  },
  {
  path: '/',
  element: <DegreeDuoContainer />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
