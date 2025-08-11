import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Alice Johnson', role: 'CEO', expertise: 'AI Strategy' },
  { name: 'Bob Smith', role: 'CTO', expertise: 'Machine Learning' },
  { name: 'Charlie Brown', role: 'Lead Developer', expertise: 'Software Engineering' },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-red-600">Our Story</h2>
          <p className="mt-4 text-lg">
            At AI, we are pioneering the future of video creation through our cutting-edge technology. 
            Our journey began with a vision to harness Artificial Intelligence to empower creators and 
            businesses to make stunning videos effortlessly. With a focus on innovation, we strive to 
            make video production accessible to everyone.
          </p>
        </motion.div>
        
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-orange-600">Our Mission</h2>
          <p className="mt-4 text-lg">
            Our mission at AI is to revolutionize the video-making landscape by integrating advanced 
            AI technologies that simplify the creative process. We aim to empower individuals and 
            businesses to tell their stories through compelling visuals that resonate with their audience. 
            We believe in the power of technology to create, inspire, and connect.
          </p>
        </motion.div>
        
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-red-600">Meet Our Team</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-orange-600">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
                <p className="mt-2 text-gray-700">{member.expertise}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;