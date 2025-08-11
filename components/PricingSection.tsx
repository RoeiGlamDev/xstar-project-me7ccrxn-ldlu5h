import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter Plan',
    price: '$29/mo',
    features: [
      'Access to AI Video Generation',
      'Up to 10 videos per month',
      'Standard Quality Output',
      'Email Support',
    ],
  },
  {
    name: 'Professional Plan',
    price: '$79/mo',
    features: [
      'All Starter Plan Features',
      'Up to 50 videos per month',
      'HD Quality Output',
      'Priority Email Support',
      'Custom Branding',
    ],
  },
  {
    name: 'Enterprise Plan',
    price: '$199/mo',
    features: [
      'All Professional Plan Features',
      'Unlimited videos',
      '4K Quality Output',
      'Dedicated Account Manager',
      'API Access',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-10">AI Pricing Plans</h2>
        <p className="text-lg text-gray-700 mb-16">Choose the perfect plan to elevate your video creation with AI technology.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-orange-500 text-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{tier.name}</h3>
              <p className="text-3xl font-bold mb-6">{tier.price}</p>
              <ul className="mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-orange-500 font-bold py-2 px-4 rounded transition-colors hover:bg-red-600 hover:text-white">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;