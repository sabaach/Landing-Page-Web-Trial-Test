import { motion } from 'framer-motion';
import { SectionWrapper } from '../layout/SectionWrapper';
import { caseStudies } from '../../data';
import { ArrowRight } from 'lucide-react';

export function CaseStudies() {
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
    <SectionWrapper background="white" id="case-studies">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-primary-600 uppercase tracking-widest block mb-4"
          >
            Case Studies
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight"
          >
            Real results for global brands
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-500"
          >
            We measure success in revenue, not just impressions.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <a href="#" className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group">
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {caseStudies.map((study, index) => (
          <motion.div key={index} variants={itemVariants} className="group">
            <div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
              
              {/* Image Area */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {study.title}
                  </h3>
                </div>
              </div>

              {/* Stats Area */}
              <div className="grid grid-cols-3 divide-x divide-neutral-100 p-6 flex-grow">
                {study.stats.map((stat, i) => (
                  <div key={i} className="px-2 first:pl-0 last:pr-0 flex flex-col items-center text-center">
                    <span className="font-display text-2xl lg:text-3xl font-extrabold text-primary-600 mb-1">
                      {stat.value}
                    </span>
                    <span className="text-[10px] md:text-xs font-semibold text-neutral-500 uppercase tracking-wide leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
