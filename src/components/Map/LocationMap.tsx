import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smile, Loader } from 'lucide-react';
import './LocationMap.scss';

const LocationMap: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showMarker, setShowMarker] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);

    setTimeout(() => {
      setShowMarker(true);
    }, 300);
  };

  return (
    <div className="location-map">
      <div className="map-container">
        {!isLoaded && (
          <div className="loader-container">
            <Loader className="spinner" size={32} />
            <p>Loading map...</p>
          </div>
        )}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100770.49507929584!2d39.1543713!3d51.6615357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x413b51415f362001%3A0x4aee4b9d6ec4066a!2z0JLQvtC70L7Qs9C-INC_0LXRgCwg0KLQtdGB0YI!5e0!3m2!1sru!2sru!4v1709913425277!5m2!1sru!2sru"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleLoad}
        ></iframe>

        {showMarker && (
          <motion.div
            className="location-marker"
            whileHover={{ scale: 1.2 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            <Smile size={24} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LocationMap;
