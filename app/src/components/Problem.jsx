import useScrollReveal from '../hooks/useScrollReveal';

const cards = [
  {
    num: '01',
    title: 'Manual & Exhausting',
    text: "You spend hours every day posting in WhatsApp groups, LinkedIn, browsing contacts. It's all on you — and it doesn't scale.",
  },
  {
    num: '02',
    title: 'Unqualified Time Wasters',
    text: 'Out of 50 people you talk to, maybe 2 are serious. The rest waste your time with no budget, no timeline, no intent.',
  },
  {
    num: '03',
    title: 'Leads Go Cold',
    text: 'You follow up once, maybe twice. Then life gets busy. That hot lead goes cold and your competitor closes them instead.',
  },
];

export default function Problem() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section className="problem" id="problem" ref={ref}>
      <div className={`problem__inner reveal-wrap${visible ? ' revealed' : ''}`}>
        <div className="section-header">
          <h2 className="section-title">The Real Estate Lead Problem</h2>
          <p className="section-subtitle">Every consultant faces this — most never solve it</p>
        </div>

        <div className="problem__grid">
          {cards.map((c) => (
            <div className="problem__card" key={c.num}>
              <span className="problem__num">{c.num}</span>
              <h3 className="problem__card-title">{c.title}</h3>
              <p className="problem__card-text">{c.text}</p>
            </div>
          ))}
        </div>

        <p className="problem__hook">
          What if all of this happened automatically — without you lifting a finger?
        </p>
      </div>
    </section>
  );
}
