import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from "../assets/4e47a432-b57c-4c78-8106-a97027500496-removebg-preview.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const navLinks = [
    { name: 'Home',     path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About',    path: '/about' },
    { name: 'Careers',  path: '/careers' },
    { name: 'Contact',  path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const onHero     = isHomePage && !isScrolled;
  const showOrange = !onHero;

  const navStyle = showOrange
    ? {
        ...(isScrolled ? {
          margin: '12px 24px',
          width: 'calc(100% - 48px)',
          borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(249,115,22,0.4)',
        } : {}),
        background: 'linear-gradient(135deg, #F97316 0%, #ea580c 50%, #fb923c 100%)',
      }
    : {};

  return (
    <nav
      className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300"
      style={navStyle}
    >
      <div
        className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center"
        style={{ height: '64px' }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center cursor-pointer"
        >
          <img
            src={logo}
            alt="Chota Se Bada Logo"
            style={{ height: '140px', width: 'auto', objectFit: 'contain', transform: 'translateY(-5px)' }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-all duration-200 px-4 py-2 rounded-lg ${
                location.pathname === link.path
                  ? 'text-white bg-white/20 font-bold'
                  : 'text-white/80 hover:text-white hover:bg-white/10 font-medium'
              }`}
              style={{ fontSize: '1.058rem' }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:block px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40 shadow-sm"
          style={{ fontSize: '1.058rem' }}
        >
          Book a Free Strategy Call →
        </Link>

        {/* Mobile hamburger + dropdown wrapper */}
        <div className="relative md:hidden" ref={dropdownRef}>
          <button
            className="flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
            style={{
              color: '#fff',
              background: isOpen ? 'rgba(255,255,255,0.2)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Floating dropdown — anchored below the button */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, scale: 0.95, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 mt-2 w-52 overflow-hidden"
                style={{
                  background: '#fff',
                  borderRadius: '14px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(249,115,22,0.1)',
                  border: '1px solid rgba(249,115,22,0.12)',
                  transformOrigin: 'top right',
                }}
              >
                <div className="py-2 px-2 flex flex-col gap-0.5">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                        style={{
                          color: isActive ? '#EA580C' : '#374151',
                          background: isActive ? 'rgba(249,115,22,0.08)' : 'transparent',
                          fontWeight: isActive ? 700 : 500,
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) e.currentTarget.style.background = 'rgba(249,115,22,0.06)';
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        {isActive && (
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: '#F97316' }}
                          />
                        )}
                        {link.name}
                      </Link>
                    );
                  })}

                  {/* Divider */}
                  <div
                    className="my-1 mx-2"
                    style={{ height: '1px', background: 'rgba(249,115,22,0.1)' }}
                  />

                  {/* CTA */}
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="mx-1 my-1 flex items-center justify-center gap-1 px-4 py-2.5 rounded-lg text-sm font-bold text-white transition-all"
                    style={{
                      background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
                      boxShadow: '0 3px 12px rgba(249,115,22,0.35)',
                    }}
                  >
                    Book a Free Call →
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
