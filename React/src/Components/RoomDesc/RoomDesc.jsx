import Style from './RoomDesc.module.css';
import Picture3 from '../../assets/hilton 1.png';
import Doubleroom from '../../assets/doubleroom.jpg';
import Singleroom from '../../assets/singleroom.jpg';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RoomDesc(){
    // const [room, setRoom] = useState(null);
    // useEffect(() => {
    //     const fetchRoomData = async () => {
    //       try {
    //         const roomId = match.params.roomId;
    //         const response = await axios.get(`http://127.0.0.1:8000/api/room/1`);
    //         setRoom(response.data);
    //       } catch (error) {
    //         console.error('Error fetching room data:', error);
    //       }
    //     };
    
    //     fetchRoomData();
    //   }, [match.params.roomId]);

    return <>
        <div className="container">
            <div className="row mt-4  mx-auto">
                <div className="col-md-5 ">
                    <div className={Style.roomImg}>
                        <div className=''>
                            <img src={Singleroom}  className='w-100 rounded-3'/>
                        </div>
                        <div className={Style.layer }>
                                <img src={Picture3} className={Style.hotelImg}/>
                                    <div className='ms-3'> 
                                        <span>Listed by :</span>
                                            <p className='fw-bold m-0'>Hilton Alex</p>
                                                <span>For:$1000/neight</span>
                                    </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                        <div className="row g-2">
                            <div className="col-md-5">
                                <div className=''>
                                    <img src={Singleroom}  className='w-100 rounded-3'/>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className=''>
                                    <img src={Singleroom}  className='w-100 rounded-3'/>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className=''>
                                    <img src={Singleroom}  className='w-100 rounded-3'/>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className=''>
                                    <img src={Singleroom}  className='w-100 rounded-3'/>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                            <div className='mt-5 '>
                            <h5 className='fw-bold'> Single Room</h5>
                            <div className='d-flex mt-4'>
                                <div className='bg-secondary bg-opacity-25 me-3 p-4 text-center rounded-3 '>
                                    <i className="fa-solid fa-bed fs-2"></i>
                                    <p className='mt-2'> 1 Badroom</p>
                                </div>
                                <div  className='bg-secondary bg-opacity-25 p-4 text-center rounded-3'>
                                    <i className="fa-solid fa-bath fs-2"></i>
                                    <p className='mt-2'>Bathrooms</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className='fw-bold mb-3 mt-5'>Room Description</h5>
                                <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quaerat ullam iusto 
                                    modi expedita dolorum dignissimos atque enim debitis praesentium animi accusantium
                                </p> 
                                <p className='text-muted'> Amet voluptates, illum assumenda blanditiis quasi pariatur ex rerum fuga cumque
                                    Ullam enim amet, dolor asperiores ea ratione molestias saepe, modi ab cupiditate
                                </p>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <Link to="/checkout" className=" m-5 w-25 btn bg-dark text-white rounded-5 p-2 ">Reserve Now</Link>

                </div>
            </div>
        </div>
    
    </>
}