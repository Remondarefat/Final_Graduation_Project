import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './Testimonials.css';

const Testimonials = ({ hotelId }) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/reviews/${hotelId}`);
        setTestimonials(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, [hotelId]);


const TestimonialCard = ({ name, review, rating, image }) => {
  return (
    <div className="testimonial-card">
    <div className="user-image-container">
      <img src={image} alt="User" className="user-image" />
    </div>
    <div className="testimonial-content">
      <p className="testimonial-name">{name}</p>
      <p className="testimonial-review">{review}</p>
      <div className="testimonial-rating">
        {'★'.repeat(rating)}
      </div>
    </div>
  </div>
  
  );
};

const Testimonials = () => {
  return (
    <div className="testimonials p-3  align-items-center text-center ">
      <h2 className='mb-3 title '>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};
}

export default Testimonials;
