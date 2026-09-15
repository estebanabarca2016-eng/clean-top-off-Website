import Link from "next/link";
import { ArrowRight, Mail, Phone, Linkedin } from "lucide-react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["How It Works", "/how-it-works"],
  ["Benefits", "/benefits"],
  ["Pricing", "/pricing"],
  ["Contact", "/contact"],
];

export function Header() {
  return <header className="header">
    <div className="nav">
      <Link href="/" className="logo"><img src="/logo-header.png" alt="Clean Top Off"/></Link>
      <nav>{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <Link href="/contact" className="header-cta">Get a Free Assessment <ArrowRight size={15}/></Link>
    </div>
  </header>
}

export function Footer() {
  return <footer className="footer">
    <div className="footer-top">
      <div>
        <img className="footer-logo" src="/logo-footer.png" alt="Clean Top Off"/>
        <div className="contact-lines">
          <a href="mailto:info@cleantopoff.com"><Mail size={16}/> info@cleantopoff.com</a>
          <a href="tel:+19729141632"><Phone size={16}/> +1 (972) 914-1632</a>
        </div>
      </div>
      <div className="footer-column">
        <span>Company</span>
        <Link href="/about">About</Link>
        <Link href="/how-it-works">How It Works</Link>
        <Link href="/benefits">Benefits</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="footer-column">
        <span>Get Started</span>
        <Link href="/pricing">Pricing</Link>
        <a href="/clean-top-off-2026.pdf" download>Download Company Brochure</a>
        <Link href="/contact">Free Assessment</Link>
      </div>
      <div className="footer-callout">
        <span>READY TO FLY SMARTER?</span>
        <h3>Make every gallon work harder.</h3>
        <Link href="/contact" className="footer-button">Get a Free Assessment <ArrowRight size={16}/></Link>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Clean Top Off. All rights reserved.</span>
      <div className="footer-social"><a href="#" aria-label="LinkedIn"><Linkedin size={18}/></a><a href="mailto:info@cleantopoff.com" aria-label="Email"><Mail size={18}/></a></div>
      <span>Fuel smarter. Fly further.</span>
    </div>
  </footer>
}

export function Hero({eyebrow, title, text, children}) {
  return <section className="hero" style={{backgroundImage:"linear-gradient(90deg,rgba(3,22,39,.94) 0%,rgba(3,22,39,.72) 45%,rgba(3,22,39,.18) 78%),url('/hero-aviation.png')"}}>
    <div className="container hero-inner">
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      <p>{text}</p>
      {children}
    </div>
  </section>
}

export function IconCard({icon, title, text}) {
  return <article className="card"><div className="card-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>
}
