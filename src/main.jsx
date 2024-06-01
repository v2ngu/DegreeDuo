import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './Landing.jsx'
import RegisterPage from './Register.jsx'
import DefaultProfile from './DefaultProfile.jsx'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    children: [
      { index: true, element: <DefaultProfile /> },
      { path: "login", element: <Login/> },
      { path: "register", element: <RegisterPage/> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
