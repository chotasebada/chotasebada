import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-main">
          <div className="site-footer-brand">
            <Link to="/"><img src="/favicon.png" alt="Chota Se Bada" /></Link>
            <p>Ideas start small. We give them the strategy, craft, and momentum to become impossible to miss.</p>
          </div>
          <div className="site-footer-links">
            <div><span>EXPLORE</span><Link to="/services">Services</Link><Link to="/our-work">Our work</Link><Link to="/process">Our process</Link></div>
            <div><span>STUDIO</span><Link to="/about">About</Link><Link to="/careers">Careers</Link><Link to="/contact">Contact</Link></div>
            <div><span>CONNECT</span><a href="https://www.instagram.com/chota.se.bada" target="_blank" rel="noreferrer">Instagram ↗</a><a href="mailto:chotasebadaofficial@gmail.com">Email us ↗</a><a href="tel:+917382499877">+91 73824 99877</a></div>
          </div>
        </div>
        <div className="site-footer-hello"><span>HAVE A LITTLE IDEA?</span><a href="mailto:chotasebadaofficial@gmail.com">Say a big hello. <ArrowUpRight /></a></div>
        <div className="site-footer-bottom"><span>© {new Date().getFullYear()} Chota Se Bada</span><span>Creative studio · Hyderabad, India</span><Link to="/">Back home ↑</Link></div>
      </div>
    </footer>
  );
}
