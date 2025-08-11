import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  contactReason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    contactReason: 'Inquiry',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section className="bg-white p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-red-600">Contact AI</h2>
        <p className="text-gray-700 mb-4">For inquiries regarding our AI video services, please fill out the form below.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded p-2 w-full}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded p-2 w-full}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Reason for Contact</label>
            <select
              name="contactReason"
              value={formData.contactReason}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value="Inquiry">General Inquiry</option>
              <option value="Support">Technical Support</option>
              <option value="Feedback">User Feedback</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded p-2 w-full}
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white rounded py-2 px-4 hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-red-600">Business Information</h3>
          <p className="text-gray-700">Location: 123 AI Lane, Tech City, TC 12345</p>
          <p className="text-gray-700">Business Hours: Mon-Fri, 9 AM - 5 PM</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;