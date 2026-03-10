import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => scrollTo('hero')}>
          <span className="navbar__logo-mark">AI</span>
          <span className="navbar__logo-text">LeadEngine</span>
        </button>

        <div className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          <button onClick={() => scrollTo('problem')}>Problem</button>
          <button onClick={() => scrollTo('flow')}>How It Works</button>
          <button onClick={() => scrollTo('nri')}>NRI Market</button>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('faq')}>FAQ</button>
        </div>

        <a
          href="https://wa.me/918884677054?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20for%20the%20AI%20lead%20generation%20tool."
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta"
        >
          Book Demo
        </a>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
