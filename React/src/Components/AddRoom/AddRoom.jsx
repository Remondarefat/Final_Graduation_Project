import {React, useState , useEffect} from 'react'
import style from './AddRoom.module.css'
import axios from 'axios';
import { useParams , useNavigate } from 'react-router-dom';
import { log } from 'async';
export default function AddRoom() {
  const { hotelId , hotelName} = useParams();
  const [userFullName, setUserFullName] = useState('');
  const [images, setImages] = useState([]);
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    type:'',
    price:0,
    view: '',
    description:'',
    image:[],
  });
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files.map(file => URL.createObjectURL(file)));
    setFormData({ ...formData, image: files });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  function addRoomData(e) {
    e.preventDefault();
    sendData();
    
    
  }
  async function sendData() {
    let formDataToSend = new FormData();
    formDataToSend.append('type', formData.type);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('view', formData.view);  
    formDataToSend.append('description', formData.description);  
    formDataToSend.append('hotel_id', hotelId);
    formData.image.forEach(file => {
      formDataToSend.append('image[]', file);
    });
    console.log(formDataToSend);
    
    try {
     
      let { data } = await axios.post("http://localhost:8000/api/addroom", formDataToSend);
      console.log(data);
      Navigate(`/allhotel`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
        <div className="container mt-4">
        <div className="row  ">
          <div className="col-md-3 nav-background py-4 side-nav text-center h-100" >
          <img className={`mt-4 rounded-circle d-flex ms-5  ${style.adminImg}`} src="https://i.pinimg.com/564x/23/7a/49/237a4942d8f2e635f83266cb0766916f.jpg" alt="room image" />
          <h6 className="mt-5 mb-5 pb-5">Admin</h6>
        </div>
        <div className="col-md-8 ms-4  side-nav">
          <h3 className={style.addingRoom}>Adding Room</h3> 
          <h6 className="fw-bold pt-3 pb-3">{hotelName}</h6>
          <form method='post' onSubmit={addRoomData} enctype="multipart/form-data">
            <div className="d-flex flex-wrap">
              <div className="d-flex flex-column flex-wrap me-5">
                <label htmlFor="room-type" className="mb-3 fw-bold text-muted">Room Type :</label>
                <input type="text" className="form-control w-75 d-flex align-self-start" onChange={handleInputChange} name="type" id="room-type" />
              </div>
              <div className="d-flex flex-column me-5">
                <label htmlFor="price/night" className="mb-3 fw-bold text-muted">Price/Night :</label>
                <input type="text" className="form-control w-75  d-flex align-self-start" onChange={handleInputChange} name="price" id="price/night" />
              </div>
              <div className="d-flex flex-column me-5">
                <label htmlFor="room-view" className="mb-3 fw-bold text-muted">Room View :</label>
                <input type="text" className="form-control w-75  d-flex align-self-start" onChange={handleInputChange} name="view" id="room-view" />
              </div>
              <div className="d-flex flex-column ">
                <label htmlFor="room-description" className="mb-3 fw-bold text-muted">Room Discription :</label>
                <input type="text" className="form-control w-75  d-flex align-self-start" onChange={handleInputChange} name="description" id="room-description" />
              </div>
            </div>
            <div className="mt-3 d-flex flex-column align-items-center ">
              <div className={`rounded-2 ${style.imageContainer}`}>
                  {images.map((imageUrl, index) => (
                  
                      <img className={`${style.uploadedImage}`} src={imageUrl} alt={`Slide ${index}`}   />
                  ))}
              </div>
              <label htmlFor="image" className={`btn mt-3 w-25`} style={{ backgroundColor: '#47BCC2' ,color: '#fff' }}>Upload Images <i class="fa-solid fa-cloud-arrow-up"></i> </label>
              <input type="file" id="image" name="image" multiple onChange={handleImageUpload} accept="image/*" style={{ display: 'none' }}  />
            </div>
            <div className="btns d-flex justify-content-end mt-5 mb-5 ">
              <button type="button" className="btn text-decoration-none text-dark mb-5"><i className="fas fa-times me-2"></i>Cancel</button>
              <button type="submit" className={`btn rounded-pill ps-4 pe-4 pb-2 pt-2 mb-5`}  style={{ backgroundColor: '#47BCC2' ,color: '#fff' }}>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
