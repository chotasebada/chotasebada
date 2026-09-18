import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaYoutube, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { openWhatsApp } from '../utils/contact';
import "../subpages.css";

const socialLinks = [
  { Icon: FaInstagram, href: 'https://www.instagram.com/chota.se.bada?igsh=amhtOWlhc2dlOHh4', label: 'Instagram' },
  { Icon: FaYoutube, href: 'https://youtube.com/@chota.sebada?si=0lKyV8PkD3bQ_Opr', label: 'YouTube' },
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/chotasebada-marketing-5567b4416?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
  { Icon: FaFacebook, href: 'https://www.facebook.com/share/18hevhyBdP/', label: 'Facebook' },
  { Icon: FaTwitter, href: 'https://x.com/ChotaseBADA', label: 'Twitter' },
];

const channels = [
  { Icon: FaEnvelope, title: 'Email us', copy: 'chotasebadaofficial@gmail.com', href: 'mailto:chotasebadaofficial@gmail.com', tags: ['Replies in 24h'] },
  { Icon: FaPhone, title: 'Call us', copy: '+91 73824 99877', href: 'tel:+917382499877', tags: ['Mon–Sat'] },
  { Icon: FaMapMarkerAlt, title: 'Find us', copy: 'Hyderabad, Telangana, India', href: undefined, tags: ['Studio visits'] },
];

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

    try {
      openWhatsApp('917382499877', message);
    } catch {
      setErrorMessage('Could not open WhatsApp. Email us at chotasebadaofficial@gmail.com instead.');
      return;
    }
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', service: 'video-editing', budget: 'under-10k', project: '' });
    }, 2000);
  };

  const fieldStyle = {
    width: '100%',
    border: '1px solid #d9d8ce',
    borderRadius: 8,
    padding: '12px 14px',
    fontSize: 13,
    color: '#242820',
    background: '#fffdf8',
    outline: 'none',
  };
  const labelStyle = { display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: 1.5, color: '#74766b', marginBottom: 8, textTransform: 'uppercase' };

  return (
    <main className="studio-page contact-page">
      <section className="studio-page-hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="studio-eyebrow">Get in touch</span>
          <h1>
            Let&apos;s build
            <br />
            something <em>great.</em>
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#74766b", maxWidth: 480, marginTop: 25 }}>
            Tell us your vision. We&apos;ll help you turn it into content
            that grows. First call is free — no commitments.
          </p>
        </motion.div>
        <motion.div
          className="services-hero-note"
          initial={{ opacity: 0, rotate: 5 }}
          animate={{ opacity: 1, rotate: -4 }}
          transition={{ delay: 0.25 }}
        >
          <Sparkles /> Replies within 24 hours.
          <br />
          <b>Friendly, no pressure.</b>
        </motion.div>
      </section>

      <section className="services-board">
        {channels.map(({ Icon, title, copy, href, tags }, index) => {
          const inner = (
            <>
              <span>0{index + 1}</span>
              <div className="service-row-icon">
                <Icon />
              </div>
              <div>
                <h2>{title}</h2>
                <p>{copy}</p>
              </div>
              <div className="service-tags">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <span style={{ width: 43, height: 43, border: '1px solid #c7c7bc', borderRadius: '50%', display: 'grid', placeItems: 'center' }}>
                <ArrowUpRight />
              </span>
            </>
          );
          return href ? (
            <motion.a
              key={title}
              href={href}
              className="service-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06 }}
            >
              {inner}
            </motion.a>
          ) : (
            <motion.div
              key={title}
              className="service-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06 }}
            >
              {inner}
            </motion.div>
          );
        })}
      </section>

      <section className="studio-page-hero" style={{ minHeight: 0, paddingTop: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="studio-eyebrow">Start a project</span>
          <h1 style={{ fontSize: "clamp(44px, 5vw, 72px)" }}>
            Say hello,
            <br />
            we&apos;ll take <em>it from there.</em>
          </h1>
        </motion.div>
      </section>

      <section style={{ width: 'min(1180px, calc(100% - 80px))', margin: '0 auto 110px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 40, alignItems: 'start' }} className="contact-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p style={{ fontSize: 12, color: '#74766b', lineHeight: 1.8, marginBottom: 20 }}>
              Prefer socials? Follow the studio, watch the work land in real
              time, and DM us whenever you&apos;re ready.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 44, height: 44, borderRadius: '50%', display: 'grid',
                    placeItems: 'center', background: '#fffdf8', border: '1px solid #d9d8ce',
                    color: '#f56632', transition: '0.25s',
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
            <div style={{ marginTop: 28, borderRadius: 14, overflow: 'hidden', border: '1px solid #d9d8ce', height: 300 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34203672017!2d78.2432320499104!3d17.41228101487859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1706858163014!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chota Se Bada Location"
              />
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ background: '#fffdf8', border: '1px solid #d9d8ce', borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column', gap: 18 }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div>
                <label style={labelStyle} htmlFor="contact-name">Your name *</label>
                <input id="contact-name" type="text" name="name" required value={formData.name} onChange={handleChange} style={fieldStyle} placeholder="John Doe" />
              </div>
              <div>
                <label style={labelStyle} htmlFor="contact-email">Email *</label>
                <input id="contact-email" type="email" name="email" required value={formData.email} onChange={handleChange} style={fieldStyle} placeholder="john@example.com" />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div>
                <label style={labelStyle} htmlFor="contact-phone">Phone</label>
                <input id="contact-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} style={fieldStyle} placeholder="+91 98765 43210" />
              </div>
              <div>
                <label style={labelStyle} htmlFor="contact-company">Company / brand</label>
                <input id="contact-company" type="text" name="company" value={formData.company} onChange={handleChange} style={fieldStyle} placeholder="Your company" />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div>
                <label style={labelStyle} htmlFor="contact-service">Service</label>
                <select id="contact-service" name="service" value={formData.service} onChange={handleChange} style={fieldStyle}>
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
                <label style={labelStyle} htmlFor="contact-budget">Budget</label>
                <select id="contact-budget" name="budget" value={formData.budget} onChange={handleChange} style={fieldStyle}>
                  <option value="under-10k">Under ₹10,000</option>
                  <option value="10k-50k">₹10,000 - ₹50,000</option>
                  <option value="50k-2l">₹50,000 - ₹2,00,000</option>
                  <option value="above-2l">Above ₹2,00,000</option>
                </select>
              </div>
            </div>
            <div>
              <label style={labelStyle} htmlFor="contact-project">About your project *</label>
              <textarea id="contact-project" name="project" required value={formData.project} onChange={handleChange} rows="5" style={{ ...fieldStyle, resize: 'none' }} placeholder="Describe your project, goals, and expectations..." />
            </div>
            {errorMessage ? <p style={{ fontSize: 12, color: '#c0392b' }}>{errorMessage}</p> : null}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitted}
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 18,
                background: '#f56632', color: '#fff', padding: '16px 22px', borderRadius: 5,
                fontSize: 12, fontWeight: 700, border: 'none', cursor: 'pointer',
              }}
            >
              {submitted ? 'Message Sent! ✓' : 'Send Message'} <ArrowUpRight size={16} />
            </motion.button>
            <p style={{ fontSize: 11, color: '#8b8d81', textAlign: 'center' }}>
              Opens WhatsApp with your brief ready to send. Or <Link to="/" style={{ color: '#f56632' }}>head home ↑</Link>
            </p>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
