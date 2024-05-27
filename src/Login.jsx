function Login(){
    return(
        <>
<<<<<<< HEAD
            <h1> DegreeDuo </h1>
=======
>>>>>>> b54ecf5fdf73392129e756b1c3524df134c3a185
            <div className = "title-container">
                <button className = "button">Back</button>
                <form action="login" method = "post">
                    <label htmlFor="username">Username</label>
                    <input type="text" id = "username" name ="username"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name = "password"/>
                    <button type = "submit">Login</button>
                    
                </form>
            </div>
        </>
    )
}

export default Login