import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function HotelItem({ item }) {
    
    // console.log(item.room.length);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentImageIndex(prevIndex =>
            prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
        );
        }, 5000);
        console.log(item);
        return () => clearInterval(intervalId);
    }, [item.images.length]);
   
    return <>
        <div className="col-md-3 mb-5  ">
            <div className=' position-relative '>
                <div className=' position-relative '>
                    {/* <img src={item.images[currentImageIndex].image} className='w-100 hotel-img' alt="" /> */}
                    {item.images[currentImageIndex].image.startsWith("http")?<img src={item.images[currentImageIndex].image} className='w-100 hotel-img' alt="" />:<img src={`http://localhost:8000/images/${item.images[currentImageIndex].image}`} className='w-100 hotel-img' alt="" />}
                    

                <div className='position-absolute justify-content-center align-items-center  w-100 btn-addroom'>
                    <Link to={`/hotelrooms/${item.id}`}><button  className='btn btn-upload btn-back me-2'>More Details</button> </Link> 
                </div>

                </div>
                <h4 className='hotel-name-height mt-1'>{item.name}</h4>
                <p>{item.location}</p>
            </div>
        </div>
    </>
}
