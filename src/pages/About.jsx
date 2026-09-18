import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Heart,
  Palette,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../subpages.css";

const chapters = [
  [
    "01",
    Sparkles,
    "Agency Started",
    "May 2025 — one client, one camera, and one dream: to build brands that move.",
    ["The beginning", "Hyderabad"],
  ],
  [
    "02",
    Heart,
    "First Client",
    "May 2025 — the first brand trusted us, and we treated it like our own.",
    ["Trust earned", "Day one"],
  ],
  [
    "03",
    Users,
    "Team of 5",
    "2025 — a tight crew of editors, designers, and strategists moving as one.",
    ["Editors", "Designers", "Strategists"],
  ],
];

const values = [
  [
    "01",
    Palette,
    "Creativity",
    "Bold ideas. Daring concepts. Always pushing boundaries.",
    ["Bold ideas", "Daring concepts"],
  ],
  [
    "02",
    Heart,
    "Integrity",
    "Honest work. Transparent communication. Full accountability.",
    ["Honest work", "Accountability"],
  ],
  [
    "03",
    TrendingUp,
    "Results",
    "Measurable impact. Real growth. Promises kept.",
    ["Measurable impact", "ROI first"],
  ],
  [
    "04",
    Rocket,
    "Growth",
    "Your success is ours. We grow when you grow.",
    ["Partnerships", "Long-term"],
  ],
];

const stats = [
  [
    "S1",
    TrendingUp,
    "3x patient inquiries",
    "Healthcare brands that trust us with their growth story.",
    ["Healthcare", "Growth"],
  ],
  [
    "S2",
    Users,
    "20k+ engaged followers",
    "Communities built for food, fashion, and local favourites.",
    ["Food", "Fashion"],
  ],
  [
    "S3",
    Sparkles,
    "2.4M organic views",
    "Reels and stories people actually stop to watch.",
    ["Reels", "Short-form"],
  ],
  [
    "S4",
    Rocket,
    "10+ brand launches",
    "Identities, feeds, and campaigns launched from scratch.",
    ["Branding", "Launches"],
  ],
];

function BoardRow({ number, Icon, title, copy, tags, index, linkTo, linkLabel }) {
  return (
    <motion.article
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
      <Link to={linkTo} aria-label={linkLabel || title}>
        <ArrowUpRight />
      </Link>
    </motion.article>
  );
}

export default function About() {
  return (
    <main className="studio-page about-page">
      <section className="studio-page-hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="studio-eyebrow">Who we are</span>
          <h1>
            From a little idea
            <br />
            to a <em>big studio.</em>
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#74766b", maxWidth: 480, marginTop: 25 }}>
            Chota Se Bada was born in Hyderabad in 2025 from a simple vision:
            every brand — big or small — deserves world-class creative.
            What started as a small team is now a full-service studio for
            healthcare, food, real estate, fashion, and creators.
          </p>
        </motion.div>
        <motion.div
          className="services-hero-note"
          initial={{ opacity: 0, rotate: 5 }}
          animate={{ opacity: 1, rotate: -4 }}
          transition={{ delay: 0.25 }}
        >
          <Sparkles /> Small beginnings.
          <br />
          <b>Big standards.</b>
        </motion.div>
      </section>

      <section className="services-board">
        {chapters.map(([number, Icon, title, copy, tags], index) => (
          <BoardRow
            key={title}
            number={number}
            Icon={Icon}
            title={title}
            copy={copy}
            tags={tags}
            index={index}
            linkTo="/contact"
            linkLabel={`Ask about ${title}`}
          />
        ))}
      </section>

      <section className="studio-page-hero" style={{ minHeight: 0, paddingTop: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="studio-eyebrow">What drives us</span>
          <h1 style={{ fontSize: "clamp(44px, 5vw, 72px)" }}>
            Values we
            <br />
            work <em>by.</em>
          </h1>
        </motion.div>
      </section>

      <section className="services-board">
        {values.map(([number, Icon, title, copy, tags], index) => (
          <BoardRow
            key={title}
            number={number}
            Icon={Icon}
            title={title}
            copy={copy}
            tags={tags}
            index={index}
            linkTo="/contact"
            linkLabel={`Ask about ${title}`}
          />
        ))}
      </section>

      <section className="studio-page-hero" style={{ minHeight: 0, paddingTop: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="studio-eyebrow">Backed by numbers</span>
          <h1 style={{ fontSize: "clamp(44px, 5vw, 72px)" }}>
            Proof, not
            <br />
            <em>promises.</em>
          </h1>
        </motion.div>
      </section>

      <section className="services-board">
        {stats.map(([number, Icon, title, copy, tags], index) => (
          <BoardRow
            key={title}
            number={number}
            Icon={Icon}
            title={title}
            copy={copy}
            tags={tags}
            index={index}
            linkTo="/contact"
            linkLabel={`Ask about ${title}`}
          />
        ))}
      </section>

      <section className="studio-page-cta">
        <span>Let&apos;s write the next chapter together</span>
        <h2>Partner with us.</h2>
        <Link to="/contact">
          Book a free strategy call <ArrowUpRight />
        </Link>
      </section>
    </main>
  );
}
