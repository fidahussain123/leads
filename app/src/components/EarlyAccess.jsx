import useScrollReveal from '../hooks/useScrollReveal';

const perks = [
  'Best pricing — locked in before public launch',
  'Direct input — your feedback shapes the product',
  'First mover advantage — before your competitors',
];

export default function EarlyAccess() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section className="early" id="early" ref={ref}>
      <div className={`early__inner reveal-wrap${visible ? ' revealed' : ''}`}>
        <span className="early__tag">LIMITED SPOTS</span>
        <h2 className="early__title">Be The First Real Estate Consultant To Use This</h2>
        <p className="early__sub">
          We are building a dedicated lead generation tool specifically for real estate consultants in Bangalore. Early users get:
        </p>
        <ul className="early__perks">
          {perks.map((p) => (
            <li key={p}>
              <span className="early__check">✓</span>
              {p}
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/918884677054?text=Hi%2C%20I%20want%20to%20claim%20early%20access%20for%20the%20AI%20lead%20generation%20tool."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary btn--full-mobile"
        >
          Claim Your Early Access Spot <span className="btn__arrow">→</span>
        </a>
        <p className="early__fine">No commitment. Free demo first. See it before you decide.</p>
      </div>
    </section>
  );
}
