import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  plan: string;
  price: string;
  features: string[];
}

const pricingData: PricingOption[] = [
  {
    plan: 'Basic',
    price: '$19/month',
    features: [
      '5 AI video generations',
      'Standard resolution',
      'Basic templates',
      'Email support',
    ],
  },
  {
    plan: 'Pro',
    price: '$49/month',
    features: [
      '20 AI video generations',
      'HD resolution',
      'Advanced templates',
      'Priority email support',
    ],
  },
  {
    plan: 'Enterprise',
    price: 'Contact us',
    features: [
      'Unlimited AI video generations',
      '4K resolution',
      'Custom templates',
      'Dedicated account manager',
    ],
  },
];

const FAQ = [
  {
    question: 'What is AI?',
    answer: 'AI is a cutting-edge technology that enables the creation of videos using artificial intelligence, streamlining the video production process.',
  },
  {
    question: 'How does AI video generation work?',
    answer: 'Our AI analyzes your input and generates videos that align with your specifications, utilizing advanced algorithms to ensure high quality.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time without any penalties.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 p-8">
      <motion.div
        className="text-4xl font-bold text-red-600 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        AI Pricing Plans
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {pricingData.map((option) => (
          <div
            key={option.plan}
            className="border rounded-lg shadow-lg p-6 bg-orange-100 transition-transform transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-red-500 mb-2">{option.plan}</h2>
            <p className="text-xl font-bold text-red-600 mb-4">{option.price}</p>
            <ul className="list-disc pl-5 mb-4">
              {option.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200">
              Choose Plan
            </button>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="text-3xl font-bold text-red-600 my-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="space-y-4">
        {FAQ.map((item, index) => (
          <div key={index} className="p-4 border-b hover:bg-orange-50 transition duration-200">
            <h3 className="font-semibold text-red-500">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;