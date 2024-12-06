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

  const position = useRef<Position>({ x: 50, y: 50 });
  const velocity = useRef<Position>({ x: 1, y: 1 });
  const textSize = useRef<Size>({ width: 0, height: 0 });
  const containerSize = useRef<Size>({ width: 0, height: 0 });

  const colors = ['#12b8cb', '#ff6347', '#32cd32', '#ff1493']; // Массив цветов
  const colorIndex = useRef(0); // Индекс текущего цвета

  const updateSizes = () => {
    if (textRef.current && containerRef.current) {
      textSize.current = {
        width: textRef.current.offsetWidth,
        height: textRef.current.offsetHeight,
      };

      containerSize.current = {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      };
    }
  };

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
          // Меняем цвет при каждом отскоке
          colorIndex.current = (colorIndex.current + 1) % colors.length; // Следующий цвет из массива
          textRef.current.style.color = colors[colorIndex.current];
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
      <div
        className="moving-text"
        ref={textRef}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default BilliardAnimation;
