import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition-colors"
          aria-label="Close Modal"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-orange-600 mb-4">{title}</h2>
        <div className="text-gray-700">{content}</div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Powered by <span className="font-semibold text-red-600">AI</span> - Your partner in innovative technology solutions.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;