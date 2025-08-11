import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  links: Array<{ name: string; url: string }>;
  socialMedia: Array<{ platform: string; url: string }>;
}

const Footer: React.FC<FooterProps> = ({ 
  companyName = "AI", 
  links, 
  socialMedia 
}) => {
  return (
    <footer className="bg-white text-red-600 py-6">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Connect with {companyName}</h2>
          <ul className="flex space-x-4 mb-4">
            {links.map((link, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.1 }} 
                className="transition-transform"
              >
                <a href={link.url} className="text-orange-500 hover:text-red-500">
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
          <div className="text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Follow us:</h3>
            <ul className="flex space-x-4">
              {socialMedia.map((media, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.1 }} 
                  className="transition-transform"
                >
                  <a href={media.url} className="text-orange-500 hover:text-red-500" aria-label={Follow us on ${media.platform}}>
                    {media.platform}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;