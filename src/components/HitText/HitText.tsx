import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import './HitText.scss';

const words = [
  { text: 'MY', style: { color: '#080a1091', fontSize: 'calc(3rem + 1.5vw)' }, position: 10 },
  { text: '🔥🔥🔥', style: { color: '#ff61baa8', fontSize: 'calc(2rem + 1.5vw)' }, position: 37 },
  { text: 'STACK', style: { color: '#080a1091', fontSize: 'calc(2rem + 1.5vw)' }, position: 60 },
];

const HitText = () => {
  const [visibleWords, setVisibleWords] = useState<number[]>([]);
  const [animationCycle, setAnimationCycle] = useState(0);

  useEffect(() => {
    let animationTimers: NodeJS.Timeout[] = [];

    const startAnimation = () => {
      setVisibleWords([]);
      
      words.forEach((_, index) => {
        animationTimers.push(
          setTimeout(() => {
            setVisibleWords((prev) => [...prev, index]);
          }, index * 800)
        );
      });

      animationTimers.push(
        setTimeout(() => {
          setVisibleWords([]);
        }, words.length * 800 + 800)
      );

      animationTimers.push(
        setTimeout(() => {
          setAnimationCycle((prev) => prev + 1);
        }, words.length * 800 + 800 + 4500)
      );
    };

    startAnimation();

    const loopTimer = setInterval(() => startAnimation(), (words.length + 1) * 800 + 7000);

    return () => {
      animationTimers.forEach(clearTimeout);
      clearInterval(loopTimer);
    };
  }, []);

  const wordVariants = {
    initial: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: 'easeIn' } },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="hit-text">
      <AnimatePresence key={animationCycle}>
        {words.map(
          (word, index) =>
            visibleWords.includes(index) && (
              <motion.div
                key={word.text}
                className="hit-word"
                style={{
                  ...word.style,
                  position: 'absolute',
                  top: `${word.position}%`,
                }}
                variants={wordVariants}
                initial="initial"
                animate="visible"
                exit="exit"
              >
                {word.text}
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default HitText;
