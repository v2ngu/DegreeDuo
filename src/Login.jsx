import BackComponent from './Components/BackComponent';

import './styles/Login.css';
function Login(){
    

    return(
        <>
            <div className = "landing-container">
                <div className="back-button-container">
                        <BackComponent to="/" />
                </div>
                <div>
                    <h1 className="title">degreeDuo</h1>
                </div>
                <div className="login-container">
                    <div className="login-field">
                        <label htmlFor="username" className="login-label">Username:</label>
                        <input type="text" id="username" className="login-input" />
                    </div>
                    <div className="login-field">
                        <label htmlFor="password" className="login-label">Password:</label>
                        <input type="password" id="password" className="login-input" />
                    </div>
                    <button id="login-button1">Login</button>
                    <div className="create-account-link" onClick={() => alert("Redirect to create account page.")}>
                        Create new account
                    </div>
                </div>
            </div>
            <div className="banner">
                Inspire LLC™
            </div>
        </>
    )
}

export default Login
