import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { openWhatsApp } from '../utils/contact';
import {
  Video, Palette, Camera, Code2, PenLine,
  ChevronDown, ChevronUp, MapPin, Clock, Briefcase, DollarSign,
  CheckCircle2, Star
} from 'lucide-react';

const JOBS = [
  {
    id: 1,
    title: 'Video Editor',
    type: 'Full-time / Part-time / Freelance',
    department: 'Production',
    location: 'Remote / Hyderabad',
    experience: '1–5+ years',
    Icon: Video,
    tagline: 'Craft stories that move people.',
    summary:
      'We are seeking a creative and detail-oriented Video Editor to join our team. The ideal candidate will be responsible for editing high-quality video content for digital platforms, social media, marketing campaigns, and other multimedia projects.',
    responsibilities: [
      'Edit and assemble raw footage into polished, engaging videos.',
      'Create content for social media, websites, YouTube, and marketing campaigns.',
      'Add graphics, transitions, effects, subtitles, and animations as needed.',
      'Perform color correction, color grading, and audio enhancement.',
      'Collaborate with marketing, creative, and production teams.',
      'Ensure videos align with brand guidelines and project objectives.',
      'Manage multiple projects simultaneously and meet deadlines.',
      'Review and revise edits based on feedback.',
      'Organize and maintain video files and project assets.',
    ],
    qualifications: [
      'Proven experience as a Video Editor or similar role.',
      'Proficiency in Adobe Premiere Pro, After Effects, Final Cut Pro, or DaVinci Resolve.',
      'Strong understanding of video formats, codecs, and exporting settings.',
      'Experience with motion graphics and visual effects is a plus.',
      'Knowledge of color grading and audio editing.',
      'Excellent attention to detail and creative storytelling skills.',
      'Experience creating content for Instagram, YouTube, Facebook, TikTok, etc.',
      'Portfolio showcasing previous video editing work.',
    ],
    skills: ['Video Editing', 'Motion Graphics', 'Audio Editing', 'Color Correction & Grading', 'Storytelling', 'Creative Thinking', 'Time Management'],
    salary: 'Competitive — based on experience and skills.',
    applyNote: 'Submit your resume, portfolio, and links to your previous video editing work.',
  },
  {
    id: 2,
    title: 'Graphic Designer',
    type: 'Full-time',
    department: 'Design',
    location: 'Remote / Hyderabad',
    experience: '1–3+ years',
    Icon: Palette,
    tagline: 'Turn ideas into visual identities.',
    summary:
      'We are seeking a creative and detail-oriented Graphic Designer to develop engaging visual content across digital and print platforms. The ideal candidate has a strong eye for design and the ability to translate concepts into compelling visual assets.',
    responsibilities: [
      'Design marketing materials including brochures, flyers, social media graphics, and ads.',
      'Create and maintain consistent branding across all visual communications.',
      'Collaborate with marketing, content, and product teams on creative campaigns.',
      'Design graphics for websites, email campaigns, and digital platforms.',
      'Edit and enhance images, illustrations, and visual elements.',
      'Prepare final artwork for print production and digital publication.',
      'Manage multiple projects simultaneously while meeting deadlines.',
      'Stay updated on design trends, tools, and best practices.',
    ],
    qualifications: [
      'Proven experience as a Graphic Designer or similar role.',
      'Proficiency in Adobe Photoshop, Illustrator, and InDesign.',
      'Strong portfolio showcasing creative and professional design work.',
      'Knowledge of typography, color theory, layout design, and visual hierarchy.',
      'Experience with motion graphics, video editing, or animation preferred.',
      'Familiarity with UI/UX design principles and tools like Figma, Canva, or Adobe XD.',
      'Basic understanding of HTML/CSS is a plus.',
    ],
    skills: ['Creativity & Innovation', 'Brand Awareness', 'Visual Storytelling', 'Time Management', 'Problem-Solving', 'Adaptability'],
    salary: 'Competitive — based on experience and skills.',
    applyNote: 'Submit your resume, portfolio, and a brief cover letter highlighting your design experience.',
  },
  {
    id: 3,
    title: 'Camera Operator',
    type: 'Full-time',
    department: 'Production',
    location: 'Hyderabad',
    experience: '1–3+ years',
    Icon: Camera,
    tagline: 'Every frame tells a story.',
    summary:
      'We are seeking a skilled Camera Operator to capture high-quality video footage for marketing campaigns, events, interviews, promotional content, and social media projects. The ideal candidate has hands-on experience with professional camera equipment and shot composition.',
    responsibilities: [
      'Operate professional cameras and related equipment during shoots.',
      'Capture high-quality footage for promotional, corporate, event, and social media content.',
      'Set up and adjust camera angles, framing, focus, and exposure.',
      'Assist with lighting and audio setup to ensure production quality.',
      'Follow shot lists, storyboards, and creative direction from the production team.',
      'Maintain and troubleshoot camera equipment.',
      'Coordinate with directors, producers, and crew members during production.',
      'Manage and organize recorded footage for transfer to post-production.',
    ],
    qualifications: [
      'Proven experience as a Camera Operator, Videographer, or similar role.',
      'Strong knowledge of DSLR, Mirrorless, Cinema, and Broadcast Cameras.',
      'Understanding of camera settings, framing, composition, and movement techniques.',
      'Experience with lighting equipment and basic audio recording.',
      'Ability to work in various shooting environments — indoor and outdoor.',
      'Good communication and teamwork skills.',
    ],
    skills: ['Camera Operation', 'Shot Composition & Framing', 'Lighting Setup', 'Audio Equipment Handling', 'Technical Troubleshooting', 'Team Collaboration'],
    salary: 'Competitive — based on experience and skills.',
    applyNote: 'Submit your resume and portfolio / showreel showcasing projects you have filmed.',
  },
  {
    id: 4,
    title: 'Website Developer',
    type: 'Full-time',
    department: 'Development',
    location: 'Remote / Hyderabad',
    experience: '1–4+ years',
    Icon: Code2,
    tagline: 'Build digital experiences that convert.',
    summary:
      'We are seeking a skilled Website Developer to design, develop, and maintain high-performing websites that deliver exceptional user experiences. The ideal candidate has strong technical expertise and the ability to translate business requirements into functional, visually appealing websites.',
    responsibilities: [
      'Develop, maintain, and optimize company websites and web applications.',
      'Build responsive, user-friendly, and mobile-compatible web pages.',
      'Collaborate with designers, content creators, and marketing teams.',
      'Ensure website performance, security, and scalability.',
      'Troubleshoot and resolve website issues, bugs, and technical challenges.',
      'Integrate third-party tools, APIs, and plugins as required.',
      'Optimize websites for speed, SEO, and overall user experience.',
      'Test websites across different browsers and devices.',
    ],
    qualifications: [
      'Proven experience as a Website Developer or similar role.',
      'Strong proficiency in HTML5, CSS3, JavaScript, and Bootstrap.',
      'Experience with modern JS frameworks such as React, Angular, or Vue.js.',
      'Knowledge of back-end technologies such as Node.js, PHP, or Python.',
      'Experience with databases such as MySQL, PostgreSQL, or MongoDB.',
      'Familiarity with CMS platforms such as WordPress, Shopify, or Webflow.',
      'Understanding of web security, SEO best practices, and performance optimization.',
      'Experience with Git and version control systems.',
    ],
    skills: ['Front-end & Back-end Development', 'Responsive Web Design', 'Database Management', 'API Integration', 'SEO Optimization', 'Debugging', 'Project Management'],
    salary: 'Competitive — based on experience and skills.',
    applyNote: 'Submit your resume, portfolio, and links to websites or web applications you have developed.',
  },
  {
    id: 5,
    title: 'Telugu Content Writer',
    type: 'Full-time',
    department: 'Content',
    location: 'Remote / Pan India',
    experience: '1–3+ years',
    Icon: PenLine,
    tagline: 'Write content that hooks, holds, and converts.',
    summary:
      "We're looking for an experienced Telugu content writer who can write high-impact scripts for Reels & short-form videos. If you understand Telugu beyond grammar — culture, emotion, trends, and audience psychology — this role is for you.",
    responsibilities: [
      'Write Instagram Reels & short-form video scripts.',
      'Create content for Healthcare, Real Estate, and Food brands.',
      'Develop story-driven, performance-focused content with strong hooks and CTAs.',
      'Collaborate with video editors and designers for seamless execution.',
      'Research trends, cultural moments, and audience insights in the Telugu market.',
      'Maintain brand voice consistency across all content formats.',
    ],
    qualifications: [
      'Strong command over spoken & written Telugu.',
      'Prior experience writing Reels / video scripts — mandatory.',
      'Agency or brand experience preferred.',
      'Creative thinker who understands hooks, CTAs, and short-form storytelling.',
      'Available for a full-time role — no freelancing.',
      'Portfolio of Telugu writing samples or reel scripts.',
    ],
    skills: ['Telugu Copywriting', 'Script Writing', 'Short-form Content', 'Storytelling', 'Hook Writing', 'CTAs', 'Trend Research'],
    salary: 'Competitive — based on experience and skills.',
    applyNote: `Share your Telugu writing samples / reel scripts + Instagram pages you've worked on. Email: chotasebadaofficial@gmail.com`,
  },
];

const culturePillars = [
  {
    icon: Star,
    title: 'Why Work With Us',
    description: 'Competitive salary, creative freedom, and career growth opportunities across diverse fast-growing niches.',
  },
  {
    icon: Briefcase,
    title: 'Real Work, Real Impact',
    description: 'Your content actually goes live. Work on live campaigns for real brands across healthcare, food, real estate, and fashion.',
  },
  {
    icon: CheckCircle2,
    title: 'Collaborative Culture',
    description: 'Creative, fast-paced, and collaborative environment where your ideas matter and you grow alongside the brand.',
  },
];

// ─────────────────────────────────────────────
// Job Card — expands in place on "View Details"
// ─────────────────────────────────────────────
function JobCard({ job, index }) {
  const [expanded, setExpanded] = useState(false);
  const { Icon } = job;

  const handleApply = () => {
    const message = [
      `Hi Chota Se Bada! I'm interested in applying for the ${job.title} position.`,
      `Please find my details below:`,
      `Name: `,
      `Email: `,
      `Portfolio / Resume: `,
    ].join('\n');
    openWhatsApp('917382499877', message);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(249,115,22,0.12)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.04), 0 1px 4px rgba(249,115,22,0.06)',
      }}
    >
      {/* ── Header ── */}
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4">
          {/* Icon badge */}
          <div
            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(249,115,22,0.1)' }}
          >
            <Icon size={22} color="#F97316" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-2 mb-2">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: 'rgba(249,115,22,0.1)', color: '#EA580C', border: '1px solid rgba(249,115,22,0.2)' }}
              >
                {job.department}
              </span>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: 'rgba(31,41,55,0.05)', color: '#6B7280', border: '1px solid rgba(31,41,55,0.1)' }}
              >
                {job.type}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{job.title}</h3>
            <p className="text-sm text-gray-500 italic mb-3">"{job.tagline}"</p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><MapPin size={12} color="#F97316" />{job.location}</span>
              <span className="flex items-center gap-1"><Clock size={12} color="#F97316" />{job.type}</span>
              <span className="flex items-center gap-1"><Briefcase size={12} color="#F97316" />{job.experience}</span>
              <span className="flex items-center gap-1"><DollarSign size={12} color="#F97316" />Competitive</span>
            </div>
          </div>
        </div>

        {/* Summary always visible */}
        <p className="text-gray-600 text-sm leading-relaxed mt-5">{job.summary}</p>

        {/* Toggle button */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-5 flex items-center gap-2 text-sm font-semibold transition-colors"
          style={{ color: '#F97316', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          {expanded ? (
            <><ChevronUp size={16} /> Hide Details</>
          ) : (
            <><ChevronDown size={16} /> View Full Details</>
          )}
        </button>
      </div>

      {/* ── Expanded Detail Section ── */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="px-6 sm:px-8 pb-8 pt-2"
              style={{ borderTop: '1px solid rgba(249,115,22,0.1)' }}
            >
              {/* Responsibilities */}
              <div className="mb-6 mt-5">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#F97316' }}>
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-400 mt-[6px]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qualifications */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#F97316' }}>
                  Preferred Qualifications
                </h4>
                <ul className="space-y-2">
                  {job.qualifications.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <CheckCircle2 size={14} color="#F97316" className="flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#F97316' }}>
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{
                        background: 'rgba(249,115,22,0.08)',
                        color: '#7C2D12',
                        border: '1px solid rgba(249,115,22,0.2)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* How to apply note */}
              <div
                className="rounded-xl p-4 mb-6 text-sm text-gray-600 leading-relaxed"
                style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.15)' }}
              >
                <span className="font-semibold" style={{ color: '#EA580C' }}>📩 How to Apply: </span>
                {job.applyNote}
              </div>

              {/* Apply CTA */}
              <motion.button
                onClick={handleApply}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white text-sm sm:text-base"
                style={{
                  background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(249,115,22,0.35)',
                }}
                whileHover={{ scale: 1.02, boxShadow: '0 8px 28px rgba(249,115,22,0.45)' }}
                whileTap={{ scale: 0.97 }}
              >
                Apply Now via WhatsApp →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
export default function Careers() {
  return (
    <div className="bg-white pt-20">

      {/* ── Hero ── */}
      <section className="relative py-20 overflow-hidden bg-white">
        {/* Decorative blobs */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-80px', right: '-80px',
            width: '400px', height: '400px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '-60px', left: '-60px',
            width: '300px', height: '300px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(234,88,12,0.05) 0%, transparent 70%)',
          }}
        />

        <motion.div
          className="text-center relative z-10 px-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
            style={{
              border: '1px solid rgba(249,115,22,0.3)',
              background: 'rgba(249,115,22,0.07)',
              color: '#EA580C',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            We're Hiring
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
            Join the{' '}
            <span style={{ color: '#F97316', fontStyle: 'italic' }}>Team</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            We're building India's most exciting content agency. Come build it with us.
          </p>
        </motion.div>
      </section>

      {/* ── Culture Pillars ── */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6">
          {culturePillars.map(({ icon: PillarIcon, title, description }, idx) => (
            <motion.div
              key={idx}
              className="p-7 rounded-2xl"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(249,115,22,0.1)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(249,115,22,0.1)' }}
              >
                <PillarIcon size={20} color="#F97316" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Job Listings ── */}
      <section className="py-16 px-6" style={{ background: '#FAFAFA' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3" style={{ letterSpacing: '-0.02em' }}>
              Open Positions
            </h2>
            <p className="text-gray-500 text-base">{JOBS.length} exciting opportunities waiting for you</p>
          </motion.div>

          <div className="flex flex-col gap-5">
            {JOBS.map((job, idx) => (
              <JobCard key={job.id} job={job} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 px-6 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Don't see a role that fits?</h3>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            We're always looking for talented people. Drop us a message and tell us what you bring to the table.
          </p>
          <motion.a
            href="mailto:chotasebadaofficial@gmail.com"
            className="inline-block font-bold text-base px-8 py-4 rounded-xl text-white"
            style={{
              background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
              boxShadow: '0 4px 20px rgba(249,115,22,0.3)',
            }}
            whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(234,88,12,0.35)' }}
            whileTap={{ scale: 0.97 }}
          >
            Send Us Your Resume →
          </motion.a>
        </motion.div>
      </section>

    </div>
  );
}
