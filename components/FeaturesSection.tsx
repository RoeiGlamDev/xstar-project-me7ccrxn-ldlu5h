import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Automated Video Creation',
    description: 'Harness the power of AI to create stunning videos in minutes, tailored to your needs.',
    icon: <i className="fas fa-video text-orange-500"></i>,
  },
  {
    id: 2,
    title: 'Advanced Editing Tools',
    description: 'Utilize cutting-edge editing tools powered by AI to enhance your video content effortlessly.',
    icon: <i className="fas fa-edit text-orange-500"></i>,
  },
  {
    id: 3,
    title: 'Real-time Collaboration',
    description: 'Collaborate with teams in real-time, making video production seamless and efficient.',
    icon: <i className="fas fa-users text-orange-500"></i>,
  },
  {
    id: 4,
    title: 'Customizable Templates',
    description: 'Choose from a variety of customizable templates to fit your brand’s unique style and message.',
    icon: <i className="fas fa-paint-brush text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.div 
          className="text-4xl font-bold text-red-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI Features
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id} 
              className="bg-red-100 border border-red-300 rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-red-600">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;