import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { openWhatsApp } from '../utils/contact';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: 'video-editing', budget: 'under-10k', project: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const message = [
      `Hi Chota Se Bada, I’m ${formData.name || 'a client'}.`,
      formData.email ? `Email: ${formData.email}` : '',
      formData.phone ? `Phone: ${formData.phone}` : '',
      formData.company ? `Company: ${formData.company}` : '',
      `Service: ${formData.service}`,
      `Budget: ${formData.budget}`,
      '',
      formData.project || 'I would like to discuss my project.',
    ]
      .filter(Boolean)
      .join('\n');

    openWhatsApp('917382499877', message);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', service: 'video-editing', budget: 'under-10k', project: '' });
    }, 2000);
  };

  const inputClass = "w-full border rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-orange-400 transition-colors";
  const inputStyle = { borderColor: '#fed7aa', background: '#fff' };

  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="relative py-20 flex items-center justify-center bg-white">
        <motion.div className="text-center relative z-10 section-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="uppercase text-sm font-semibold tracking-widest mb-3" style={{ color: '#F97316', fontFamily: '"DM Sans", sans-serif' }}>Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 font-display" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>Let&apos;s Build Something <span style={{ color: '#F97316' }}>Great</span></h1>
          <p className="text-gray-500 text-lg" style={{ lineHeight: 1.7 }}>Tell us your vision. We&apos;ll help you turn it into content that grows.</p>
        </motion.div>
      </section>

      {/* Main */}
      <section className="section bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Get In Touch</h2>
              <div className="space-y-6 mb-12">
                <motion.a href="mailto:chotasebadaofficial@gmail.com" className="flex items-start gap-4 group" whileHover={{ x: 10 }}>
                  <div className="text-2xl mt-1" style={{ color: '#F97316' }}><FaEnvelope /></div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-gray-900 font-semibold group-hover:text-orange-500 transition-colors">chotasebadaofficial@gmail.com</p>
                  </div>
                </motion.a>
                <motion.a href="tel:+917382499877" className="flex items-start gap-4 group" whileHover={{ x: 10 }}>
                  <div className="text-2xl mt-1" style={{ color: '#F97316' }}><FaPhone /></div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-gray-900 font-semibold group-hover:text-orange-500 transition-colors">+91 73824 99877</p>
                  </div>
                </motion.a>
                <motion.div className="flex items-start gap-4" whileHover={{ x: 10 }}>
                  <div className="text-2xl mt-1" style={{ color: '#F97316' }}><FaMapMarkerAlt /></div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-gray-900 font-semibold">Hyderabad, Telangana, India</p>
                  </div>
                </motion.div>
              </div>

              <p className="text-gray-900 font-semibold mb-4">Follow Us</p>
              <div className="flex gap-4">
                {[FaInstagram, FaYoutube, FaLinkedin, FaTwitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all" style={{ background: '#fff7ed', border: '1px solid #fed7aa', color: '#F97316' }}>
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className={inputClass} style={inputStyle} placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} style={inputStyle} placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} style={inputStyle} placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Company / Brand Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} style={inputStyle} placeholder="Your Company" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Service Interested In</label>
                  <select name="service" value={formData.service} onChange={handleChange} className={inputClass} style={inputStyle}>
                    <option value="video-editing">Video Editing</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="video-production">Video Production</option>
                    <option value="web-services">Web Services</option>
                    <option value="seo">SEO Management</option>
                    <option value="creator-management">Creator Management</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Budget Range</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className={inputClass} style={inputStyle}>
                    <option value="under-10k">Under ₹10,000</option>
                    <option value="10k-50k">₹10,000 - ₹50,000</option>
                    <option value="50k-2l">₹50,000 - ₹2,00,000</option>
                    <option value="above-2l">Above ₹2,00,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Tell Us About Your Project *</label>
                  <textarea name="project" required value={formData.project} onChange={handleChange} rows="5" className={inputClass} style={{ ...inputStyle, resize: 'none' }} placeholder="Describe your project, goals, and expectations..." />
                </div>
                {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}
                <motion.button type="submit" className="btn-primary w-full" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={submitted}>
                  {submitted ? 'Message Sent! ✓' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section py-12" style={{ background: '#fff7ed' }}>
        <div className="section-container">
          <div className="rounded-3xl overflow-hidden h-96 flex items-center justify-center" style={{ border: '1px solid #fed7aa', background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <div className="text-center">
              <p className="text-gray-400 mb-4">🗺️ Google Maps Integration</p>
              <p className="text-gray-900 font-semibold">Map will be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
