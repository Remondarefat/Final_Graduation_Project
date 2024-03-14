import React, { useState } from 'react';
import Picture from '../../assets/registerImage.jpeg';
import axios from 'axios';
import { ReactComponent as Logo } from '../../assets/Nyla_Logo.svg';
import Style from './Reigster.module.css';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';

export default function Register() {
    const [errors, setErrors] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        phone: '',
        dob: ''
    });

    const [user, setUser] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        phone: '',
        dob: ''
    });

    const navigate = useNavigate(); // Using useNavigate hook

    function handleChange(e) {
        const { name, value } = e.target;

        // Handle date conversion for the 'dob' field
        if (name === 'dob') {
            const parts = value.split('-');
            const newDate = parts[0] + '-' + parts[1] + '-' + parts[2];
            setUser(prevUser => ({ ...prevUser, dob: newDate }));
        } else {
            setUser(prevUser => ({ ...prevUser, [name]: value }));
        }
    }

    async function submitData() {
        const { data } = await axios.post('http://127.0.0.1:8000/register', user);
        console.log(data);
        if (data.message === 'User created successfully') {
            navigate('/login'); // Using the navigate function to navigate
        } else {
            alert('Failed to create user');
        }
    }

    function handleSubmit(e) {
        e.preventDefault(); // Prevent default form submission
        let validation = validateRegisterForm();
        if (validation.error) {
            const newErrors = {};
            validation.error.details.forEach(error => {
                newErrors[error.context.key] = error.message;
            });
            setErrors(newErrors);
        } else {
            setErrors({});
            submitData();
        }
    }

    function validateRegisterForm() {
        const schema = Joi.object({
            fname: Joi.string().required(),
            lname: Joi.string().required(),
            email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string()
                .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$'))
                .min(8)
                .required(),
            confirmPassword: Joi.ref('password'),
            gender: Joi.string().required(),
            phone: Joi.string().required(),
            dob: Joi.string().required()
        });

        const { error } = schema.validate(user, { abortEarly: false });
        return { error };
    }

    return (
        <div className={Style.registerDiv}>
            <img src={Picture} className={Style.registerImage} alt="" />
            <Logo className={Style.logoSvg} />
            <div className='text-center p-5 mx-auto w-50 '>
                <h2 className={Style.registerTitle}>Register</h2>
                <form className={Style.registerForm} onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="fname" className="col-sm-3 col-form-label">First Name:</label>
                        <div className="col-sm-9">
                            <input onChange={handleChange} type="text" className="form-control" id="fname" name='fname' />
                            {errors.fname && <div className='text-danger'>{errors.fname}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="lname" className="col-sm-3 col-form-label">Last Name:</label>
                        <div className="col-sm-9">
                            <input onChange={handleChange} type="text" className="form-control" id="lname" name='lname' />
                            {errors.lname && <div className='text-danger'>{errors.lname}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="email" className="col-sm-3 col-form-label">Email:</label>
                        <div className="col-sm-9">
                            <input onChange={handleChange} type="email" className="form-control" id="email" name='email' />
                            {errors.email && <div className='text-danger'>{errors.email}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="pass" className="col-sm-3 col-form-label">Password:</label>
                        <div className="col-sm-9">
                            <input onChange={handleChange} type="password" className="form-control" id="pass" name='password' />
                            {errors.password && <div className='text-danger'>Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="passenter" className="col-sm-3 col-form-label">Retype Password:</label>
                        <div className="col-sm-9">
                            <input onChange={handleChange} type="password" className="form-control" id="passenter" name='confirmPassword' />
                            {errors.confirmPassword && <div className='text-danger'>Passwords do not match</div>}
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label className="col-sm-3 col-form-label">Gender:</label>
                        <div className="col-sm-9">
                            <select className="form-select form-select-sm" aria-label="Small select example" name='gender' onChange={handleChange}>
                                <option selected disabled>Select Your Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {errors.gender && <div className='text-danger'>{errors.gender}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="phone" className="col-sm-3 col-form-label">Phone:</label>
                        <div className="col-sm-9">
                            <input onChange={handleChange} type="tel" className="form-control" id="phone" name='phone' />
                            {errors.phone && <div className='text-danger'>{errors.phone}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="birth" className="col-sm-3 col-form-label">Date of Birth:</label>
                        <div className="col-sm-9">
                            <input onChange={handleChange} type="date" className="form-control" id="birth" name='dob' />
                            {errors.dob && <div className='text-danger'>{errors.dob}</div>}
                        </div>
                    </div>
                    <button type="submit" className={Style.signUpBtn}>Sign Up</button>
                </form>
            </div>
        </div>
    );
}
