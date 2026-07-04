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
      <div className="text-center mb-20 max-w-3xl mx-auto relative z-10">
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
          className="font-display text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
        >
          A proven process. Measurable results.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/70"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative"
        >
          {processSteps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative flex flex-col md:items-center">
              
              {/* Mobile Timeline Line */}
              {index !== processSteps.length - 1 && (
                <div className="md:hidden absolute left-8 top-24 bottom-[-3rem] w-0.5 bg-white/10" />
              )}

              <div className="relative flex md:justify-center items-center mb-8 w-full px-4 md:px-0">
                <span className="font-display text-7xl md:text-8xl font-extrabold text-white/5 select-none absolute md:relative z-0 left-0 md:left-auto">
                  {step.number}
                </span>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-600 ring-4 ring-surface-dark z-10" />
                
                {/* Mobile Icon */}
                <div className="md:hidden relative z-10 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md ml-auto">
                  <span className="font-display font-bold text-xl text-primary-400">{step.number}</span>
                </div>
              </div>

              <div className="md:text-center pl-24 md:pl-0 pr-4 md:pr-0">
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">{step.title}</h3>
                <p className="text-white/60 text-sm mb-8 h-10">{step.subtitle}</p>
                
                <ul className="space-y-4 md:text-left inline-block">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 mr-3 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
