import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jessica Lee',
    photo: '/images/jessica.jpg',
    content: 'AI has transformed our video production process. The automation and intelligence behind VidNexus allowed us to produce high-quality content in record time!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Johnson',
    photo: '/images/michael.jpg',
    content: 'With AI, we are able to generate engaging videos that resonate with our audience. The results speak for themselves!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Sarah Kim',
    photo: '/images/sarah.jpg',
    content: 'The insights provided by AI have significantly improved our marketing strategy. VidNexus is a game changer in the tech industry!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-8">What Our Clients Say About AI</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
              <div className="flex justify-center mb-2">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <svg key={index} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.121-6.56L0 6.545l6.588-.957L10 0l2.412 5.588L20 6.545l-5.243 4.985L15.878 18.09z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-red-600">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;