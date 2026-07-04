import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../layout/SectionWrapper';
import { faqs } from '../../data';
import { Plus, Minus } from 'lucide-react';
import clsx from 'clsx';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper background="white" id="faq">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold text-primary-600 uppercase tracking-widest block mb-4"
        >
          Frequently Asked Questions
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6 tracking-tight"
        >
          Frequently asked questions about digital marketing in Korea
        </motion.h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className={clsx(
                "mb-4 border rounded-xl overflow-hidden transition-colors duration-300",
                isOpen ? "bg-neutral-50 border-primary-200" : "bg-white border-neutral-200"
              )}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-semibold text-neutral-900 pr-8">
                  {index + 1}. {faq.question}
                </span>
                <div className={clsx(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",
                  isOpen ? "bg-primary-100 text-primary-600" : "bg-neutral-100 text-neutral-400"
                )}>
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" as const }}
                  >
                    <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
