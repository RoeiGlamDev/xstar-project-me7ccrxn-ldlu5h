import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'CEO & Founder',
    image: '/images/alice.jpg',
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    image: '/images/bob.jpg',
  },
  {
    name: 'Carol White',
    role: 'Lead Developer',
    image: '/images/carol.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="py-10 text-center bg-red-600">
        <h1 className="text-4xl font-bold text-white">About AI</h1>
        <p className="mt-4 text-lg text-orange-300">Pioneering the Future of AI Video Creation</p>
      </header>

      <section className="max-w-6xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-semibold text-red-600">Our History</h2>
          <p className="mt-4 text-lg">
            Founded in 2023, AI has rapidly established itself as a leader in the technology industry, specializing in AI video generation. Our mission is to empower creators and businesses by harnessing the power of artificial intelligence to produce stunning, high-quality videos effortlessly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-semibold text-red-600">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-orange-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-lg" />
                <h3 className="mt-4 text-xl font-semibold text-red-600">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-semibold text-red-600">Our Values</h2>
          <ul className="mt-4 list-disc list-inside text-lg">
            <li>Innovation: We continuously strive to push the boundaries of technology.</li>
            <li>Integrity: We maintain transparency and honesty in our processes and products.</li>
            <li>Collaboration: We believe in the power of teamwork to drive success.</li>
            <li>Customer-Centric: Our clients' needs are at the heart of everything we do.</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
};

export default About;