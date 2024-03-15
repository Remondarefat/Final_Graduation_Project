import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from '../NylaLogo/Nyla_Logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
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

  return (
    <>
      <div className="mainnav">
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <img src={logo} alt='nyla logo' className="footer-logo h-50"/>
            <div className="nav-side p-2 d-flex bg-white align-items-center justify-content-between rounded-pill position-relative">
              <FontAwesomeIcon icon={faBars} className="clickable" onClick={handleDropdownClick} />
              <img src="logo512.png" className="w-50 rounded-circle" alt="" />
              {isOpen && (
                <ul className="dropdown-menu show">
                  <li onClick={() => { alert('Logging out...'); }}>
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
