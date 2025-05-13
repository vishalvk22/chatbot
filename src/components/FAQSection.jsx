import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does the chatbot understand my questions?',
    answer: 'It uses advanced Natural Language Processing (NLP) and machine learning to interpret and respond to your messages contextually.'
  },
  {
    question: 'Can I integrate it with my website or mobile app?',
    answer: 'Yes! You can embed it via API or use a widget that works across all platforms.'
  },
  {
    question: 'Is it available 24/7?',
    answer: 'Absolutely. Shofx is cloud-powered and works around the clock to assist your users.'
  },
  {
    question: 'Does it support multiple languages?',
    answer: 'Yes, Shofx understands more than 100+ languages and replies in many popular global languages out of the box.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-bl from-[#1a1a2e] to-[#16213e]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white/5 p-5 rounded-xl shadow-lg backdrop-blur-md border border-white/10"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h4 className="text-lg font-medium text-white">{faq.question}</h4>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
                  <ChevronDown className="text-white" />
                </motion.div>
              </div>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-gray-300 mt-3"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
