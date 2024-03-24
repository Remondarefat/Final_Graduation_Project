import React, { useState, useEffect } from 'react';
import './profile.css';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../MainNavbar/Navbar';
import Footer from '../MainFooter/Footer';
import axios from 'axios';

export default function Profile() {
    const { id } = useParams();
    const [profileData, setProfileData] = useState({});
    const [feedback,setFeedback]=useState([]);
    const [book,setBook]=useState([]);
    


useEffect(() => {
    async function getprofiledata(){
        try {
            const response = await axios.get(`http://localhost:8000/api/profile/${id}`);
            let dataofprofile = (response.data.data);
            console.log(dataofprofile.image);
            setFeedback(dataofprofile.feedback);
            setBook(dataofprofile.book);
            
            setProfileData(dataofprofile);
            // console.log(dataofprofile.);
        } catch (error) {
            console.error('Error fetching profile data:', error);
            // setError('An error occurred while fetching profile data. Please try again later.'); // Set error message
            // setLoading(false);
        }
    }
    getprofiledata();
    
}, []);
  
    return <>
         <div>
            <Navbar />
            <div className="container pro-con">
                <div className="row">
                    <div className="col-md-3 ">

                        <div className="profile-container shadow">
                            <div className="profile-card">
                                <div className="profile-picture  d-flex align-items-center justify-content-center">

                                {profileData.image !=null && !profileData.image.startsWith("http") ? <img src={`http://localhost:8000/images/${profileData.image}`} alt="" /> : null}
                                
                                </div>
                                <div className="user-info">
                                    <h4>{profileData.name}</h4>
                                </div>
                                <Link to={`/editprofile/${id}`} className="edit-button">
                                    Edit Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <h2 className='review-span'>History : </h2>
                        <div className="row">
                        {book.map((item, index) => {
                        
                        return <div key={index} className="col-md-4">
                            <div className='p-2'>
                                <img src={item.hotel_image} className='w-100 img-review rounded-2' alt="" />
                                <h6 className='mt-2 fw-lighter'><span className='review-span fw-bolder'>Hotel Name :</span> {item.hotel_name}</h6>
                                <h6 className='mt-2 fw-lighter'><span className='review-span fw-bolder'>CheckIn :</span> {item.checkin}</h6>
                                <h6 className='mt-2 fw-lighter'><span className='review-span fw-bolder'>CheckOut :</span> {item.checkout}</h6>
                                <h6 className='mt-2 fw-lighter'><span className='review-span fw-bolder'>Total Due :</span> {item.total_due} $</h6>

                            </div>
                            </div> 
                    })}
                        </div>
                    </div>
                </div>
            </div>
             <div className="horizontal-line-container">
                 <hr className="horizontal-line" />
             </div>
             <div className="container">
                <div className="row ">
                    <h2 className='text-white p-3 btn-update rounded-3'>Feedback : </h2>
                    {feedback.map((item, index) => {
                        
                        return <div key={index} className="col-md-3">
                            <div className='p-2 '>
                                <img src={item.hotel_image} className='w-100 img-review rounded-2' alt="" />
                                <h6 className='mt-2 fw-lighter'><span className='review-span fw-bolder'>Hotel Name :</span> {item.hotel_name}</h6>
                                <h6 className='mt-2 fw-lighter'><span className='review-span fw-bolder'>Review :</span> {item.feedback}</h6>
                                <h6 className='mt-2 fw-lighter'><span className='review-span fw-bolder'>Rate :</span> {item.rating}</h6>

                            </div>
                            </div> 
                    })}
                   
                    
                </div>             
            </div>
             <Footer />
         </div>
        </>
    
}   