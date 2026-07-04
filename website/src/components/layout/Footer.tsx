export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <span className="font-display font-bold text-2xl tracking-tight block mb-6">INQUIVIX</span>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8">
              INQUIVIX is the Korea market entry and digital growth partner for global brands. 
              We combine local expertise with data-driven execution to build measurable, sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                LinkedIn
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                YouTube
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                Email
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors block">Naver Marketing</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors block">Kakao & Paid Media</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors block">Influencer & KOL Marketing</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors block">Market Entry Strategy</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors block">Web & Content Localization</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors block">Events & Brand Activations</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors block">About INQUIVIX</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors block">Our Approach</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors block">Case Studies</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors block">Insights</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors block">Careers</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors block">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-neutral-400">
                <span className="mt-1 mr-3">📍</span>
                <span>13F, 23 Teheran-ro 30-gil, Gangnam-gu, Seoul, 06210, Korea</span>
              </li>
              <li className="flex items-center text-sm text-neutral-400">
                <span className="mr-3">✉️</span>
                <a href="mailto:hello@inquivix.com" className="hover:text-white transition-colors">hello@inquivix.com</a>
              </li>
              <li className="flex items-center text-sm text-neutral-400">
                <span className="mr-3">📞</span>
                <span>+82 2 1661 9850</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-xs mb-4 md:mb-0">
            © 2026 INQUIVIX. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-xs text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
