import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const navigate = useNavigate();
  const values = [
    { title: 'Creativity', description: 'Bold ideas. Daring concepts. Always pushing boundaries.' },
    { title: 'Integrity', description: 'Honest work. Transparent communication. Full accountability.' },
    { title: 'Results', description: 'Measurable impact. Real growth. Promises kept.' },
    { title: 'Growth', description: 'Your success is ours. We grow when you grow.' },
  ];

  const stats = [
    { number: 50, suffix: '+', label: 'Happy Clients' },
    { number: 200, suffix: '+', label: 'Projects Completed' },
  ];

  const timeline = [
    { year: 'May 3, 2025', event: 'Agency Started' },
    { year: 'May 4, 2025', event: 'First Client' },
    { year: '2025', event: 'Team of 5' },
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="relative py-14 flex items-center justify-center overflow-hidden bg-white">
        <motion.div className="text-center relative z-10 section-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="uppercase text-xs font-semibold tracking-widest mb-2.5" style={{ color: '#F97316', fontFamily: '"DM Sans", sans-serif' }}>Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 font-display" style={{ color: '#1A1A1A' }}>Our <span style={{ color: '#F97316' }}>Story</span></h1>
          <p className="text-gray-500 text-base">From a small idea to a thriving creative force</p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-5 font-display">It started with one client, one camera, and one dream.</h2>
              <p className="text-gray-500 text-base leading-relaxed mb-5">In 2025, Chota Se Bada was born from a simple vision: to build brands that move. What started as a small team has evolved into a powerhouse of creativity and strategic thinking.</p>
              <p className="text-gray-500 text-base leading-relaxed mb-5">Today, we're a full-service digital media agency with a track record of transforming businesses across industries. From healthcare to food, from creators to enterprises — we've helped brands go from small to big.</p>
              <p className="text-gray-500 text-base leading-relaxed">Our mission remains unchanged: deliver excellence on every project, build lasting partnerships, and create work that matters.</p>
            </motion.div>

            <motion.div className="space-y-5" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: 'linear-gradient(135deg, #F97316, #ea580c)' }}>{idx + 1}</div>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-base" style={{ color: '#F97316' }}>{item.year}</p>
                    <p className="text-gray-900 text-lg font-bold">{item.event}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="section-container">
          <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-display">Our Values</h2>
            <p className="text-gray-500 text-base">What drives us every single day</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div key={idx} className="bg-white p-6 rounded-2xl" style={{ border: '1px solid #fed7aa', boxShadow: '0 2px 12px rgba(249,115,22,0.08)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="text-3xl mb-3" style={{ color: '#F97316' }}><FaCheck /></div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-white">
        <div className="section-container">
          <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-display">Why Choose Us</h2>
            <p className="text-gray-500 text-base">Backed by numbers. Driven by passion.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <motion.div key={idx} className="text-center p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg, #F97316 0%, #ea580c 100%)', boxShadow: '0 8px 32px rgba(249,115,22,0.3)' }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 font-display">
                  <CountUp target={stat.number} suffix={stat.suffix} />
                </h3>
                <p className="text-orange-100 text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantage */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center font-display">The Chota Se Bada Advantage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'End-to-End Solutions', description: 'From strategy to execution, we handle it all. No coordination hassles.' },
              { title: 'Creative Excellence', description: 'Award-winning team with a portfolio that speaks for itself.' },
              { title: 'Measurable Results', description: 'We focus on metrics that matter. Your ROI is our priority.' },
            ].map((item, idx) => (
              <motion.div key={idx} className="bg-white p-6 rounded-2xl" style={{ border: '1px solid #fed7aa', boxShadow: '0 2px 12px rgba(249,115,22,0.08)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #F97316 0%, #ea580c 50%, #fb923c 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div className="section-container text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 font-display" style={{ letterSpacing: '-0.02em' }}>
              Let&apos;s Build Something Great
            </h2>
            <p className="text-white/80 text-base mb-6 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
              Tell us your vision. We&apos;ll help you turn it into content that grows.
            </p>
            <motion.button
              className="bg-white font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-300"
              style={{ color: '#F97316', cursor: 'pointer', border: 'none' }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
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
