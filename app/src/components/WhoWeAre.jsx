import useScrollReveal from '../hooks/useScrollReveal';

const creds = [
  { title: '4-5 Person Specialist Team', text: 'AI developers, automation engineers, SEO experts and web specialists working together.' },
  { title: 'Already Shipped Products', text: 'We\'ve built Zapfolio and Cheqmate — real products, real users, real experience.' },
  { title: 'AI + Automation + SEO + Web', text: 'Full stack capability. We don\'t outsource anything. Everything is built in-house.' },
  { title: 'Now Building For Real Estate', text: 'Our next product is a dedicated lead generation tool built specifically for property consultants like you.' },
];

export default function WhoWeAre() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section className="about" id="about" ref={ref}>
      <div className={`about__inner reveal-wrap${visible ? ' revealed' : ''}`}>
        <div className="about__layout">
          <div className="about__left">
            <h2 className="about__title">
              A Real Tech Team.<br />
              Not A One Man Show.
            </h2>
          </div>
          <div className="about__right">
            {creds.map((c) => (
              <div className="about__card" key={c.title}>
                <h3 className="about__card-title">{c.title}</h3>
                <p className="about__card-text">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
