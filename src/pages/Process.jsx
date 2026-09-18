import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Clapperboard,
  Lightbulb,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../subpages.css";

const steps = [
  [
    "01",
    Lightbulb,
    "Discover",
    "We listen before we make. Your brand, audience, ambition, and the problem worth solving.",
  ],
  [
    "02",
    CalendarDays,
    "Plan",
    "We turn the brief into a clear creative route, content system, timeline, and measure of success.",
  ],
  [
    "03",
    Clapperboard,
    "Create",
    "Scripts, edits, design, copy, and craft come together in a focused production rhythm.",
  ],
  [
    "04",
    Rocket,
    "Launch",
    "Every piece lands in the right format, on the right channel, at the right moment.",
  ],
  [
    "05",
    TrendingUp,
    "Grow",
    "We learn from what performs, refine the system, and make the next idea work even harder.",
  ],
];

export default function Process() {
  return (
    <main className="studio-page process-page">
      <section className="studio-page-hero process-hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="studio-eyebrow">How the good stuff happens</span>
          <h1>
            From a little idea
            <br />
            to a <em>big impact.</em>
          </h1>
          <p>
            A flexible five-step rhythm that keeps the work clear,
            collaborative, and moving.
          </p>
          <a href="#journey">
            Follow the journey <ArrowDown />
          </a>
        </motion.div>
        <div className="process-hero-art" aria-hidden="true">
          <span>ASK</span>
          <span>MAKE</span>
          <span>MOVE</span>
          <i />
        </div>
      </section>
      <section className="process-journey" id="journey">
        <div className="process-line" aria-hidden="true" />
        {steps.map(([number, Icon, title, copy], index) => (
          <motion.article
            key={title}
            className="process-row"
            initial={{ opacity: 0, x: index % 2 ? 35 : -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="process-number">{number}</div>
            <div className="process-node">
              <Icon />
            </div>
            <div>
              <span>STEP {number}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
          </motion.article>
        ))}
      </section>
      <section className="studio-page-cta">
        <span>Ready when you are.</span>
        <h2>Let’s put the process to work.</h2>
        <Link to="/contact">
          Start a project <ArrowUpRight />
        </Link>
      </section>
    </main>
  );
}
