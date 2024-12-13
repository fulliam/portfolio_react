import React, { useEffect, useRef } from 'react';
import './BilliardAnimation.scss';

interface BilliardAnimationProps {
  text: string;
}

interface Size {
  width: number;
  height: number;
}

interface Position {
  x: number;
  y: number;
}

const BilliardAnimation: React.FC<BilliardAnimationProps> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const position = useRef<Position>({ x: 150, y: 150 });
  const velocity = useRef<Position>({ x: 1, y: 1 });
  const textSize = useRef<Size>({ width: 0, height: 0 });
  const containerSize = useRef<Size>({ width: 0, height: 0 });

  const colors = ['#12b8cb', '#ff6347', '#32cd32', '#ff1493'];
  const shadowColors = ['rgba(255, 99, 71, 0.7)', 'rgba(50, 205, 50, 0.7)', 'rgba(255, 20, 147, 0.7)', 'rgba(255, 215, 0, 0.7)'];
  const colorIndex = useRef(0);
  const shadowIndex = useRef(0);

  const updateSizes = () => {
    if (textRef.current && containerRef.current) {
      textSize.current = {
        width: textRef.current.getBoundingClientRect().width + 32,
        height: textRef.current.getBoundingClientRect().height,
      };

      containerSize.current = {
        width: containerRef.current.getBoundingClientRect().width - 12,
        height: containerRef.current.getBoundingClientRect().height - 16,

        // width: containerRef.current.getBoundingClientRect().width - 56,
        // height: containerRef.current.getBoundingClientRect().height - 32,
      };
    }
  };

  updateSizes();

  useEffect(() => {
    updateSizes();
    window.addEventListener('resize', updateSizes);

    return () => window.removeEventListener('resize', updateSizes);
  }, [text]);

  useEffect(() => {
    const updatePosition = () => {
      const newX = position.current.x + velocity.current.x;
      const newY = position.current.y + velocity.current.y;

      let hitBoundary = false;

      if (newX <= 0 || newX >= containerSize.current.width - textSize.current.width) {
        velocity.current.x = -velocity.current.x;
        hitBoundary = true;
      }

      if (newY <= 0 || newY >= containerSize.current.height - textSize.current.height) {
        velocity.current.y = -velocity.current.y;
        hitBoundary = true;
      }

      position.current.x = Math.max(0, Math.min(newX, containerSize.current.width - textSize.current.width));
      position.current.y = Math.max(0, Math.min(newY, containerSize.current.height - textSize.current.height));

      if (textRef.current) {
        if (hitBoundary) {
          colorIndex.current = (colorIndex.current + 1) % colors.length;
          shadowIndex.current = (shadowIndex.current + 1) % shadowColors.length;
          
          textRef.current.style.color = colors[colorIndex.current];
          
          const offsetX = velocity.current.x * 2;
          const offsetY = velocity.current.y * 2;
          const blur = Math.abs(velocity.current.x) + Math.abs(velocity.current.y) + 5;
          textRef.current.style.textShadow = `${offsetX}px ${offsetY}px ${blur}px ${shadowColors[shadowIndex.current]}`;
        }

        textRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
      }

      requestAnimationFrame(updatePosition);
    };

    const animationFrameId = requestAnimationFrame(updatePosition);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="animation-container" ref={containerRef}>
      {/* <div className="snow"></div> */}
      <div
        className="moving-text"
        ref={textRef}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default BilliardAnimation;
