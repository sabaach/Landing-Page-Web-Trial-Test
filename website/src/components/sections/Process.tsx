import { motion } from 'framer-motion';
import { SectionWrapper } from '../layout/SectionWrapper';
import { processSteps } from '../../data';
import { CheckCircle2 } from 'lucide-react';

export function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
    <SectionWrapper background="dark" id="market-entry" className="relative overflow-hidden">
      <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold text-primary-400 uppercase tracking-widest block mb-4"
        >
          Our Approach
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight"
        >
          A proven process. Measurable results.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-white/70"
        >
          We minimize risk, accelerate market entry, and deliver sustainable growth at every stage.
        </motion.p>
      </div>

      <div className="relative z-10">
        {/* Desktop Timeline Line */}
        <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-white/10" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 relative"
        >
          {processSteps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              
              {/* Mobile: vertical timeline row layout */}
              <div className="flex md:hidden gap-5">
                {/* Timeline column */}
                <div className="flex flex-col items-center flex-shrink-0 w-8">
                  <div className="w-4 h-4 rounded-full bg-primary-600 ring-4 ring-surface-dark z-10 flex-shrink-0" />
                  {index !== processSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-white/10 mt-2 min-h-[2rem]" />
                  )}
                </div>

                {/* Content column */}
                <div className="flex-1 min-w-0 pb-10">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-display text-sm font-bold text-primary-400 uppercase tracking-wider">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">{step.title}</h3>
                  <p className="text-white/60 text-sm mb-6">{step.subtitle}</p>
                  
                  <ul className="space-y-3">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 mr-3 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Desktop: centered column layout */}
              <div className="hidden md:flex md:flex-col md:items-center">
                <div className="relative flex justify-center items-center mb-8 w-full">
                  <span className="font-display text-8xl font-extrabold text-white/5 select-none relative z-0">
                    {step.number}
                  </span>
                  <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-600 ring-4 ring-surface-dark z-10" />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">{step.title}</h3>
                  <p className="text-white/60 text-sm mb-8 min-h-[2.5rem]">{step.subtitle}</p>
                  
                  <ul className="space-y-4 text-left inline-block">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 mr-3 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
