// import React from 'react';
// import { useNavigate } from 'react-router-dom';
import BackComponent from './Components/BackComponent';
import './styles/Register.css';




function RegisterPage() {


    return (
      <>
        <div className="flex flex-col items-center justify-between h-screen">
            <div>
              <div className="text-[#bf5701] text-9xl font-jura mb-5">degreeDuo</div>
            </div>          
            <div className="w-full max-w-lg p-8 space-y-6 bg-gray-100 rounded shadow-md">
            <div className="mb-4">
              <BackComponent to="/" />
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" name="firstName" required className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" name="lastName" required className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Birth Date</label>
                  <div className="flex space-x-2">
                    <input type="text" name="birthDay" placeholder="Day" required className="block w-1/3 px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                    <input type="text" name="birthMonth" placeholder="Month" required className="block w-1/3 px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                    <input type="text" name="birthYear" placeholder="Year" required className="block w-1/3 px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Major</label>
                  <input type="text" name="major" required className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Minor</label>
                  <input type="text" name="minor" required className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Next Semester</label>
                  <input type="text" name="nextSemester" required className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" required className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Confirm Email</label>
                  <input type="email" name="confirmEmail" required className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" name="password" required className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input type="password" name="confirmPassword" required className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                </div>
              </div>
              <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Register</button>
            </form>
          </div>
        </div>
        <div className="w-full py-2 mt-8 text-center bg-gray-200">
          Inspire LLC™
        </div>
      </>
    );
  }
  
  export default RegisterPage;