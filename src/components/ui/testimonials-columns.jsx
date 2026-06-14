import { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

// Wraps value v between min and max with continuous looping
function wrap(min, max, v) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

/** @typedef {{ quote: string; name: string; role: string; company: string; avatar: string; rating: number }} Testimonial */

/** @type {Testimonial[]} */
const TESTIMONIALS = [
  {
    quote:
      "Chota Se Bada transformed our clinic's online presence completely. Bookings went up 3x within two months — their content strategy is unlike anything we'd tried before.",
    name: 'Dr. Rajeev Nair',
    role: 'Founder & Chief Physician',
    company: 'NovaCare Clinic',
    avatar:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      'Our food brand grew from 200 to 20,000 followers in just 3 months. The reel quality and consistency they deliver is genuinely unmatched in the market.',
    name: 'Priya Tiwari',
    role: 'Co-Founder & Marketing Director',
    company: 'SpiceBox Foods',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      'The reels they create for my channel consistently outperform anything I produced before. Views per video jumped 4x in the first month. Real professionals.',
    name: 'Sahil Arora',
    role: 'Content Creator',
    company: 'YouTube · 1.2M Subscribers',
    avatar:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      'From first brief to final delivery, their team grasps the creative vision perfectly every time. They think like brand strategists, not just content makers.',
    name: 'Vikram Patel',
    role: 'Creative Director',
    company: 'DesignHub Studios',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      "We hired them for a single campaign and ended up signing a year-long retainer. The ROI was immediate and the team is genuinely a pleasure to work with.",
    name: 'Anjali Mehta',
    role: 'CMO',
    company: 'TechStart India',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      'Our real-estate listings started getting 10x more enquiries after their video content campaign. The production quality elevated our entire brand perception.',
    name: 'Ravi Kumar',
    role: 'CEO',
    company: 'Innovations Realty',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      "I was skeptical at first, but results don't lie. Our fashion brand's engagement tripled and conversions on the website doubled in 60 days.",
    name: 'Sneha Reddy',
    role: 'Operations Lead',
    company: 'FashionHub',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      'Best investment we made this year. The storytelling approach they use resonates deeply with our audience and drives actual business outcomes.',
    name: 'Arjun Sharma',
    role: 'Product Manager',
    company: 'EduPlus Platform',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      "Their team understood our healthcare niche instantly. Sensitive, compliant, and compelling content — a very rare combination that's hard to find.",
    name: 'Dr. Meera Krishnan',
    role: 'Founder',
    company: 'WellPath Wellness',
    avatar:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      'The brand identity work they did for us gave us a visual language that we use consistently across all channels now. Cohesive, modern, and striking.',
    name: 'Karan Malhotra',
    role: 'Business Owner',
    company: 'DigitalWave Agency',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      'Working with Chota Se Bada was transformative. They delivered strategy, creativity, and results — not just content. Highly recommend to any serious brand.',
    name: 'Pooja Iyer',
    role: 'Startup Founder',
    company: 'CreativeForce Labs',
    avatar:
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      'They nailed our target audience on the very first campaign. The analytics speak for themselves — CTR improved by 280% within the first month.',
    name: 'Nikhil Gupta',
    role: 'CTO',
    company: 'DataStream Technologies',
    avatar:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
];

// Split into 3 columns with slight offset so cards stagger nicely
const col1 = TESTIMONIALS.slice(0, 4);
const col2 = TESTIMONIALS.slice(4, 8);
const col3 = TESTIMONIALS.slice(8, 12);

// ---------------------------------------------------------------------------
// Star Rating
// ---------------------------------------------------------------------------

/** @param {{ count: number }} props */
function StarRating({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          style={{ color: '#F97316' }}
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Testimonial Card
// ---------------------------------------------------------------------------

/** @param {{ testimonial: Testimonial }} props */
function TestimonialCard({ testimonial }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="relative flex-shrink-0 w-full mb-5 cursor-default group"
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      {/* Gradient border wrapper */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(249,115,22,0.5) 0%, rgba(234,88,12,0.2) 50%, rgba(251,146,60,0.4) 100%)',
          padding: '1px',
          borderRadius: '1.5rem',
        }}
        aria-hidden="true"
      />

      {/* Card body */}
      <div
        className="relative rounded-3xl p-6 transition-all duration-300"
        style={{
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(249, 115, 22, 0.12)',
          boxShadow:
            '0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(249, 115, 22, 0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
        }}
      >
        {/* Quote mark */}
        <div
          className="absolute top-4 right-5 select-none pointer-events-none font-bold leading-none"
          style={{
            fontSize: '4rem',
            color: 'rgba(249, 115, 22, 0.08)',
            fontFamily: 'Georgia, serif',
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          "
        </div>

        {/* Stars */}
        <div className="mb-3">
          <StarRating count={testimonial.rating} />
        </div>

        {/* Quote text */}
        <blockquote className="text-gray-700 text-sm leading-relaxed mb-5" style={{ fontFamily: '"DM Sans", sans-serif' }}>
          "{testimonial.quote}"
        </blockquote>

        {/* Author row */}
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={`Profile photo of ${testimonial.name}`}
            loading="lazy"
            decoding="async"
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            style={{ border: '2px solid rgba(249, 115, 22, 0.2)' }}
            width={40}
            height={40}
          />
          <div className="min-w-0">
            <p className="text-gray-900 font-semibold text-sm truncate">{testimonial.name}</p>
            <p className="text-xs truncate" style={{ color: '#F97316' }}>{testimonial.role}</p>
            <p className="text-gray-400 text-xs truncate">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ---------------------------------------------------------------------------
// Infinite Scrolling Column
// ---------------------------------------------------------------------------

/**
 * @param {{ items: Testimonial[]; direction?: 'up' | 'down'; speed?: number }} props
 */
function ScrollingColumn({ items, direction = 'up', speed = 40 }) {
  const yMotion = useMotionValue(0);
  const containerRef = useRef(null);
  const isPaused = useRef(false);

  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  useAnimationFrame((_, delta) => {
    if (isPaused.current) return;
    const container = containerRef.current;
    if (!container) return;

    const halfHeight = container.scrollHeight / 2;
    const move = (delta / 1000) * speed;
    const next =
      direction === 'up'
        ? wrap(-halfHeight, 0, yMotion.get() - move)
        : wrap(0, halfHeight, yMotion.get() + move);

    yMotion.set(next);
  });

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: '600px' }}
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
      onFocus={() => { isPaused.current = true; }}
      onBlur={() => { isPaused.current = false; }}
      aria-label="Scrolling testimonials column"
    >
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: '80px',
          background: 'linear-gradient(to bottom, #FFF7ED, transparent)',
        }}
        aria-hidden="true"
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: '80px',
          background: 'linear-gradient(to top, #FFF7ED, transparent)',
        }}
        aria-hidden="true"
      />

      <motion.div ref={containerRef} style={{ y: yMotion }}>
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </motion.div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export default function TestimonialsColumns() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFF7ED 0%, #FFFBF5 50%, #FFF7ED 100%)' }}
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative background blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-100px',
          right: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-80px',
          left: '-80px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(234,88,12,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div
              className="w-6 h-px"
              style={{ background: '#F97316' }}
              aria-hidden="true"
            />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: '#F97316', letterSpacing: '0.2em' }}
            >
              Client Stories
            </span>
            <div
              className="w-6 h-px"
              style={{ background: '#F97316' }}
              aria-hidden="true"
            />
          </div>

          <h2
            id="testimonials-heading"
            className="font-bold leading-tight mb-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontFamily: '"Clash Display", "Syne", sans-serif',
              color: '#111827',
              letterSpacing: '-0.02em',
            }}
          >
            What Our{' '}
            <span style={{ color: '#F97316', fontStyle: 'italic' }}>Clients Say</span>
          </h2>

          <p
            className="mx-auto max-w-xl text-gray-500"
            style={{ fontSize: '1.05rem', lineHeight: 1.8, fontFamily: '"DM Sans", sans-serif' }}
          >
            Brands, creators, and founders across healthcare, food, fashion, and tech trust
            us to tell their story.
          </p>
        </motion.div>

        {/* Columns grid */}
        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          aria-label="Testimonials"
        >
          {/* Column 1 — scrolls up */}
          <div>
            <ScrollingColumn items={col1} direction="up" speed={35} />
          </div>

          {/* Column 2 — scrolls down (hidden on mobile, shown from md) */}
          <div className="hidden md:block">
            <ScrollingColumn items={col2} direction="down" speed={30} />
          </div>

          {/* Column 3 — scrolls up (hidden until lg) */}
          <div className="hidden lg:block">
            <ScrollingColumn items={col3} direction="up" speed={38} />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="/contact"
            whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(234,88,12,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary inline-block text-base px-8 py-4"
            style={{ borderRadius: '0.75rem' }}
          >
            Book a Free Strategy Call →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
