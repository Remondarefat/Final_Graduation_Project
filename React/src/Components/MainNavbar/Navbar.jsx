import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from '../NylaLogo/Nyla_Logo.svg';
import { UserContext } from '../../Context/UserContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);  
  const [userFullName, setUserFullName] = useState('');

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const firstName = localStorage.getItem('fname');
    const lastName = localStorage.getItem('lname');
    const fullName = firstName && lastName ? `${firstName} ${lastName}` : '';
    setUserFullName(fullName);

    const handleOutsideClick = (event) => {
      if (!event.target.closest('.nav-side')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  // ----Logout Function ----
  let {setUserToken,userToken}=useContext(UserContext);
  let navigate =useNavigate();
  function logOut(){
    localStorage.removeItem('userToken' );
    setUserToken(null);
    navigate('/');
  }

  return (
    <>
      <div className="mainnav">
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100 align-items-center">
          <Link to={'/home'} className="logo">  <img src={logo} alt='nyla logo' className="footer-logo h-50"/> </Link>
            <div className="nav-side p-2 me-4 d-flex bg-white align-items-center justify-content-between rounded-pill position-relative" style={{ cursor: 'pointer' , width: 'max-content'}} >
              <FontAwesomeIcon icon={faBars} className="clickable pe-2" onClick={handleDropdownClick} />
              <span className="nav-side-text clickable pe-2">Hi, {userFullName}</span>
              {isOpen && (
                <ul className="dropdown-menu show">
                     <li>
                      <Link  to={`/profile/${localStorage.getItem('user_id')}`} className='text-decoration-none text-dark'>Profile</Link>
                      </li> 
                      <li onClick={() => logOut() }>
                         Logout
                      </li>          
                  </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
