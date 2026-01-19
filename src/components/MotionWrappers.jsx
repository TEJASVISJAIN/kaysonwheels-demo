import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { EASING_INDUSTRIAL } from '../utils/transitions';

/**
 * Reveal Component
 * Animates children into view when scrolled to.
 * 
 * @param {ReactNode} children
 * @param {number} delay
 * @param {string} direction - 'up', 'down', 'left', 'right', 'none'
 * @param {string} width - 'fit-content' or '100%'
 */
export const Reveal = ({ children, delay = 0, direction = 'up', width = 'fit-content' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px 0px -50px 0px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      scale: direction === 'none' ? 0.95 : 1
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: EASING_INDUSTRIAL
      }
    }
  };

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        style={{ willChange: 'opacity, transform' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

/**
 * StaggerText Component
 * Splits text into characters or words and staggers their reveal.
 */
export const StaggerText = ({ text, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Split text into words for better readability in animation, or chars for more dramatic effect
  // Going with words for now as it's more readable for headlines
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120
      }
    },
    hidden: {
      opacity: 0,
      y: 15,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120
      }
    }
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", willChange: 'transform' }}
      variants={container}
      initial="hidden"
      animate={controls}
      ref={ref}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} style={{ marginRight: "0.25em" }}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const CardHover = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{ willChange: 'transform, box-shadow' }}
    >
      {children}
    </motion.div>
  );
};

export const ButtonPress = ({ children, className, onClick }) => {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.button>
  )
}
