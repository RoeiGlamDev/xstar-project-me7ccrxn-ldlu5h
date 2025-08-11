import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="text-red-600 font-bold text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {siteTitle}
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <motion.div
              href="#services"
              className="text-red-600 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Services
            </motion.a>
            <motion.div
              href="#about"
              className="text-red-600 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.a>
            <motion.div
              href="#contact"
              className="text-red-600 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-red-600 focus:outline-none">
              {isMobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-red-600"
          initial={{ height: 0}}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col py-4">
            <motion.div
              href="#services"
              className="text-red-600 hover:text-orange-500 px-4 py-2 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Services
            </motion.a>
            <motion.div
              href="#about"
              className="text-red-600 hover:text-orange-500 px-4 py-2 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.a>
            <motion.div
              href="#contact"
              className="text-red-600 hover:text-orange-500 px-4 py-2 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;