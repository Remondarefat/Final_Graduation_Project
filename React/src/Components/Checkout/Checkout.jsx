import React, { useState, useEffect } from 'react';
import style from './Checkout.module.css';
import ReactStars from 'react-stars';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import Navbar from '../MainNavbar/Navbar';
import Footer from '../MainFooter/Footer';

export default function Checkout({ onCheckoutData }) {
  const { hotelId, roomId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [hotelDetails, setHotelDetails] = useState({
    name: '',
    hotelImages: [],
    description: '',
    stars: 0,
    view: '',
    price: 0,
    status: '',
    roomImages: [],
  });

  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    total_due: 0,
    meals: '',
    user_id: localStorage.getItem('user_id'),
    hotel_id: hotelId,
    room_id: roomId,
  });

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const hotelResponse = await axios.get(`http://127.0.0.1:8000/api/hotels/${hotelId}/details/${roomId}`);
        setHotelDetails({
          name: hotelResponse.data.name,
          description: hotelResponse.data.description,
          hotelImages: hotelResponse.data.images,
          stars: hotelResponse.data.stars,
          roomImages: hotelResponse.data.room.images,
          type: hotelResponse.data.room.type,
          view: hotelResponse.data.room.view,
          price: hotelResponse.data.room.price,
          status: hotelResponse.data.room.status,
        });
        setLoading(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchdata();
  }, [hotelId, roomId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateDuration = () => {
    const checkinDate = new Date(formData.checkin);
    const checkoutDate = new Date(formData.checkout);
    const timeDifference = checkoutDate.getTime() - checkinDate.getTime();
    const durationDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

    const totalPrice = hotelDetails.price * durationDays;
    setFormData({ ...formData, duration: durationDays, total_due: totalPrice });
  };

  useEffect(() => {
    calculateDuration();
  }, [formData.checkin, formData.checkout]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      if (!formData.checkin || !formData.checkout || !formData.meals) {
        console.log('Form validation failed. Missing required fields.');
        return;
      }
      const bookResponse = await axios.post('http://127.0.0.1:8000/api/checkout', formData);
      console.log('Checkout API response:', bookResponse.data);
      console.log('Form submitted successfully!');
      onCheckoutData(formData); // Pass formData to parent component
      navigate('/payment', { state: { roomType: hotelDetails.type, duration: formData.duration, totalDue: formData.total_due } });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
    }
  };

  const isRoomBooked = hotelDetails.status === 'booked'; // Check if room is booked

  return <>
    {loading? <>
      <Navbar />
      <div className="container pt-5 mt-5">
        <div className="row">
          <div className={`col col-3 d-flex flex-column justify-content-center align-items-center rounded-3 me-4 ${style.leftContainer}`}>
            {hotelDetails.hotelImages && hotelDetails.hotelImages.length > 0 && (
              <img className={`${style.hotelImg} mt-4 rounded-circle`} src={hotelDetails.hotelImages[0].image} alt='Hotel image' />)}
            <h5 className='mt-3'>{hotelDetails.name}</h5>
            <div className="stars">
              <ReactStars value={hotelDetails.stars} count={5} edit={false} size={40} color2={'#ffd700'} />
            </div>
            <p className='mt-3 mb-5 pb-5 text-center'>{hotelDetails.description}</p>
          </div>
          <div className="col col-7">
            <div>
              <h3>{hotelDetails.type}</h3>
              <p>{hotelDetails.view}</p>
              <p>{hotelDetails.status}</p>
              <p className='text-muted'>Joined in 2021</p>
            </div>
            <div>
              <form method='post' onSubmit={handleSubmit}>
                <div className="d-flex ">
                  <div className="d-flex flex-column me-3 align-items-start">
                    <label htmlFor="checkin">Check In :</label>
                    <input type="date" className='form-control w-75' name="checkin" id="check-in" onChange={handleInputChange} min={new Date().toISOString().split('T')[0]} disabled={isRoomBooked} />
                  </div>
                  <div className="d-flex flex-column  align-items-start ">
                    <label htmlFor="checkout">Check Out :</label>
                    <input type='date' className='form-control w-75' name="checkout" id="check-out" onChange={handleInputChange} min={formData.checkin} disabled={isRoomBooked} />
                  </div>
                  {formData.duration !== '' && !isNaN(formData.duration) && (
                    <div className="mt-3">
                      <p className='mt-3'>
                        Duration: {formData.duration} {formData.duration === 1 ? 'day' : 'days'}
                      </p>
                    </div>
                  )}
                </div>
                <div className='mt-3'>
                  <label htmlFor='meals'>Meals</label>
                  <select name="meals" id="meals" className='form-select' onChange={handleInputChange} style={{ width: '223px' }} disabled={isRoomBooked}>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                  </select>
                </div>
                <div className='d-flex justify-content-between mt-3'>
                  <div>
                    <Carousel style={{ width: '400px' }}>
                      {hotelDetails.roomImages.map((imageObj, index) => (
                        <Carousel.Item key={index}>
                          <img style={{ height: '250px', width: '400px' }} src={imageObj.image} alt={`Room ${index + 1}`} />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                  <div className="d-flex flex-column align-items-end mt-4 pb-5">
                    <p>Total Due:</p>
                    {formData.total_due > 0 && (
                      <p className='fw-bold'>{formData.total_due} $</p>
                    )}
                  </div>
                </div>
                <div className="btns d-flex justify-content-end mt-5">
                  <button type='button' className='btn btn-link text-decoration-none text-dark'><i className="fa-solid fa-x me-2"></i>Cancel</button>
                  <button type='submit' className={`btn rounded-pill ps-4 pe-4 pb-2 pt-2`} style={{ backgroundColor: '#47BCC2', color: 'white' }} disabled={isRoomBooked}>
                      {isRoomBooked ? 'Room Booked' : 'Pay Now'}
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>:<div className='loading-page'>
                
                </div>}
  </>
}
