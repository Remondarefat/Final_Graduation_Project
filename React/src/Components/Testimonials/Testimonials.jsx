import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Marwan Salem',
    review: 'Review on Hilton Alexandria',
    rating: 5,
    image: '/logo512.png',
  },
  {
    name: 'Marwan Salem',
    review: 'Review on Hilton Alexandria',
    rating: 5,
    image: '/logo512.png',
  },
  {
    name: 'Marwan Salem',
    review: 'Review on Hilton Alexandria',
    rating: 3,
    image: '/logo512.png',
  },
  {
    name: 'Marwan Salem',
    review: 'Review on Hilton Alexandria',
    rating: 2.5,
    image: '/logo512.png',
  },

  // Add other testimonials as needed
];

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
      <h2 className='mb-3'>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
