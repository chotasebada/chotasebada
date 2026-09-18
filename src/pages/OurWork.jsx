import { motion } from "framer-motion";
import { ArrowLeft, Clapperboard, Construction, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import "../subpages.css";

export default function OurWork() {
  return (
    <main className="studio-page development-page">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="development-card"
      >
        <div className="development-orbit" aria-hidden="true">
          <Clapperboard />
          <Sparkles />
        </div>
        <span className="studio-eyebrow">
          <Construction size={15} /> Case studies are loading
        </span>
        <h1>
          The page is
          <br />
          <em>under development.</em>
        </h1>
        <p>
          We’re polishing the stories, frames, and results behind the work. Come
          back soon for the full creative reel.
        </p>
        <div className="development-actions">
          <Link to="/" className="studio-dark-button">
            <ArrowLeft size={17} /> Back home
          </Link>
          <Link to="/contact" className="studio-orange-link">
            Start a project <span>↗</span>
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
