import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Construction, Sparkles, ArrowLeft } from 'lucide-react';

export default function OurWork() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: 'linear-gradient(135deg, #FFF7ED 0%, #FFFBF5 60%, #FFF0E0 100%)' }}
    >
      {/* Decorative blobs */}
      <div
        className="fixed pointer-events-none"
        aria-hidden="true"
        style={{
          top: '-120px', right: '-120px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)',
        }}
      />
      <div
        className="fixed pointer-events-none"
        aria-hidden="true"
        style={{
          bottom: '-100px', left: '-100px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(234,88,12,0.08) 0%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-xl w-full"
      >
        {/* Animated icon */}
        <motion.div
          className="flex items-center justify-center mx-auto mb-8"
          animate={{ rotate: [0, -8, 8, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
          style={{
            width: '96px', height: '96px', borderRadius: '28px',
            background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
            boxShadow: '0 16px 48px rgba(249,115,22,0.35)',
          }}
        >
          <Construction size={46} color="#fff" strokeWidth={1.8} />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
          style={{
            border: '1px solid rgba(249,115,22,0.3)',
            background: 'rgba(249,115,22,0.08)',
            color: '#EA580C',
          }}
        >
          <Sparkles size={12} />
          Coming Soon
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
          style={{ color: '#111827', letterSpacing: '-0.02em' }}
        >
          Our Work is{' '}
          <span style={{ color: '#F97316', fontStyle: 'italic' }}>Under Construction</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-500 text-base sm:text-lg leading-relaxed mb-4"
        >
          We're putting together our portfolio to showcase the brands, creators, and campaigns we've worked with.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.6 }}
          className="text-gray-400 text-sm leading-relaxed mb-10"
        >
          Check back soon — great things take time. In the meantime, feel free to reach out and we'll share our work directly.
        </motion.p>

        {/* Progress bar — decorative */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="w-full h-2 rounded-full mb-10 overflow-hidden"
          style={{ background: 'rgba(249,115,22,0.12)' }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #F97316, #EA580C)' }}
            initial={{ width: '0%' }}
            animate={{ width: '68%' }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
        <p className="text-xs text-gray-400 -mt-8 mb-10 text-right pr-1">68% complete</p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white text-sm sm:text-base transition-all"
            style={{
              background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
              boxShadow: '0 4px 20px rgba(249,115,22,0.35)',
            }}
          >
            Get in Touch →
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all"
            style={{
              background: 'rgba(249,115,22,0.07)',
              color: '#EA580C',
              border: '1px solid rgba(249,115,22,0.2)',
            }}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
