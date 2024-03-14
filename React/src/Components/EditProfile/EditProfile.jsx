import React, { useState } from 'react';
import axios from 'axios';
import style from './EditProfile.module.css';

export default function EditProfile() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const inputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMismatch(true);
      return;
    }
    setPasswordMismatch(false);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/editprofile', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className={`col col-3 d-flex flex-column justify-content-center align-items-center rounded-3 me-4 ${style.leftContainer} `}>
            <img className={` mt-4 rounded-circle ${style.userImg}`} src='https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg' alt='room image' />
            <label htmlFor='image' className='mt-5 mb-5 pb-5 text-center'>Upload a photo</label>
            <input type='file' id='image' name='image' style={{ display: 'none' }} />
          </div>
          <div className="col col-8 d-flex align-items-center ms-5">
            <form onSubmit={handleSubmit}>
              <div className='d-flex mb-3'>
                <label htmlFor="name">User Name:</label>
                <input type="text" className='form-control w-100' name="username" id="username" onChange={inputChange} />
              </div>
              <div className='d-flex mb-3'>
                <label htmlFor="email">Email:</label>
                <input type="email" className='form-control w-100' name="email" id="email" onChange={inputChange} />
              </div>
              <div className='d-flex mb-3'>
                <label htmlFor="password">Password:</label>
                <input type="password" className='form-control w-100' name="password" id="password" onChange={inputChange} />
              </div>
              <div className='d-flex mb-3'>
                <label htmlFor="confirm-password">Re Enter Password:</label>
                <input type="password" className='form-control w-100' name="confirmPassword" id="confirm-password" onChange={inputChange} />
              </div>
              {passwordMismatch && <div className="text-danger">Passwords do not match</div>}
              <div className="d-flex justify-content-end">
                <button className={`btn rounded-pill ps-4 pe-4 pb-2 pt-2 `} style={{ backgroundColor: '#47BCC2', color: '#fff' }}>Edit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
