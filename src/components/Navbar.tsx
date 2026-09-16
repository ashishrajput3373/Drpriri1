import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About Clinic', href: '#brand' },
    { label: 'Dr. Priti Prakhar', href: '#specialist' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Services', href: '#services' },
    { label: 'Hair Care', href: '#hair-treatment' },
    { label: 'Results', href: '#results' },
    { label: 'Journey', href: '#journey' },
    { label: 'Visit', href: '#visit' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const topOffset = element.getBoundingClientRect().top + window.scrollY - 85;
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth',
        });
      } else if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-[#F7F5F0]/90 backdrop-blur-md py-4 border-b border-[#B08D57]/20 shadow-xs'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-baseline gap-1 focus:outline-none"
            id="brand-logo-link"
          >
            <span className="font-editorial italic text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight group-hover:text-[#B08D57] transition-colors duration-500 whitespace-nowrap">
              Dr. Priti Prakhar
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] inline-block ml-0.5" />
            <span className="hidden sm:inline-block ml-2 sm:ml-3 text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/50 font-medium">
              Skin Care Clinic
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/70 hover:text-[#B08D57] transition-colors duration-300 font-medium relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B08D57] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <button
                id="header-book-cta"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 hover:from-amber-700 hover:to-rose-700 text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-100" />
                <span>Book Consultation</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1A1A1A] hover:text-[#B08D57] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#F7F5F0] pt-28 px-8 pb-12 flex flex-col justify-between lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#B08D57] font-medium border-b border-[#B08D57]/20 pb-3">
                Dr. Priti Prakhar · Menu Directory
              </p>
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-editorial italic text-3xl text-[#1A1A1A] hover:text-[#B08D57] transition-colors flex items-baseline justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-sans tracking-widest text-[#B08D57]">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-[#1A1A1A]/10 flex flex-col gap-4">
              <p className="font-hindi text-sm text-[#1A1A1A]/70 italic text-center">
                {CLINIC_INFO.hindiTagline}
              </p>
              <div className="flex gap-3">
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 border border-[#1A1A1A] text-xs uppercase tracking-widest text-[#1A1A1A]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B08D57]" />
                  Call Clinic
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1A1A1A] text-xs uppercase tracking-widest text-[#F7F5F0]"
                >
                  Book Visit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
