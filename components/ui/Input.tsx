import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, value, onChange, required }) => {const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleBlur = () => {
    if (required && !value) {
      setIsValid(false);}
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setIsValid(true);
  };

  return (
    <motion.div
      className={flex flex-col mb-4 transition duration-200 ${isValid ? 'opacity-100' : 'opacity-50'}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <label
        className={text-white mb-2 ${isFocused || value ? 'text-orange-500' : 'text-red-500'}}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        required={required}
        className={p-3 rounded-lg border-2 border-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200 
          ${isValid ? 'border-red-500' : 'border-red-700 bg-red-100'}}
      />
      {!isValid && <span className="text-red-500 mt-1">This field is required.</span>}
    </motion.div>
  );
};

export default Input;