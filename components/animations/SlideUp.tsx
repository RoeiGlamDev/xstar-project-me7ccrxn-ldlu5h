import { motion } from 'framer-motion';
import React from 'react';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      {children}
    </motion.div>
  );
};

const VidNexus: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-500 to-orange-500">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to AI - VidNexus</h1>
      <p className="text-lg text-white mb-8 text-center">
        Create stunning AI-generated videos with VidNexus. Harness the power of artificial intelligence to bring your ideas to life!
      </p>
      <SlideUp>
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Transform Your Ideas</h2>
        <p className="text-md text-gray-800">
          At AI, we utilize cutting-edge technology to deliver unique video solutions tailored for every need. Our platform allows you to seamlessly create, edit, and share videos, making the process efficient and enjoyable.
        </p>
        <button className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300">
          Get Started
        </button>
      </SlideUp>
    </div>
  );
};

export default VidNexus;