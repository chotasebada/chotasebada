import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  AudioLines,
  CalendarDays,
  Check,
  Clapperboard,
  Heart,
  Lightbulb,
  MessageCircle,
  MousePointer2,
  Palette,
  Pause,
  Play,
  Rocket,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { FaInstagram as Instagram } from "react-icons/fa";
import brandImage from "../assets/portfolio_brand.png";
import videoImage from "../assets/portfolio_video.png";
import socialImage from "../assets/portfolio_instagram.png";
import biteLogo from "../assets/bigbite shawarma.jpg";
import biryaniLogo from "../assets/biryani factory.jpg";
import fortuneLogo from "../assets/fortune green city.jpg";
import impressedLogo from "../assets/impressed.jpg";
import kontactLogo from "../assets/kontact interiors.jpg";
import pasidipuriLogo from "../assets/pasidipuri kitchen.jpg";
import srinusLogo from "../assets/srinus.jpg";
import "../home.css";
import StudioNav from "../components/StudioNav";

const services = [
  [Clapperboard, "Video Editing", "Raw footage. Remarkable stories. Reels, ads, and videos made to be watched.", "lavender"],
  [Instagram, "Social Media Management", "A feed with a plan. We create, post, connect, and keep your brand moving.", "peach"],
  [Palette, "Graphic Designing", "From the first thumbnail to the last slide, make every pixel count.", "lime"],
  [Sparkles, "Branding & Identity", "Find your voice. Own your look. Become a brand people remember.", "pink"],
  [Target, "Digital Marketing", "Reach the right people with campaigns built around your next big goal.", "peach"],
  [Play, "Reels & Short-form", "Big ideas in small screens. Content that earns the next second.", "lavender"],
  [Lightbulb, "Content Strategy", "Less guesswork. More purpose. A clear roadmap for your brand's story.", "pink"],
  [Zap, "Ad Creatives", "Thumb-stopping visuals with one job: turn attention into action.", "lime"],
];

const industries = [
  ["Food & Restaurants", "Good food deserves a great feed.", "From sizzling reels to irresistible offer posts, turn \u201cthat looks good\u201d into \u201clet\u2019s go there.\u201d", ["Menu stories", "Food reels", "Offer posters"], "food"],
  ["Healthcare & Doctors", "Build trust before the first visit.", "Make your expertise approachable with helpful content, awareness reels, and a consistent presence.", ["Awareness reels", "Appointment posts", "Expert insights"], "health"],
  ["Real Estate", "Give every space a bigger story.", "Show people what life could look like with property walkthroughs and thoughtfully targeted campaigns.", ["Property tours", "Launch campaigns", "Location stories"], "estate"],
  ["Education", "Make learning the next big thing.", "Bring your classrooms, courses, and student stories to life with content that opens possibilities.", ["Course launches", "Student stories", "Learning reels"], "education"],
  ["Fashion & Beauty", "Looks that belong on the saved list.", "Build a distinctive visual world with launches, styling stories, and campaigns worth sharing.", ["Lookbooks", "Product reveals", "Beauty reels"], "fashion"],
  ["Startups", "Small beginnings. Big energy.", "Find your audience and build momentum with a clear brand story and creative launch content.", ["Launch kits", "Founder stories", "Product demos"], "startup"],
  ["Local Businesses", "Become the neighbourhood favourite.", "Connect with your community through genuine stories, local campaigns, and everyday reasons to visit.", ["Local campaigns", "Community stories", "Store spotlights"], "local"],
  ["Fitness & Gyms", "Turn motivation into movement.", "Create a community that shows up with energetic workout content and member-led stories.", ["Workout reels", "Member stories", "Challenge campaigns"], "fitness"],
];

const projects = [
  { name: "A little glow. A whole new identity.", category: "BRANDING & ART DIRECTION", image: brandImage, type: "brand", title: "aura.", detail: "A warm visual exploration of packaging, colour, and a cohesive brand identity." },
  { name: "Every frame has a purpose.", category: "VIDEO EDITING & SHORT-FORM", image: videoImage, type: "video", title: "Made to move.", detail: "Rhythm, thoughtful cuts, colour, and sound. A look inside our editing approach." },
  { name: "A feed with a point of view.", category: "SOCIAL MEDIA & CONTENT", image: socialImage, type: "social", title: "Beyond the grid.", detail: "A consistent visual language for content that informs, connects, and feels like your brand." },
  { name: "From overlooked to unmissable.", category: "AD CREATIVE EXPLORATION", image: brandImage, type: "transform", title: "Make it bold.", detail: "Drag the comparison slider to explore how colour, hierarchy, and a stronger message transform a simple creative." },
  { name: "One story. Every swipe.", category: "CAROUSEL DESIGN & STORYTELLING", image: socialImage, type: "carousel", title: "Keep swiping.", detail: "An editorial approach to social carousels: a strong opening, clear visual hierarchy, and a story that rewards every swipe." },
  { name: "Your brand's digital front door.", category: "WEBSITE CREATIVE DIRECTION", image: brandImage, type: "website", title: "Hello, world.", detail: "A visual direction for a brand's home online, bringing together expressive typography, an inviting palette, and clear calls to action." },
];

const reviews = [
  { quote: "We went from a local favourite to a trending brand on Instagram and Reels. Their storytelling around our biryani is authentic, appetising, and drives real footfall.", name: "Biryani Factory", role: "Food & Beverage", image: biryaniLogo },
  { quote: "Our project enquiries shot up after their digital campaign. The content perfectly captured our eco-friendly vision. Professional, creative, and results-oriented team.", name: "Fortune Green City", role: "Real Estate", image: fortuneLogo },
  { quote: "Chota Se Bada transformed our social media presence completely. Our orders from online platforms went up 3x within two months. The content they produce for us is fire \u2014 literally!", name: "Big Bite Shawarma", role: "Food & Beverage", image: biteLogo },
  { quote: "Impress\u2019D needed a brand that looked as sharp as our service. Chota Se Bada delivered exactly that \u2014 crisp visuals, punchy copy, and a content calendar that keeps us top-of-mind.", name: "Impress'd", role: "Fashion \u00b7 Laundry & Styling", image: impressedLogo },
  { quote: "From interior shoot scripts to Reels that showcase our projects, they understand the design world. Our inquiry count doubled in 60 days of working with them.", name: "Kontact Interiors", role: "Interiors \u00b7 Architecture", image: kontactLogo },
  { quote: "Pasidipuri Kitchen is all about authentic Telugu flavours, and CSB captured that soul beautifully in every post. Our community engagement grew 5x after their campaign.", name: "Pasidipuri Kitchen", role: "F&B \u00b7 Traditional Cuisine", image: pasidipuriLogo },
  { quote: "Since 1997 we\u2019ve been serving our community. Chota Se Bada helped us bring that legacy online and reach a new generation of customers. Our online orders doubled.", name: "Srinus", role: "Home Foods \u00b7 Plants \u00b7 Arts", image: srinusLogo },
];

const processSteps = [
  [Lightbulb, "Say hello", "A quick call about your brand, audience, and the goal worth chasing."],
  [CalendarDays, "Make a plan", "A clear creative route, content system, and timeline you can trust."],
  [Clapperboard, "Create", "Scripts, edits, design, and copy come together in a focused rhythm."],
  [Rocket, "Launch", "Every piece lands in the right format, channel, and moment."],
  [TrendingUp, "Grow", "We learn from what performs and make the next idea work harder."],
];

const reasons = [
  ["Strategy before decoration", "Every edit, post, and pixel ladders up to a business goal."],
  ["A team that ships", "Scripts, shoots, edits, and designs move in one tight rhythm."],
  ["Built for small budgets", "Senior craft without agency bloat. Clear pricing, no surprises."],
  ["Partners, not vendors", "We learn your voice, show up consistently, and stay curious."],
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Label({ children }) {
  return (
    <div className="cs-label">
      <span />
      {children}
    </div>
  );
}

function CallButton({ children = "Book a Free Strategy Call", className = "" }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  function move(event) {
    if (reduced || !ref.current || event.pointerType !== "mouse") return;
    const box = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${(event.clientX - box.left - box.width / 2) * 0.08}px`);
    ref.current.style.setProperty("--my", `${(event.clientY - box.top - box.height / 2) * 0.12}px`);
  }
  function reset() {
    ref.current?.style.setProperty("--mx", "0px");
    ref.current?.style.setProperty("--my", "0px");
  }
  return (
    <Link
      ref={ref}
      to="/contact"
      className={`cs-button ${className}`}
      onPointerMove={move}
      onPointerLeave={reset}
    >
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}

function StudioCanvas({ onPreview }) {
  return (
    <div className="cs-canvas" aria-label="Creative studio preview">
      <div className="cs-orbit" />
      <span className="cs-doodle cs-doodle-one">
        <Sparkles size={52} />
      </span>
      <span className="cs-doodle cs-doodle-two">{"\u2727"}</span>
      <div className="cs-tag cs-tag-design">
        <Palette size={14} /> a little design magic
      </div>
      <div className="cs-post">
        <div className="cs-mini-top">
          <span className="cs-mini-avatar">a.</span>
          <b>aura.studio</b>
          <span>{"\u2022\u2022\u2022"}</span>
        </div>
        <img src={brandImage} alt="Peach-toned brand and packaging creative" />
        <div className="cs-post-title">
          a little<br /><i>extraordinary.</i>
        </div>
        <div className="cs-post-bottom">
          <Heart size={15} />
          <MessageCircle size={15} />
          <Send size={15} />
          <span>Made to be remembered.</span>
        </div>
      </div>
      <button type="button" className="cs-reel" onClick={onPreview} aria-label="Explore our video editing work">
        <img src={videoImage} alt="Colourful video editing workspace" />
        <div className="cs-reel-top">
          <span><span className="cs-live-dot" /> IN THE MAKING</span>
          <Clapperboard size={15} />
        </div>
        <div className="cs-reel-copy">
          Small clips.<br /><em>Big impact.</em>
        </div>
        <span className="cs-play">
          <Play size={24} fill="currentColor" />
        </span>
        <div className="cs-reel-bottom">
          <span>@chota.se.bada<br /><small>Original ideas. On repeat.</small></span>
          <Heart size={19} />
        </div>
      </button>
      <div className="cs-growth">
        <span className="cs-growth-icon"><TrendingUp size={22} /></span>
        <div>
          <small>THE GOAL? REAL</small>
          <b>Brand growth <span>{"\u2197"}</span></b>
        </div>
        <svg viewBox="0 0 80 36" aria-hidden="true">
          <path d="M2 32 L16 23 L28 28 L43 12 L54 18 L76 2" />
        </svg>
      </div>
      <div className="cs-tag cs-tag-reels">
        <Clapperboard size={14} /> Reels that hit different
      </div>
      <div className="cs-cursor">
        <MousePointer2 fill="#b8c99b" size={36} />
        <span>Your next creative team</span>
      </div>
      <div className="cs-timeline">
        <div className="cs-timeline-top">
          <span><span className="cs-live-dot" /> your_brand_v02.mp4</span>
          <span>00:00:15:24</span>
          <Play size={12} />
        </div>
        <div className="cs-ruler">
          00:00 <span>00:05</span><span>00:10</span><span>00:15</span><span>00:20</span>
        </div>
        <div className="cs-track">
          <span>{"\u2702"} The hook</span>
          <span>The story</span>
          <span>The wow.</span>
        </div>
        <div className="cs-audio">
          <AudioLines size={15} />
          <span />
        </div>
        <i className="cs-playhead" />
      </div>
      <div className="cs-canvas-caption">
        A little chaos. A lot of creativity. <span>{"\u2197"}</span>
      </div>
    </div>
  );
}

function ServiceCard({ service, index }) {
  const [Icon, title, description, color] = service;
  const reduced = useReducedMotion();
  function tilt(event) {
    if (reduced || event.pointerType !== "mouse") return;
    const box = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--rx", `${-(event.clientY - box.top - box.height / 2) / 35}deg`);
    event.currentTarget.style.setProperty("--ry", `${(event.clientX - box.left - box.width / 2) / 35}deg`);
  }
  function reset(e) {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  }
  return (
    <Reveal delay={(index % 4) * 0.07}>
      <Link to="/services" className="cs-service" onPointerMove={tilt} onPointerLeave={reset}>
        <div className={`cs-service-icon ${color}`}>
          <Icon size={27} />
          <span className="cs-spark">{"\u2726"}</span>
        </div>
        <span className="cs-service-number">0{index + 1}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="cs-service-bottom">
          Let&apos;s make it happen <ArrowUpRight size={18} />
        </span>
      </Link>
    </Reveal>
  );
}

function Counter({ end, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView || !end || reduced) return;
    let frame;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / 1400, 1);
      setValue(Math.round(end * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, reduced]);
  return (
    <div className="cs-stat" ref={ref}>
      <strong>
        {end ? (reduced ? end : value) : <Zap size={46} />}
        <span>{suffix}</span>
      </strong>
      <p>{label}</p>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  const [split, setSplit] = useState(50);
  useEffect(() => {
    const previous = document.activeElement;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    function key(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && closeRef.current) {
        const dialog = closeRef.current.closest('[role="dialog"]');
        const elements = [...dialog.querySelectorAll("button, a, input")];
        if (event.shiftKey && document.activeElement === elements[0]) {
          event.preventDefault();
          elements.at(-1).focus();
        } else if (!event.shiftKey && document.activeElement === elements.at(-1)) {
          event.preventDefault();
          elements[0].focus();
        }
      }
    }
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = oldOverflow;
      document.removeEventListener("keydown", key);
      previous?.focus?.();
    };
  }, [onClose]);
  return (
    <motion.div className="cs-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="project-title" className="cs-modal" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="cs-modal-close" aria-label="Close project preview" onClick={onClose}>
          <X />
        </button>
        {project.type === "transform" ? (
          <>
            <div className="cs-comparison">
              <div className="cs-before">
                YOUR BRAND<br /><small>Something for everyone.</small><span>BEFORE</span>
              </div>
              <div className="cs-after" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}>
                Born to<br /><em>stand out.</em><span>AFTER</span>
              </div>
              <i style={{ left: `${split}%` }} />
            </div>
            <label className="cs-slider-label">
              Before {"\u2192"} After
              <input type="range" min="0" max="100" value={split} onChange={(e) => setSplit(Number(e.target.value))} aria-label="Before and after comparison" />
            </label>
          </>
        ) : (
          <img src={project.image} alt={project.title} />
        )}
        <div className="cs-modal-copy">
          <Label>{project.category}</Label>
          <h2 id="project-title">{project.name}</h2>
          <p>{project.detail}</p>
          <Link to="/our-work" className="cs-text-link">Explore our work <ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [glow, setGlow] = useState({ x: -300, y: -300 });
  const reduced = useReducedMotion();

  const industry = industries[activeIndustry];
  const review = reviews[reviewIndex % reviews.length];

  useEffect(() => {
    if (paused || reduced) return;
    const id = setInterval(() => setReviewIndex((i) => (i + 1) % reviews.length), 5000);
    return () => clearInterval(id);
  }, [paused, reduced]);

  useEffect(() => {
    if (reduced) return;
    function onMove(e) {
      setGlow({ x: e.clientX - 130, y: e.clientY - 130 });
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  const tickerItems = ["Video Editing", "Branding", "Social Media", "Reels & Shorts", "Ad Creatives", "Content Strategy", "Digital Marketing"];

  return (
    <MotionConfig reducedMotion="user">
      <div className="cs-home" onPointerMove={undefined}>
        {!reduced && (
          <div className="cs-cursor-glow" aria-hidden="true" style={{ left: glow.x, top: glow.y }} />
        )}
        <StudioNav />

        {/* HERO */}
        <header className="cs-hero">
          <div className="cs-wrap">
            <div className="cs-hero-grid">
              <div className="cs-hero-copy">
                <p className="cs-availability"><span /> AVAILABLE FOR NEW PROJECTS</p>
                <h1>
                  <span className="cs-headline-line"><span>Little ideas,</span></span>
                  <span className="cs-headline-line"><span>made</span> <span>impossible</span></span>
                  <span className="cs-headline-line accent"><span>to miss.</span></span>
                </h1>
                <p className="cs-hero-description">
                  Chota Se Bada is a creative studio for brands that started small and think big.
                  Reels, branding, social media, and websites — crafted to earn attention and keep it.
                </p>
                <div className="cs-hero-actions">
                  <CallButton>Book a Free Strategy Call</CallButton>
                  <Link to="/our-work" className="cs-work-link">
                    See our work
                    <span><ArrowUpRight size={15} /></span>
                  </Link>
                </div>
                <div className="cs-hero-proof">
                  <div className="cs-avatars" aria-hidden="true">
                    {reviews.slice(0, 4).map((r) => (
                      <img key={r.name} src={r.image} alt="" />
                    ))}
                    <span>+</span>
                  </div>
                  <div>
                    <b>LOVED BY 48+ BRANDS</b>
                    <span>4.9 average across food, real estate, fashion &amp; more</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="cs-hero-blob" aria-hidden="true" />
                <StudioCanvas onPreview={() => setActiveProject(projects[1])} />
              </div>
            </div>
            <div className="cs-hero-foot">
              <Link to="/process">Scroll for the good stuff <ArrowDown size={14} /></Link>
              <span><Sparkles size={14} /> CREATIVE STUDIO · HYDERABAD, INDIA</span>
            </div>
          </div>
        </header>

        {/* TICKER */}
        <div className="cs-ticker" aria-hidden="true">
          <div>
            {[0, 1].map((copy) => (
              <div className="cs-ticker-group" key={copy}>
                <span>
                  {tickerItems.map((item) => (
                    <span key={`${copy}-${item}`}>{item} <span>{"\u2726"}</span></span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CLIENTS */}
        <div className="cs-wrap">
          <div className="cs-clients">
            <span>TRUSTED BY LOCAL FAVOURITES AND GROWING BRANDS</span>
            <div>
              <b>Biryani<span>FACTORY</span></b>
              <b className="cs-logo-serif">Fortune Green</b>
              <b>Big Bite<span>SHAWARMA</span></b>
              <b className="cs-logo-serif">Impress&apos;d</b>
              <b>Kontact<span>INTERIORS</span></b>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <section className="cs-section cs-services" id="studio">
          <div className="cs-wrap">
            <div className="cs-section-head">
              <div>
                <Label>WHAT WE DO BEST</Label>
                <h2>A small team with<br />a <em>big toolkit.</em></h2>
              </div>
              <div>
                <p>Eight ways we help brands get seen,<br />remembered, and talked about.</p>
                <Link to="/services" className="cs-text-link">All services <ArrowUpRight size={15} /></Link>
              </div>
            </div>
            <div className="cs-services-grid">
              {services.map((service, i) => (
                <ServiceCard key={service[1]} service={service} index={i} />
              ))}
            </div>
            <div className="cs-services-note">
              <span><Check size={15} /> No retainers required to start</span>
              <Link to="/contact">Tell us your goal {"\u2192"}</Link>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="cs-section" id="process">
          <div className="cs-wrap cs-center">
            <Label>HOW THE GOOD STUFF HAPPENS</Label>
            <h2>From a little hello<br />to a <em>big launch.</em></h2>
            <p>Five small steps. Zero confusion. One team that keeps the work moving.</p>
            <div className="cs-steps">
              {processSteps.map(([Icon, title, copy], i) => (
                <div className="cs-step" key={title}>
                  <div className="cs-step-icon"><Icon size={26} /><span>0{i + 1}</span></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 36 }}>
              <Link to="/process" className="cs-text-link">See our process <ArrowUpRight size={15} /></Link>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="cs-why">
          <div className="cs-section">
            <div className="cs-wrap cs-why-layout">
              <div>
                <Label>WHY CHOTA SE BADA</Label>
                <h2>Small name.<br />Serious <em>standards.</em></h2>
                <p>We started with a simple belief: a neighbourhood biryani shop deserves the same craft as a national brand. That is still how we work — strategy first, decoration second, results always.</p>
                <div className="cs-why-stamp">
                  chota se bada
                  <span>FROM SMALL TO BIG</span>
                  <Sparkles size={20} />
                </div>
              </div>
              <div className="cs-reasons">
                {reasons.map(([title, copy], i) => (
                  <Reveal key={title} delay={i * 0.06}>
                    <div>
                      <div>
                        <span>0{i + 1}</span>
                        <h3>{title}<br /><small style={{ fontSize: 11, color: "#9fa597" }}>{copy}</small></h3>
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="cs-section cs-industries" id="industries">
          <div className="cs-industries-marquee" aria-hidden="true">
            <span>CREATIVE WORLDS</span><i /><span>08 INDUSTRIES</span><i /><span>ONE STUDIO</span><i />
            <span>CREATIVE WORLDS</span><i /><span>08 INDUSTRIES</span><i /><span>ONE STUDIO</span><i />
          </div>
          <div className="cs-wrap">
            <div className="cs-section-head">
              <div>
                <Label>WHO WE HELP</Label>
                <h2>Every world,<br />designed to <em>belong.</em></h2>
              </div>
              <p>Pick a lane. We already speak<br />its language.</p>
            </div>
            <div className="cs-industry-layout">
              <div className="cs-industry-tabs" role="tablist" aria-label="Industries">
                {industries.map(([name], i) => (
                  <button
                    key={name}
                    type="button"
                    role="tab"
                    aria-selected={activeIndustry === i}
                    onClick={() => setActiveIndustry(i)}
                  >
                    {name} <ArrowUpRight size={13} />
                  </button>
                ))}
              </div>
              <div className="cs-industry-stage">
                <span className="cs-industry-stage-note"><Sparkles size={15} /><br />Made for your world.</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={industry[0]}
                    className={`cs-industry-panel theme-${industry[4]}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="cs-industry-content">
                      <div className="cs-industry-copy">
                        <span className="cs-pill">{industry[0]}</span>
                        <h3>{industry[1]}</h3>
                        <p>{industry[2]}</p>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
                          {industry[3].map((tag) => (
                            <span className="cs-pill" key={tag}>{tag}</span>
                          ))}
                        </div>
                        <Link to="/contact" className="cs-text-link">Make it yours <ArrowUpRight size={14} /></Link>
                      </div>
                      <div className="cs-industry-art">
                        <div className="cs-industry-poster">
                          <span>{industry[0].toUpperCase()}</span>
                          <strong>{industry[0].split(" ")[0]} <i>magic.</i></strong>
                          <span className="cs-poster-flower"><Sparkles /></span>
                          <small>CHOTA SE BADA · STUDIO</small>
                        </div>
                        {industry[3].map((tag, i) => (
                          <span className={`cs-floating-pill pill-${i}`} key={tag}><Check size={12} /> {tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="cs-results">
          <div className="cs-wrap">
            <div>
              <Label>SMALL EFFORTS, BIG RECEIPTS</Label>
              <h2>Numbers that <em>grew up.</em></h2>
            </div>
            <div className="cs-stats">
              <Counter end={120} suffix="+" label="Projects shipped" />
              <Counter end={48} suffix="+" label="Happy brands & creators" />
              <Counter end={12} suffix="M+" label="Organic views earned" />
              <Counter end={98} suffix="%" label="Clients who return" />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="cs-testimonials">
          <div className="cs-section">
            <div className="cs-wrap cs-review-layout">
              <div>
                <Label>WALL OF LOVE</Label>
                <h2>Don&apos;t take<br />our <em>word.</em></h2>
                <p>Real kitchens, clinics, studios, and stores — real growth after working together.</p>
                <div className="cs-review-controls">
                  {reviews.map((r, i) => (
                    <button
                      key={r.name}
                      type="button"
                      className={i === reviewIndex % reviews.length ? "active" : ""}
                      onClick={() => setReviewIndex(i)}
                      aria-label={`Show review from ${r.name}`}
                    />
                  ))}
                  <button
                    type="button"
                    className="cs-review-pause"
                    onClick={() => setPaused((p) => !p)}
                    aria-label={paused ? "Play reviews" : "Pause reviews"}
                  >
                    {paused ? <Play size={14} /> : <Pause size={14} />}
                  </button>
                </div>
              </div>
              <div className="cs-review-card">
                <span className="cs-quote-mark">{"\u201C"}</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={review.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="cs-stars" aria-label="5 out of 5 stars">{"\u2605\u2605\u2605\u2605\u2605"}</div>
                    <blockquote>{review.quote}</blockquote>
                    <div className="cs-review-person">
                      <img src={review.image} alt={review.name} />
                      <div><b>{review.name}</b><small>{review.role}</small></div>
                      <span><Check size={12} /> Verified client</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="cs-final-cta">
          <span className="cs-cta-star" aria-hidden="true">{"\u2726"}</span>
          <Instagram className="cs-cta-instagram" size={44} aria-hidden="true" />
          <div className="cs-wrap cs-cta-layout">
            <div>
              <Label>LAST CALL FOR SMALL BEGINNINGS</Label>
              <h2>Have a little idea?<br />Let&apos;s make it <em>big.</em></h2>
              <p>Tell us where your brand is today. We will bring the strategy, the craft, and the momentum — you bring the ambition. First call is free, friendly, and genuinely useful.</p>
              <div style={{ marginTop: 28 }}>
                <CallButton>Book a Free Strategy Call</CallButton>
                <span className="cs-cta-note">Free 20-minute call · No commitments · Actionable ideas</span>
              </div>
            </div>
            <div className="cs-cta-card">
              <div className="cs-cta-card-icon"><Rocket size={24} /></div>
              <small>WHAT YOU GET</small>
              <h3>A clear next step for your brand.</h3>
              <CallButton className="">Claim my free call</CallButton>
              <div>
                <span><Check size={13} /> Content audit</span>
                <span><Check size={13} /> 3 quick wins</span>
                <span><Check size={13} /> Growth roadmap</span>
              </div>
            </div>
          </div>
          <div className="cs-cta-glow" aria-hidden="true" />
        </section>

        {/* FOOTER */}
        <footer className="cs-footer">
          <div className="cs-wrap">
            <div className="cs-footer-top">
              <div className="cs-footer-brand">
                <Link to="/" className="cs-wordmark" aria-label="Chota Se Bada home">
                  <img src="/favicon.png" alt="Chota Se Bada" />
                </Link>
                <p>Ideas start small. We give them the strategy, craft, and momentum to become impossible to miss.</p>
              </div>
              <div className="cs-footer-links">
                <div><span>EXPLORE</span><Link to="/services">Services</Link><Link to="/our-work">Our work</Link><Link to="/process">Our process</Link></div>
                <div><span>STUDIO</span><Link to="/about">About</Link><Link to="/careers">Careers</Link><Link to="/contact">Contact</Link></div>
                <div><span>CONNECT</span><a href="https://www.instagram.com/chota.se.bada" target="_blank" rel="noreferrer">Instagram {"\u2197"}</a><a href="mailto:chotasebadaofficial@gmail.com">Email us {"\u2197"}</a><a href="tel:+917382499877">+91 73824 99877</a></div>
              </div>
            </div>
            <div className="cs-footer-callout">
              <span>HAVE A LITTLE IDEA?</span>
              <a href="mailto:chotasebadaofficial@gmail.com">Say a big hello. <ArrowUpRight size={26} /></a>
            </div>
            <div className="cs-footer-bottom">
              <span>© {new Date().getFullYear()} Chota Se Bada</span>
              <div><Link to="/services">Services</Link><Link to="/contact">Contact</Link><Link to="/">Back home {"\u2191"}</Link></div>
              <span>Made with <span className="cs-orange">♥</span> in Hyderabad, India</span>
            </div>
          </div>
        </footer>

        <Link to="/contact" className="cs-mobile-cta">Book a Free Strategy Call <ArrowUpRight size={16} /></Link>

        <AnimatePresence>
          {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
