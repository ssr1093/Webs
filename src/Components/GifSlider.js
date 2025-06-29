import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';  // ✅ Import Framer Motion
import './GifSlider.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GifSlider = () => {
  const gifs = [
    '/images/1.gif',
    '/images/2.gif',
    '/images/3.gif',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
  };

  return (
    <div className="gif-slider-container">
      <Slider {...settings}>
        {gifs.map((src, index) => (
          <div key={index} className="slide">
            <div className="image-wrapper">
              <img src={src} alt={`Slide ${index + 1}`} className="gif-image" />
              <motion.div
                className="overlay-text"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <h2 style={{ textAlign: 'center', lineHeight: '1' }}>
  Welcome to <br />
  Sunshine <br />
  Smart Kids
</h2>     

              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GifSlider;
