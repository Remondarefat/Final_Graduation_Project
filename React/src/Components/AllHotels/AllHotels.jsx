import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import HotelItem from '../HotelItem/HotelItem';


export default function AllHotels() {

    
    let [hotel, setHotel] = useState([]);
    const [isloading, setIsloading] = useState(false);
    async function getHotel() {
        let { data } = await axios.get("http://localhost:8000/api/hotels");
        setHotel(data['data']);
        setIsloading(true);
    }
    useEffect(() => { 
        getHotel();
    }, []);
    return<>
    {isloading ?<>
        <div className=" container mt-5">
                <h2 className='available-title'>Available Hotels</h2>
            <div className="row mt-4">
               {hotel.map((item , index) => <HotelItem key={index} item={item}/>) }
                
            </div>
            <div className="w-100 d-flex mb-5 justify-content-end">

                <Link to={'/adminrequest'} className='btn btn-dark rounded-3 me-5'>Go To Reserved Rooms</Link>
            </div>

        </div>
        </>:<div className='loading-page'>
                
                </div>}
        </>
}