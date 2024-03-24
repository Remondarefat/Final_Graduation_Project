import React from 'react';
import './footer.css';
import logo from '../NylaLogo/Nyla_Logo.svg';

export default function Footer() {
    return (
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
              <div className="footer-item">
                <img src={logo} alt='nyla logo' className="footer-logo"/>
                <p>The Egyptian accommodation booking system simplifies the process of reserving hotels and resorts, ensuring travelers find suitable options for their stay while exploring Egypt's attractions.





</p>
              </div>
              <div className="footer-item">
                <a href="http://localhost:3000/region/northCoast" className='regionn'><h5>North Coast</h5></a>
                <p>Alexandria</p>
                <p>Alamin</p>
                <p>Marsa Matrouh</p>
                <a href="http://localhost:3000/region/oasis" className='regionn'><h5>Oasis</h5></a>
                <p>Alexandria</p>
                <p>Alamin</p>
                <p>Marsa Matrouh</p>
                </div>
              <div className="footer-item">
                <a className='regionn'><h5>Cairo</h5></a>
                <p>Cairo</p>
                <p>Giza</p>
                <p>New Capital</p>
                <a className='regionn'><h5>Upper Egypt</h5></a>
                <p>Aswan</p>
                <p>Luxor</p>
                <p>Qena</p>
                </div>
                <div className="footer-item">
                <a className='regionn'><h5>Sinai</h5></a>
                <p>Dahab</p>
                <p>Sharm El Sheikh</p>
                <p>Arish</p>
                <a className='regionn'><h5>Red Sea</h5></a>
                <p>Hurghada</p>
                <p>Marsa Alam</p>
                <p>Safaga</p>
                </div>
        </div>
        <div>
        <button className='button-style' >About Us</button>
        <a href='http://localhost:3000/contactUs'>
        <button className='button-style' >Contact Us</button>
        </a>
        </div>
        <div className="footer-copyright">
          <p>&copy;2024 nyla | All rights reserved</p>
        </div>
      </div>
    </footer>
    );
}
