import axios from "axios";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import ReactStars from 'react-stars'


export default function AddHotel() {

  let navigate=useNavigate();
  function gethoteldata(e) {
    let myhotel = {...hotel};
    myhotel[e.target.name] = e.target.value;
    setHotel(myhotel);
    console.log( myhotel);
    
  }
  const [rating, setRating] = useState(0); // State to hold the selected rating
  
  
  const handleRatingChange = (newRating) => {
    setRating(newRating); // Update the selected rating state
    console.log(newRating);
    setHotel({ ...hotel, stars: newRating });
  };
  const [hotel, setHotel] = useState({
    name: "",
    location: "",
    description: "",
    region: "",
    stars: rating,
    // numberofrooms: "",
    'image[]':[]
    
  });
  
  const [selectedImage, setSelectedImage] = useState([]);

  // Function to handle file input change
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setHotel({ ...hotel, image: files });
    setSelectedImage(files.map(file => URL.createObjectURL(file)));
    console.log(hotel);
    
  };

  function addHotelData(e) {
    e.preventDefault();
    sendData();
    
  }
  async function sendData() {
    let formData = new FormData();
    formData.append('name', hotel.name);
    formData.append('location', hotel.location);
    formData.append('description', hotel.description);
    formData.append('region', hotel.region);
    formData.append('stars', hotel.stars);
    hotel.image.forEach(file => {
      formData.append('image[]', file);
    });
    
    console.log(formData);
    try {
      let { data } = await axios.post("http://localhost:8000/api/hotels", formData);
      console.log(data.image);
      navigate("/allhotel");
    } catch (error) {
        console.error(error);
      }
  }
  
  return (
    <>
      <div className="container mt-4">
        <div className="row  ">
          <div className="col-md-3 nav-background py-4 side-nav text-center">
            <img src="admin.png" className="w-50 rounded-circle mb-2" alt="" />
            <h3 className="text-muted">Admin</h3>
          </div>

          <div className="col-md-8 ms-4  side-nav">
          <form onSubmit={addHotelData} enctype="multipart/form-data">

              <h2 style={{ color: "#47BCC2" }}>Adding Hotel</h2>
              <div className="row">
                <div className="dic col-md-4">
                  <div className="mb-3">
                      <label htmlFor="name" className="form-label">Hotel Name</label>
                      <input type="text" className="form-control" id="name" name="name" onChange={gethoteldata} placeholder="Hotel Name"/>
                  </div>
                </div>
                <div className="dic col-md-4">
                <div className="mb-3">
                      <label htmlFor="HotelDesc" className="form-label">Hotel Description</label>
                      <input type="text" className="form-control" onChange={gethoteldata} name="description" id="HotelDesc" placeholder="Hotel Description"/>
                  </div>
                </div>
                <div className="dic col-md-4">
                <div className="mb-3 ">
                        <label htmlFor="HotelRegion" className="form-label">Hotel Region</label>
                        <select defaultValue="" onChange={gethoteldata}  name="region" className="form-select">
                          <option value="">Not Selected</option>
                          <option value="northCoast">northCoast</option>
                          <option value="upperEgypt" >upperEgypt</option>
                          <option value="sinai">sinai</option>
                          <option value="redSea" >redSea</option>
                          <option value="cairo" >cairo</option>
                          <option value="oasis" >oasis</option>
                        </select>
                      </div>
                </div>
                </div>
                <div className="row">
                <div className=" col-md-4">
                  <iframe className="tex-center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16819228.534361046!2d18.693281982702832!3d23.523179168466793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2seg!4v1710337274387!5m2!1sen!2seg"
                    width="100%"
                    height="350px"
                    allowFullScreen=""
                    loading="lazy"
                    title="Responsive Google Maps"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="p-3">
                        <h2 className="p-0 m-0">Stars:</h2>
                        <ReactStars className="p-0 m-0" count={5} size={48} color2={'#ffd700'} half={false} onChange={handleRatingChange} value={rating} />
                        <label htmlFor="" name="rating" className="d-none">{ rating}</label>

                      </div>
                      <div className="mb-3">
                      <label htmlFor="HotelLocation" className="form-label">Hotel Location</label>
                      <input type="text" className="form-control" onChange={gethoteldata} name="location" id="HotelLocation" placeholder="Hotel Location"/>
                  </div>
                    </div>
                  </div>
                <div className={selectedImage!==null &&  selectedImage.length > 4 ?"w-100 nav-background mt-2 d-flex flex-wrap align-items-center p-2":"w-100 nav-background images-dev mt-2 d-flex flex-wrap align-items-center p-2"}>
                  {selectedImage!==null?selectedImage.map((imageUrl, index) => (
                    <div className="w-25 p-2" key={index}><img  src={imageUrl} alt={`Selected ${index}`} className="w-100 img-slid" /></div>
                  )):''}
                </div>
                <div className="w-100 text-center">
                  <label htmlFor="image" className="btn btn-upload mt-4">Upload Image<img src="vector.png" className="mx-2" alt="" /></label>
                  <input
                    type="file"
                      id="image"
                      multiple 
                      accept="image/*"
                      name="image"
                      onChange={handleImageChange}
                      className='d-none'
                  />
                </div>
                  
                </div>
              
            </div>
            <div className="w-100 text-center mt-2">

              <button type="submit" className="btn btn-dark w-50 mb-5">Add Hotel</button>
            </div>
          </form>
            </div>
        </div>
       
      </div>
    </>
  );
}
