import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageCircle, Languages, LayoutTemplate } from 'lucide-react';

const features = [
  {
    icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
    title: 'Natural Conversations',
    desc: 'Talk like a human! Shofx understands and replies in a human-friendly way.',
  },
  {
    icon: <Languages className="w-8 h-8 text-green-500" />,
    title: 'Multilingual Support',
    desc: 'Speak in your language! Shofx supports multiple languages.',
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-yellow-500" />,
    title: 'Website & App Integration',
    desc: 'Embed it anywhere—your site, your app, or both.',
  },
  {
    icon: <Globe className="w-8 h-8 text-pink-500" />,
    title: 'Cloud Powered',
    desc: 'Instant deployment and scalability via the cloud.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-[#111827] to-[#1f2937]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Features That Make Shofx Smart
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 p-6 rounded-2xl backdrop-blur-md shadow-md border border-white/10 hover:border-purple-400"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
