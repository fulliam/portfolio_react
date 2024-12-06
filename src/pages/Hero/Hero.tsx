import React from 'react';
import { motion } from 'framer-motion';
import { Laptop } from 'lucide-react';

import img1 from '@assets/images/slider/1.jpg';
import img2 from '@assets/images/slider/2.jpg';
import img3 from '@assets/images/slider/3.jpg';
import img4 from '@assets/images/slider/4.jpg';
import img5 from '@assets/images/slider/5.jpg';
import img6 from '@assets/images/slider/6.jpg';
import img7 from '@assets/images/slider/7.jpg';
import img8 from '@assets/images/slider/8.jpg';

import SocialSlider from '@components/SocialSlider/SocialSlider';
import ImageSlider from '@components/ImageSlider/ImageSlider';
import LocationMap from '@components/Map/LocationMap';
import ContactForm from '@components/Contact/ContactForm';
import HomeGrid from '@components/HomeGrid/HomeGrid';
import ThemeToggle from '@components/ThemeToggle/ThemeToggle';
import Blockquote from '@components/Blockquote/Blockquote';
import TechnologyCard from '@components/TechnologyCard/TechnologyCard';
import BilliardAnimation from '@components/BilliardAnimation/BilliardAnimation';
import './Hero.scss';

const images = [
  { url: img1, alt: 'Image 1' },
  { url: img2, alt: 'Image 2' },
  { url: img3, alt: 'Image 3' },
  { url: img4, alt: 'Image 4' },
  { url: img5, alt: 'Image 5' },
  { url: img6, alt: 'Image 6' },
  { url: img7, alt: 'Image 7' },
  { url: img8, alt: 'Image 8' },
];

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__intro">
        <motion.div 
          className="hero__content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="hero__avatar">
              <Laptop size={32} />
            </div>
            
            <div className="hero__text">
              <h1>
                I'm <span className="text-gradient">Your Name</span>
              </h1>
              <p>
                an enthusiastic Software developer from Kerala, India. 
                I'm passionate about PHP, Laravel, Tailwind CSS, technology, 
                and music, and I'm dedicated to using my skills to create 
                impactful solutions.
              </p>
            </div>
          </div>

          <div style={{ width: '300px', height: '300px' }}>
            <BilliardAnimation text="FRONTEND </br>DEVELOPER" />
          </div>
        </motion.div>

        <div className="hero__grid">
          <div className="card hero__grid-item-1">
            <Blockquote>
              📚 "If your problem can be solved just by thinking a little more, start." - <span style={{ color: '#39ea7e' }}>fulli@m</span>
            </Blockquote>
          </div>
          <div className="card hero__grid-item-2">
            <LocationMap />
          </div>
          <div className="card hero__grid-item-3">
            <ImageSlider images={images} interval={3000} />
          </div>
          <div className="card hero__grid-item-4">
            <ThemeToggle />
          </div>
          <div className="card hero__grid-item-5">
            <SocialSlider />
          </div>
          <div className="card hero__grid-item-6">
            <TechnologyCard />
          </div>
          <div className="card hero__grid-item-7">

          </div>
          <div className="card hero__grid-item-8">

          </div>
        </div>
        <HomeGrid />
        <ContactForm />
      </div>
    </section>
  );
};

export default Hero;