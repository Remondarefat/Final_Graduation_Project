import React, { useContext, useState } from 'react';
import Style from './Login.module.css';
import { Formik, useFormik } from 'formik';
import Picture from '../../assets/login.png';
import Logo from '../../assets/Nyla-Logo.png';
import axios from 'axios';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner'
import { UserContext } from '../../Context/UserContext';

export default function Login() {
    let { setUserToken } = useContext(UserContext);
    let navigate = useNavigate();
    const [error, seterror] = useState(null);
    const [isLoading, setisLoading] = useState(false);

    async function loginSubmite(values) {
        // destracting data from response obj
        setisLoading(true);
        try {
            const { data } = await axios.post('http://127.0.0.1:8000/api/login', values);
            if (data.success_msg) {
                if (data.is_admin === true) {
                    localStorage.setItem('userToken', data.access_token);
                    localStorage.setItem('isAdmin', data.is_admin);
                    setUserToken(data.access_token);
                    navigate('/allhotel'); // Redirect admin to dashboard
                } else {
                    // console.log(data.access_token);
                    localStorage.setItem('userToken', data.access_token);
                    localStorage.setItem('fname', data.fname);
                    localStorage.setItem('lname', data.lname);
                    setUserToken(data.access_token);
                    navigate('/home'); // Redirect regular user to home
                }
            }
        } catch (err) {
            setisLoading(false);
            seterror(err.response.data.error_msg);
            console.log(err);
        }
    }
    let validationSchema = Yup.object({
        email: Yup.string().email('email is invalid').required('email is rquired'),
        password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/, 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character').required('password is required'),

    })
    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        }, validationSchema,

        onSubmit: loginSubmite
    })

    return (
        <div className={Style.loginDiv}>
            <img src={Picture} className={Style.loginImage} alt="Login Background" />
            <img src={Logo} className={Style.logoSvg} alt="Login logo" />
            <div className='text-center p-5 mx-auto w-50 '>
                <h2 className={Style.loginTitle}>Login</h2>
                <form className={Style.loginForm} onSubmit={formik.handleSubmit} >
                    <div className="row mb-3">

                        <label htmlFor="email" className="col-sm-3 col-form-label">Email:</label>
                        <div className="col-sm-9">
                            <input onBlur={formik.handleBlur} id='email' onChange={formik.handleChange} type="email" value={formik.values.email} className="form-control" name='email' />
                            {formik.errors.email && formik.touched.email ? <div className="alert alert-danger p-2 mt-2">{formik.errors.email}</div> : ''}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="pass" className="col-sm-3 col-form-label">Password:</label>
                        <div className="col-sm-9">
                            <input onBlur={formik.handleBlur} id='pass' onChange={formik.handleChange} type='password' value={formik.values.password} className="form-control" name='password' />
                            {formik.errors.password && formik.touched.password ? <div className="alert alert-danger p-2 mt-2">{formik.errors.password}</div> : ''}

                            {error ? <div className='alert alert-danger p-2'>{error}</div> : ''}
                        </div>
                    </div>
                    {isLoading ? <button type='button' className={Style.loginBtn}>
                        <BallTriangle
                            height={20}
                            width={100}
                            radius={5}
                            color="#fff"
                            ariaLabel="ball-triangle-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </button> : <>
                    <button type="submit" disabled={!(formik.isValid && formik.dirty)} className={Style.loginBtn}>Login</button> <Link className='d-block mt-5' to={'/register'}>You Dont have accont ?</Link>
                    </>}
                </form>
            </div>
        </div>
    );
}
