import axios from "axios";
import React, { useEffect, useState } from "react";
import {    useNavigate, useParams } from "react-router-dom";
// import ReactStars from 'react-stars'
import style from './EditProfile.module.css';
import Navbar from '../MainNavbar/Navbar';
import Footer from '../MainFooter/Footer';


export default function AddHotel() {
  let navigate=useNavigate();

    const [passwordMismatch, setPasswordMismatch] = useState(false);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  useEffect(() => {
    if (id) {
      fetchUserData(id);
    }
  }, [id]);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/userdata/${userId}`);
      const userData = response.data;
      setEditData({
        fname: userData.fname,
        lname: userData.lname,
        email: userData.email,
        phone : userData.phone,
        dob: userData.dob,
        'profile': userData.profile,
        password: '', 
        confirmPassword: ''
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
   


  // let navigate=useNavigate();
  function gethoteldata(e) {
    let myhotel = {...editData};
    myhotel[e.target.name] = e.target.value;
    setEditData(myhotel);
    console.log( myhotel);
    
  }
  // const [rating, setRating] = useState(0); // State to hold the selected rating
  
  
  const [editData, setEditData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    phone : '',
    dob: '',
    'profile[]': [],

  });
  
  // const [selectedImage, setSelectedImage] = useState([]);

  // Function to handle file input change
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setEditData({ ...editData, profile: files });
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setImageSrc(imageUrl);
    
    
  };

  

  function addHotelData(e) {
    e.preventDefault();
    sendData();
    navigate('/profile/'+id);
    
  }
  async function sendData() {
      
    let formData = new FormData();
    formData.append('fname', editData.fname);
    formData.append('lname', editData.lname);
      formData.append('email', editData.email);
      formData.append('password', editData.password);
      formData.append('phone', editData.phone);
      formData.append('dob', editData.dob);
        
      
      editData.profile.forEach(file => {
        formData.append('profile[]', file);
      })      
      
      console.log(formData);
      console.log(id);
      try {
        
        let response = await axios.post(`http://localhost:8000/api/editprofile/${id}`, formData, {
          headers: {
            'X-HTTP-Method-Override': 'PUT' // Method override header
          }
        });
        console.log(response.data);
        navigate('/profile/'+id);
      } catch (error) {
        console.error(error);
      }
    }
    const avatars = (firstName, lastName, profileImage) => {
      if (profileImage && profileImage.length > 0) {
        return <img src={profileImage[0]} alt="Profile" className={style.profileImage} />;
      } else {
        const firstLetter = firstName.charAt(0).toUpperCase();
        const lastLetter = lastName.charAt(0).toUpperCase();
        return <div className={`rounded-circle fw-bold fs-1 text-muted ${style.avatar}`}>{firstLetter + lastLetter}</div>;
      }
    };
    
  return (
    <>
    <Navbar />
      <div className="container-fluid mt-5 pt-5 d-flex flex-wrap justify-content-center">
        <div className="row">
          <div className={`col col-3 d-flex flex-column justify-content-center align-items-center rounded-3 me-4 ${style.leftContainer} `}>
            <div className='d-flex justify-content-center align-items-center rounded-circle fw-bold fs-1 text-muted' style={{ width: '150px', height: '150px', backgroundColor: '#D9D9D9' }} >
              <img src={imageSrc} className="w-100 rounded-circle" alt="" />
            </div>
            <label htmlFor='' className='mt-5 mb-5 pb-5 text-center fw-bold text-muted'>{editData.fname + ' ' + editData.lname + ''}</label>
            <label htmlFor='profile' className='btn w-75 ' style={{ backgroundColor: '#47BCC2', color: '#fff' }}>Upload Profile</label>
          </div>
          <div className="col col-8 d-flex align-items-center ms-5">
            <form onSubmit={addHotelData} enctype="multipart/form-data">
              <input type='file' multiple name='profile'  accept="image/*" id='profile' onChange={handleImageChange} style={{ display: 'none' }}/>
              <div className='d-flex mb-3'>
                <label htmlFor="fname">First Name:</label>
                <input type="text" className='form-control w-100' name="fname" id="fname" value={editData.fname} onChange={gethoteldata} />
              </div>
              <div className='d-flex mb-3'>
                <label htmlFor="lname">Last Name:</label>
                <input type="text" className='form-control w-100' name="lname" id="lname" value={editData.lname} onChange={gethoteldata} />
              </div>
              <div className='d-flex mb-3'>
                <label htmlFor="email">Email:</label>
                <input type="email" className='form-control w-100' name="email" id="email" value={editData.email} onChange={gethoteldata} />
              </div>
              <div className='d-flex mb-3'>
                <label htmlFor="password">Password:</label>
                <input type="password" className='form-control w-100' name="password" id="password" onChange={gethoteldata} />
              </div>
              <div className='d-flex mb-3'>
                <label htmlFor="confirm-password">Re Enter Password:</label>
                <input type="password" className='form-control w-100' name="confirmPassword" id="confirm-password"  onChange={gethoteldata} />
              </div>
              {passwordMismatch && <div className="text-danger">Passwords do not match</div>}
              <div className='d-flex mb-3'>
                <label htmlFor="phone">Phone:</label>
                <input type="text" className='form-control w-100' value={editData.phone} name="phone" id="phone" onChange={gethoteldata} maxLength={11} />
              </div>
              <div className='d-flex mb-3'>
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" className='form-control w-100' value={editData.dob} name="dob" id="dob" onChange={gethoteldata} />
              </div>
              <div className="d-flex justify-content-end">
              <button type="submit" className={`btn rounded-pill ps-4 pe-4 pb-2 pt-2 `} style={{ backgroundColor: '#47BCC2', color: '#fff' }} disabled={loading}>
              {loading ? (<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>) : ('Edit')}
              </button>              
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
