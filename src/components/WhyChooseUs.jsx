import { motion } from 'framer-motion';
import { FaUsers, FaBullseye, FaRocket, FaChartLine } from 'react-icons/fa';

const reasons = [
  {
    number: '01',
    icon: FaUsers,
    title: 'Creator-First Approach',
    description:
      'We understand creators, audiences, and trends to build content that connects.',
  },
  {
    number: '02',
    icon: FaBullseye,
    title: 'Strategy Before Content',
    description:
      'Every post, reel, and campaign is backed by research and purpose.',
  },
  {
    number: '03',
    icon: FaRocket,
    title: 'End-to-End Execution',
    description:
      'From ideas to production to publishing, we handle the complete journey.',
  },
  {
    number: '04',
    icon: FaChartLine,
    title: 'Growth Focused',
    description:
      'We focus on engagement, visibility, and measurable brand growth.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF9F5 50%, #FFFFFF 100%)',
        padding: '7rem 0',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Section Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
            }}
          >
            <div
              style={{
                width: '2rem',
                height: '2px',
                background: '#F97316',
                borderRadius: '2px',
              }}
            />
            <span
              style={{
                color: '#F97316',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                fontWeight: 700,
              }}
            >
              WHY US
            </span>
            <div
              style={{
                width: '2rem',
                height: '2px',
                background: '#F97316',
                borderRadius: '2px',
              }}
            />
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#111827',
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '0.75rem',
            }}
          >
            Why Choose{' '}
            <span style={{ color: '#F97316', fontStyle: 'italic' }}>
              Chota Se Bada?
            </span>
          </h2>

          <p
            style={{
              color: '#4B5563',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            More than content creation — we build strategies that help brands
            grow.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.number}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{
                  y: -8,
                  boxShadow:
                    '0 20px 50px rgba(249, 115, 22, 0.15), 0 0 0 1px rgba(249, 115, 22, 0.1)',
                }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '1.25rem',
                  padding: '2.25rem 2rem',
                  border: '1px solid rgba(249, 115, 22, 0.1)',
                  boxShadow:
                    '0 4px 24px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.04)',
                  cursor: 'default',
                  transition: 'box-shadow 0.35s ease, transform 0.35s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Background number watermark */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '12px',
                    fontSize: '6rem',
                    fontWeight: 900,
                    color: 'rgba(249, 115, 22, 0.04)',
                    lineHeight: 1,
                    fontFamily: '"Playfair Display", serif',
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  {reason.number}
                </div>

                {/* Number tag */}
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'monospace',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#F97316',
                    letterSpacing: '0.1em',
                    marginBottom: '1.25rem',
                    padding: '0.3rem 0.7rem',
                    background: 'rgba(249, 115, 22, 0.08)',
                    borderRadius: '999px',
                    border: '1px solid rgba(249, 115, 22, 0.15)',
                  }}
                >
                  {reason.number}
                </span>

                {/* Icon */}
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background:
                      'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    border: '1px solid rgba(249, 115, 22, 0.15)',
                  }}
                >
                  <Icon size={22} style={{ color: '#F97316' }} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: '#111827',
                    fontFamily: '"Playfair Display", serif',
                    marginBottom: '0.6rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {reason.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: '#4B5563',
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {reason.description}
                </p>

                {/* Bottom accent bar */}
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '10%',
                    right: '10%',
                    height: '3px',
                    background:
                      'linear-gradient(90deg, transparent, #F97316, transparent)',
                    borderRadius: '3px 3px 0 0',
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
