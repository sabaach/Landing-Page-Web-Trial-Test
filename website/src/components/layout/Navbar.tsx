import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { Button } from '../ui/Button';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Market Entry', href: '#market-entry' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Insights', href: '#insights' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <span className={clsx(
              "font-display font-bold text-2xl tracking-tight",
              isScrolled ? "text-neutral-900" : "text-white"
            )}>
              INQUIVIX
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={clsx(
                  "text-sm font-medium hover:text-primary-600 transition-colors",
                  isScrolled ? "text-neutral-600" : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 pl-4 border-l border-neutral-300/30">
              <span className={clsx(
                "text-xs font-semibold tracking-wider",
                isScrolled ? "text-neutral-500" : "text-white/80"
              )}>EN / KR</span>
              <Button size="sm" variant="primary">
                Book a Strategy Call →
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={clsx(
                "p-2 -mr-2 rounded-md",
                isScrolled ? "text-neutral-900" : "text-white"
              )}
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-neutral-900/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl flex flex-col p-6"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-display font-bold text-xl text-neutral-900">INQUIVIX</span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-500 hover:text-neutral-900 p-2"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-neutral-900"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="mt-auto flex flex-col space-y-4 pt-6 border-t border-neutral-100">
              <Button className="w-full" variant="primary">
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
