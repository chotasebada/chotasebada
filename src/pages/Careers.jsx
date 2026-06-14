import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { openWhatsApp } from '../utils/contact';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', cv: null });

  const jobs = [
    { id: 1, title: 'Video Editor', type: 'Full-time', department: 'Production', description: 'A skilled video editor with 1 year+ experience.' },
    { id: 2, title: 'Graphic Designer', type: 'Full-time', department: 'Design', description: 'A graphic designer who understands color combinations well and with over 1 year of experience.' },
    { id: 3, title: 'Videographer', type: 'Full-time', department: 'Production', description: 'A creative videographer to shoot high-quality video content and capture brand stories.' },
    { id: 4, title: 'Web Designer', type: 'Full-time', department: 'Development', description: 'A full stack web developer.' },
    { id: 5, title: 'Social Media Executive', type: 'Full-time', department: 'Marketing', description: 'Manage social media channels, create engaging posts, and grow digital presence.' },
  ];

  const culturePillars = [
    { title: 'Why Work With Us', description: 'Competitive salary, health insurance, remote flexibility, and career growth opportunities.' },
    { title: 'Growth Opportunities', description: 'Work on diverse projects, upskill with latest tools, and lead teams as you grow.' },
    { title: 'Team Culture', description: 'Collaborative, creative, and fast-paced environment where your ideas matter.' },
  ];

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    const message = [
      `Hi Chota Se Bada, I'm applying for the ${selectedJob?.title || 'Job'} position.`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      `I am attaching my CV/resume below:`
    ]
      .filter(Boolean)
      .join('\n');

    openWhatsApp('917382499877', message);
    
    setSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setSelectedJob(null);
      setFormData({ name: '', email: '', cv: null });
    }, 2000);
  };

  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden bg-white">
        <motion.div className="text-center relative z-10 section-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="uppercase text-sm font-semibold tracking-widest mb-3" style={{ color: '#F97316', fontFamily: '"DM Sans", sans-serif' }}>We're Hiring</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-display" style={{ color: '#1A1A1A' }}>Join the <span style={{ color: '#F97316' }}>Team</span></h1>
          <p className="text-gray-500 text-lg">We're building the future of digital media. Come build it with us.</p>
        </motion.div>
      </section>

      {/* Culture */}
      <section className="section bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {culturePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-2xl flex flex-col justify-between"
                style={{
                  background: '#FFFBF9',
                  border: '1px solid rgba(249, 115, 22, 0.08)',
                  boxShadow: '0 10px 30px -10px rgba(249, 115, 22, 0.04)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div>
                  <div
                    style={{
                      width: '2.25rem',
                      height: '3px',
                      background: '#F97316',
                      borderRadius: '999px',
                      marginBottom: '1.25rem',
                    }}
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section" style={{ background: '#FAF7F4' }}>
        <div className="section-container">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Open Positions</h2>
            <p className="text-gray-500 text-base">{jobs.length} exciting opportunities waiting for you</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.id}
                className="bg-white p-9 rounded-2xl transition-all flex flex-col justify-between"
                style={{
                  border: '1px solid rgba(249, 115, 22, 0.06)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.02), 0 1px 3px rgba(0, 0, 0, 0.01)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 30px 60px rgba(249, 115, 22, 0.1)' }}
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{job.title}</h3>
                      <div className="flex gap-2.5 flex-wrap">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(249, 115, 22, 0.08)', color: '#EA580C', border: '1px solid rgba(249, 115, 22, 0.15)' }}>
                          {job.type}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(31, 41, 55, 0.04)', color: '#4B5563', border: '1px solid rgba(31, 41, 55, 0.08)' }}>
                          {job.department}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">{job.description}</p>
                </div>
                <div className="flex justify-start">
                  <motion.button
                    onClick={() => setSelectedJob(job)}
                    className="px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-1.5"
                    style={{
                      background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
                      color: '#fff',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(249, 115, 22, 0.25)',
                    }}
                    whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(249, 115, 22, 0.4)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Apply Now →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
            <motion.div className="bg-white rounded-2xl max-w-md w-full p-8" style={{ border: '1px solid rgba(249, 115, 22, 0.1)', boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Apply for {selectedJob.title}</h3>
                <button onClick={() => setSelectedJob(null)} className="text-gray-400 hover:text-gray-900 transition-colors"><FaTimes size={24} /></button>
              </div>
              {submitSuccess ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4" style={{ boxShadow: '0 4px 12px rgba(249,115,22,0.15)' }}>
                    <span className="text-orange-500 text-3xl font-bold">✓</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Application Sent!</h4>
                  <p className="text-gray-500">Thank you for applying. We will review your profile shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                    <input type="text" required disabled={submitting} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:border-orange-400 disabled:opacity-50" style={{ borderColor: 'rgba(249, 115, 22, 0.2)' }} placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input type="email" required disabled={submitting} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:border-orange-400 disabled:opacity-50" style={{ borderColor: 'rgba(249, 115, 22, 0.2)' }} placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Upload CV (Optional)</label>
                    <input type="file" disabled={submitting} onChange={(e) => setFormData({ ...formData, cv: e.target.files?.[0] })} className="w-full border rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:border-orange-400 disabled:opacity-50 mb-2" style={{ borderColor: 'rgba(249, 115, 22, 0.2)' }} />
                    <p className="text-gray-400 text-xs">Note: You will be redirected to WhatsApp. Please attach your resume file there after clicking submit.</p>
                  </div>
                  {submitError && (
                    <p className="text-red-500 text-sm font-medium">{submitError}</p>
                  )}
                  <button type="submit" disabled={submitting} className="btn-primary w-full mt-6 flex items-center justify-center gap-2">
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
