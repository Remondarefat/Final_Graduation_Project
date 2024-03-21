import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; 
import './HotelSlider.css';

const images = [
  'hs1.png',
  'hs2.png',
  'hs3.png',
  'hs4.png',
  'hs5.png',
  'hs6.png',
  'hs7.png',
  'hs8.png',
  'hs9.png',
  'hs10.png',
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    const newIndex = (activeIndex - 1 + images.length) % images.length; // Handles looping
    setActiveIndex(newIndex);
  };

  const handleNextSlide = () => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
  };

  return (
    <div className='slider'>
      <div className="slider-container mb-5">
        <AwesomeSlider
          fillParent={false}
          // delay={500} // Delay between transitions (optional)
          // transitionDuration={50} // Transition duration in milliseconds
          interval={1000} // Automatic transition interval in milliseconds
          currentIndex={activeIndex} // Set initial active index
          style={{ backgroundColor: 'transparent' }} // Inline style for the background
        >
          {images.map((image) => (
            <div key={image} className="slider-item">
              <img className='w-100' src={image} alt="Slider Image" />
            </div>
          ))}
        </AwesomeSlider>
      </div>
    </div>
  );
}
