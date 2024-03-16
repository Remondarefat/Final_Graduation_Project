import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import style from './EditProfile.module.css';

export default function EditProfile() {
  const [editData, setEditData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone : '',
    dob : '',
    profile:null
  });

  const inputChange = (event) => {
    const { name, value } = event.target;
    setEditData({ ...editData, [name]: value });
  };

  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setEditData({ ...editData, profile: file });
  };
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
        profile: userData.profile,
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
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      <div className="container-fluid pt-5 d-flex flex-wrap justify-content-center">
        <div className="row">
          <div className={`col col-3 d-flex flex-column justify-content-center align-items-center rounded-3 me-4 ${style.leftContainer} `}>
          <img  className={` mt-4 rounded-circle ${style.userImg}`} src={editData.profile ? URL.createObjectURL(editData.profile) : 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'} alt='room image' />
            <label htmlFor='profile' className='mt-5 mb-5 pb-5 text-center'>Upload a photo</label>
          </div>
          <div className="col col-8 d-flex align-items-center ms-5">
            <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <input type='file' id='profile' name='profile' style={{ display: 'none' }}  onChange={handleImageChange} />
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
                <input type="text" className='form-control w-100' value={editData.phone} name="phone" id="phone" onChange={inputChange}  />
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
    </>
  );
}
