import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "AI", 
  subtitle = "Transforming your ideas into stunning AI-generated videos.", 
  ctaText = "Get Started", 
  ctaLink = "/get-started" 
}) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-500 to-orange-500 text-white text-center p-8">
      <motion.div 
        className="text-5xl md:text-7xl font-bold mb-4" 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Welcome to <span className="text-white">{title}</span>
      </motion.h1>
      <motion.div 
        className="text-lg md:text-2xl max-w-2xl mb-8" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
      <motion.div 
        href={ctaLink} 
        className="bg-white text-red-500 font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:bg-red-500 hover:text-white"
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
      >
        {ctaText}
      </motion.a>
      <div className="mt-8">
        <span className="font-medium text-sm">Trusted by leading technology partners</span>
        <div className="flex justify-center mt-2">
          <img src="/images/trust-logo1.png" alt="Trust Logo 1" className="h-10 mr-4" />
          <img src="/images/trust-logo2.png" alt="Trust Logo 2" className="h-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;