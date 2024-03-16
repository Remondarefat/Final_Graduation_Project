import React, { useState } from 'react';
import Picture from '../../assets/login.png';
import Logo from '../../assets/Nyla-Logo.png';
import axios from 'axios';
import Style from './Login.module.css';

export default function Login(){
    




    return   (
        <div className={Style.loginDiv}>
            <img src={Picture} className={Style.loginImage}  alt="" />
            <img src={Logo} className={Style.logoSvg} alt="" />
            <div className='text-center p-5 mx-auto w-50 '>
                <h2 className={Style.loginTitle}>Login</h2>
                <form className={Style.loginForm} >        
                    <div className="row mb-3">
                        <label htmlFor="email" className="col-sm-3 col-form-label">Email:</label>
                        <div className="col-sm-9">
                            <input  type="email" className="form-control" id="email" name='email' />
                            {/* {errors.email && <div className='text-danger'>{errors.email}</div>} */}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="pass" className="col-sm-3 col-form-label">Password:</label>
                        <div className="col-sm-9">
                            <input  type="password" className="form-control" id="pass" name='password' />
                            {/* {errors.password && <div className='text-danger'>Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.</div>} */}
                        </div>
                    </div>
                    <button type="submit" className={Style.loginBtn}>Login</button>
                </form>
            </div>
        </div>
    );
}