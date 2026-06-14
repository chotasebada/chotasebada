import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaLinkedin, FaBehance } from 'react-icons/fa';
import logo from '../assets/4e47a432-b57c-4c78-8106-a97027500496-removebg-preview.png';

const socialLinks = [
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaYoutube, label: 'YouTube', href: '#' },
  { icon: FaLinkedin, label: 'LinkedIn', href: '#' },
  { icon: FaBehance, label: 'Behance', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900" style={{ borderTop: '1px solid rgba(249,115,22,0.1)' }}>
      <div className="section-container section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Chota.Se.BADA" className="h-24 w-auto object-contain mb-3" />
            <p className="text-gray-400 text-sm mb-6" style={{ lineHeight: 1.7 }}>
              From Small to Big. That&apos;s the journey we build together.
            </p>

            {/* Social Icons with hover animation */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#9CA3AF',
                      transition: 'all 0.3s ease',
                    }}
                    whileHover={{
                      y: -4,
                      color: '#F97316',
                      background: 'rgba(249,115,22,0.1)',
                      borderColor: 'rgba(249,115,22,0.3)',
                      boxShadow: '0 4px 16px rgba(249,115,22,0.2)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4" style={{ letterSpacing: '0.02em' }}>Quick Links</h3>
            <ul className="space-y-2">
              {[['Home', '/'], ['Services', '/services'], ['About', '/about'], ['Careers', '/careers']].map(([name, path]) => (
                <li key={path}>
                  <Link to={path} className="text-gray-400 hover:text-orange-400 transition-colors duration-200" style={{ fontSize: '0.95rem' }}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4" style={{ letterSpacing: '0.02em' }}>Services</h3>
            <ul className="space-y-2">
              {['Video Editing', 'Graphic Design', 'Social Media', 'Web Services', 'Creator Management'].map((s) => (
                <li key={s}>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200" style={{ fontSize: '0.95rem' }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4" style={{ letterSpacing: '0.02em' }}>Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:chotasebadaofficial@gmail.com" className="text-gray-400 hover:text-orange-400 transition-colors duration-200" style={{ fontSize: '0.95rem' }}>
                  📧 chotasebadaofficial@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917382499877" className="text-gray-400 hover:text-orange-400 transition-colors duration-200" style={{ fontSize: '0.95rem' }}>
                  📞 +91 73824 99877
                </a>
              </li>
              <li className="text-gray-400" style={{ fontSize: '0.95rem' }}>
                📍 Hyderabad, Telangana, India
              </li>
            </ul>

            {/* Additional social icons row in contact column */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={`footer-contact-${social.label}`}
                    href={social.href}
                    aria-label={social.label}
                    style={{ color: '#6B7280', transition: 'color 0.2s' }}
                    whileHover={{ y: -3, color: '#F97316' }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: '#6B7280' }}
        >
          <p>© 2025 Chota Se Bada. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
