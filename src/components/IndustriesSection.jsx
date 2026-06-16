import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHeart, FaGraduationCap,
  FaArrowRight, FaChevronLeft, FaChevronRight, FaCheck,
} from 'react-icons/fa';

// ---------------------------------------------------------------------------
// Custom SVG icon components matching the provided images
// ---------------------------------------------------------------------------

/** Food & Beverages — bowl + drink cup (black filled, matches provided icon) */
function IconFood({ size = 36, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Cup */}
      <rect x="30" y="4" width="26" height="4" rx="2" fill={color} />
      <path d="M32 8h22l-3 28H35L32 8Z" fill={color} />
      {/* Straw */}
      <rect x="50" y="2" width="3" height="12" rx="1.5" fill={color} />
      {/* Bowl base */}
      <rect x="4" y="46" width="28" height="8" rx="3" fill={color} />
      {/* Bowl items — ice cream scoops */}
      <circle cx="13" cy="38" r="8" fill={color} />
      <circle cx="22" cy="35" r="9" fill={color} />
      {/* Spoon stick */}
      <rect x="5" y="28" width="3" height="14" rx="1.5" transform="rotate(-30 5 28)" fill={color} />
      {/* white gap between bowl and cup */}
      <rect x="28" y="34" width="4" height="26" rx="2" fill="white" />
    </svg>
  );
}

/** Creator Management — film clapper + lightbulb + music note (outline, matches provided icon) */
function IconCreator({ size = 36, color = 'currentColor' }) {
  const s = color;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Lightbulb */}
      <circle cx="42" cy="18" r="10" stroke={s} strokeWidth="2.5" fill="none" />
      <path d="M38 28v3h8v-3" stroke={s} strokeWidth="2" fill="none" />
      <line x1="42" y1="31" x2="42" y2="34" stroke={s} strokeWidth="2" />
      <line x1="39" y1="34" x2="45" y2="34" stroke={s} strokeWidth="1.5" />
      <line x1="39" y1="36" x2="45" y2="36" stroke={s} strokeWidth="1.5" />
      {/* Play triangle inside bulb */}
      <polygon points="39,16 39,22 46,19" fill={s} />
      {/* Radiance lines */}
      <line x1="42" y1="6" x2="42" y2="4" stroke={s} strokeWidth="2" strokeLinecap="round" />
      <line x1="54" y1="10" x2="56" y2="8" stroke={s} strokeWidth="2" strokeLinecap="round" />
      <line x1="58" y1="18" x2="60" y2="18" stroke={s} strokeWidth="2" strokeLinecap="round" />
      {/* Camera square */}
      <rect x="4" y="4" width="16" height="14" rx="2.5" stroke={s} strokeWidth="2" fill="none" />
      <circle cx="12" cy="11" r="4" stroke={s} strokeWidth="2" fill="none" />
      <line x1="20" y1="11" x2="24" y2="11" stroke={s} strokeWidth="2" strokeLinecap="round" />
      {/* Clapperboard */}
      <rect x="4" y="38" width="26" height="20" rx="2.5" stroke={s} strokeWidth="2" fill="none" />
      <line x1="4" y1="45" x2="30" y2="45" stroke={s} strokeWidth="2" />
      <path d="M7 38 L11 45" stroke={s} strokeWidth="2" />
      <path d="M14 38 L18 45" stroke={s} strokeWidth="2" />
      <path d="M21 38 L25 45" stroke={s} strokeWidth="2" />
      {/* Play triangle inside clapper */}
      <polygon points="12,49 12,56 22,52.5" fill={s} />
      {/* Rotated clapper strip */}
      <rect x="2" y="33" width="20" height="6" rx="2" transform="rotate(-15 2 33)" stroke={s} strokeWidth="2" fill="none" />
      <line x1="8" y1="31" x2="9" y2="37" stroke={s} strokeWidth="1.5" />
      <line x1="14" y1="29" x2="15" y2="35" stroke={s} strokeWidth="1.5" />
      {/* Music note box */}
      <rect x="36" y="38" width="22" height="20" rx="2.5" stroke={s} strokeWidth="2" fill="none" />
      <path d="M47 43 L47 56 M47 56 C47 58 44 59 44 57 C44 55 47 55 47 57" stroke={s} strokeWidth="2" strokeLinecap="round" fill="none" />
      <line x1="47" y1="43" x2="53" y2="41" stroke={s} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Beauty & Fashion — makeup bag with cosmetics (colorful flat, matches provided icon) */
function IconBeauty({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Pink circle background */}
      <circle cx="32" cy="32" r="30" fill="#FDDDE6" />
      {/* Makeup bag (dark pink/red) */}
      <path d="M10 40 Q10 55 32 55 Q54 55 54 40 L52 30 Q52 26 48 26 L16 26 Q12 26 12 30 Z" fill="#C41E5B" />
      {/* Bag shine */}
      <ellipse cx="32" cy="54" rx="12" ry="3" fill="white" fillOpacity="0.4" />
      {/* Foundation tube (cream/white) */}
      <rect x="9" y="20" width="9" height="22" rx="3" fill="#E8F4FD" transform="rotate(-15 9 20)" />
      <circle cx="11" cy="22" r="4" fill="#5B8FD4" />
      {/* Compact (pink circle) */}
      <circle cx="30" cy="28" r="9" fill="#E8579A" />
      <ellipse cx="30" cy="28" rx="5" ry="2" fill="#F07AB0" />
      <line x1="27" y1="28" x2="33" y2="28" stroke="#C41E5B" strokeWidth="1.5" strokeLinecap="round" />
      {/* Eyeshadow palette */}
      <circle cx="42" cy="18" r="8" fill="#F5A623" />
      <circle cx="42" cy="18" r="5" fill="#E8860A" />
      {/* Lipstick (dark purple body) */}
      <rect x="48" y="10" width="6" height="20" rx="2" fill="#5C3499" />
      <rect x="48" y="10" width="6" height="8" rx="2" fill="#B03060" />
      <rect x="47" y="28" width="8" height="4" rx="1" fill="#4A2780" />
      {/* Mascara wand */}
      <rect x="54" y="24" width="4" height="16" rx="2" fill="#2979C8" />
      <rect x="53" y="38" width="6" height="3" rx="1" fill="#1A5BA8" />
    </svg>
  );
}

/** Real Estate — city buildings (black filled, matches provided icon) */
function IconRealEstate({ size = 36, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Left skyscraper */}
      <rect x="2" y="16" width="16" height="42" rx="1" fill={color} />
      {/* Windows left */}
      <rect x="5" y="20" width="4" height="4" fill="white" rx="0.5" />
      <rect x="11" y="20" width="4" height="4" fill="white" rx="0.5" />
      <rect x="5" y="28" width="4" height="4" fill="white" rx="0.5" />
      <rect x="11" y="28" width="4" height="4" fill="white" rx="0.5" />
      <rect x="5" y="36" width="4" height="4" fill="white" rx="0.5" />
      <rect x="11" y="36" width="4" height="4" fill="white" rx="0.5" />
      <rect x="5" y="44" width="4" height="4" fill="white" rx="0.5" />
      <rect x="11" y="44" width="4" height="4" fill="white" rx="0.5" />
      {/* Middle tall skyscraper */}
      <rect x="20" y="4" width="20" height="54" rx="1" fill={color} />
      {/* Windows middle */}
      <rect x="23" y="8" width="5" height="5" fill="white" rx="0.5" />
      <rect x="31" y="8" width="5" height="5" fill="white" rx="0.5" />
      <rect x="23" y="17" width="5" height="5" fill="white" rx="0.5" />
      <rect x="31" y="17" width="5" height="5" fill="white" rx="0.5" />
      <rect x="23" y="26" width="5" height="5" fill="white" rx="0.5" />
      <rect x="31" y="26" width="5" height="5" fill="white" rx="0.5" />
      <rect x="23" y="35" width="5" height="5" fill="white" rx="0.5" />
      <rect x="31" y="35" width="5" height="5" fill="white" rx="0.5" />
      {/* House / residential building */}
      <path d="M38 38 L52 30 L66 38" fill={color} />
      <rect x="40" y="38" width="24" height="20" rx="1" fill={color} />
      {/* House windows */}
      <rect x="43" y="42" width="5" height="5" fill="white" rx="0.5" />
      <rect x="55" y="42" width="5" height="5" fill="white" rx="0.5" />
      {/* House door */}
      <rect x="49" y="48" width="6" height="10" fill="white" rx="0.5" />
      {/* Circle window above door */}
      <circle cx="52" cy="43" r="3" fill="white" />
      {/* Ground line */}
      <rect x="0" y="57" width="64" height="4" rx="2" fill={color} />
    </svg>
  );
}

/** Startups & Ventures — rocket (colorful flat, matches provided icon) */
function IconRocket({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Rocket body */}
      <path d="M32 4 C32 4 52 16 52 36 L32 52 L12 36 C12 16 32 4 32 4Z" fill="#E8EAF6" />
      {/* Body shadow */}
      <path d="M32 4 C32 4 52 16 52 36 L32 52 L32 4Z" fill="#C5CAE9" />
      {/* Window circle outer */}
      <circle cx="32" cy="28" r="9" fill="#455A64" />
      {/* Window circle inner */}
      <circle cx="32" cy="28" r="6" fill="#29B6F6" />
      {/* Window glare */}
      <circle cx="29" cy="25" r="2.5" fill="#81D4FA" opacity="0.8" />
      {/* Left fin */}
      <path d="M12 36 L4 44 L16 40 Z" fill="#EF5350" />
      {/* Right fin */}
      <path d="M52 36 L60 44 L48 40 Z" fill="#EF5350" />
      {/* Bottom fin */}
      <path d="M24 52 L20 62 L32 56 L44 62 L40 52 Z" fill="#EF5350" />
      {/* Dark left side accent */}
      <path d="M12 24 L22 12 L22 38 Z" fill="#3F4F6A" opacity="0.5" />
      {/* Flame / exhaust 1 */}
      <rect x="16" y="56" width="8" height="4" rx="4" fill="#FFA726" transform="rotate(-30 16 56)" />
      {/* Flame / exhaust 2 */}
      <rect x="22" y="60" width="8" height="4" rx="4" fill="#FF7043" transform="rotate(-30 22 60)" />
      {/* Flame / exhaust 3 */}
      <rect x="10" y="62" width="8" height="4" rx="4" fill="#FFD600" transform="rotate(-30 10 62)" />
    </svg>
  );
}

// Single brand-consistent orange/white theme used by every industry card
const ORANGE = '#F97316';
const ORANGE_BG = 'linear-gradient(135deg, #FFF7ED 0%, #FFFBF5 100%)';
const ORANGE_ACCENT = 'rgba(249,115,22,0.1)';

const industries = [
  {
    id: 0,
    icon: FaHeart,
    iconType: 'fa',
    title: 'Healthcare & Doctors',
    tag: 'Medical & Wellness',
    description: 'Help hospitals, clinics, and doctors attract more patients through social media marketing, content creation, and branding.',
    services: ['Medical Content Creation', 'Social Media Management', 'Reputation Management', 'Video Editing'],
    benefits: ['More patient inquiries', 'Stronger online presence', 'Increased trust & credibility'],
    stat: { value: '3x', label: 'More Patient Inquiries' },
  },
  {
    id: 1,
    icon: IconFood,
    iconType: 'svg',
    title: 'Food & Beverages',
    tag: 'Restaurants & Cafes',
    description: 'Grow restaurants, cafes, cloud kitchens, and food brands with engaging visual content and marketing campaigns.',
    services: ['Food Photography & Reels', 'Social Media Marketing', 'Menu Promotions', 'Brand Building', 'Video Production'],
    benefits: ['Higher footfall', 'Increased orders', 'Better customer engagement'],
    stat: { value: '10x', label: 'More Online Orders' },
  },
  {
    id: 2,
    icon: IconCreator,
    iconType: 'svg',
    title: 'Creator Management',
    tag: 'Influencers & Creators',
    description: 'Help influencers, creators, and personal brands grow their audience and monetize their content.',
    services: ['Video Editing', 'Content Strategy', 'Brand Partnerships', 'Social Media Growth', 'Personal Branding'],
    benefits: ['Faster audience growth', 'Better engagement', 'Increased revenue opportunities'],
    stat: { value: '200%', label: 'Audience Growth' },
  },
  {
    id: 3,
    icon: IconBeauty,
    iconType: 'svg',
    title: 'Beauty & Fashion',
    tag: 'Lifestyle & Style',
    description: 'Build strong beauty and fashion brands through premium content and social media campaigns.',
    services: ['Product Shoots', 'Reels & Short-form Content', 'Influencer Marketing', 'Brand Strategy', 'Social Media Management'],
    benefits: ['Increased product visibility', 'Higher conversions', 'Stronger brand recognition'],
    stat: { value: '5x', label: 'Higher Conversions' },
  },
  {
    id: 4,
    icon: IconRealEstate,
    iconType: 'svg',
    title: 'Real Estate',
    tag: 'Property & Ventures',
    description: 'Generate quality property leads using modern marketing and professional content.',
    services: ['Property Showcase Videos', 'Lead Generation Campaigns', 'Social Media Advertising', 'Branding', 'Content Creation'],
    benefits: ['More qualified leads', 'Faster property sales', 'Better market visibility'],
    stat: { value: '4x', label: 'More Qualified Leads' },
  },
  {
    id: 5,
    icon: FaGraduationCap,
    iconType: 'fa',
    title: 'Education & EdTech',
    tag: 'Learning & Growth',
    description: 'Help educational institutions and EdTech companies reach more students and improve enrollment.',
    services: ['Educational Content Creation', 'Social Media Marketing', 'Student Lead Generation', 'Video Production', 'Brand Building'],
    benefits: ['Increased admissions', 'Better student engagement', 'Stronger online presence'],
    stat: { value: '60%', label: 'More Enrollments' },
  },
  {
    id: 6,
    icon: IconRocket,
    iconType: 'svg',
    title: 'Startups & Ventures',
    tag: 'Innovation & Scale',
    description: 'Accelerate startup growth through strategic branding, content, and digital marketing.',
    services: ['Brand Identity', 'Website Design', 'Social Media Marketing', 'Content Creation', 'Growth Campaigns'],
    benefits: ['Faster market penetration', 'Strong brand awareness', 'Increased customer acquisition'],
    stat: { value: '8x', label: 'Faster Brand Growth' },
  },
];

export default function IndustriesSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (idx) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };

  const prev = () => go(active === 0 ? industries.length - 1 : active - 1);
  const next = () => go(active === industries.length - 1 ? 0 : active + 1);

  const industry = industries[active];
  const Icon = industry.icon;

  // All icon types now render in orange
  function renderIcon(size) {
    const IconComp = industry.icon;
    return <IconComp size={size} color={ORANGE} style={{ color: ORANGE }} />;
  }

  function renderTabIcon(ind, size) {
    const TabIcon = ind.icon;
    return <TabIcon size={size} color="currentColor" style={{ color: 'currentColor' }} />;
  }

  return (
    <section style={{ background: '#FFFFFF', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ width: '2rem', height: '2px', background: '#F97316', borderRadius: '2px' }} />
              <span style={{ color: '#F97316', fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 700 }}>INDUSTRIES WE SERVE</span>
              <div style={{ width: '2rem', height: '2px', background: '#F97316', borderRadius: '2px' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#111827', fontFamily: '"Playfair Display", serif', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Your Industry. <span style={{ color: '#F97316', fontStyle: 'italic' }}>Our Expertise.</span>
            </h2>
            <p style={{ color: '#6B7280', fontSize: '1.05rem', marginTop: '0.75rem' }}>
              We've worked across diverse sectors. Your industry is next.
            </p>
          </motion.div>
        </div>

        {/* Tab Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {industries.map((ind, idx) => {
            return (
              <motion.button
                key={ind.id}
                onClick={() => go(idx)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  border: active === idx ? 'none' : '1px solid #FFE4CC',
                  background: active === idx ? ORANGE : '#fff',
                  color: active === idx ? '#fff' : '#9A4A00',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: active === idx ? '0 4px 14px rgba(249,115,22,0.35)' : 'none',
                }}
              >
                {renderTabIcon(ind, 11)}
                {ind.title.split(' ')[0]}
              </motion.button>
            );
          })}
        </div>

        {/* Featured Card */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#fff',
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: '0 24px 80px rgba(0,0,0,0.1)',
                border: '1px solid #F3F4F6',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

                {/* Left Visual Panel */}
                <div
                  style={{
                    flex: '0 0 38%',
                    minWidth: '280px',
                    background: ORANGE_BG,
                    padding: '3.5rem 3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Decorative circles */}
                  <div style={{ position: 'absolute', width: '200px', height: '200px', borderRadius: '50%', background: ORANGE_ACCENT, top: '-50px', right: '-50px' }} />
                  <div style={{ position: 'absolute', width: '120px', height: '120px', borderRadius: '50%', background: ORANGE_ACCENT, bottom: '30px', left: '-30px' }} />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* Tag */}
                    <span style={{
                      display: 'inline-block',
                      background: 'rgba(249,115,22,0.1)',
                      color: ORANGE,
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '999px',
                      marginBottom: '2rem',
                      border: '1px solid rgba(249,115,22,0.25)',
                    }}>
                      {industry.tag}
                    </span>

                    {/* Icon */}
                    <div style={{
                      width: '80px', height: '80px',
                      borderRadius: '1.25rem',
                      background: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 8px 32px rgba(249,115,22,0.2)',
                      marginBottom: '1.5rem',
                    }}>
                      {renderIcon(36)}
                    </div>

                    <h3 style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: '#111827',
                      fontFamily: '"Playfair Display", serif',
                      lineHeight: 1.2,
                      marginBottom: '0.75rem',
                    }}>
                      {industry.title}
                    </h3>

                    <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.7 }}>
                      {industry.description}
                    </p>
                  </div>

                  {/* Stat */}
                  <div style={{
                    position: 'relative', zIndex: 1,
                    marginTop: '2rem',
                    padding: '1.25rem 1.5rem',
                    background: '#fff',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    display: 'inline-block',
                  }}>
                    <div style={{ fontSize: '2.25rem', fontWeight: 800, color: ORANGE, lineHeight: 1 }}>
                      {industry.stat.value}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#6B7280', fontWeight: 500, marginTop: '0.25rem' }}>
                      {industry.stat.label}
                    </div>
                  </div>
                </div>

                {/* Right Content Panel */}
                <div style={{ flex: 1, minWidth: '280px', padding: '3.5rem 3rem', background: '#fff' }}>

                  {/* Services */}
                  <div style={{ marginBottom: '2.5rem' }}>
                    <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', color: '#9CA3AF', marginBottom: '1rem' }}>
                      WHAT WE OFFER
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {industry.services.map((s) => (
                        <span key={s} style={{
                          padding: '0.4rem 0.9rem',
                          borderRadius: '999px',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          background: 'rgba(249,115,22,0.08)',
                          color: ORANGE,
                          border: '1px solid rgba(249,115,22,0.2)',
                        }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div style={{ marginBottom: '2.5rem' }}>
                    <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', color: '#9CA3AF', marginBottom: '1rem' }}>
                      WHAT YOU GET
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {industry.benefits.map((b) => (
                        <motion.div
                          key={b}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35, delay: 0.1 }}
                          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                        >
                          <div style={{
                            width: '22px', height: '22px', borderRadius: '50%',
                            background: 'rgba(249,115,22,0.12)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexShrink: 0,
                          }}>
                            <FaCheck size={9} style={{ color: ORANGE }} />
                          </div>
                          <span style={{ color: '#374151', fontSize: '0.95rem', fontWeight: 500 }}>{b}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(249,115,22,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                      background: 'linear-gradient(135deg, #EA580C 0%, #F97316 100%)',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      padding: '0.9rem 2rem',
                      borderRadius: '10px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 20px rgba(249,115,22,0.3)',
                    }}
                  >
                    Get Started for {industry.title.split(' ')[0]}
                    <FaArrowRight size={13} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow Nav */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
            <motion.button
              whileHover={{ x: -3 }} whileTap={{ scale: 0.95 }}
              onClick={prev}
              style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: '#fff', border: '1px solid #E5E7EB',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}
            >
              <FaChevronLeft size={14} style={{ color: '#374151' }} />
            </motion.button>

            {/* Progress dots */}
            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
              {industries.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => go(idx)}
                  style={{
                    width: active === idx ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '999px',
                    background: active === idx ? ORANGE : '#D1D5DB',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ x: 3 }} whileTap={{ scale: 0.95 }}
              onClick={next}
              style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: '#fff', border: '1px solid #E5E7EB',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}
            >
              <FaChevronRight size={14} style={{ color: '#374151' }} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
