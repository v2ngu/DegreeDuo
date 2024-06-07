import { useNavigate } from 'react-router-dom';


function Login(){
    const navigate = useNavigate();

    const navigateTo = (path) => {
      navigate(path);
    };
  
    return(
        <>
            <div className = "title-container">
                <button className = "button" onClick={() => navigateTo("/")}>Back</button>
                <form action="login" method = "post">
                    <label htmlFor="username">Username</label>
                    <input type="text" id = "username" name ="username"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name = "password"/>
                    <button type = "submit" >Login</button>
                    
                </form>
            </div>
        </>
    )
}

export default Login