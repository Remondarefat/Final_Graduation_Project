import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import style from './EditProfile.module.css';
import Navbar from '../MainNavbar/Navbar';
import Footer from '../MainFooter/Footer';
export default function EditProfile() {
  const [editData, setEditData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone : '',
    dob : '',
  });

  const inputChange = (event) => {
    const { name, value } = event.target;
    setEditData({ ...editData, [name]: value });
  };

  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
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
        dob : userData.dob,
        password: '', 
        confirmPassword: ''
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (editData.password !== editData.confirmPassword) {
      setPasswordMismatch(true);
      return;
    }
    setPasswordMismatch(false);

    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/editprofile/${id}`, editData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  const avatars = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const lastLetter = lastName.charAt(0).toUpperCase();
    return firstLetter + lastLetter;
  };
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
    <Navbar />
      <div className="container-fluid mt-5 pt-5 d-flex flex-wrap justify-content-center">
        <div className="row">
          <div className={`col col-3 d-flex flex-column justify-content-center align-items-center rounded-3 me-4 ${style.leftContainer} `}>
            <div className='d-flex justify-content-center align-items-center rounded-circle fw-bold fs-1 text-muted' style={{ width: '150px', height: '150px', backgroundColor: '#D9D9D9' }} >{avatars(editData.fname, editData.lname)}</div>
            <label htmlFor='profile' className='mt-5 mb-5 pb-5 text-center fw-bold text-muted'>{editData.fname + ' ' + editData.lname + ''}</label>
          </div>
          <div className="col col-8 d-flex align-items-center ms-5">
            <form onSubmit={handleSubmit} enctype="multipart/form-data">
              <div className='d-flex mb-3'>
                <label htmlFor="fname">First Name:</label>
                <input type="text" className='form-control w-100' name="fname" id="fname" value={editData.fname} onChange={inputChange} />
              </div>
              <div className='d-flex mb-3'>
                <label htmlFor="lname">Last Name:</label>
                <input type="text" className='form-control w-100' name="lname" id="lname" value={editData.lname} onChange={inputChange} />
              </div>
              <div className='d-flex mb-3'>
                <label htmlFor="email">Email:</label>
                <input type="email" className='form-control w-100' name="email" id="email" value={editData.email} onChange={inputChange} />
              </div>
              <div className='d-flex mb-3'>
                <label htmlFor="password">Password:</label>
                <input type="password" className='form-control w-100' name="password" id="password" onChange={inputChange} />
              </div>
              <div className='d-flex mb-3'>
                <label htmlFor="confirm-password">Re Enter Password:</label>
                <input type="password" className='form-control w-100' name="confirmPassword" id="confirm-password"  onChange={inputChange} />
              </div>
              {passwordMismatch && <div className="text-danger">Passwords do not match</div>}
              <div className='d-flex mb-3'>
                <label htmlFor="phone">Phone:</label>
                <input type="text" className='form-control w-100' value={editData.phone} name="phone" id="phone" onChange={inputChange} maxLength={11} />
              </div>
              <div className='d-flex mb-3'>
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" className='form-control w-100' value={editData.dob} name="dob" id="dob" onChange={inputChange} />
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