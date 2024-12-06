import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Button from '../UI/Button';
import Input from '../UI/Input';

import QR from '@assets/images/qr_fulliam_tg.png';
import QR2 from '@assets/images/qr_fulliam_tg_2.png';
import QR3 from '@assets/images/qr_fulliam_tg_3.png';

import ImageSlider from '@components/ImageSlider/ImageSlider';
import './ContactForm.scss';

const images = [
  { url: QR, alt: 'Image 1' },
  { url: QR2, alt: 'Image 2' },
  { url: QR3, alt: 'Image 3' },
];

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* QR Code Section */}
      <div className="contact-qr">
        <div className="contact-qr__content">
          <ImageSlider images={images} interval={3000} opacity={0.8} />
        </div>
        <h2>Scan the QR code to start chat with me!</h2>
      </div>
      
      {/* Contact Form */}
      <form 
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          label="Name"
          placeholder="Your name"
          required
        />
        
        <Input
          type="email"
          label="Email"
          placeholder="your@email.com"
          required
        />
        
        <Input
          type="textarea"
          label="Message"
          placeholder="Your message"
          required
        />
        
        <Button type="submit">
          <Send size={18} />
          Send Message
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
