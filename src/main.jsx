import React from 'react'
import ReactDOM from 'react-dom/client'
import Ratemyprofessor from './App.jsx'
import Test from './Test.jsx'
import './index.css'
import LandingPage from './Landing.jsx'
import DefaultProfile from './DefaultProfile.jsx'
// import './index.css'
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
    ],
  },
  // {
  //   path: "Login",
  //   element: <Login/>,
  // },
  // {
  //   path: "Register",
  //   element: <Register/>,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
