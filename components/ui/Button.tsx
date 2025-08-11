import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  const baseStyles = "px-4 py-2 rounded focus:outline-none focus:ring-2 transition-all duration-300";
  const primaryStyles = "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500";
  const secondaryStyles = "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-400";

  const styles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <motion.div
      className={`${baseStyles`} ${styles}}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={Button for ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;