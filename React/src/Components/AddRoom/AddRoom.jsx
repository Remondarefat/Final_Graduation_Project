import {React, useState} from 'react'
import style from './AddRoom.module.css'
import axios from 'axios';

export default function AddRoom() {
  const [formData, setFormData] = useState({
    type:'',
    price:0,
    view:'',
    image:null
  });
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const fileList = event.target.files;
    const imageUrls = [];
    for (let i = 0; i < fileList.length; i++) {
      const imageUrl = URL.createObjectURL(fileList[i]);
      imageUrls.push(imageUrl);
    }
    setImages(imageUrls); 
    setFormData({ ...formData, image: fileList }); // Save selected files to form data
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/addroom', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }

}
  return (
    <>
   <div className="container pt-5">
      <div className="row">
        <div className={`col col-3 d-flex flex-column align-items-center rounded-3 pt-3 me-4 ${style.leftContainer}`}>
          <img className={`mt-4 rounded-circle ${style.adminImg}`} src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="room image" />
          <h6 className="mt-5 mb-5 pb-5">Salma El Marhoumi</h6>
        </div>
        <div className="col col-8">
          <h3 className={style.addingRoom}>Adding Room</h3>
          <h6 className="fw-bold pt-3 pb-3">Hotel: Hilton</h6>
          <form method='post' onSubmit={handleSubmit}>
            <div className="d-flex">
              <div className="d-flex flex-column me-5">
                <label htmlFor="room-type" className="mb-3 fw-bold text-muted">Room Type :</label>
                <input type="text" className="form-control w-75" onChange={handleInputChange} name="type" id="room-type" />
              </div>
              <div className="d-flex flex-column me-5">
                <label htmlFor="price/night" className="mb-3 fw-bold text-muted">Price/Night :</label>
                <input type="text" className="form-control w-75" onChange={handleInputChange} name="price" id="price/night" />
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="room-view" className="mb-3 fw-bold text-muted">Room View :</label>
                <input type="text" className="form-control w-75" onChange={handleInputChange} name="view" id="room-view" />
              </div>
            </div>
            <div className="mt-3 d-flex flex-column align-items-center ms-5 ps-5">
              <div className={`rounded-2 ${style.imageContainer}`}>
                  {images.map((imageUrl, index) => (
                  
                      <img className={`${style.uploadedImage}`} src={imageUrl} alt={`Slide ${index}`}   />
                  ))}
              </div>
              <label htmlFor="image" className={`btn mt-3 w-25`} style={{ backgroundColor: '#47BCC2' ,color: '#fff' }}>Upload Images <i class="fa-solid fa-cloud-arrow-up"></i> </label>
              <input type="file" id="image" name="image" multiple onChange={handleImageUpload} accept="image/*" style={{ display: 'none' }} />
            </div>
            <div className="btns d-flex justify-content-end mt-5">
              <button type="button" className="btn text-decoration-none text-dark"><i className="fas fa-times me-2"></i>Cancel</button>
              <button type="submit" className={`btn rounded-pill ps-4 pe-4 pb-2 pt-2`}  style={{ backgroundColor: '#47BCC2' ,color: '#fff' }}>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
