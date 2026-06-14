import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import videoEditingImg from '../assets/video-editing.png';
import graphicDesignImg from '../assets/graphics designing.png';
import socialMediaImg from '../assets/social media marketing.png';
import videoProductionImg from '../assets/video production.png';
import webServicesImg from '../assets/web services.png';
import seoManagementImg from '../assets/seo management.png';
import creatorManagementImg from '../assets/creator management.png';

export default function Services() {
  const navigate = useNavigate();
  const services = [
    { number: '01', image: videoEditingImg, name: 'Video Editing', objPos: '50% 30%', description: 'Cinematic cuts, reels, YouTube videos, and brand films that captivate and convert.', deliverables: ['Cinematic Cuts', 'Reels & Shorts', 'YouTube Videos', 'Brand Films', 'Motion Graphics'] },
    { number: '02', image: graphicDesignImg, name: 'Graphic Design', objPos: '50% 10%', description: 'Logos, brand identity, social creatives, and packaging that defines your brand.', deliverables: ['Logo Design', 'Brand Identity', 'Social Creatives', 'Packaging Design', 'Marketing Materials'] },
    { number: '03', image: socialMediaImg, name: 'Social Media Marketing', objPos: '50% 15%', description: 'Strategy, content calendar, ad campaigns, and community management that drives growth.', deliverables: ['Content Strategy', 'Calendar Planning', 'Ad Campaigns', 'Community Management', 'Analytics Reports'] },
    { number: '04', image: videoProductionImg, name: 'Video Production', objPos: '50% 15%', description: 'End-to-end shoots, scripting, direction, and post-production with cinematic quality.', deliverables: ['Pre-Production', 'Shooting', 'Post-Production', 'Color Grading', 'Sound Design'] },
    { number: '05', image: webServicesImg, name: 'Web Services', objPos: '50% 15%', description: 'Website design, landing pages, and UI/UX that converts visitors into customers.', deliverables: ['Web Design', 'Landing Pages', 'UI/UX Design', 'Responsive Development', 'CMS Setup'] },
    { number: '06', image: seoManagementImg, name: 'SEO Management', objPos: '50% 15%', description: 'On-page, off-page, local SEO, and analytics that ranks you on Google.', deliverables: ['On-Page SEO', 'Off-Page SEO', 'Local SEO', 'Keyword Research', 'Analytics & Reporting'] },
    { number: '07', image: creatorManagementImg, name: 'Creator Management', objPos: '50% 15%', description: 'Brand deals, content strategy, and audience growth for creators and influencers.', deliverables: ['Brand Deal Negotiation', 'Content Strategy', 'Audience Growth', 'Collaboration Setup', 'Performance Tracking'] },
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="relative py-14 flex items-center justify-center overflow-hidden bg-white">
        <motion.div className="text-center relative z-10 section-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="uppercase text-xs font-semibold tracking-widest mb-2.5" style={{ color: '#F97316', fontFamily: '"DM Sans", sans-serif' }}>Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#1A1A1A', fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
            Helping Brands Grow <span style={{ color: '#F97316', fontStyle: 'italic' }}>Bigger, Faster</span>
          </h1>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">Seven Services, One Goal. Making Businesses Bigger.</p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="section bg-white">
        <div className="section-container space-y-16">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                className={`grid md:grid-cols-2 gap-10 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Image */}
                <motion.div
                  className={`relative w-full max-w-[420px] mx-auto ${isEven ? '' : 'md:col-start-2'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5]" style={{ boxShadow: '0 12px 36px rgba(249,115,22,0.12)', border: '1px solid #fed7aa' }}>
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: service.objPos }}
                    />
                    <div className="absolute top-4 left-4 text-3xl font-bold" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"Playfair Display", serif' }}>
                      {service.number}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={isEven ? '' : 'md:col-start-1'}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="text-5xl md:text-6xl font-bold mb-2.5" style={{ color: 'rgba(249,115,22,0.15)', fontFamily: '"Playfair Display", serif' }}>{service.number}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>{service.name}</h3>
                  <p className="text-gray-500 text-base mb-6 leading-relaxed">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="text-gray-900 font-semibold mb-3">Key Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((item, i) => (
                        <span key={i} className="px-3.5 py-1.5 rounded-full text-xs font-medium" style={{ background: '#fff7ed', color: '#ea580c', border: '1px solid #fed7aa' }}>{item}</span>
                      ))}
                    </div>
                  </div>
                  <Link to="/contact" className="btn-primary">Get This Service →</Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #F97316 0%, #ea580c 50%, #fb923c 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative */}
        <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
        <div className="section-container text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-display" style={{ letterSpacing: '-0.02em' }}>
              Let&apos;s Build Something Great
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
              Tell us your vision. We&apos;ll help you turn it into content that grows.
            </p>
            <motion.button
              className="bg-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300"
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
