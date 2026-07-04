import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Target } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="relative bg-surface-dark py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-primary-900/20 rounded-full blur-[100px] transform translate-y-1/4" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md mb-8 text-primary-500"
        >
          <Target className="w-10 h-10" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
        >
          Ready to grow in Korea?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
        >
          Let's build a winning strategy tailored to your market, audience, and goals. 
          Book a call with our experts today. No pitch deck. No pressure. 
          Just a focused conversation about your Korea opportunity.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Button size="lg" variant="primary" className="w-full sm:w-auto px-10">
            Book a Strategy Call →
          </Button>
          <a href="#" className="text-white/60 hover:text-white font-medium underline underline-offset-4 transition-colors">
            Contact Us
          </a>
        </motion.div>

      </div>
    </section>
  );
}
