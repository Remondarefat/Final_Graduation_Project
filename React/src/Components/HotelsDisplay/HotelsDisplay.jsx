import React, { useState, useEffect } from 'react';
import './HotelsDisplay.css';
import { Link, useParams } from 'react-router-dom';
import HotelItem from '../HotelItemRegion/HotelItemRegion';
import axios from 'axios';


export default function HotelsDisplay() {
    
    let [hotel,setHotel] = useState([]);
    async function getHotel() {
        let { data } = await axios.get("http://localhost:8000/api/hotels");
        setHotel(data['data']);
    }
    useEffect(() => { 
        getHotel();
    }, []);
    return <>
        <div className=" container mt-5 background-opacity">
                <h2 className='available-title'>Available Hotels</h2>
            <div className="row mt-4">
               {hotel.map((item , index) => <HotelItem key={index} item={item}/>) }
                
            </div>

        </div>
    </>
}