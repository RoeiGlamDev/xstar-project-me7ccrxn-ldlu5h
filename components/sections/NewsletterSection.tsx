import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title = "Join AI's Video Revolution",
  description = "Subscribe to our newsletter and stay updated on the latest in AI-driven video technology.",
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement email capture logic here
    setIsSubmitted(true);
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-3xl font-bold text-red-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="border border-gray-300 rounded-md p-3 mb-4 md:mb-0 md:mr-4 focus:ring-2 focus:ring-orange-500"
            />
            <motion.div
              type="submit"
              className="bg-red-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        ) : (
          <motion.div
            className="text-lg text-green-500 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to AI! Stay tuned for updates.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;