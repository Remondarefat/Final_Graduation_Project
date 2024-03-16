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
                <h5>North Coast</h5>
                <p>Alexandria</p>
                <p>Alamin</p>
                <p>Marsa Matrouh</p>
                <h5>Oasis</h5>
                <p>Alexandria</p>
                <p>Alamin</p>
                <p>Marsa Matrouh</p>
                </div>
              <div className="footer-item">
                <h5>Cairo</h5>
                <p>Cairo</p>
                <p>Giza</p>
                <p>New Capital</p>
                <h5>Upper Egypt</h5>
                <p>Aswan</p>
                <p>Luxor</p>
                <p>Qena</p>
                </div>
                <div className="footer-item">
                <h5>Sinai</h5>
                <p>Dahab</p>
                <p>Sharm El Sheikh</p>
                <p>Arish</p>
                <h5>Red Sea</h5>
                <p>Hurghada</p>
                <p>Marsa Alam</p>
                <p>Safaga</p>
                </div>
        </div>
        <div>
        <button className='button-style' >About Us</button>
        <button className='button-style' >Contact Us</button>
        </div>
        <div className="footer-copyright">
          <p>&copy;2024 nyla | All rights reserved</p>
        </div>
      </div>
    </footer>
    );
}
