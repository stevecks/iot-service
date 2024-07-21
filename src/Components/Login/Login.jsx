import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import "./Login.css";

const Login = () => {
    //
    // Функции set...() устанавливают новое значение [переменная, set...]
    // В useState(...) начальное значение
    //
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({ name: "", password: "" });
    const [errors, setErrors] = useState({ name: false, password: false });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        if (value) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: false,
            }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: true,
            }));
        }
    };

    return (
        <div className='container'>
            <div className="content">
                <div className="logo">Iot Service</div>
                <h2 className="label">Login</h2>

                <form className="form" >
                    <label className="form__label" htmlFor="name">Name</label>
                    <input
                        className='form__input-box__input'
                        type="text"
                        name="name"
                        id="name"
                        placeholder='Username'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {/* {errors.name && <p className="form__error">Name is required</p>} */}

                    <p className={`form__error ${errors.name ? 'show' : ''}`}>Name is required</p>

                    <label className="form__label" htmlFor="password">Password</label>
                    <div className="form__input-box">
                        <input
                            className="form__input-box__input"
                            value={formData.password}
                            type={visible ? "text" : "password"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="password"
                            id="password"
                            placeholder='Password'
                        />
                        <div className="form__input-box__icon" onClick={() => setVisible(!visible)}>
                            {visible ? <IoMdEye className='icon'/> : <IoMdEyeOff className='icon'/>}
                        </div>
                    </div>
                    {/* {errors.password && <p className="form__error">Password is required</p>} */}

                    <p className={`form__error ${errors.password ? 'show' : ''}`}>Password is required</p>
                    <button className="button" disabled={!formData.name || !formData.password}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
