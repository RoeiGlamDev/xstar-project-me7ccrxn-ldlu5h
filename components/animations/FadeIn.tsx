import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 20 }}
      animate={inView ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-white"
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;