import { motion } from 'framer-motion';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Card } from '../ui/Card';
import { services } from '../../data';
import { ArrowRight } from 'lucide-react';

export function Services() {
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
    <SectionWrapper background="white" id="services">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold text-primary-600 uppercase tracking-widest block mb-4"
        >
          What We Do
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6 tracking-tight"
        >
          End-to-end digital marketing solutions for growth in Korea
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-neutral-500"
        >
          Integrated, data-driven solutions built for the Korean market—designed to reduce risk and accelerate growth.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card hover className="h-full p-8 flex flex-col group cursor-pointer">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-50 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-8 flex justify-end">
                <ArrowRight className="w-5 h-5 text-neutral-300 group-hover:text-primary-600 transition-colors" />
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
