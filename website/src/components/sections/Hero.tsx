import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export function Hero() {
  return (
    <section className="relative min-h-screen lg:min-h-[90vh] flex items-center pt-28 sm:pt-24 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=2000" 
          alt="Seoul Skyline" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/80 via-surface-dark/60 to-surface-dark/80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="lg:col-span-7 space-y-8"
          >
            <Badge variant="glass">Korea Market Entry & Digital Growth Partner</Badge>
            
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-2xl">
              Win Korea with Local Strategy, Global Execution.
            </h1>
            
            <p className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
              INQUIVIX is the Korea-focused digital marketing agency that helps global brands enter, localize, and scale in South Korea. We combine platform-native strategy on Naver, Kakao, and Korean social media with data-driven performance marketing — so you grow with precision, not guesswork.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button size="lg" variant="primary" className="w-full sm:w-auto">
                Book a Strategy Call →
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Our Services
              </Button>
            </div>

            <div className="flex items-start sm:items-center text-xs sm:text-sm text-white/60 pt-4">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5 sm:mt-0" />
              <span>Seoul, Korea · Where Global Brands Grow</span>
            </div>
          </motion.div>

          {/* Right Content (Stat Cards) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.3 }}
            className="lg:col-span-5 grid gap-4 mt-4 lg:mt-0"
          >
            <div className="glass-card p-5 sm:p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Korea Market Signal</span>
                <div className="w-8 h-8 rounded-full bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <div className="text-xs sm:text-sm text-white/70 mb-1">E-commerce Market</div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">US$206B</div>
                  <div className="text-xs text-success mt-1">+11.6% YoY</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-white/70 mb-1">Internet Penetration</div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">97.6%</div>
                  <div className="text-xs text-white/60 mt-1">World-leading</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-[10px] text-white/40 uppercase tracking-wider">
                <span>Source: Statista</span>
                <span>DataReportal</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
