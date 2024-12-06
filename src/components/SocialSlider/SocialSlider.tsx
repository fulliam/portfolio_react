import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import './SocialSlider.scss';

const socialLinks = [
  { icon: <Github size={24} />, url: 'https://github.com', name: 'GitHub', bgColor: '#333' },
  { icon: <Twitter size={24} />, url: 'https://twitter.com', name: 'Twitter', bgColor: '#1DA1F2' },
  { icon: <Linkedin size={24} />, url: 'https://linkedin.com', name: 'LinkedIn', bgColor: '#0077B5' },
  { icon: <Instagram size={24} />, url: 'https://instagram.com', name: 'Instagram', bgColor: 'linear-gradient(115deg,#f9ce34,#ee2a7b,#6228d7)' },
];

const SocialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [paused, setPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % socialLinks.length);
    setPaused(true);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + socialLinks.length) % socialLinks.length);
    setPaused(true);
  };

  useEffect(() => {
    if (sliderRef.current) {
      setContainerWidth(sliderRef.current.offsetWidth - 3);
    }

    const handleResize = () => {
      if (sliderRef.current) {
        setContainerWidth(sliderRef.current.offsetWidth - 3);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000);
      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => setPaused(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [paused]);

  return (
    <div className="social-slider" ref={sliderRef}>
      <button className="slider-control prev" onClick={handlePrev}>
        <ChevronLeft size={20} />
      </button>

      <div className="slider-content">
        <AnimatePresence initial={false}>
          {socialLinks.map((link, index) =>
            index === currentIndex ? (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ background: link.bgColor }}
                initial={{ x: direction === 'right' ? containerWidth : -containerWidth }}
                animate={{ x: 0 }}
                exit={{ x: direction === 'right' ? -containerWidth : containerWidth }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              >
                {link.icon}
              </motion.a>
            ) : null
          )}
        </AnimatePresence>
      </div>

      <button className="slider-control next" onClick={handleNext}>
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default SocialSlider;
