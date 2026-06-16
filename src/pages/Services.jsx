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
    { 
      number: '01', image: videoEditingImg, name: 'Video Editing', objPos: '50% 30%', 
      description: 'We transform raw footage into compelling stories. Whether it’s high-retention YouTube edits, fast-paced Instagram reels, or premium brand films, our video editing is designed to hold attention and drive action.', 
      features: [
        { title: 'Cinematic Cuts & Flow', desc: 'Crafting the perfect narrative structure to keep viewers hooked from the first second.' },
        { title: 'Color Grading & Sound', desc: 'Elevating production value with professional color correction and immersive sound design.' },
        { title: 'Platform-Optimized', desc: 'Formats tailored for YouTube, TikTok, Instagram, and LinkedIn to maximize algorithm reach.' }
      ] 
    },
    { 
      number: '02', image: graphicDesignImg, name: 'Graphic Design', objPos: '50% 10%', 
      description: 'Visual identity that speaks volumes. We create striking graphics that establish authority, build trust, and communicate your brand\'s core message instantly across all digital and physical touchpoints.', 
      features: [
        { title: 'Brand Identity', desc: 'Cohesive logos, typography, and color palettes that make your brand memorable.' },
        { title: 'Social Creatives', desc: 'Thumb-stopping carousel posts, banners, and stories designed for high engagement.' },
        { title: 'Marketing Collateral', desc: 'Premium pitch decks, packaging, and digital brochures that convert prospects.' }
      ] 
    },
    { 
      number: '03', image: socialMediaImg, name: 'Social Media Marketing', objPos: '50% 15%', 
      description: 'We don\'t just post; we build communities. Our data-driven social media strategies ensure your brand remains culturally relevant, actively engaged, and consistently growing across all platforms.', 
      features: [
        { title: 'Data-Driven Strategy', desc: 'Tailored content calendars based on audience insights and platform algorithms.' },
        { title: 'Community Management', desc: 'Active engagement with your followers to build brand loyalty and trust.' },
        { title: 'Targeted Campaigns', desc: 'Strategic ad placements and organic growth tactics to maximize ROI.' }
      ] 
    },
    { 
      number: '04', image: videoProductionImg, name: 'Video Production', objPos: '50% 15%', 
      description: 'From concept to final cut, we handle the entire production pipeline. We bring high-end equipment, creative direction, and cinematic expertise to deliver visuals that rival premium ad agencies.', 
      features: [
        { title: 'Creative Scripting', desc: 'Developing compelling concepts and storyboards that align with your campaign goals.' },
        { title: 'On-Location Shooting', desc: 'Professional lighting, audio, and camera work directed by industry experts.' },
        { title: 'End-to-End Execution', desc: 'Seamless transition from pre-production planning to final post-production delivery.' }
      ] 
    },
    { 
      number: '05', image: webServicesImg, name: 'Web Services', objPos: '50% 15%', 
      description: 'Your digital storefront needs to be fast, beautiful, and conversion-optimized. We build modern, responsive web experiences that turn casual browsers into loyal customers.', 
      features: [
        { title: 'UI/UX Design', desc: 'Intuitive user interfaces built on deep research of user behavior and psychology.' },
        { title: 'Responsive Development', desc: 'Flawless performance across desktop, tablet, and mobile devices.' },
        { title: 'Conversion Optimization', desc: 'Strategic layouts and clear CTAs designed to maximize lead generation and sales.' }
      ] 
    },
    { 
      number: '06', image: seoManagementImg, name: 'SEO Management', objPos: '50% 15%', 
      description: 'Dominate search engine results. We implement technical, on-page, and off-page SEO strategies that drive compounding organic traffic and position you as the top authority in your niche.', 
      features: [
        { title: 'Technical SEO', desc: 'Optimizing site speed, architecture, and core web vitals for search engine crawlers.' },
        { title: 'Content & Keyword Strategy', desc: 'Targeting high-intent search terms to capture your ideal customer audience.' },
        { title: 'Authority Building', desc: 'Strategic link-building and local SEO to cement your digital footprint.' }
      ] 
    },
    { 
      number: '07', image: creatorManagementImg, name: 'Creator Management', objPos: '50% 15%', 
      description: 'We help digital talent scale their personal brands into scalable businesses. From negotiating premium sponsorships to diversifying revenue streams, we handle the business so you can focus on creating.', 
      features: [
        { title: 'Brand Deal Negotiation', desc: 'Securing high-paying sponsorships and long-term brand partnerships.' },
        { title: 'Audience Growth Strategy', desc: 'Actionable blueprints for scaling your following across multiple platforms.' },
        { title: 'Monetization Pipelines', desc: 'Building products, merchandise, and new revenue channels for sustainable income.' }
      ] 
    },
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
                  <div className="mb-8 space-y-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="font-bold text-gray-900 flex items-center gap-2 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                          {feature.title}
                        </span>
                        <span className="text-sm text-gray-500 leading-relaxed pl-3.5 border-l-2 border-orange-100 ml-[2px]">
                          {feature.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-primary">Get This Service →</Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#FFFFFF', position: 'relative', overflow: 'hidden', borderTop: '1px solid #f3f4f6' }}>
        {/* Decorative */}
        <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(249,115,22,0.03)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(249,115,22,0.03)', pointerEvents: 'none' }} />
        <div className="section-container text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 font-display" style={{ letterSpacing: '-0.02em' }}>
              Let&apos;s Build Something Great
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
              Tell us your vision. We&apos;ll help you turn it into content that grows.
            </p>
            <motion.button
              className="btn-primary"
              style={{ cursor: 'pointer' }}
              whileHover={{ scale: 1.05 }}
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
