import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; 
import './slider.css';

const images = [
  'Nyla-Logo.png',
  'logo192.png',
  'pro.jpg',
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    const newIndex = (activeIndex - 1 + images.length) % images.length; 
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
        delay={500} 
        transitionDuration={1000} 
        currentIndex={activeIndex}
        
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