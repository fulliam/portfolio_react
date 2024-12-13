import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import BreakpointChecker from '@/utils/BreakpointChecker';
import './HitText.scss';

const baseWords = [
  { text: 'MY', style: { color: '#080a1091', fontSize: 'calc(3rem + 1.5vw)' }, position: 10 },
  { text: '🔥🔥🔥', style: { color: '#ff61baa8', fontSize: 'calc(2rem + 1.5vw)' }, position: 37 },
  { text: 'STACK', style: { color: '#080a1091', fontSize: 'calc(2rem + 1.5vw)' }, position: 60 },
];

const smallScreenWords = [
  { text: 'MY', style: { color: '#080a1091', fontSize: 'calc(2.5rem + 1vw)' }, position: -1 },
  { text: '🔥🔥🔥', style: { color: '#ff61baa8', fontSize: 'calc(1.5rem + 1vw)' }, position: 37 },
  { text: 'STACK', style: { color: '#080a1091', fontSize: 'calc(1.8rem + 1vw)' }, position: 65 },
];

const HitText = () => {
  const breakpoints = { large: 1025, small: 0 };
  const breakpointChecker = new BreakpointChecker(breakpoints);

  const [visibleWords, setVisibleWords] = useState<number[]>([]);
  const [animationCycle, setAnimationCycle] = useState(0);
  const [words, setWords] = useState(baseWords);

  useEffect(() => {
    const updateWords = () => {
      if (breakpointChecker.isBreakpointActive('large')) {
        setWords(baseWords);
      } else {
        setWords(smallScreenWords);
      }
    };

    updateWords();
    window.addEventListener('resize', updateWords);

    return () => {
      window.removeEventListener('resize', updateWords);
      breakpointChecker.destroy();
    };
  }, []);

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
  }, [words]); // Зависимость от `words`

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
