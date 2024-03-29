import React from "react";
import { Link } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../Context/UserContext';

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false); 
  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.nav-side')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
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
      <div className=" nav-background">
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100  align-items-center">
            <img src="Logo.svg" className="logo-width p-2" alt="" />
            <div className="admin-side p-2 d-flex bg-white align-items-center justify-content-between  rounded-pill" style={{ cursor: 'pointer' , width: 'max-content' }}>
            <div className="nav-side p-2 d-flex bg-white align-items-center justify-content-between rounded-pill position-relative" style={{ cursor: 'pointer' , width: 'max-content'}} >
              <FontAwesomeIcon icon={faBars} className="clickable pe-2" onClick={handleDropdownClick} />
              <span className="nav-side-text clickable">Hi, Admin</span>
              {isOpen && (
                <ul className="dropdown-menu show">
                  <li onClick={() => logOut() }>
                    Logout
                  </li>
                </ul>
              )}
            </div>
            </div>
          </div>
        </div>
          </div>
          <div className="w-100 ">
          <div className="d-flex w-50 mx-auto pt-3 pb-3 justify-content-center tab-color text-white rounded-2">
                  <Link to="/adminrequest" className="me-5 text-white text-decoration-none py-3 fw-bold">Reserved Rooms</Link>
                  <Link to="/allhotel" className="me-5 text-white text-decoration-none py-3 fw-bold">All Hotels</Link>
                  <Link to='/addhotel' className="me-5 text-white text-decoration-none py-3 fw-bold">Add Hotel</Link>
             </div>
          </div>
    </>
  );
}
