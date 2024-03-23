import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [checkInType, setCheckInType] = useState("text");
  const [checkOutType, setCheckOutType] = useState("text");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCheckInDateChange = (event) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutDateChange = (event) => {
    setCheckOutDate(event.target.value);
  };

  const handleSearch = () => {
    onSearch({ location, checkInDate, checkOutDate });
  };

  return (
    <div className="col-8 mx-auto my-5 rounded shadow">
      <div className="search-bar form-inline d-flex justify-content-center mx-3 py-2">
        <input
          type="text"
          className="form-control mr-2"
          placeholder="Which city do you prefer?"
          value={location}
          onChange={handleLocationChange}
        />
        <input
          type={checkInType}
          className="form-control ms-2"
          value={checkInDate}
          onChange={handleCheckInDateChange}
          onFocus={() => setCheckInType("date")}
          onBlur={() => {
            if (!checkInDate) setCheckInType("text");
          }}
          placeholder="Check-in"
        />
        <input
          type={checkOutType}
          className="form-control ms-2"
          value={checkOutDate}
          onChange={handleCheckOutDateChange}
          onFocus={() => setCheckOutType("date")}
          onBlur={() => {
            if (!checkOutDate) setCheckOutType("text");
          }}
          placeholder="Check-out"
        />
        <button className="circularButton ms-2" type="button" onClick={handleSearch}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
