import React, { useState , useEffect } from 'react';
import './Testimonials.css';
import axios from 'axios';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/reviews`);
        setTestimonials(response.data.reviews); 
        console.log(response.data.reviews);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);


  const TestimonialCard = ({ testimonial }) => {
    return (
      <div className="testimonial-card">
        <div className="user-image-container">
          {/* <img src={testimonial.user.image} alt="User" className="user-image" /> */}
        </div>
        <div className="testimonial-content">
          <p className="testimonial-name">{testimonial.user.fname} {testimonial.user.lname}</p>
          <p className="testimonial-review">{testimonial.feedback}</p>
          <div className="testimonial-rating">
            {'★'.repeat(testimonial.rating)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="testimonials p-3 align-items-center text-center">
      <h2 className='mb-3 title'>Testimonials</h2>
      <div className="testimonials-container">
        {Array.isArray(testimonials) && testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))
        ) : (
          <p>No testimonials available</p>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
