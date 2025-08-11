import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'AI-Powered Video Creation',
    description: 'Utilize advanced AI algorithms to generate stunning videos tailored to your needs.',
  },
  {
    title: 'Seamless Integration',
    description: 'Easily integrate VidNexus with your existing platforms for a smooth workflow.',
  },
  {
    title: 'Real-Time Collaboration',
    description: 'Collaborate with your team in real-time, enhancing productivity and creativity.',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-red-500 to-orange-500">
        <motion.div
          className="text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to AI
        </motion.h1>
        <motion.div
          className="text-xl text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Create stunning videos effortlessly with VidNexus.
        </motion.p>
        <motion.div
          className="bg-white text-red-500 font-semibold py-2 px-4 rounded hover:bg-red-500 hover:text-white transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </header>

      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-10">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-orange-500 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-red-500 text-white py-5 text-center">
        <p>&copy; {new Date().getFullYear()} AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;