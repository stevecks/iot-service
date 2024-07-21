import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import "./Login.css";
// import { Button } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
//import TextField from '@mui/material/TextField';

const Login = () => {
    const [formData, setFormData] = useState({ name: "", password: "" });
    const [visible, setVisible] = useState(false);
    const [errors, setErrors] = useState({ name: false, password: false });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (value) {
            setErrors({ ...errors, [name]: false });
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value) {
            setErrors({ ...errors, [name]: true });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = { name: !formData.name, password: !formData.password };
        setErrors(newErrors);
        const isValid = !Object.values(newErrors).includes(true);
        if (isValid) {
            // Handle successful form submission
        }
    };

    return (
        <div className='container'>
            <div className="content">
                <div className="logo">Iot Service</div>
                <h2 className="label">Login</h2>

                <form className="form" onSubmit={handleSubmit}>
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
                    {errors.name && <p className="form__error">Name is required</p>}

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
                    {errors.password && <p className="form__error">Password is required</p>}

                    <button variant="contained" className="button" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
