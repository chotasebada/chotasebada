import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "../home.css";

export default function StudioNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="cs-nav-wrapper">
      <header className="cs-nav">
        <a className="cs-wordmark" href="/" aria-label="Chota Se Bada home">
          <img src="/favicon.png" alt="Chota Se Bada" />
        </a>
        <nav aria-label="Main navigation" className={open ? "is-open" : ""}>
          {[
            ["The studio", "/#studio"],
            ["Services", "/services"],
            ["Our work", "/our-work"],
            ["Our process", "/process"],
          ].map(([label, href]) => (
            <Link key={href} to={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link to="/contact" className="cs-nav-mobile-call">
            Let's talk ↗
          </Link>
        </nav>
        <Link className="cs-nav-call" to="/contact">
          Let's talk <ArrowUpRight size={17} />
        </Link>
        <button
          className="cs-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
    </div>
  );
}
