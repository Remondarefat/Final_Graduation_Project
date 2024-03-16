import React from 'react';
import './Logo.css';
import logo from './Nyla_Logo.svg';
export default function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
    );
}