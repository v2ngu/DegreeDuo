import BackComponent from './Components/BackComponent';
import Title from './Components/Title';
import { useNavigate } from 'react-router-dom';

import './styles/Login.css';
function Login(){
    
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleTitleClick = () => {
    navigate('/');
  };

    return (
        <>
          <div className="flex flex-col items-center justify-between h-screen">
            <div>
            <Title text="degreeDuo" onClick={handleTitleClick} />
            </div>
            <div className="w-full max-w-sm p-8 space-y-6 bg-gray-100 rounded shadow-md">
              <div className="mb-4">
                <BackComponent to="/" />
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                  <input type="text" id="username" className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                  <input type="password" id="password" className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                </div>
              </div>
              <button id="login-button1" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Login</button>
              <div className="mt-4 text-center text-sm text-blue-500 cursor-pointer" onClick={() => alert("Redirect to create account page.")}>
                Create new account
              </div>
            </div>
          </div>
          <div className="w-full py-2 mt-8 text-center bg-gray-200">
            Inspire LLC™
          </div>
        </>
      );
    }
    
    export default Login;