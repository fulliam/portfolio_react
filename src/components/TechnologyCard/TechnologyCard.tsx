import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { icons } from "@/assets/icons/technologies";
import HitText from "@components/HitText/HitText";
import BreakpointChecker from "@/utils/BreakpointChecker";
import "./TechnologyCard.scss";

const breakpoints = {
  desktop: 1025,
  tablet: 768,
  mobile: 0,
};

const TechnologyCard: React.FC = () => {
  const [key, setKey] = useState(0);
  const [activeBreakpoint, setActiveBreakpoint] = useState<string | null>(null);

  useEffect(() => {
    const breakpointChecker = new BreakpointChecker(breakpoints);

    const handleBreakpointChange = () => {
      const newBreakpoint = breakpointChecker.getActiveBreakpoint();
      if (newBreakpoint !== activeBreakpoint) {
        setActiveBreakpoint(newBreakpoint);
        setKey((prev) => prev + 1);
      }
    };

    handleBreakpointChange();
    window.addEventListener('resize', handleBreakpointChange);
    window.addEventListener('orientationchange', handleBreakpointChange);

    return () => {
      window.removeEventListener('resize', handleBreakpointChange);
      window.removeEventListener('orientationchange', handleBreakpointChange);
      breakpointChecker.destroy();
    };
  }, [activeBreakpoint]);

  useEffect(() => {
    const initAll = () => {
      const banners = document.querySelectorAll<HTMLElement>('.banner-orig');
      banners.forEach((banner) => initBanner(banner));

      setTimeout(() => {
        banners.forEach((banner) => changeAnim(banner));
      }, 25000);
    };

    const initBanner = (banner: HTMLElement) => {
      let bannerTwo = banner.nextElementSibling as HTMLElement;
      if (!bannerTwo || !bannerTwo.classList.contains('banner-clone')) {
        bannerTwo = banner.cloneNode(true) as HTMLElement;
        bannerTwo.classList.add('banner-clone');
        bannerTwo.classList.remove('banner-orig');
        banner.parentElement?.appendChild(bannerTwo);
      }
      banner.style.animation = 'scroll-start 25s linear 1';
      bannerTwo.style.animation = 'scroll-second 50s linear infinite';
    };

    const changeAnim = (banner: HTMLElement) => {
      banner.style.animation = 'scroll 50s linear infinite';
    };

    initAll();

    const handleResize = () => {
      initAll();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [key]);

  const chunks = [
    icons.slice(0, 8),
    icons.slice(8, 16),
    icons.slice(16, 24),
  ];

  return (
    <div className="technology-card" key={key}>
      <div className="background-pattern">
        <HitText />
      </div>

      {chunks.map((chunk, chunkIndex) => (
        <div
          className={`diagonal-scroller chunk-${chunkIndex + 1}`}
          key={`chunk-${chunkIndex}`}
        >
          <div className="banner banner-orig">
            {chunk.map((Icon, i) => (
              <div className="banner-item" key={`chunk-${chunkIndex}-${i}`}>
                <Icon />
              </div>
            ))}
          </div>
        </div>
      ))}

      <motion.div className="action-button" whileHover={{ scale: 1.2 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="action-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default TechnologyCard;
