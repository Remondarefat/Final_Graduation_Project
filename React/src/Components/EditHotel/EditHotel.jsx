import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams , useNavigate } from 'react-router-dom';
import ReactStars from 'react-stars'

export default function EditHotel() {

  let allparams = useParams();
  let Navigate = useNavigate();
  console.log(allparams.id);

  const [rating, setRating] = useState(0); // State to hold the selected rating
  const [hoteldetails, sethoteldetails] = useState({}); // State to hold the selected rating
  const [hotel, setHotel] = useState({});
  const [isloading, setIsloading] = useState(false);

  
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
    setIsloading(true);
    setHotel(hotelData);
    console.log(hotelData);
  }
  useEffect(() => {
    getHotelDetails();
  },[])

  function addHotelData(e) {
    e.preventDefault();
    sendData();
    Navigate(`/allhotel`);
    
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
    {isloading? <>
    <div className="container mt-md-5">
      <div className="row">
        <div className="col-md-3 bg-light d-flex align-items-center justify-content-start flex-column  p-3 side-nav">
        {hoteldetails.images && hoteldetails.images.length > 0 && (
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {hoteldetails.images.map((image, index) => (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <img src={image.image} className="d-block w-100" />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          )}
            <div className="mb-3 mt-md-3">
            <label htmlFor="exampleFormControlInput1" className="form-label text-center fw-bold">Admin</label>
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
                <div className='w-100 h-25 d-flex justify-content-end'>
                  <button type='submit' className='border-0 btn-update p-2 px-5 rounded-3 text-white h4'>Edit</button>
                </div>
              </div>
            </div>

        </form>

          
        </div>
        
      </div>
    </div>
  </>:<div className='loading-page'>
                
                </div>}
  </>
}
