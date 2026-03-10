import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const faqs = [
  { q: 'Do I need any technical knowledge?', a: 'None at all. We build, manage and run everything. You just receive the qualified leads.' },
  { q: 'How quickly will I start seeing leads?', a: 'Most consultants see their first qualified leads within the first week of going live.' },
  { q: 'Does this work for NRI clients specifically?', a: 'Yes — NRI outreach is actually one of our strongest features. We target NRI communities in UAE, USA, UK, Canada and Singapore.' },
  { q: 'What does this cost?', a: 'We create custom plans based on your goals. Book a free demo and we will walk you through options. No pressure.' },
  { q: 'What makes this different from buying a lead database?', a: 'Databases give you cold, outdated contacts. Our system finds fresh leads daily, reaches out personally, qualifies them with AI and only sends you the hot ones.' },
];

export default function Faq() {
  const [ref, visible] = useScrollReveal(0.1);
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="faq" id="faq" ref={ref}>
      <div className={`faq__inner reveal-wrap${visible ? ' revealed' : ''}`}>
        <div className="section-header">
          <h2 className="section-title">Quick Answers</h2>
        </div>

        <div className="faq__list">
          {faqs.map((f, idx) => (
            <div className={`faq__item${openIdx === idx ? ' faq__item--open' : ''}`} key={idx}>
              <button className="faq__q" onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
                <span>{f.q}</span>
                <span className="faq__icon">{openIdx === idx ? '−' : '+'}</span>
              </button>
              <div className="faq__a-wrap">
                <p className="faq__a">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
