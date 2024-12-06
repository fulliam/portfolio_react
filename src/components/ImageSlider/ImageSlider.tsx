import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ImageSlider.scss';

interface Image {
  url: string;
  alt: string;
}

interface ImageSliderProps {
  images: Image[];
  interval?: number;
  opacity?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 4000, opacity = 1 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setNextIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="image-slider">
      <div className="slider-content">
        <motion.img
          key={images[currentIndex].alt}
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="slider-image"
          initial={{ y: 0 }}
          animate={{ y: 0, opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <motion.img
          key={images[nextIndex].alt}
          src={images[nextIndex].url}
          alt={images[nextIndex].alt}
          className="slider-image"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: opacity }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
