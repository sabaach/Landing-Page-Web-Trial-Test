import { motion } from 'framer-motion';
import { SectionWrapper } from '../layout/SectionWrapper';
import { insights } from '../../data';
import { ArrowRight } from 'lucide-react';

export function Insights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  return (
    <SectionWrapper background="light" id="insights">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-primary-600 uppercase tracking-widest block mb-4"
          >
            Insights
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight"
          >
            Korea market insights and trends
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-500"
          >
            Stay ahead of platform changes, consumer behavior, and growth opportunities.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <a href="#" className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group">
            View All Insights
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* 
        Mobile: Horizontal Scroll (Closure Gestalt Principle)
        Desktop: Grid
      */}
      <div className="-mx-4 sm:mx-0">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto sm:overflow-visible px-4 sm:px-0 pb-8 sm:pb-0 snap-x snap-mandatory hide-scrollbar"
        >
          {insights.map((insight, index) => (
            <motion.div key={index} variants={itemVariants} className="min-w-[280px] sm:min-w-0 snap-start">
              <a href="#" className="group block h-full">
                <div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 h-full flex flex-col">
                  
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-neutral-900 mb-4 line-clamp-3 group-hover:text-primary-600 transition-colors">
                      {insight.title}
                    </h3>
                    <div className="mt-auto flex items-center text-xs font-medium text-neutral-400 uppercase tracking-wide">
                      <span>{insight.date}</span>
                      <span className="mx-2 font-bold">·</span>
                      <span>{insight.readTime}</span>
                    </div>
                  </div>

                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Hide Scrollbar style */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </SectionWrapper>
  );
}
