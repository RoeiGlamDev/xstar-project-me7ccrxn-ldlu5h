import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
        <motion.div
            className="bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
        >
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-5">
                <h3 className="text-2xl font-bold text-red-600">{title}</h3>
                <p className="text-md text-gray-700 mt-2">{description}</p>
                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg transition duration-300 ease-in-out hover:shadow-lg">
                    Learn More
                </button>
            </div>
        </motion.div>
    );
};

export default Card;