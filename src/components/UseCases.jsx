import React from 'react';
import { motion } from 'framer-motion';

const useCases = [
  {
    industry: 'E-commerce',
    desc: 'Assist customers in shopping, tracking orders, and product discovery.',
  },
  {
    industry: 'Healthcare',
    desc: 'Answer patient queries, schedule appointments, and provide health tips.',
  },
  {
    industry: 'Education',
    desc: 'Offer 24/7 student support, course info, and onboarding assistance.',
  },
  {
    industry: 'Finance',
    desc: 'Guide users on loans, transactions, and account-related inquiries.',
  },
];

const UseCases = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-bl from-[#0f172a] to-[#1e293b]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent"
        >
          Use Cases Across Industries
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {useCases.map((use, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 rounded-2xl p-6 backdrop-blur-md border border-white/10 hover:border-blue-400 text-left"
            >
              <h4 className="text-lg font-semibold mb-2 text-white">{use.industry}</h4>
              <p className="text-sm text-gray-300">{use.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Embedded Chatbot Preview */}
        <div className="mt-16">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition"
          >
            💬 Try the Demo Chatbot
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
