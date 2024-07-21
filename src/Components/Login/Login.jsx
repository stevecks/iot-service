import React from 'react';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import "./Login.css";
const Login = () => {
    const [password, setPassword] = useState("");
    const [visible, SetVisible] = useState(false);
    return (
        <div className='wrapper'>
            <div className="form">
                <div className="form__content">
                    <p className='form__logo logo'> Your Logo</p>
                    <h1 className='form__title'>Login</h1>
                    <form action="#" class="form__form-box form-box">

                        <div className="form-box__input-box input-box">
                            <label className="input-box__info" for="username">Name</label>
                            <input type="text" name="username" id="username" placeholder='Username' />
                        </div>

                        <div className="form-box__input-box input-box">
                            <label className="input-box__info password__label" for="password">Password</label>
                            <div className="icon" onClick={() => SetVisible(!visible)}>
                                {
                                    visible ? <IoMdEye /> : <IoMdEyeOff />
                                }
                                </div>
                            <input value={password}
                                type={visible ? "text" : "password"}
                                onChange={e => setPassword(e.target.value)}
                                name="password"
                                className="form__input password__input"
                                id="password"
                                placeholder='Password' />
                                
                        </div>
                        <div className="form__button-box button-box" id="SignInButton">
                            <button type="submit" id="SignInButton" >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
