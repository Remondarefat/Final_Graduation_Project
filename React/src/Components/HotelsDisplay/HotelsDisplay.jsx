import React, { useState, useEffect } from 'react';
import './HotelsDisplay.css';
import { Link, useParams } from 'react-router-dom';
import HotelItem from '../HotelItemRegion/HotelItemRegion';
import axios from 'axios';

export default function HotelsDisplay({ searchQuery }) {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        async function fetchHotels() {
            try {
                const response = await axios.get("http://localhost:8000/api/hotels");
                setHotels(response.data.data);
            } catch (error) {
                console.error('Error fetching hotels:', error);
            }
        }

        fetchHotels();
    }, []);

    const filteredHotels = searchQuery ? hotels.filter(hotel => hotel.location.toLowerCase().includes(searchQuery.location.toLowerCase())) : hotels;

    return (
        <div className="container mt-5 rounded-3 shadow background-opacity">
            <h2 className=''>Available Hotels</h2>
            <div className="row mt-4">
                {filteredHotels.map((item, index) => <HotelItem key={index} item={item} />)}
            </div>
        </div>
    );
}
