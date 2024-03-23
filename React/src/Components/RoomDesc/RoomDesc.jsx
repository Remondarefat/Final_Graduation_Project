import Style from './RoomDesc.module.css';
import Picture3 from '../../assets/hilton 1.png';
import Doubleroom from '../../assets/doubleroom.jpg';
import Singleroom from '../../assets/singleroom.jpg';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RoomDesc() {
    const [room, setRoom] = useState(null);

    async function fetchRoomDetails() {
        try {
            const { data } = await axios.get(`http://127.0.0.1:8000/api/hotels/1/details/3`);
            setRoom(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching room details:", error);
        }
    }

    useEffect(() => {
        fetchRoomDetails();
    }, []);

    if (!room) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="row mt-5  justify-content-center ">
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
                    <Link to={`/checkout/1/2`}  className="m-5 w-25 btn bg-dark text-white rounded-5 p-2">Reserve Now</Link>
                </div>
            </div>
        </div>
    );
}
