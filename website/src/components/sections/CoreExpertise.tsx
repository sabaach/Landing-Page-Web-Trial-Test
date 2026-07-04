import { motion } from 'framer-motion';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Card } from '../ui/Card';
import { coreExpertise } from '../../data';

export function CoreExpertise() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  return (
    <SectionWrapper background="light" id="about">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {coreExpertise.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card hover className="h-full p-6 sm:p-8 flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-4 sm:mb-6 text-primary-600">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
