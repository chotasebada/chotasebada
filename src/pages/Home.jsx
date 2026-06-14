import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import IndustriesSection from '../components/IndustriesSection';
import TeamSection from '../components/TeamSection';
import WhyChooseUs from '../components/WhyChooseUs';
import { staggerContainer } from '../utils/animations';
import TestimonialsColumns from '../components/ui/testimonials-columns';

const visionData = [
  {
    number: '01',
    title: 'Who We Are',
    label: 'OUR STORY',
    headline: ['Built to Bridge', 'Creativity &'],
    headlineAccent: 'Commerce',
    description: 'Chota Se Bada is a content marketing and creator management agency based in Hyderabad, India. We work with brands, independent creators, and media talent across multiple verticals — healthcare, food & beverage, real estate, fashion, and talent management.',
    tags: ['Brand Storytelling', 'Creator Growth', 'Talent Development'],
  },
  {
    number: '02',
    title: 'Our Vision',
    label: 'OUR VISION',
    headline: ['To Become the', 'Most Trusted'],
    headlineAccent: 'Partner',
    description: 'We envision a world where every brand — big or small — has access to world-class creative strategy. Our goal is to be the most trusted creative partner for businesses across every industry, transforming ideas into lasting impact.',
    tags: ['Creative Strategy', 'Brand Growth', 'Long-Term Vision'],
  },
  {
    number: '03',
    title: 'Our Pledge',
    label: 'OUR PLEDGE',
    headline: ['Excellence on', 'Every Single'],
    headlineAccent: 'Project',
    description: 'We deliver creative excellence on every project. No shortcuts. No compromises. Only results that speak louder than promises. Every deliverable is crafted with precision, passion, and a relentless focus on your success.',
    tags: ['No Shortcuts', 'Quality First', 'Results Driven'],
  },
];

function VisionSection() {
  const [active, setActive] = useState(0);
  const current = visionData[active];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % visionData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <div className="flex flex-col md:flex-row" style={{ height: '650px' }}>
      {/* Left Panel */}
      <div
        className="w-full md:w-[42%] relative flex flex-col justify-between overflow-hidden px-8 py-12 md:p-12"
        style={{ background: 'linear-gradient(135deg, #F97316 0%, #ea580c 50%, #fb923c 100%)' }}
      >
        <div className="absolute w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.25) 0%, transparent 70%)', bottom: '-60px', left: '-60px' }} />
        <div className="absolute w-48 h-48 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%)', top: '20%', right: '-30px' }} />

        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.65rem', letterSpacing: '0.18em' }} className="uppercase font-medium">
          Chota Se Bada &nbsp;·&nbsp; Hyderabad
        </p>

        <div className="flex flex-col gap-3 my-12">
          {visionData.map((item, idx) => (
            <div key={idx}>
              <button onClick={() => setActive(idx)} className="w-full text-left">
                <div
                  className="flex items-center justify-between rounded-2xl transition-all duration-300"
                  style={{
                    padding: '1.1rem 1.25rem',
                    background: active === idx ? 'rgba(255,255,255,0.18)' : 'transparent',
                    backdropFilter: active === idx ? 'blur(12px)' : 'none',
                    boxShadow: active === idx ? '0 8px 32px rgba(0,0,0,0.2)' : 'none',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', fontFamily: 'monospace' }}>
                      {item.number}
                    </span>
                    <span className="font-bold transition-all duration-300" style={{
                      fontSize: '1.05rem',
                      color: active === idx ? '#ffffff' : 'rgba(255,255,255,0.45)',
                    }}>
                      {item.title}
                    </span>
                  </div>
                  <div className="flex items-center justify-center rounded-full transition-all duration-300" style={{
                    width: '2rem', height: '2rem',
                    background: active === idx ? '#fff' : 'transparent',
                    border: active === idx ? 'none' : '1px solid rgba(255,255,255,0.3)',
                    color: active === idx ? '#EA580C' : 'rgba(255,255,255,0.4)',
                    fontSize: '0.9rem', fontWeight: 700,
                  }}>
                    →
                  </div>
                </div>
              </button>
              {active === idx && (
                <motion.div
                  className="rounded-full mx-5"
                  style={{ height: '2px', background: 'rgba(255,255,255,0.6)', marginTop: '2px' }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 3, ease: 'linear' }}
                />
              )}
            </div>
          ))}
        </div>

        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.65rem', letterSpacing: '0.12em' }}>
          Est. 2024 · Content · Strategy · Growth
        </p>
      </div>

      {/* Right Panel */}
      <div
        className="w-full md:w-[58%] relative flex items-start px-6 py-16 md:py-20 md:pr-16 md:pl-24 overflow-hidden"
        style={{ background: '#F8F8F6' }}
      >
        <div className="absolute bottom-6 right-8 font-bold select-none pointer-events-none"
          style={{ fontSize: '10rem', color: 'rgba(234,88,12,0.05)', lineHeight: 1, fontFamily: 'serif' }}>
          {current.number}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
          style={{ maxWidth: '560px' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div style={{ width: '2rem', height: '2px', background: '#F97316', borderRadius: '2px' }} />
            <span style={{ color: '#F97316', fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 600 }}>
              {current.label}
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-bold leading-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#111827', fontFamily: '"Playfair Display", "Georgia", serif', letterSpacing: '-0.02em' }}
          >
            {current.headline[0]}<br />
            {current.headline[1]}{' '}
            <span style={{ color: '#F97316', fontStyle: 'italic' }}>{current.headlineAccent}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: '1.85', marginBottom: '2rem' }}
          >
            {current.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {current.tags.map((tag) => (
              <motion.span key={tag} whileHover={{ y: -2 }} className="cursor-default" style={{
                padding: '0.45rem 1.1rem', borderRadius: '999px',
                border: '1px solid rgba(249,115,22,0.3)',
                background: 'rgba(249,115,22,0.07)',
                color: '#7C2D12', fontSize: '0.78rem',
                fontFamily: 'monospace', letterSpacing: '0.04em', fontWeight: 500,
              }}>
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.button
            whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(234,88,12,0.35)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'linear-gradient(135deg, #C2410C 0%, #F97316 100%)',
              color: '#fff', fontWeight: 700, fontSize: '0.95rem',
              padding: '1rem 2.2rem', borderRadius: '12px', border: 'none',
              cursor: 'pointer', boxShadow: '0 4px 20px rgba(249,115,22,0.3)',
            }}
          >
            Learn More About Us →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const testimonials = [
    { quote: "Chota Se Bada transformed our clinic's online presence completely. Bookings went up 3x in 2 months.", client: 'Dr. Rajeev Nair', company: 'NovaCare Clinic', rating: 5 },
    { quote: 'Our food brand went from 200 to 20,000 followers in 3 months. The content quality is unmatched.', client: 'Priya Tiwari', company: 'SpiceBox Foods', rating: 5 },
    { quote: "The reels they create for my channel get more views than anything I've done before.", client: 'Sahil Arora', company: 'YouTuber (1.2M subscribers)', rating: 5 },
    { quote: 'From concept to execution, their team understands the creative vision perfectly.', client: 'Vikram Patel', company: 'DesignHub Studios', rating: 5 },
  ];

  const clientLogos = ['NovaCare', 'SpiceBox', 'DesignHub', 'TechStart', 'FashionHub', 'EduPlus', 'DigitalWave', 'CreativeForce'];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with slow zoom */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        >
          <video
            className="w-full h-full object-cover"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>
        {/* Stronger dark overlay for readability */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.80) 100%)' }} />
        <div className="w-full relative z-10 pt-20 px-6 md:px-12 flex justify-center">
          <div className="space-y-5 max-w-3xl text-center">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-white text-xs font-semibold tracking-widest uppercase">
                India&apos;s Content, Branding &amp; Creator Management Agency
              </span>
            </motion.div>
 
            {/* Heading — fade in */}
            <motion.h1
              className="font-display leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold text-white" style={{ letterSpacing: '-0.025em' }}>
                We Turn Creators Into{' '}
                <span className="text-orange-400">Brands</span>
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold italic text-white mt-2" style={{ letterSpacing: '-0.025em' }}>
                And Brands Into{' '}
                <span className="text-orange-400">Stories</span>
              </span>
            </motion.h1>
 
            {/* Subtitle — fade in with delay */}
            <motion.p
              className="text-white/80 text-base md:text-lg max-w-2xl mx-auto"
              style={{ lineHeight: 1.7 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              Content, social media, and digital experiences built to grow
              audiences, strengthen brands, and create meaningful online
              presence.
            </motion.p>
 
            {/* CTA Buttons — slide up */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-3 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.button
                className="hero-cta-primary text-base px-9 py-4 rounded-xl font-bold transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(249,115,22,0.4)',
                  fontSize: '1.05rem',
                }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(249,115,22,0.5)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/contact')}
              >
                Book a Free Strategy Call →
              </motion.button>
              <motion.button
                className="text-white border-2 border-orange-400/50 hover:border-orange-400 px-9 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                style={{ background: 'rgba(255,255,255,0.05)', fontSize: '1.05rem', cursor: 'pointer' }}
                whileHover={{ scale: 1.04, background: 'rgba(249,115,22,0.12)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/services')}
              >
                View Our Work
              </motion.button>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaChevronDown size={22} className="text-white/60" />
        </motion.div>
      </section>

      {/* Vision Section — Card */}
      <div className="bg-white pt-56 pb-16 px-6 md:px-16">
        <div style={{ maxWidth: '1100px', margin: '0 auto', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', border: '1px solid #FFE8D6' }}>
          <VisionSection />
        </div>
      </div>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Industries */}
      <IndustriesSection />

      {/* Team */}
      <TeamSection />

      {/* Testimonials — vertical auto-scrolling columns */}
      <TestimonialsColumns />

      {/* CTA Banner */}
      <section className="section bg-gray-900" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Subtle decorative glow */}
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-display" style={{ letterSpacing: '-0.02em' }}>
              Let&apos;s Build Something{' '}
              <span style={{ color: '#F97316' }}>Great</span>
            </h2>
            <p className="text-gray-400 text-lg mb-3" style={{ maxWidth: '560px', margin: '0 auto 0.75rem', lineHeight: 1.7 }}>
              Tell us your vision. We&apos;ll help you turn it into content that grows.
            </p>
            <p className="text-gray-500 text-sm mb-8">Book a free call — no commitments.</p>
            <motion.button
              className="font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(249,115,22,0.35)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(249,115,22,0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/contact')}
            >
              Book a Free Strategy Call →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
