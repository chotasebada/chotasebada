import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/4e47a432-b57c-4c78-8106-a97027500496-removebg-preview.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const onHero = isHomePage && !isScrolled && !isOpen;
  const showOrange = !onHero; // orange on all non-hero states

  const navStyle = showOrange ? {
    ...(isScrolled ? {
      margin: '12px 24px',
      width: 'calc(100% - 48px)',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(249, 115, 22, 0.4)',
    } : {}),
    background: 'linear-gradient(135deg, #F97316 0%, #ea580c 50%, #fb923c 100%)',
  } : {};

  return (
    <nav
      className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300"
      style={navStyle}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center" style={{ height: '64px' }}>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Agency Logo" style={{ height: '140px', width: 'auto', objectFit: 'contain', transform: 'translateY(-5px)' }} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-medium transition-all duration-200 px-4 py-2 rounded-lg"
              style={{
                fontSize: '1.058rem',
                color: '#ffffff',
                fontWeight: location.pathname === link.path ? 700 : 500,
                background: location.pathname === link.path
                  ? 'rgba(255,255,255,0.25)'
                  : 'transparent',
              }}
              onMouseEnter={e => { if (location.pathname !== link.path) e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
              onMouseLeave={e => { if (location.pathname !== link.path) e.currentTarget.style.background = 'transparent'; }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:block px-6 py-3 rounded-lg border-2 font-semibold transition-all duration-200"
          style={{
            fontSize: '1.058rem',
            borderColor: '#ffffff',
            color: '#ffffff',
          }}
        >
          Book a Free Strategy Call →
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: '#fff' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white border-b border-gray-100 shadow-lg"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-gray-700 hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-center text-sm" onClick={() => setIsOpen(false)}>
              Book a Free Strategy Call →
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
