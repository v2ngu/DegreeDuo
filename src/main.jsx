import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './Landing.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import DefaultProfile from './DefaultProfile.jsx';
import CourseSearch from './CourseSearch.jsx';
import GuestProfile from './GuestPopUp.jsx';
import Schedule from './Schedule.jsx'


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
    path: '/schedule',
    element: <Schedule />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
