import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './RegionInHome.css';
import logo from '../NylaLogo/Nyla_Logo.svg';

const RegionInHome = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const navigate = useNavigate(); // Hook for navigation
  const destinations = [
    { name: 'NorthCoast', imagePath: 'northcoast.png', bottomImage: 'North_Coast_Div.png', path: 'northCoast' },
    { name: 'Cairo', imagePath: 'cairo.png', bottomImage: 'CairoDiv.png', path: 'cairo' },
    { name: 'Sinai', imagePath: 'sinai.png', bottomImage: 'SinaiDiv.png', path: 'sinai' },
    { name: 'Oasis', imagePath: 'oasis.png', bottomImage: 'oasisDiv.png', path: 'oasis' },
    { name: 'UpperEgypt', imagePath: 'upper.png', bottomImage: 'UEgyDiv.png', path: 'upperEgypt' },
    { name: 'RedSea', imagePath: 'redsea.png', bottomImage: 'Red_Sea_Div.png', path: 'redSea' },
  ];

  const [selectedDestination, setSelectedDestination] = useState(null);
  const [regionData, setRegionData] = useState(null);
  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };
  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
    console.log('Region:', destination.name);
    localStorage.setItem('region', destination.name);
    document.querySelector(".bottom-div").scrollIntoView({ behavior: "smooth" });
  };

  const handleExploreClick = () => {
    if (!selectedDestination) {
      alert("Please choose a destination first!");
    } else {
      // Use the navigate function to go to the selected destination's page
      navigate(`/region/${selectedDestination.path}`);
    }
  };

  return (
    <div className="container my-5">
      <h2 className='text-center title-color'>What are you Looking for</h2>
      <hr />

      <div className="row">
        {destinations.map((destination, index) => (
          <div key={index} className="col-md-4">
            <div className="cardd shadow" onClick={() => handleDestinationClick(destination)} style={{ cursor: 'pointer' }}>
              <img src={`${process.env.PUBLIC_URL}/${destination.imagePath}`} alt={destination.name} className="cardd-img-top" />
              <div className="overlay">
                <h3>{destination.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-div d-flex my-4">
        <div className="overlay-content col-2 d-flex flex-column justify-content-center align-items-center">
          <img src={logo} alt='nyla logo' className="footer-logo h-50"/>
          <button className="btn d-block" style={{ backgroundColor: '#47BCC2', color: '#FFFFFF', border: 'none' }} onClick={handleExploreClick}>
            Explore {selectedDestination ? selectedDestination.name : "Nyla"}
          </button>
        </div>
        <div className='col-10'>
          {selectedDestination ? (
            <img src={`${process.env.PUBLIC_URL}/${selectedDestination.bottomImage}`} alt="" className="bottom-image w-100 rounded shadow"/>
          ) : (
            <div className="placeholder-image w-100 rounded shadow" style={{ backgroundColor: "#eee", height: "200px" }}></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegionInHome;
