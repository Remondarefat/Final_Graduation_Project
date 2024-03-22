import React, { useState, useEffect } from 'react';
import './HotelsDisplay.css';
import { Link, useParams } from 'react-router-dom';
import HotelItem from '../HotelItemRegion/HotelItemRegion';
import axios from 'axios';

export default function HotelsDisplay({ searchQuery }) {
    const [savedRegion, setSavedRegion] = useState('');
    const [hotel, setHotel] = useState([]);
    const { region } = useParams();

    async function getHotel() {
        try {
            const response = await axios.get(`http://localhost:8000/api/showhotels`);
            const allHotels = response.data.data;

            // Check if there is a region saved in local storage
            const savedRegion = localStorage.getItem('region');
            setSavedRegion(savedRegion);
            if (searchQuery && searchQuery.location) {
                const filteredHotels = allHotels.filter(hotel =>
                    hotel.location.toLowerCase().includes(searchQuery.location.toLowerCase()));
                setHotel(filteredHotels);
                console.log(filteredHotels);
            } else if (savedRegion) {
                const filteredHotels = allHotels.filter(hotel =>
                    hotel.region.toLowerCase() === savedRegion.toLowerCase());
                setHotel(filteredHotels);
                console.log(filteredHotels);
            } else {
                setHotel(allHotels);
            }
        } catch (error) {
            console.error('Error fetching hotels:', error);
        }
    }


    useEffect(() => {
        getHotel();
    }, [searchQuery]);

    return <>
        <div className=" container mt-5 background-opacity rounded-2 shadow">
            <h2>Available Hotels in {savedRegion ? savedRegion : 'all regions'} </h2>
            {<div className="row mt-4">
                {hotel.map((item, index) => <HotelItem key={index} item={item} />)}
            </div>
            }
        </div>
    </>
}
