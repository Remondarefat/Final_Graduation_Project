import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../MainNavbar/Navbar';
import Footer from '../MainFooter/Footer';
import HotelSlider from '../HotelSlider/HotelSlider';
import SearchBar from '../SearchBar/SearchBar';
import './RegionHotels.css';
import HotelsDisplay from '../HotelsDisplay/HotelsDisplay';

const backgrounds = {
  northCoast: 'NorthCoastPattern.png',
  cairo: 'CairoPattern.png',
  upperEgypt: 'UperEgyptPattern.png',
  sinai: 'SinaiPattern.png',
  oasis: 'OasisPattern.png',
  redSea: 'RedSeaPattern.png',
};

export default function RegionHotels() {
  const { regionName } = useParams();
  const backgroundImg = backgrounds[regionName] || 'defaultBackground.png';
  const [searchQuery, setSearchQuery] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <div className="backgroundStyledDiv" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${backgroundImg})` }}>
        <Navbar />
        <HotelSlider />
        <SearchBar onSearch={handleSearch} />
        <HotelsDisplay searchQuery={searchQuery} />
        <Footer />
      </div>
    </>
  );
}
