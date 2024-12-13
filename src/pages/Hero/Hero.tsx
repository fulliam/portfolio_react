import React, { useRef } from 'react';
import { motion } from 'framer-motion';

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
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';
import Blockquote from '@components/Blockquote/Blockquote';
import { MousePointerClick } from 'lucide-react';
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
  const textRef = useRef<HTMLHeadingElement | null>(null);

  return (
    <section className="hero">
      <div className="hero__intro">
        <div className="hero__grid">
          <div className="card hero__grid-item-1">
            <motion.div 
              className="hero__content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="hero__text">
                <h1>
                  I'm <span 
                    className="text-gradient"
                    ref={textRef}
                  >
                    Your Name
                  </span>
                </h1>
                <p>
                  an enthusiastic Software developer from Kerala, India. 
                  I'm passionate about PHP, Laravel, Tailwind CSS, technology, 
                  and music, and I'm dedicated to using my skills to create 
                  impactful solutions.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="card hero__grid-item-2">
            <LocationMap />
          </div>
          <div className="card hero__grid-item-3">
            <ImageSlider images={images} interval={3000} />
          </div>
          <div className="card hero__grid-item-4">
            <ThemeSwitcher />
          </div>
          <div className="card hero__grid-item-5">
            <SocialSlider />
          </div>
          <div className="card hero__grid-item-6">
            <TechnologyCard />
          </div>
          <div className="card hero__grid-item-7">
            <BilliardAnimation text="DEV</br>NOW" />
          </div>
          <div className="card hero__grid-item-8">
            <Blockquote>
              📚 If your problem can be solved just by thinking little more, 
              <div className='blockquote-action'>
                <button className='blockquote-action-button'>
                  START.
                  <MousePointerClick className='blockquote-action-button__icon' />
                </button>
                &nbsp; - <span style={{ color: '#39ea7e' }}>fulli@m</span>
              </div>
            </Blockquote>
          </div>
        </div>
      </div>

      <ContactForm />
    </section>
  );
};

export default Hero;