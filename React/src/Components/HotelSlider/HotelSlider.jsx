import React, { useState, useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './HotelSlider.css';

const imagesByRegion = {
  NorthCoast: [
    '/nc2.png',
    '/nc3.png',
    '/nc1.png',
  ],
  Cairo: [
    '/c3.png',
    '/c2.png',
    '/c1.png',
  ],
  Oasis: [
    '/o2.png',
    '/o1.png',
    '/o3.png',
  ],
  Sinai: [
    '/s3.png',
    '/s1.png',
    '/s2.png',
  ],
  UpperEgypt: [
    '/u4.png',
    '/u3.png',
    '/u1.png',
    '/u2.png',
  ],
  RedSea: [
    '/r1.png',
    '/r2.png',
    '/r3.png',
  ]

};
export default function Slider({ item }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState([]);
  const savedRegion = localStorage.getItem('region');

  useEffect(() => {
    setActiveIndex(0);
    // Check if savedRegion matches any region in imagesByRegion
    if (imagesByRegion[savedRegion]) {
      setImages(imagesByRegion[savedRegion]);
    } else {
      // If savedRegion doesn't match, use the default images for the current item
      setImages(imagesByRegion[item] || []);
    }
  }, [item, savedRegion]);

  const handlePrevSlide = () => {
    const newIndex = (activeIndex - 1 + images.length) % images.length; // Handles looping
    setActiveIndex(newIndex);
  };
  const handleNextSlide = () => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
  };

  return (
    <div className='slider ' style={{paddingTop: '80px'}}>
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
            <div key={image} className="slider-item" style={{width: '-webkit-fill-available'}}>
              <img className='w-100 container-fluid' src={image} alt="Slider Image" />
            </div>
          ))}
        </AwesomeSlider>
      </div>
    </div>
  );
}
