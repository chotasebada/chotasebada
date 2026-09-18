import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { openWhatsApp } from '../utils/contact';
import { Link } from 'react-router-dom';
import {
  Video, Palette, Camera, Code, PenTool,
  ChevronDown, ChevronUp, MapPin, Clock, Briefcase, DollarSign,
  CheckCircle2, Star, ArrowUpRight, Sparkles
} from 'lucide-react';
import "../subpages.css";

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
    Icon: Code,
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
    Icon: PenTool,
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
      className="service-row"
      style={{
        background: '#fffdf8',
        border: '1px solid #d9d8ce',
        borderRadius: '14px',
        marginBottom: '18px',
        gridTemplateColumns: '1fr',
        gap: '0',
        padding: '30px 28px',
      }}
    >
      {/* ── Header ── */}
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4">
          {/* Icon badge */}
          <div
            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(245,102,50,0.1)' }}
          >
            <Icon size={22} color="#f56632" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-2 mb-2">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: 'rgba(245,102,50,0.1)', color: '#d94f22', border: '1px solid rgba(245,102,50,0.2)' }}
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
              <span className="flex items-center gap-1"><MapPin size={12} color="#f56632" />{job.location}</span>
              <span className="flex items-center gap-1"><Clock size={12} color="#f56632" />{job.type}</span>
              <span className="flex items-center gap-1"><Briefcase size={12} color="#f56632" />{job.experience}</span>
              <span className="flex items-center gap-1"><DollarSign size={12} color="#f56632" />Competitive</span>
            </div>
          </div>
        </div>

        {/* Summary always visible */}
        <p className="text-gray-600 text-sm leading-relaxed mt-5">{job.summary}</p>

        {/* Toggle button */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-5 flex items-center gap-2 text-sm font-semibold transition-colors"
          style={{ color: '#f56632', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
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
              style={{ borderTop: '1px solid rgba(245,102,50,0.1)' }}
            >
              {/* Responsibilities */}
              <div className="mb-6 mt-5">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#f56632' }}>
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
                <h4 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#f56632' }}>
                  Preferred Qualifications
                </h4>
                <ul className="space-y-2">
                  {job.qualifications.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <CheckCircle2 size={14} color="#f56632" className="flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#f56632' }}>
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{
                        background: 'rgba(245,102,50,0.08)',
                        color: '#7C2D12',
                        border: '1px solid rgba(245,102,50,0.2)',
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
                style={{ background: 'rgba(245,102,50,0.05)', border: '1px solid rgba(245,102,50,0.15)' }}
              >
                <span className="font-semibold" style={{ color: '#d94f22' }}>📩 How to Apply: </span>
                {job.applyNote}
              </div>

              {/* Apply CTA */}
              <motion.button
                onClick={handleApply}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white text-sm sm:text-base"
                style={{
                  background: 'linear-gradient(135deg, #f56632 0%, #d94f22 100%)',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(245,102,50,0.35)',
                }}
                whileHover={{ scale: 1.02, boxShadow: '0 8px 28px rgba(245,102,50,0.45)' }}
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
    <main className="studio-page careers-page">
      <section className="studio-page-hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="studio-eyebrow">We&apos;re hiring</span>
          <h1>
            Join the
            <br />
            <em>team.</em>
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#74766b", maxWidth: 480, marginTop: 25 }}>
            We&apos;re building India&apos;s most exciting content studio.
            Come build it with us.
          </p>
        </motion.div>
        <motion.div
          className="services-hero-note"
          initial={{ opacity: 0, rotate: 5 }}
          animate={{ opacity: 1, rotate: -4 }}
          transition={{ delay: 0.25 }}
        >
          <Sparkles /> Real brands.
          <br />
          <b>Real impact.</b>
        </motion.div>
      </section>

      <section className="services-board">
        {culturePillars.map(({ icon: PillarIcon, title, description }, idx) => (
          <motion.article
            key={title}
            className="service-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: (idx % 3) * 0.06 }}
          >
            <span>0{idx + 1}</span>
            <div className="service-row-icon">
              <PillarIcon />
            </div>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="service-tags">
              <span>Studio life</span>
            </div>
            <Link to="/contact" aria-label={title}>
              <ArrowUpRight />
            </Link>
          </motion.article>
        ))}
      </section>

      <section className="studio-page-hero" style={{ minHeight: 0, paddingTop: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="studio-eyebrow">Open positions</span>
          <h1 style={{ fontSize: "clamp(44px, 5vw, 72px)" }}>
            {JOBS.length} ways
            <br />
            <em>in.</em>
          </h1>
        </motion.div>
      </section>

      <section className="services-board">
        {JOBS.map((job, idx) => (
          <JobCard key={job.id} job={job} index={idx} />
        ))}
      </section>

      <section className="studio-page-cta">
        <span>Don&apos;t see a role that fits?</span>
        <h2>Tell us your superpower.</h2>
        <Link to="/contact">
          Send us your resume <ArrowUpRight />
        </Link>
      </section>
    </main>
  );
}
