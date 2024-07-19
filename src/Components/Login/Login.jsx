import React from 'react';
import "./Login.css";
const Login = () => {
    return (
        <div className='wrapper'>
                <div className="form-box login">
                    <form action=''>
                        <p className='logo'> Your Logo</p>
                        <h1 className='header'>Login</h1>
                        <div className="input-box">
                            <input type="text" 
                            placeholder='Username' />
                        </div>

                        <div className="input-box">
                            <input type="password" 
                            placeholder='Password' />
                        </div>
                        <div className="button-box" id="SignInButton">
                    <button type="submit" id= "SignInButton" >Login</button>
                        </div>
                    </form>
                </div>           
        </div>
    );
};

export default Login;