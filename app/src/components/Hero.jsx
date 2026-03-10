import useScrollReveal from '../hooks/useScrollReveal';

const platforms = [
  { label: 'LinkedIn', delay: 0, x: -120, y: -80 },
  { label: 'Facebook', delay: 0.3, x: -140, y: 20 },
  { label: 'WhatsApp', delay: 0.6, x: -110, y: 110 },
  { label: 'Gmail', delay: 0.9, x: -130, y: -30 },
  { label: 'Google', delay: 1.2, x: -120, y: 70 },
];

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </svg>
  );
}

const iconMap = { LinkedIn: LinkedInIcon, Facebook: FacebookIcon, WhatsApp: WhatsAppIcon, Gmail: GmailIcon, Google: GoogleIcon };

export default function Hero() {
  const [ref, visible] = useScrollReveal(0.1);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className={`hero__inner${visible ? ' hero--visible' : ''}`}>
        <div className="hero__left">
          <span className="hero__tag">AI POWERED LEAD GENERATION</span>
          <h1 className="hero__title">
            Your Next<br />
            Serious Buyer<br />
            Is Already Out There.
          </h1>
          <p className="hero__sub">
            We find them, qualify them and send them directly to you — fully automated.
          </p>
          <div className="hero__buttons">
            <button className="btn btn--primary" onClick={() => scrollTo('flow')}>
              See How It Works <span className="btn__arrow">→</span>
            </button>
            <a
              href="https://wa.me/918884677054?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              Book Free Demo
            </a>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__anim">
            {platforms.map((p) => {
              const Icon = iconMap[p.label];
              return (
                <div
                  className="hero__platform"
                  key={p.label}
                  style={{ animationDelay: `${p.delay}s` }}
                >
                  <Icon />
                  <span>{p.label}</span>
                </div>
              );
            })}

            <div className="hero__arrows">
              <svg className="hero__arrow-svg" viewBox="0 0 200 200" fill="none">
                <path d="M30 40 Q80 80 100 100" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="4 4" className="hero__arrow-path" />
                <path d="M20 100 Q60 100 100 100" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="4 4" className="hero__arrow-path" style={{ animationDelay: '0.3s' }} />
                <path d="M30 160 Q80 120 100 100" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="4 4" className="hero__arrow-path" style={{ animationDelay: '0.6s' }} />
              </svg>
            </div>

            <div className="hero__engine">
              <div className="hero__engine-circle">
                <span>AI</span>
                <span>ENGINE</span>
              </div>
              <div className="hero__engine-pulse" />
            </div>

            <div className="hero__output-arrow">
              <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
                <path d="M0 10 H50 M42 4 L52 10 L42 16" stroke="#0A0A0A" strokeWidth="2" />
              </svg>
            </div>

            <div className="hero__hotlead">
              <div className="hero__hotlead-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="hero__hotlead-label">HOT LEAD</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__bottom">
        <div className="hero__divider" />
        <p className="hero__trust">Trusted by real estate consultants across Bangalore</p>
      </div>
    </section>
  );
}
