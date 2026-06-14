import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaTwitter, FaTimes } from 'react-icons/fa';
import sreedharImg from '../assets/sreedhar kasani.jpeg';
import manojImg from '../assets/manoj.jpeg';
import jayanthImg from '../assets/jayanth.jpeg';
import prekshaImg from '../assets/preksha.jpeg';

const team = [
  {
    id: 0,
    name: 'Sreedhar Kasani',
    role: 'CEO & Founder',
    bio: 'Visionary leader and founder of Chota Se Bada, driving the agency forward with bold ideas and an unwavering commitment to helping brands grow bigger and faster.',
    skills: ['Brand Strategy', 'Business Development', 'Leadership'],
    expertise: 'Brand Strategy',
    image: sreedharImg,
    color: '#F97316',
  },
  {
    id: 1,
    name: 'Manoj A',
    role: 'Co-Founder',
    bio: 'Co-founder bringing strategic vision and operational excellence to build a creative agency that delivers real results for brands and creators alike.',
    skills: ['Strategy', 'Operations', 'Partnerships'],
    expertise: 'Business Strategy',
    image: manojImg,
    color: '#EC4899',
  },
  {
    id: 2,
    name: 'Jayanth K',
    role: 'Managing Director',
    bio: 'Managing Director overseeing all operations, ensuring every project is delivered with precision, quality, and measurable impact for our clients.',
    skills: ['Operations', 'Project Management', 'Client Relations'],
    expertise: 'Management',
    image: jayanthImg,
    color: '#8B5CF6',
  },
  {
    id: 3,
    name: 'Latha',
    role: 'UI Reviewer',
    bio: 'Meticulous UI reviewer ensuring every digital touchpoint is pixel-perfect, accessible, and aligned with the highest design standards.',
    skills: ['UI Review', 'Quality Assurance', 'Design Standards'],
    expertise: 'UI/UX',
    image: null,
    color: '#F59E0B',
  },
  {
    id: 4,
    name: 'Varshith',
    role: 'Senior Editor, Website Developer & Content Creator',
    bio: 'Multi-talented creator combining sharp editing skills, web development expertise, and compelling content creation to deliver end-to-end digital solutions.',
    skills: ['Video Editing', 'Web Development', 'Content Creation'],
    expertise: 'Full-Stack Creative',
    image: null,
    color: '#0EA5E9',
  },
  {
    id: 5,
    name: 'Charan',
    role: 'Editor & Content Creator',
    bio: 'Creative editor and content creator crafting stories that connect brands with audiences through compelling visuals and authentic narratives.',
    skills: ['Video Editing', 'Content Creation', 'Storytelling'],
    expertise: 'Content & Editing',
    image: null,
    color: '#10B981',
  },
  {
    id: 6,
    name: 'Preksha',
    role: 'Content Creator & Writer',
    bio: 'Talented writer and content creator turning ideas into powerful words that engage audiences, build brand voice, and drive meaningful results.',
    skills: ['Copywriting', 'Content Strategy', 'Social Media'],
    expertise: 'Content Writing',
    image: prekshaImg,
    color: '#EF4444',
  },
];

function Avatar({ member, size = 62, borderActive, isMobile }) {
  const sz = isMobile ? 48 : size;
  if (member.image) {
    return (
      <div style={{
        width: sz, height: sz, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
        border: borderActive ? `3px solid ${member.color}` : '2px solid #E5E7EB',
        boxShadow: borderActive ? `0 0 20px ${member.color}40` : '0 2px 8px rgba(0,0,0,0.1)',
        background: '#F3F4F6', transition: 'all 0.3s',
      }}>
        <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    );
  }
  return (
    <div style={{
      width: sz, height: sz, borderRadius: '50%', flexShrink: 0,
      border: borderActive ? `3px solid ${member.color}` : '2px solid #E5E7EB',
      boxShadow: borderActive ? `0 0 20px ${member.color}40` : '0 2px 8px rgba(0,0,0,0.1)',
      background: borderActive ? member.color + '18' : '#F3F4F6',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'all 0.3s',
    }}>
      <span style={{ fontSize: sz * 0.38, fontWeight: 800, color: member.color, fontFamily: '"Playfair Display", serif' }}>
        {member.name.charAt(0)}
      </span>
    </div>
  );
}

export default function TeamSection() {
  const [active, setActive] = useState(null);
  const [rotating, setRotating] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef(null);
  const lastTime = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (!rotating) { cancelAnimationFrame(rafRef.current); return; }
    const animate = (time) => {
      if (lastTime.current) {
        const delta = time - lastTime.current;
        setRotation(r => (r + delta * 0.015) % 360);
      }
      lastTime.current = time;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [rotating]);

  const handleSelect = (id) => {
    setActive(prev => prev === id ? null : id);
    setRotating(false);
  };

  const handleClose = () => {
    setActive(null);
    setRotating(true);
  };

  const activeMember = team.find(m => m.id === active);
  const orbitSize = isMobile ? 280 : 500;

  return (
    <section style={{ background: '#FFFFFF', padding: '6rem 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.div style={{ textAlign: 'center', marginBottom: '4rem' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{ width: '2rem', height: '2px', background: '#F97316' }} />
            <span style={{ color: '#F97316', fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 700 }}>OUR TEAM</span>
            <div style={{ width: '2rem', height: '2px', background: '#F97316' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#111827', fontFamily: '"Playfair Display", serif', letterSpacing: '-0.02em' }}>
            The Minds Behind <span style={{ color: '#F97316', fontStyle: 'italic' }}>the Magic</span>
          </h2>
          <p style={{ color: '#6B7280', marginTop: '0.75rem', fontSize: '1rem' }}>Click any member to explore their profile</p>
        </motion.div>

        {/* Orbital Layout */}
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: '3rem' }}>

          {/* Orbit Canvas */}
          <div style={{ flex: '0 0 auto', position: 'relative', width: `${orbitSize}px`, height: `${orbitSize}px` }}>
            {[1, 0.75, 0.5].map((scale, i) => (
              <div key={i} style={{ position: 'absolute', inset: `${(1 - scale) * 50}%`, borderRadius: '50%', border: '1px solid rgba(249,115,22,0.12)' }} />
            ))}

            {/* Rotating group */}
            <div style={{ position: 'absolute', inset: 0, transform: `rotate(${rotation}deg)` }}>
              {team.map((member, idx) => {
                const angle = (idx / team.length) * 2 * Math.PI - Math.PI / 2;
                const radius = isMobile ? 110 : 200;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isActive = active === member.id;

                return (
                  <div key={member.id} style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(-${rotation}deg)`,
                    zIndex: isActive ? 10 : 5,
                  }}>
                    <motion.button onClick={() => handleSelect(member.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, position: 'relative' }} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} animate={{ scale: isActive ? 1.2 : 1 }}>
                      {isActive && (
                        <>
                          <motion.div style={{ position: 'absolute', inset: '-6px', borderRadius: '50%', border: `2px solid ${member.color}`, boxShadow: `0 0 20px ${member.color}60` }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} />
                          <motion.div style={{ position: 'absolute', inset: '-14px', borderRadius: '50%', border: `1px solid ${member.color}30` }} animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                        </>
                      )}
                      <Avatar member={member} size={62} borderActive={isActive} isMobile={isMobile} />
                      <div style={{ position: 'absolute', top: '110%', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', fontSize: '0.65rem', fontWeight: 600, color: isActive ? member.color : '#9CA3AF', marginTop: '4px' }}>
                        {member.name.split(' ')[0]}
                      </div>
                    </motion.button>
                  </div>
                );
              })}
            </div>

            {/* Center */}
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 20 }}>
              <motion.div animate={{ boxShadow: ['0 0 16px rgba(249,115,22,0.2)', '0 0 32px rgba(249,115,22,0.4)', '0 0 16px rgba(249,115,22,0.2)'] }} transition={{ duration: 3, repeat: Infinity }} style={{ width: isMobile ? '70px' : '100px', height: isMobile ? '70px' : '100px', borderRadius: '50%', background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)', border: '2px solid rgba(249,115,22,0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: isMobile ? '0.55rem' : '0.62rem', fontWeight: 800, lineHeight: 1.3, textAlign: 'center' }}>
                  <span style={{ color: '#F97316' }}>Chota</span><br />
                  <span style={{ color: '#EA580C' }}>$e</span><br />
                  <span style={{ color: '#16a34a' }}>BADA</span>
                </span>
              </motion.div>
            </div>
          </div>

          {/* Profile Card */}
          <div style={{ flex: 1, minWidth: 0, minHeight: isMobile ? 'auto' : '420px', display: 'flex', alignItems: 'center' }}>
            <AnimatePresence mode="wait">
              {activeMember ? (
                <motion.div key={activeMember.id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} style={{ width: '100%', background: '#FFFFFF', border: `1px solid ${activeMember.color}25`, borderRadius: '1.5rem', padding: '2.5rem', boxShadow: `0 16px 48px rgba(0,0,0,0.08), 0 0 0 1px ${activeMember.color}10`, position: 'relative' }}>
                  <button onClick={handleClose} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: '#F3F4F6', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#6B7280' }}>
                    <FaTimes size={12} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                    <Avatar member={activeMember} size={72} borderActive={true} isMobile={false} />
                    <div>
                      <h3 style={{ color: '#111827', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.3rem' }}>{activeMember.name}</h3>
                      <span style={{ display: 'inline-block', background: activeMember.color + '15', color: activeMember.color, fontSize: '0.72rem', fontWeight: 600, padding: '0.2rem 0.7rem', borderRadius: '999px', border: `1px solid ${activeMember.color}30` }}>
                        {activeMember.role}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{activeMember.bio}</p>

                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                    {[{ label: 'Expertise', value: activeMember.expertise }].map(stat => (
                      <div key={stat.label} style={{ flex: 1, background: '#F9FAFB', borderRadius: '0.75rem', padding: '0.75rem 1rem', border: '1px solid #E5E7EB' }}>
                        <div style={{ color: activeMember.color, fontWeight: 700, fontSize: '0.85rem' }}>{stat.value}</div>
                        <div style={{ color: '#9CA3AF', fontSize: '0.65rem', marginTop: '0.15rem' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ color: '#9CA3AF', fontSize: '0.62rem', letterSpacing: '0.15em', fontWeight: 600, marginBottom: '0.6rem' }}>SKILLS</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {activeMember.skills.map(s => (
                        <span key={s} style={{ padding: '0.3rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 500, background: '#F3F4F6', color: '#374151', border: '1px solid #E5E7EB' }}>{s}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {[FaLinkedin, FaInstagram, FaTwitter].map((Icon, i) => (
                      <motion.a key={i} href="#" whileHover={{ y: -3, color: activeMember.color }} style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#F3F4F6', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B7280', transition: 'all 0.2s' }}>
                        <Icon size={14} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div key="placeholder" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ width: '100%', textAlign: 'center', padding: '3rem' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#FFF7ED', border: '1px solid rgba(249,115,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>👆</span>
                  </div>
                  <p style={{ color: '#6B7280', fontSize: '0.95rem' }}>Select a team member<br />to view their profile</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile list */}
        {isMobile && (
          <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem', marginTop: '2rem' }}>
            {team.map(m => (
              <motion.button key={m.id} onClick={() => handleSelect(m.id)} whileTap={{ scale: 0.95 }} style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}>
                <Avatar member={m} size={48} borderActive={active === m.id} isMobile={true} />
                <span style={{ fontSize: '0.6rem', color: active === m.id ? m.color : '#9CA3AF', fontWeight: 600 }}>{m.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
