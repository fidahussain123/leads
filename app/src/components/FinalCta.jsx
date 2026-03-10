import useScrollReveal from '../hooks/useScrollReveal';

export default function FinalCta() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section className="final" id="final" ref={ref}>
      <div className={`final__inner reveal-wrap${visible ? ' revealed' : ''}`}>
        <h2 className="final__title">Ready To Never Chase A Lead Again?</h2>
        <p className="final__sub">Book a free 20 minute demo. See the system live. Decide after.</p>
        <div className="final__buttons">
          <a
            href="https://wa.me/918884677054?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20for%20the%20AI%20lead%20generation%20tool."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--white"
          >
            Book Demo On WhatsApp
          </a>
          <button className="btn btn--ghost-white" onClick={() => document.getElementById('flow')?.scrollIntoView({ behavior: 'smooth' })}>
            Learn More ↓
          </button>
        </div>
      </div>
    </section>
  );
}
