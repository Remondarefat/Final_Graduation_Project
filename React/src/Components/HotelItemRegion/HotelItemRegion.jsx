import React, { useEffect, useState } from 'react'

export default function HotelItem({ item }) {
    
    console.log(item.room.length);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentImageIndex(prevIndex =>
            prevIndex === item.image.length - 1 ? 0 : prevIndex + 1
        );
        }, 5000);

        return () => clearInterval(intervalId);
    }, [item.image.length]);
    return <>
        <div className="col-md-3 mb-5  ">
            <div className=' position-relative '>
                <div className=' position-relative '>
                <img src={item.image[currentImageIndex].image} className='w-100 hotel-img' alt="" />

                <div className='position-absolute justify-content-center align-items-center  w-100 btn-addroom'>
                        <button className='btn btn-upload btn-back me-2'>Book Room</button>
                </div>
                </div>
                <h4 className='hotel-name-height mt-1'>{item.name}</h4>
                <p className='available-title'>{item.location}</p>
                <div className='d-flex '>
                    <div className='me-4 d-flex align-items-center '>
                        <img src="bed.png" className='= room-icon ' alt="" />
                        <p className=' p-0 m-0'>{item.room.length}</p>

                    </div>
                    <div className='me-4 d-flex align-items-center'>
                        <img src="vector1.png" className='room-icon' alt="" />
                        <p className='p-0 m-0'>5</p>

                    </div>
                    <div className='me-4 d-flex align-items-center'>
                        <img src="car_icon.png" className='room-icon' alt="" />
                        <p className='p-0 m-0'>2</p>

                    </div>
                    <div className='me-4 d-flex align-items-center'>
                        <img src="pet_icon.png" className='room-icon' alt="" />
                        <p className='p-0 m-0'>1</p>

                    </div>
                    
                </div>
            </div>
        </div>
    </>
}
