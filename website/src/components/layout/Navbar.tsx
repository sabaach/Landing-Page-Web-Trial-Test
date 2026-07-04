import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const mobileMenu = isMobileMenuOpen
    ? createPortal(
        <div className="md:hidden fixed inset-0 z-[200]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Drawer — slides down from top */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className="absolute top-0 left-0 right-0 bg-white shadow-2xl flex flex-col max-h-[100dvh] animate-slide-in-top"
          >
            <div className="flex-shrink-0 flex items-center justify-between px-4 sm:px-6 py-4 border-b border-neutral-100">
              <span className="font-display font-bold text-xl text-neutral-900">INQUIVIX</span>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="text-neutral-500 hover:text-neutral-900 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex-1 min-h-0 overflow-y-auto px-4 sm:px-6 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="text-base font-medium text-neutral-900 py-4 min-h-[48px] flex items-center border-b border-neutral-100 hover:text-primary-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex-shrink-0 px-4 sm:px-6 pt-4 pb-6 mobile-drawer-footer border-t border-neutral-100 bg-white">
              <Button className="w-full" variant="primary" onClick={closeMobileMenu}>
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
          isScrolled || isMobileMenuOpen
            ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 py-3 sm:py-4 shadow-sm'
            : 'bg-transparent py-4 sm:py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <span
                className={clsx(
                  'font-display font-bold text-xl sm:text-2xl tracking-tight',
                  isScrolled || isMobileMenuOpen ? 'text-neutral-900' : 'text-white'
                )}
              >
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
                    'text-sm font-medium hover:text-primary-600 transition-colors',
                    isScrolled ? 'text-neutral-600' : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pl-4 border-l border-neutral-300/30">
                <span
                  className={clsx(
                    'text-xs font-semibold tracking-wider',
                    isScrolled ? 'text-neutral-500' : 'text-white/80'
                  )}
                >
                  EN / KR
                </span>
                <Button size="sm" variant="primary">
                  Book a Strategy Call →
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className={clsx(
                  'p-2 -mr-2 rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center',
                  isScrolled || isMobileMenuOpen ? 'text-neutral-900' : 'text-white'
                )}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenu}
    </>
  );
}
