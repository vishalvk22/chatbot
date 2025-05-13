import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Clock, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-gradient-to-r from-[#1c1c3c] to-[#141426]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent"
        >
          How Shofx Works
        </motion.h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Shofx uses cutting-edge AI technologies like Natural Language Processing (NLP), Machine Learning, and real-time context understanding to provide 24/7 intelligent conversations with your users.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 rounded-xl p-6 backdrop-blur-md shadow-lg">
            <Brain className="text-purple-400 w-10 h-10 mb-4" />
            <h4 className="font-semibold text-lg">Advanced NLP</h4>
            <p className="text-sm text-gray-300">Understands and processes human language with high accuracy.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 rounded-xl p-6 backdrop-blur-md shadow-lg">
            <Zap className="text-yellow-400 w-10 h-10 mb-4" />
            <h4 className="font-semibold text-lg">Machine Learning</h4>
            <p className="text-sm text-gray-300">Learns from interactions to improve and personalize responses.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 rounded-xl p-6 backdrop-blur-md shadow-lg">
            <Clock className="text-blue-400 w-10 h-10 mb-4" />
            <h4 className="font-semibold text-lg">Always Available</h4>
            <p className="text-sm text-gray-300">Provides consistent support to users, 24 hours a day.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
