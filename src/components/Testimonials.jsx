import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'E-commerce Manager',
    feedback: 'Shofx transformed our support system. Our response time is now instant, and customers love it!'
  },
  {
    name: 'James T.',
    role: 'Healthcare Consultant',
    feedback: 'This chatbot handles patient inquiries better than most staff. It’s a game-changer.'
  },
  {
    name: 'Rina K.',
    role: 'Tech Founder',
    feedback: 'Integrating Shofx was seamless. We saw a 40% drop in support tickets in the first week.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-[#1e1b4b] to-[#0f172a]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-14 bg-gradient-to-r from-yellow-300 to-pink-500 bg-clip-text text-transparent"
        >
          What Our Users Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-6 rounded-2xl shadow-md backdrop-blur-md border border-white/10"
            >
              <p className="text-sm text-gray-300 mb-4">“{t.feedback}”</p>
              <div className="text-left">
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
