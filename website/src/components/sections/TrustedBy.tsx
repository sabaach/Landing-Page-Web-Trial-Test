
const logos = [
  { name: 'NEXORA', id: 1 },
  { name: 'LUMOS', id: 2 },
  { name: 'VERITAS', id: 3 },
  { name: 'NOVUM', id: 4 },
  { name: 'QUANTEX', id: 5 },
  { name: 'AURORA', id: 6 },
  { name: 'ZENITHA', id: 7 },
];

function LogoTrack() {
  return (
    <>
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="flex items-center gap-2 text-neutral-400 grayscale opacity-60 flex-shrink-0 px-4 sm:px-5 md:px-8"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2L2 12l10 10 10-10L12 2zm0 14.5L7.5 12 12 7.5 16.5 12 12 16.5z"/>
          </svg>
          <span className="font-display font-bold text-sm sm:text-base md:text-xl tracking-wider whitespace-nowrap">
            {logo.name}
          </span>
        </div>
      ))}
    </>
  );
}

export function TrustedBy() {
  return (
    <section className="py-8 sm:py-10 bg-white border-y border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-8">
        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
          Trusted By Ambitious Global Brands
        </span>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-20 bg-gradient-to-r from-white to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-20 bg-gradient-to-l from-white to-transparent"
          aria-hidden="true"
        />

        {/* RTL infinite marquee: right → left → seamless loop back to right */}
        <div className="overflow-hidden" aria-hidden="true">
          <div className="marquee-rtl-track flex w-max">
            <div className="flex shrink-0 items-center">
              <LogoTrack />
            </div>
            <div className="flex shrink-0 items-center" aria-hidden="true">
              <LogoTrack />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
