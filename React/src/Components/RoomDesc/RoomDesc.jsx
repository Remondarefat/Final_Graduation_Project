import Style from './RoomDesc.module.css';
import Picture3 from '../../assets/hilton 1.png';
import Doubleroom from '../../assets/doubleroom.jpg';
import Singleroom from '../../assets/singleroom.jpg';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../MainNavbar/Navbar';
import Footer from '../MainFooter/Footer';
export default function RoomDesc() {
    const { hotelId, roomId } = useParams();
    const [room, setRoom] = useState(null);
    const [isloading, setIsloading] = useState(false);
    async function fetchRoomDetails() {
        try {
            const { data } = await axios.get(`http://127.0.0.1:8000/api/hotels/${hotelId}/details/${roomId}`);
            setRoom(data);
            console.log(data);
            setIsloading(true);
        } catch (error) {
            console.error("Error fetching room details:", error);
        }
    }

    useEffect(() => {
        fetchRoomDetails();
    }, [hotelId , roomId]);

    
    return <>
        {isloading?<>
        <Navbar/>
        <div className="container">
            <div className="row mt-5 pt-5 justify-content-center ">
                {room.room.images.map((item) => (
                    <div key={item.id} className="col-md-4 ">
                        <div className={Style.roomImg}>
                            <div className="">
                                <img src={item.image} className="w-100 rounded-3" alt="Room" />
                            </div>
                            <div className={Style.layer}>
                                <img src={room.images[0].image} className={Style.hotelImg} alt="Hotel" />
                                <div className="ms-3">
                                    <span>Listed by :</span>
                                    <p className="fw-bold m-0">{room.name}</p>
                                    <span>For:${room.room.price}/night</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="row">
                    <div className="col-md-6">
                        <div className="mt-5">
                            <h5 className="fw-bold">{room.room.type}</h5>
                            <div className="d-flex mt-4">
                                <div className="bg-secondary bg-opacity-25 me-3 p-4 text-center rounded-3 ">
                                    <i className="fa-solid fa-bed fs-2"></i>
                                    <p className="mt-2"> Bedroom</p>
                                </div>
                                <div className="bg-secondary bg-opacity-25 p-4 text-center rounded-3">
                                    <i className="fa-solid fa-bath fs-2"></i>
                                    <p className="mt-2"> Bathrooms</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className="fw-bold mb-3 mt-5">Room Description</h5>
                            <p className="text-muted">{room.description}</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
            
    <Link to={`/checkout/${hotelId}/${roomId}`}  className={`m-5 w-25 btn text-white rounded-5 p-2`} style={{backgroundColor: '#47BCC2'}} >
   Reserve Now
    </Link>
                </div>
            </div>
        </div>
   
    <Footer/>
    </> : <div className='loading-page'>
                
        </div>}
    </>
        
        
   
}
