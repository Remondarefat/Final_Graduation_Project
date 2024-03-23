import React, { useState, useEffect } from 'react';
import './profile.css';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../MainNavbar/Navbar';
import Footer from '../MainFooter/Footer';
import axios from 'axios';

export default function Profile() {
    const { id } = useParams();
    const [profileData, setProfileData] = useState({});
    


useEffect(() => {
    async function getprofiledata(){
        try {
            const response = await axios.get(`http://localhost:8000/api/profile/${id}`);
            let dataofprofile = (response.data.data);
            console.log(dataofprofile );
            setProfileData(dataofprofile);
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
             <div className="profile-container">
                 <div className="profile-card">
                     <div className="profile-picture  d-flex align-items-center justify-content-center">
                         {/* <img src={profileData.image} alt="profile" />   */}
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
             <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>asdasdsad</h1>
                    </div>
                    <div className="col-md-4">
                        <h1>asdasdsad</h1>
                    </div>
                    <div className="col-md-4">
                        <h1>asdasdsad</h1>
                    </div>
                </div>             
            </div>
             <Footer />
         </div>
        </>
    
}   