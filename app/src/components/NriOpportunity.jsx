import useScrollReveal from '../hooks/useScrollReveal';

const countries = [
  { flag: '🇦🇪', name: 'UAE / Dubai', insight: 'Largest NRI community. High disposable income. Property investment is top priority.' },
  { flag: '🇺🇸', name: 'USA / Canada', insight: 'Tech workers with strong INR purchasing power. Looking for appreciation plays.' },
  { flag: '🇬🇧', name: 'United Kingdom', insight: 'Strong Indian diaspora. Emotional connection to investing back home.' },
  { flag: '🇸🇬', name: 'Singapore', insight: 'High earning NRIs. Love Bangalore market for its IT corridor growth.' },
  { flag: '🇦🇺', name: 'Australia', insight: 'Growing Indian community actively seeking Bangalore property investments.' },
];

export default function NriOpportunity() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section className="nri" id="nri" ref={ref}>
      <div className={`nri__inner reveal-wrap${visible ? ' revealed' : ''}`}>
        <div className="section-header section-header--light">
          <h2 className="section-title section-title--light">The NRI Market Is Untapped — And Huge</h2>
          <p className="section-subtitle section-subtitle--light">
            NRIs in these countries are actively looking to invest in Bangalore real estate. Nobody is reaching them consistently. We do.
          </p>
        </div>

        <div className="nri__grid">
          {countries.map((c) => (
            <div className="nri__card" key={c.name}>
              <span className="nri__flag">{c.flag}</span>
              <h3 className="nri__card-name">{c.name}</h3>
              <p className="nri__card-text">{c.insight}</p>
            </div>
          ))}
        </div>

        <p className="nri__footer">
          Our system reaches NRI communities across all these markets — automatically, every single day.
        </p>
      </div>
    </section>
  );
}
