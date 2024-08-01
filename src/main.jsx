import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './Landing.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import CourseSearch from './CourseSearch.jsx';
import GuestProfile from './GuestPopUp.jsx';
import CoursesList from './CoursesList.jsx';
import Schedule from './Schedule.jsx'
import './index.css'; // Ensure this import is at the top

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/coursesearch',
    element: <CourseSearch />,
  },
  {
    path: '/guestpopup',
    element: <GuestProfile />,
  },
  {
    path: '/courselist',
    element: <CoursesList />,
  },
  {
    path: '/schedule',
    element: <Schedule />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
