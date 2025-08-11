import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title, 
  subtitle, 
  buttonText, 
  onButtonClick 
}) => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-white">
      <motion.div 
        className="text-4xl font-bold text-red-500 mb-4" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="text-lg text-gray-700 mb-8 text-center max-w-xl" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
      <motion.div 
        className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        onClick={onButtonClick}
        initial={{ scale: 1 }} 
        whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.2 }}
      >
        {buttonText}
      </motion.button>
    </section>
  );
};

export default CTASection;