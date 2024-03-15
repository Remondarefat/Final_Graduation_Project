import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; // Import styles for AwesomeSlider

const images = [
  'Nyla-Logo.png',
  'logo192.png',
  'pro.jpg',
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
        delay={500} // Delay between transitions (optional)
        transitionDuration={1000} // Transition duration in milliseconds
        currentIndex={activeIndex} // Set initial active index
      >
        {images.map((image) => (
          <div key={image} className="slider-item">
            <img src={image} alt="Slider Image" />
          </div>
        ))}
      </AwesomeSlider>

      
    </div>
    </div>
  );
}