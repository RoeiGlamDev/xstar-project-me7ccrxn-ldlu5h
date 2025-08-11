import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  label: string;
  count: number;
}

const stats: Stat[] = [
  { label: 'AI Videos Created', count: 1200 },
  { label: 'Users Engaged', count: 3500 },
  { label: 'AI Models Trained', count: 50 },
  { label: 'Global Reach', count: 25 },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-red-600">AI Achievements</h2>
        <p className="text-lg mb-12 text-gray-700">Pioneering the future of video creation with cutting-edge AI technology.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-orange-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <h3 className="text-3xl font-extrabold">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="counter"
                >
                  {stat.count}
                </motion.span>
              </h3>
              <p className="text-lg mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;