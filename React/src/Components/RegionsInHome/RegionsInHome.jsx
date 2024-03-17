import React, { useState } from 'react';
import './RegionInHome.css';
import logo from '../NylaLogo/Nyla_Logo.svg';

const App = () => {
  const destinations = [
    { name: 'North Coast', imagePath: 'northcoast.png', bottomImage: 'North_Coast_Div.png' },
    { name: 'Cairo', imagePath: 'cairo.png', bottomImage: 'CairoDiv.png' },
    { name: 'Sinai', imagePath: 'sinai.png', bottomImage: 'SinaiDiv.png' },
    { name: 'Oasis', imagePath: 'oasis.png', bottomImage: 'oasisDiv.png' },
    { name: 'Upper Egypt', imagePath: 'upper.png', bottomImage: 'UEgyDiv.png' },
    { name: 'Red Sea', imagePath: 'redsea.png', bottomImage: 'Red_Sea_Div.png' },
  ];

  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
    document.querySelector(".bottom-div").scrollIntoView({ behavior: "smooth" });
  };

  const handleExploreClick = () => {
    if (!selectedDestination) {
      alert("Please choose a destination first!");
    } else {
      // Proceed with the explore functionality if a destination is selected
      document.querySelector(".bottom-div").scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container my-5">
      <h2 className='text-center title-color'>What are you Looking for</h2>
      <hr />

      <div className="row">
        {destinations.map((destination, index) => (
          <div key={index} className="col-md-4">
            <div className="card shadow" onClick={() => handleDestinationClick(destination)} style={{ cursor: 'pointer' }}>
              <img src={`${process.env.PUBLIC_URL}/${destination.imagePath}`} alt={destination.name} className="card-img-top" />
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

export default App;
