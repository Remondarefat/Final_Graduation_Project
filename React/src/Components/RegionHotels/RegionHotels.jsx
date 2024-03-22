import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../MainNavbar/Navbar';
import Footer from '../MainFooter/Footer';
import HotelSlider from '../HotelSlider/HotelSlider';
import SearchBar from '../SearchBar/SearchBar';
import './RegionHotels.css';
import HotelsDisplay from '../HotelsDisplay/HotelsDisplay';

// Define your backgrounds somewhere
const backgrounds = {
  northcoast: 'NorthCoastPattern.png',
  cairo: 'CairoPattern.png',
  upperegypt: 'UperEgyptPattern.png',
  sinai: 'SinaiPattern.png',
  oasis: 'OasisPattern.png',
  redsea: 'RedSeaPattern.png',
};

export default function RegionHotels() {
  const { regionName } = useParams();
  const backgroundImg = backgrounds[regionName] || 'defaultBackground.png';

  return (
    <>
      <div className='position-relative'>

        <div className="backgroundStyledDiv" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${backgroundImg})` }}>

        </div>
          <div 
  >
            <Navbar />
            <HotelSlider />
            <SearchBar />
            <HotelsDisplay />

            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <Footer />
          </div>
      </div>
      </>
  );
}
