import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clapperboard,
  Lightbulb,
  Palette,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { FaInstagram as Instagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../subpages.css";

const services = [
  [
    "01",
    Clapperboard,
    "Video Editing",
    "Raw footage becomes a story people stay for.",
    ["Reels & shorts", "Brand films", "YouTube edits"],
  ],
  [
    "02",
    Instagram,
    "Social Media",
    "A consistent feed, a sharper voice, and a plan that keeps moving.",
    ["Content calendars", "Community", "Growth campaigns"],
  ],
  [
    "03",
    Palette,
    "Graphic Design",
    "Bold visual systems for every place your brand shows up.",
    ["Carousels", "Thumbnails", "Ad creatives"],
  ],
  [
    "04",
    Sparkles,
    "Branding & Identity",
    "A memorable look, voice, and feeling built to last.",
    ["Visual identity", "Brand language", "Launch kits"],
  ],
  [
    "05",
    Target,
    "Digital Marketing",
    "Campaigns built around a clear audience and a real business goal.",
    ["Paid campaigns", "Funnels", "Reporting"],
  ],
  [
    "06",
    Lightbulb,
    "Content Strategy",
    "The big idea, the right formats, and a useful roadmap.",
    ["Research", "Creative direction", "Content systems"],
  ],
  [
    "07",
    Zap,
    "Ad Creatives",
    "Fast, focused creative designed to turn attention into action.",
    ["Hooks", "Static & video ads", "Creative testing"],
  ],
  [
    "08",
    TrendingUp,
    "Creator Growth",
    "Structure and momentum for creators ready to build something bigger.",
    ["Positioning", "Partnerships", "Monetisation"],
  ],
];

export default function Services() {
  return (
    <main className="studio-page services-page">
      <section className="studio-page-hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="studio-eyebrow">The creative toolkit</span>
          <h1>
            One studio.
            <br />
            Every way to make
            <br />
            your brand <em>bigger.</em>
          </h1>
        </motion.div>
        <motion.div
          className="services-hero-note"
          initial={{ opacity: 0, rotate: 5 }}
          animate={{ opacity: 1, rotate: -4 }}
          transition={{ delay: 0.25 }}
        >
          <Sparkles /> Built for attention.
          <br />
          <b>Designed for growth.</b>
        </motion.div>
      </section>
      <section className="services-board">
        {services.map(([number, Icon, title, copy, tags], index) => (
          <motion.article
            key={title}
            className="service-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: (index % 3) * 0.06 }}
          >
            <span>{number}</span>
            <div className="service-row-icon">
              <Icon />
            </div>
            <div>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
            <div className="service-tags">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <Link to="/contact" aria-label={`Ask about ${title}`}>
              <ArrowUpRight />
            </Link>
          </motion.article>
        ))}
      </section>
      <section className="studio-page-cta">
        <span>Have a goal but not a brief?</span>
        <h2>Perfect. Let’s start there.</h2>
        <Link to="/contact">
          Book a free strategy call <ArrowUpRight />
        </Link>
      </section>
    </main>
  );
}
