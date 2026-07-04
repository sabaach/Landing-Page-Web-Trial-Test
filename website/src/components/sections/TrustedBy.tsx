
const logos = [
  { name: 'NEXORA', id: 1 },
  { name: 'LUMOS', id: 2 },
  { name: 'VERITAS', id: 3 },
  { name: 'NOVUM', id: 4 },
  { name: 'QUANTEX', id: 5 },
  { name: 'AURORA', id: 6 },
  { name: 'ZENITHA', id: 7 },
];

export function TrustedBy() {
  return (
    <section className="py-10 bg-white border-y border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
          Trusted By Ambitious Global Brands
        </span>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        {/* We use two identical lists to create the seamless infinite scroll effect */}
        <div className="flex space-x-8 md:space-x-16 items-center justify-around min-w-full animate-marquee group-hover:animation-paused px-4 md:px-8">
          {logos.map((logo) => (
            <div key={`logo-1-${logo.id}`} className="flex items-center space-x-2 text-neutral-400 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:text-primary-600 transition-all duration-300">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 12l10 10 10-10L12 2zm0 14.5L7.5 12 12 7.5 16.5 12 12 16.5z"/>
              </svg>
              <span className="font-display font-bold text-xl tracking-wider">{logo.name}</span>
            </div>
          ))}
        </div>
        
        <div className="flex space-x-8 md:space-x-16 items-center justify-around min-w-full animate-marquee2 group-hover:animation-paused absolute top-0 px-4 md:px-8">
          {logos.map((logo) => (
            <div key={`logo-2-${logo.id}`} className="flex items-center space-x-2 text-neutral-400 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:text-primary-600 transition-all duration-300">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 12l10 10 10-10L12 2zm0 14.5L7.5 12 12 7.5 16.5 12 12 16.5z"/>
              </svg>
              <span className="font-display font-bold text-xl tracking-wider">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
