import Style from './HotelRooms.module.css';
import Picture3 from '../../assets/hilton 1.png';
import Doubleroom from '../../assets/doubleroom.jpg';
import Singleroom from '../../assets/singleroom.jpg';
import { Link, useParams } from 'react-router-dom';
import ReactStars from 'react-stars'
import {React, useEffect, useState} from 'react'
import axios from 'axios';
import { Formik, useFormik } from 'formik';


export default function HotelRooms() {
    const params = useParams(2);
    const [hotelDetails, setHotelDetails] = useState(null);
    const [feedbackValue, setFeedbackValue] = useState('');
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]);
    // ToDo: ------Fetch HotelDesc Data
    async function fetchHotelDetails() {
        let { data } = await axios.get(`http://127.0.0.1:8000/api/hoteldesc/2`);
        setHotelDetails(data);
        console.log(data);
    }

    useEffect(() => {
        fetchHotelDetails();
    }, []);
    

    // TODO:------------Fetch ReviewData-----------------
    async function fetchReviews() {
        let { data } = await axios.get(`http://127.0.0.1:8000/api/reviews/2`);
        setReviews(data);
        console.log(data);
    }

    useEffect(() => {
        fetchReviews();
    }, []);



    // TODO:---------------Send Review To Db-----------

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };
    const saveRating = async (values) => {
        console.log(values);

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/reviews',
                values,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
                    },
                }
            );
            console.log('Review submitted successfully:', response.data);
            formik.resetForm();
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    
    };
    let formik = useFormik({
        initialValues:{
            feedback:'',
            rating:'',
            hotel_id:2,
        },
        onSubmit:saveRating
    })
    
    // ToDo-----------------------------------------------------------------------------------------------------------------------
    return <>
                    {hotelDetails?
                    <>
                    <div id="carouselExampleInterval" className="carousel slide w-100 "  data-bs-ride="carousel">
                    <div className="carousel-inner">
                                    {hotelDetails.data.image.map((item, index) => (
                                        <div
                                        key={index}
                                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                        data-bs-interval="10000"
                                        >
                                        <img src={item.image} className={`d-block w-100   ${Style.Slider}` }alt="..." />
                                        </div>
                                    ))}
                                    </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <section className='container mt-5'>
                        <div className="row">
                            <div className="col-md-6  ">
                            <div className='d-flex align-items-center'>
                                <h4 className='fw-bold me-5 '>{hotelDetails.data.name}</h4>
                                <div className=" ">
                                    {[...Array(hotelDetails.data.stars)].map((_, index) => (
                                    <i key={index} className="fa-solid fa-star text-warning"></i>
                                    ))}
                                    {[...Array(5 - hotelDetails.data.stars)].map((_, index) => (
                                    <i key={index + hotelDetails.data.stars} className="fa-solid fa-star"></i>
                                    ))}
                                </div>
                            </div>
                                <h5 className='mt-3 '>Hotel Description</h5>
                                <p className='text-muted'>{hotelDetails.data.description}</p>
                            </div>
                            <div className="col-md-6">
                                <h5 className='my-3'>Hotel Location</h5>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6907.256408721736!2d31.25580242229004!3d30.0475226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840bc3ef7ee61%3A0x8681f2f8b817d03f!2z2KfZhNio2YbZgyDYp9mE2LnYsdio2Ykg2KfZhNin2YHYsdmK2YLZiSDYp9mE2K_ZiNmE2YkgLSDYp9mK2Ycg2KfZitmHINin2Ykg2KjZiQ!5e0!3m2!1sar!2seg!4v1707238353263!5m2!1sar!2seg" className='{Style.location}'></iframe>
                                <p className='text-muted w-50'>{hotelDetails.data.location}</p>
                            </div>
                        </div>
                        <div className="row my-5">
                            {hotelDetails.data.room.map((room) => (
                                <div key={room.id} className="col-md-4">
                                <div className="card" style={{ width: '22rem' }}>
                                    <div className={Style.roomImg}>
                                        <div>
                                            <img src={room.images[0].image} className="card-img-top" alt="Room" />
                                        </div>
                                    <div className={`${Style.layer} ps-3` }>
                                        <img src={hotelDetails.data.image[0].image} className={Style.hotelImg} alt="Room" />
                                        <div className='ms-3'> 
                                        <span>Listed by :</span>
                                        <p className='fw-bold m-0'>{hotelDetails.data.name}</p>
                                        <span>For: ${room.price}/night</span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="card-body">
                                    <p className="card-title fw-bold m-0">{room.type}</p>
                                    <p className="card-text">{room.view}</p>
                                    <div className='text-center'>
                                        <Link to="/roomdesc/${id}" className="btn bg-dark text-white rounded-5 px-4 ">More Details</Link>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div>


                        {/* ----------------- Display Customer Feedback------------------------------ */}
                        <div className="my-5 py-5">
            <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
    {reviews.reduce((rows, review, index) => {
        if (index % 2 === 0) {
            rows.push([]);
        }
        rows[rows.length - 1].push(review);
        return rows;
    }, []).map((row, rowIndex) => (
        <div key={rowIndex} className={`carousel-item ${rowIndex === 0 ? 'active' : ''}`}>
            <div className="row d-flex justify-content-center gx-3 ">
                {row.map((review, colIndex) => (
                    <div key={colIndex} className="col-md-4 bg-secondary ms-3 bg-opacity-25 border p-2 rounded-2">
                        <div className="d-flex align-items-center justify-content-between ">
                            <p className="card-title fw-bold ">{review.user.name}</p>
                            <div className="">
                                {[...Array(review.rating)].map((_, index) => (
                                    <i key={index} className="fa-solid fa-star text-warning"></i>
                                ))}
                                {[...Array(5 - review.rating)].map((_, index) => (
                                    <i key={index + review.rating} className="fa-solid fa-star"></i>
                                ))}
                            </div>
                        </div>
                        <p>{review.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark bg-opacity-25" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-dark bg-opacity-25" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        
                    </section>
                    {/* -----------------------------Send Feedback------------------ */}
                    <div className='bg-secondary bg-opacity-25 mt-5 '>
                        <div className='container d-flex align-items-center'>
                            <img src={hotelDetails.data.image[0].image} className={Style.hotelImg} />
                            <p className='mt-2 fw-bold ms-2 mb-0'>{hotelDetails.data.name}</p>
                            <div className=' ms-4 w-50'>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="d-flex align-items-center justify-content-center mt-3">
                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.feedback}
                                        type='text'
                                        name='feedback' // Add the name attribute
                                        placeholder='Your Feedback'
                                        className='w-100 border-0 rounded-4 ms-5 p-2  ps-2'
                                    />
                                    <div className='bg-secondary bg-opacity-25 rounded-circle p-2'>
                                        <button className='bg-transparent p-0 border-0' type="submit"><i className="  fa-solid arrow fa-paper-plane cursor-pointer"></i></button>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center mb-3'>
                                    <p className='ms-5 mb-0'>Your Rate :</p>
                                    <ReactStars
                                        count={5}
                                        value={parseInt(formik.values.rating)} // Ensure rating is parsed as a number
                                        onChange={(newRating) => {
                                            formik.setFieldValue('rating', newRating);
                                        }}
                                        size={40}
                                        color2={formik.values.rating >= 4 ? '#00FF00' : formik.values.rating >= 3 ? '#FFD700' : formik.values.rating >= 2 ? '#FFA500' : formik.values.rating >= 1 ? '#FF6347' : '#FFA500'} // Change color based on rating
                                    />
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                    </>
                    
                    :''}
    </>
}