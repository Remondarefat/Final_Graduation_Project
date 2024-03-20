import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ReactStars from 'react-stars'

export default function EditHotel() {

  let allparams = useParams();
  console.log(allparams.id);

  const [rating, setRating] = useState(0); // State to hold the selected rating
  const [hoteldetails, sethoteldetails] = useState({}); // State to hold the selected rating
  const [hotel, setHotel] = useState({});
  
  function edithoteldata(e) {
    let myhotel = {...hotel};
    myhotel[e.target.name] = e.target.value;
    setHotel(myhotel);
    console.log( myhotel);
  
  }
  
  
  const handleRatingChange = (newRating) => {
    sethoteldetails({ ...hoteldetails, stars: newRating });
    setRating(hoteldetails.stars); // Update the selected rating state
    // console.log(newRating);
    setHotel({ ...hotel, stars: newRating });
  };

  async function getHotelDetails() {
    let id=allparams.id;
    let { data } = await axios.get(`http://localhost:8000/api/hotels/${id}`);
    let hotelData = data;
    sethoteldetails(hotelData);
    setHotel(hotelData);
    // console.log(hotelData);
  }
  useEffect(() => {
    getHotelDetails();
  },[])

  function addHotelData(e) {
    e.preventDefault();
    sendData();
    
  }
  async function sendData() {
    let formData = {
      name:hotel.name,
      location:hotel.location,
      description:hotel.description,
      stars:hotel.stars
    }
    
    console.log(formData);
    console.log(hotel);
    let id=allparams.id;
    try {
        let { data } = await axios.put(`http://localhost:8000/api/hotels/${id}`, formData);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
  }


  return <>
    <div className="container mt-md-5">
      <div className="row">
        <div className="col-md-3 bg-light d-flex align-items-center justify-content-start flex-column  p-3 side-nav">
          <img src="https://apolix.global/wp-content/themes/apolix/assets/img/spheres/sphere-white.png" className='w-75 rounded-circle' alt="asasdasdasd" />
          <div className="mb-3 mt-md-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="User Email" />
          </div>
        </div>
      
        <div className="col-md-6 d-flex align-items-start">
        <form action="put" onSubmit={addHotelData}>

            <div className="row">
              <div className="col-md-9 d-flex">
                <div className="mb-3 mt-md-3 me-4">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Hotel Name</label>
                  <input type="text" onChange={edithoteldata} className="form-control" name='name' id="exampleFormControlInput1"  defaultValue={hoteldetails.name} placeholder="Hotel Name" />

                  
                </div>
                  <div className="mb-3 mt-md-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Hotel Location</label>
                  <input type="text" onChange={edithoteldata} className="form-control" name='location' id="exampleFormControlInput1" defaultValue={hoteldetails.location} placeholder="Hotel Description" />
                </div>

              </div>
              <div className="col-md-12 ">

          <div className="mb-3 mt-md-3">
              <label htmlFor="exampleFormControlInput1" className="form-label ">Hotel Description</label>
              <textarea className="form-control" onChange={edithoteldata} name='description' defaultValue={hoteldetails.description} id="exampleFormControlTextarea1" rows="7"></textarea>

              
                </div>
                
            <div className="mb-3 mt-md-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Rating</label>
              <ReactStars className="p-0 m-0 rate" count={5} size={48} color2={'#ffd700'} half={false} onChange={handleRatingChange} value={hoteldetails.stars} />
              <label htmlFor="" onChange={edithoteldata} name="rating" className="d-none">{ hoteldetails.stars}</label> 
                </div>
                <div className='w-100 d-flex justify-content-end'>
                  <button type='submit' className='border-0 btn-update p-3 px-5 rounded-3 text-white h3'>Edit</button>
                </div>
              </div>
            </div>

        </form>

          
        </div>
        
      </div>
    </div>
  </>
}
