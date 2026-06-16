import React from 'react';
import { motion } from 'framer-motion';

// Brand logo imports
import bigBiteImg from '../../assets/bigbite shawarma.jpg';
import biryaniFactoryImg from '../../assets/biryani factory.jpg';
import fortuneGreenImg from '../../assets/fortune green city.jpg';
import impressedImg from '../../assets/impressed.jpg';
import kontactImg from '../../assets/kontact interiors.jpg';
import pasidipuriImg from '../../assets/pasidipuri kitchen.jpg';
import srinusImg from '../../assets/srinus.jpg';

// ---------------------------------------------------------------------------
// Data — real brand clients
// ---------------------------------------------------------------------------

const testimonials = [
  {
    text: 'Chota Se Bada transformed our social media presence completely. Our orders from online platforms went up 3x within two months. The content they produce for us is fire — literally!',
    image: bigBiteImg,
    name: 'Big Bite Shawarma',
    role: 'F&B · Street Food Brand',
    bg: '#000000',
  },
  {
    text: 'We went from a local favourite to a trending brand on Instagram and Reels. Their storytelling around our biryani is authentic, appetising, and drives real footfall.',
    image: biryaniFactoryImg,
    name: 'Biryani Factory',
    role: 'F&B · Restaurant Chain',
    bg: '#1a0a00',
  },
  {
    text: 'Our project enquiries shot up after their digital campaign. The content perfectly captured our eco-friendly vision. Professional, creative, and results-oriented team.',
    image: fortuneGreenImg,
    name: 'Fortune Green City',
    role: 'Real Estate · Eco-Friendly Living',
    bg: '#ffffff',
  },
  {
    text: 'Impress\'D needed a brand that looked as sharp as our service. Chota Se Bada delivered exactly that — crisp visuals, punchy copy, and a content calendar that keeps us top-of-mind.',
    image: impressedImg,
    name: "Impress'd",
    role: 'Fashion · Laundry & Styling',
    bg: '#0f1f3d',
  },
  {
    text: 'From interior shoot scripts to Reels that showcase our projects, they understand the design world. Our inquiry count doubled in 60 days of working with them.',
    image: kontactImg,
    name: 'Kontact Interiors',
    role: 'Interiors · Architecture',
    bg: '#0f1f3d',
  },
  {
    text: 'Pasidipuri Kitchen is all about authentic Telugu flavours, and CSB captured that soul beautifully in every post. Our community engagement grew 5x after their campaign.',
    image: pasidipuriImg,
    name: 'Pasidipuri Kitchen',
    role: 'F&B · Traditional Cuisine',
    bg: '#000000',
  },
  {
    text: 'Since 1997 we\'ve been serving our community. Chota Se Bada helped us bring that legacy online and reach a new generation of customers. Our online orders doubled.',
    image: srinusImg,
    name: 'Srinus',
    role: 'Home Foods · Plants · Arts',
    bg: '#c0392b',
  },
];

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(2, 5);
const thirdColumn  = testimonials.slice(4, 7);

// ---------------------------------------------------------------------------
// Single Column — infinite scroll via framer-motion translateY
// ---------------------------------------------------------------------------

export const TestimonialsColumn = ({ className, testimonials: items, duration = 10 }) => {
  return (
    <div className={className} style={{ overflow: 'hidden' }}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0)].map((_, repeatIdx) => (
          <React.Fragment key={repeatIdx}>
            {items.map(({ text, image, name, role, bg }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="rounded-3xl max-w-xs w-full cursor-default"
                style={{
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(249,115,22,0.15)',
                  boxShadow: '0 4px 28px rgba(249,115,22,0.09), 0 1px 4px rgba(0,0,0,0.06)',
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} className="w-4 h-4" viewBox="0 0 20 20" fill="#F97316" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-sm leading-relaxed mb-5">"{text}"</p>

                {/* Brand identity row */}
                <div className="flex items-center gap-3">
                  {/* Brand logo in a rounded square with its native bg */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center"
                    style={{ background: bg, border: '1px solid rgba(0,0,0,0.08)' }}
                  >
                    <img
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="font-bold tracking-tight leading-5 text-sm text-gray-900 truncate">
                      {name}
                    </span>
                    <span className="leading-5 text-xs truncate" style={{ color: '#F97316' }}>
                      {role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export default function TestimonialsColumns() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFF7ED 0%, #FFFBF5 50%, #FFF7ED 100%)',
        padding: '5rem 0',
      }}
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative blobs */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: '-100px', right: '-100px',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          bottom: '-80px', left: '-80px',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(234,88,12,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="container z-10 mx-auto px-4 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12"
        >
          <div className="flex justify-center mb-4">
            <div
              className="py-1 px-4 rounded-lg text-xs font-semibold tracking-widest uppercase"
              style={{
                border: '1px solid rgba(249,115,22,0.3)',
                background: 'rgba(249,115,22,0.07)',
                color: '#EA580C',
              }}
            >
              Client Stories
            </div>
          </div>

          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mt-1 mb-4"
            style={{ color: '#111827', letterSpacing: '-0.02em' }}
          >
            What Our{' '}
            <span style={{ color: '#F97316', fontStyle: 'italic' }}>Clients Say</span>
          </h2>

          <p className="text-center text-gray-500 text-base leading-relaxed">
            Real brands, real results. Here's what our clients across food, real estate, fashion & lifestyle have to say.
          </p>
        </motion.div>

        {/* Scrolling columns */}
        <div
          className="flex justify-center gap-6 mt-10"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
            maxHeight: '740px',
            overflow: 'hidden',
          }}
        >
          <TestimonialsColumn testimonials={firstColumn}  duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn}  className="hidden lg:block" duration={17} />
        </div>

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
            className="inline-block font-bold text-base px-8 py-4 rounded-xl text-white"
            style={{
              background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
              boxShadow: '0 4px 20px rgba(249,115,22,0.3)',
            }}
          >
            Book a Free Strategy Call →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
