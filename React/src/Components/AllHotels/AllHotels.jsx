import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

// Define BookingSystem as a separate functional component
function BookingSystem() {
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/booking-data');
        setBookingData(response.data);
        console.log('Booking data:', response.data);
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    };

    fetchBookingData();
  }, []);

  return (
    <div>
      <h1>Booking System</h1>
      {bookingData ? (
        <pre>{JSON.stringify(bookingData, null, 2)}</pre>
      ) : (
        <p>Loading booking data...</p>
      )}
    </div>
  );
}

// AllHotels component
export default function AllHotels() {
  return (
    <div>
      {/* Render BookingSystem component */}
      <BookingSystem />

      {/* Other content for AllHotels component */}
      {/* Add your other JSX content here */}
    </div>
  );
}

        {/* <div className=" container mt-5">
                <h2 className='available-title'>Available Hotels</h2>
            <div className="row mt-4">
                <div className="col-md-3 mb-5 ">
                    <div className=' position-relative '>
                        <div className=' position-relative '>
                        <img src="pro.jpg" className='w-100' alt="" />

                        <button className='btn btn-dark position-absolute rounded-5 w-50 btn-addroom'>Add Room</button>
                        </div>
                        <h4>Hilton Hotel</h4>
                        <p className='available-title'>100 smart, street, LA, USA</p>
                        <div className='d-flex '>
                            <div className='me-4 d-flex align-items-center '>
                                <img src="bed.png" className='= room-icon ' alt="" />
                                <p className=' p-0 m-0'>3</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="vector1.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>5</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="car_icon.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>2</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="pet_icon.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>1</p>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-5 ">
                    <div className=' position-relative '>
                        <div className=' position-relative '>
                        <img src="pro.jpg" className='w-100' alt="" />

                        <button className='btn btn-dark position-absolute rounded-5 w-50 btn-addroom'>Add Room</button>
                        </div>
                        <h4>Hilton Hotel</h4>
                        <p className='available-title'>100 smart, street, LA, USA</p>
                        <div className='d-flex '>
                            <div className='me-4 d-flex align-items-center '>
                                <img src="bed.png" className='= room-icon ' alt="" />
                                <p className=' p-0 m-0'>3</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="vector1.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>5</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="car_icon.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>2</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="pet_icon.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>1</p>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-5 ">
                    <div className=' position-relative '>
                        <div className=' position-relative '>
                        <img src="pro.jpg" className='w-100' alt="" />

                        <button className='btn btn-dark position-absolute rounded-5 w-50 btn-addroom'>Add Room</button>
                        </div>
                        <h4>Hilton Hotel</h4>
                        <p className='available-title'>100 smart, street, LA, USA</p>
                        <div className='d-flex '>
                            <div className='me-4 d-flex align-items-center '>
                                <img src="bed.png" className='= room-icon ' alt="" />
                                <p className=' p-0 m-0'>3</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="vector1.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>5</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="car_icon.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>2</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="pet_icon.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>1</p>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-5 ">
                    <div className=' position-relative '>
                        <div className=' position-relative '>
                        <img src="pro.jpg" className='w-100' alt="" />

                        <button className='btn btn-dark position-absolute rounded-5 w-50 btn-addroom'>Add Room</button>
                        </div>
                        <h4>Hilton Hotel</h4>
                        <p className='available-title'>100 smart, street, LA, USA</p>
                        <div className='d-flex '>
                            <div className='me-4 d-flex align-items-center '>
                                <img src="bed.png" className='= room-icon ' alt="" />
                                <p className=' p-0 m-0'>3</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="vector1.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>5</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="car_icon.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>2</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="pet_icon.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>1</p>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-5 ">
                    <div className=' position-relative '>
                        <div className=' position-relative '>
                        <img src="pro.jpg" className='w-100' alt="" />

                        <button className='btn btn-dark position-absolute rounded-5 w-50 btn-addroom'>Add Room</button>
                        </div>
                        <h4>Hilton Hotel</h4>
                        <p className='available-title'>100 smart, street, LA, USA</p>
                        <div className='d-flex '>
                            <div className='me-4 d-flex align-items-center '>
                                <img src="bed.png" className='= room-icon ' alt="" />
                                <p className=' p-0 m-0'>3</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="vector1.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>5</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="car_icon.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>2</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="pet_icon.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>1</p>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-5 ">
                    <div className=' position-relative '>
                        <div className=' position-relative '>
                        <img src="pro.jpg" className='w-100' alt="" />

                        <button className='btn btn-dark position-absolute rounded-5 w-50 btn-addroom'>Add Room</button>
                        </div>
                        <h4>Hilton Hotel</h4>
                        <p className='available-title'>100 smart, street, LA, USA</p>
                        <div className='d-flex '>
                            <div className='me-4 d-flex align-items-center '>
                                <img src="bed.png" className='= room-icon ' alt="" />
                                <p className=' p-0 m-0'>3</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="vector1.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>5</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="car_icon.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>2</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="pet_icon.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>1</p>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-5 ">
                    <div className=' position-relative '>
                        <div className=' position-relative '>
                        <img src="pro.jpg" className='w-100' alt="" />

                        <button className='btn btn-dark position-absolute rounded-5 w-50 btn-addroom'>Add Room</button>
                        </div>
                        <h4>Hilton Hotel</h4>
                        <p className='available-title'>100 smart, street, LA, USA</p>
                        <div className='d-flex '>
                            <div className='me-4 d-flex align-items-center '>
                                <img src="bed.png" className='= room-icon ' alt="" />
                                <p className=' p-0 m-0'>3</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="vector1.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>5</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="car_icon.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>2</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="pet_icon.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>1</p>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-5 ">
                    <div className=' position-relative '>
                        <div className=' position-relative '>
                        <img src="pro.jpg" className='w-100' alt="" />

                        <button className='btn btn-dark position-absolute rounded-5 w-50 btn-addroom'>Add Room</button>
                        </div>
                        <h4>Hilton Hotel</h4>
                        <p className='available-title'>100 smart, street, LA, USA</p>
                        <div className='d-flex '>
                            <div className='me-4 d-flex align-items-center '>
                                <img src="bed.png" className='= room-icon ' alt="" />
                                <p className=' p-0 m-0'>3</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="vector1.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>5</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="car_icon.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>2</p>

                            </div>
                            <div className='me-4 d-flex align-items-center'>
                                <img src="pet_icon.png" className='room-icon' alt="" />
                                <p className='p-0 m-0'>1</p>

                            </div>
                            
                        </div>
                    </div>
                </div>
               
                
            </div>
            <div className="w-100 d-flex mb-5 justify-content-end">

                <Link to={''} className='btn btn-dark rounded-3 me-5'>Go To Requests</Link>
            </div>

        </div> */}
//     </>
// }
// }