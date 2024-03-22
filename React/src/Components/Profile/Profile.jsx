import React, { useState, useEffect } from 'react';
import './profile.css';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../MainNavbar/Navbar';
import Footer from '../MainFooter/Footer';
import axios from 'axios';

export default function Profile() {
    const [reviews , setReviews] = useState([]);
    const { id } = useParams();
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getprofiledata();
        const fetchReviews = async () => {
            try {
              const response = await axios.get(`http://localhost:8000/api/reviews`);
              setReviews(response.data.reviews); 
              console.log(response.data.reviews);
            } catch (error) {
              console.error('Error fetching testimonials:', error);
            }
          };
          console.log(reviews);
          fetchReviews();
        console.log(profileData);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        // return <div>Error: {error}</div>; //to display error message 
    }

async function getprofiledata(){
    try {
        const response = await axios.get(`http://localhost:8000/api/profile/${id}`);
        let dataofprofile = (response.data.data);
        console.log(dataofprofile );
        setProfileData(dataofprofile);
        setLoading(false);
        console.log(profileData);
    } catch (error) {
        console.error('Error fetching profile data:', error);
        setError('An error occurred while fetching profile data. Please try again later.'); // Set error message
        setLoading(false);
    }
}

// const avatars = (firstName, lastName) => {
//     const firstLetter = firstName.charAt(0).toUpperCase();
//     const lastLetter = lastName.charAt(0).toUpperCase();
//     return firstLetter + lastLetter;
//   };
  
    return (
        <div>
            <Navbar />
            <div className="profile-container">
                <div className="profile-card">
                    <div className="profile-picture  d-flex align-items-center justify-content-center">
                        <img src={profileData.image} alt="profile" />  
                        {/* <h1 className='profile-na'>{avatars(profileData.fname, profileData.lname)}</h1> */}
                    </div>
                    <div className="user-info">
                        <h4>{profileData.name}</h4>
                    </div>
                    <Link to={`/editprofile/${id}`} className="edit-button">
                        Edit Profile
                    </Link>
                </div>
            </div>
            <div className="horizontal-line-container">
                <hr className="horizontal-line" />
            </div>
            <div className="review">
                {profileData && profileData.name && reviews && reviews.length > 0 && (
                    <React.Fragment>
                        <p className="reviewer-name">{profileData.name}</p>
                        <p className="hotel-name">{profileData.hotel_name}</p>
                        {reviews.map(review => {
                            if (review.user_id === parseInt(id)) {
                                return <p key={review.created_at} className="review-text">{review.feedback}</p>;
                            }
                            return null;
                        })}                    
                        </React.Fragment>
                )}
            </div>
            <Footer />
        </div>
    );
}   