import {React, useState} from 'react'
import style from './Checkout.module.css'
import ReactStars from 'react-stars'

export default function AddRoom() {
  const [formData, setFormData] = useState({
    checkin:'',
    checkout:'',
    duration:'',
    numofrooms:0,

  });
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  const saveRating = () => {
    console.log('Rating:', rating);
  };
  return (
      <>
        <div className="container pt-5">
          <div className="row">
          <div className={`col col-3 d-flex flex-column justify-content-center align-items-center rounded-3 me-4 ${style.leftContainer}`} >
            <img className={`${style.hotelImg} mt-4 rounded-circle`} src='https://i0.wp.com/travelradar.aero/wp-content/uploads/2022/11/209646075.jpg' alt='room image'/>
            <h5 className='mt-3'>Hilton Alexandria </h5>
            <div className="stars">
            <ReactStars count={5} onChange={ratingChanged} size={40} color2={'#ffd700'} />
            </div>
            <p className='mt-3 mb-5 pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className="col col-7">
            <div>
            <h3>Single Room</h3>
            <p className='text-muted'>Joined in 2021</p>
            </div>
            <form method='post'>
              <div className="d-flex">
                <div className="d-flex flex-column me-3">
                  <label htmlFor="checkin">Check in :</label>
                  <input type="text" className='form-control w-75' name="checkin" id="check-in" />
                </div>
                <div className="d-flex flex-column me-3">
                  <label htmlFor="checkout">Check out :</label>
                  <input type='text' className='form-control w-75' name="checkout" id="check-out" />
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="duration">Duration:</label>
                  <input type='text' className='form-control w-75' name="duration" id="duration" />
                </div>
              </div>
              <div className="d-flex flex-column mt-4">
                <label htmlFor="numofrooms">Number of Rooms:</label>
                <input type='number' className=" form-control w-25" name="numofrooms" id="numofrooms" />
              </div>  
              <div className="d-flex flex-column align-items-end mt-4 pb-5">
                <p>Total Due:</p>
                <p>5000$</p>
              </div>
              <div className="btns d-flex justify-content-end mt-5">
              <button type='button' className='btn btn-link text-decoration-none text-dark'><i class="fa-solid fa-x me-2"></i>Cancel</button>
              <button type='submit' className={`btn rounded-pill ps-4 pe-4 pb-2 pt-2`} onClick={saveRating} style={{backgroundColor:'#47BCC2' , color:'white'}}>Pay Now</button>
              </div>
             
            </form>
            </div>
        </div>
        </div>
      </> 
   )
}
