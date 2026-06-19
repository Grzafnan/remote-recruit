import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import logoImg from "../../assets/icons/logo.svg"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`lg:max-w-[1440px] mx-auto lg:rounded-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-gradient-to-r from-primary-dark to-primary-dark/90 backdrop-blur-md shadow-xl py-3 lg:py-2'
        : 'bg-transparent'
        }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
        id="main-nav"
      >
        <a href="#" className="flex items-center gap-2" aria-label="RemoteRecruit home">
          <img title='home' alt='logo' src={logoImg} loading="lazy" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className={`px-8 py-2 rounded-2xl text-sm font-semibold transition-colors border-1 border-primary-cyan hover:bg-primary-light duration-500 hover:text-primary-cyan text-white/90 hover:text-white`}
          >
            Sign In
          </a>
          <Button variant="nav" id="nav-signup-btn">
            Sign Up
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          title={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          id="mobile-menu-toggle"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className={`block w-6 h-0.5 rounded transition-colors ${mobileOpen ? 'bg-text-red' : 'bg-white'
              }`}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`block w-6 h-0.5 rounded transition-colors ${mobileOpen ? 'bg-text-red' : 'bg-white'
              }`}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className={`block w-6 h-0.5 rounded transition-colors ${mobileOpen ? 'bg-text-red' : 'bg-white'
              }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <a
                href="#"
                className="text-primary-light text-center font-medium py-2 rounded-2xl border-2 border-primary-light px-8 hover:bg-primary-light hover:text-primary-dark hover:-translate-y-0.5 active:translate-y-0"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </a>
              <Button
                variant="nav"
                className="w-full"
                onClick={() => setMobileOpen(false)}
                id="mobile-signup-btn"
              >
                Sign Up
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
