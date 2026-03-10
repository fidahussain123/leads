import { useEffect, useRef, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const platformPills = ['LinkedIn', 'Facebook Groups', 'WhatsApp', 'NRI Communities', 'Google'];

function TypewriterChat({ inView }) {
  const messages = [
    { from: 'bot', text: 'Great! Quick question — are you looking for rental income or long term growth?' },
    { from: 'user', text: 'Growth' },
    { from: 'bot', text: 'What\'s your approx investment range?' },
    { from: 'user', text: '30-50 lakhs' },
    { from: 'bot', text: 'Perfect. Are you ready to invest in next 3 months?' },
    { from: 'user', text: 'Yes' },
  ];

  const [visibleCount, setVisibleCount] = useState(0);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (!inView || hasTriggered.current) return;
    hasTriggered.current = true;

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setVisibleCount(i);
      if (i >= messages.length) clearInterval(interval);
    }, 700);

    return () => clearInterval(interval);
  }, [inView, messages.length]);

  return (
    <div className="flow-chat">
      <div className="flow-chat__window">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flow-chat__msg flow-chat__msg--${m.from}${idx < visibleCount ? ' flow-chat__msg--visible' : ''}`}
          >
            {m.text}
          </div>
        ))}
        {visibleCount >= messages.length && (
          <div className="flow-chat__badge flow-chat__msg--visible">✅ HOT LEAD</div>
        )}
      </div>
    </div>
  );
}

function LeadScore({ inView }) {
  const [score, setScore] = useState(0);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (!inView || hasTriggered.current) return;
    hasTriggered.current = true;

    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current > 85) { setScore(85); clearInterval(interval); return; }
      setScore(current);
    }, 20);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div className="flow-score">
      <div className="flow-score__bar">
        <div className="flow-score__labels">
          <span>COLD</span>
          <span>HOT</span>
        </div>
        <div className="flow-score__track">
          <div className="flow-score__fill" style={{ width: `${score}%` }} />
        </div>
      </div>
      <p className="flow-score__text">Lead Score: {score}/100 — Sending to consultant</p>
    </div>
  );
}

const steps = [
  {
    id: 'find',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
    tag: 'FIND',
    title: 'AI Scans Every Platform For Potential Buyers',
    desc: 'Our system automatically scans LinkedIn profiles, Facebook investment groups, WhatsApp communities and NRI networks across UAE, USA, UK, Canada and Singapore. It identifies people who match your ideal investor profile — IT professionals, business owners, NRIs with investment intent.',
    extra: 'pills',
  },
  {
    id: 'reach',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" />
      </svg>
    ),
    tag: 'REACH',
    title: 'Personalized Outreach Sent Automatically',
    desc: 'The system sends personalized messages that feel human — not bulk spam. Each message is tailored with the person\'s name, location and relevant property opportunity. Sent at the right time of day for maximum open rates.',
    extra: 'message',
  },
  {
    id: 'qualify',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
    tag: 'QUALIFY',
    title: 'AI Chatbot Qualifies Every Single Lead',
    desc: 'When someone replies, our AI chatbot takes over immediately — 24/7. It has a natural conversation and asks the right questions to score every lead.',
    extra: 'chat',
  },
  {
    id: 'filter',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
    tag: 'FILTER',
    title: 'Only Hot Leads Reach You',
    desc: 'The AI scores every lead based on their replies, budget, timeline and intent. Only leads above the threshold land in your inbox. Cold leads are nurtured automatically with follow-ups until they are ready.',
    extra: 'filter',
  },
  {
    id: 'close',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.78.77L12 20.65l7.64-7.65.78-.77a5.4 5.4 0 0 0 0-7.65z" />
      </svg>
    ),
    tag: 'CLOSE',
    title: 'You Show Up. You Close.',
    desc: 'By the time a lead reaches you, the hard work is done. They know what they want, they have the budget and they\'re ready to talk. Your only job is to close the deal.',
    extra: 'compare',
  },
];

export default function AutomationFlow() {
  const [sectionRef, sectionVisible] = useScrollReveal(0.05);
  const [chatRef, chatVisible] = useScrollReveal(0.3);
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = timelineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = rect.top - windowH * 0.7;
      const end = rect.bottom - windowH * 0.3;
      const total = end - start;
      if (total <= 0) return;
      const pct = Math.min(Math.max(-start / total, 0), 1) * 100;
      setProgress(pct);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="flow" id="flow" ref={sectionRef}>
      <div className={`flow__inner reveal-wrap${sectionVisible ? ' revealed' : ''}`}>
        <div className="section-header">
          <h2 className="section-title">The Exact Flow — Step By Step</h2>
          <p className="section-subtitle">Here is precisely how the system works from zero to closed deal</p>
        </div>

        <div className="flow__timeline" ref={timelineRef}>
          <div className="flow__line">
            <div className="flow__line-progress" style={{ height: `${progress}%` }} />
            <div className="flow__line-dot" style={{ top: `${progress}%` }} />
          </div>

          {steps.map((step, idx) => (
            <FlowStep key={step.id} step={step} idx={idx} chatRef={chatRef} chatVisible={chatVisible} />
          ))}
        </div>

        <div className="flow__bottom">
          <p className="flow__bottom-text">The whole system runs while you sleep.</p>
          <a
            href="https://wa.me/918884677054?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--yellow-text"
          >
            See It Live — Book Demo
          </a>
        </div>
      </div>
    </section>
  );
}

function FlowStep({ step, idx, chatRef, chatVisible }) {
  const [ref, visible] = useScrollReveal(0.2);

  return (
    <div className={`flow__step${visible ? ' flow__step--visible' : ''}`} ref={ref}>
      <div className="flow__step-marker">
        <span className="flow__step-num">{String(idx + 1).padStart(2, '0')}</span>
        <div className="flow__step-icon">{step.icon}</div>
      </div>
      <div className="flow__step-content">
        <span className="flow__step-tag">{step.tag}</span>
        <h3 className="flow__step-title">{step.title}</h3>
        <p className="flow__step-desc">{step.desc}</p>

        {step.extra === 'pills' && (
          <div className="flow__pills">
            {platformPills.map((p) => (
              <span className="flow__pill" key={p}>{p}</span>
            ))}
          </div>
        )}

        {step.extra === 'message' && (
          <div className="flow__mock-msg">
            <p>"Hi Rahul, saw you're based in Bangalore and work in tech. I have a Prestige project with strong ROI potential — interested to know more?"</p>
            <span className="flow__mock-stat">500+ people reached daily vs 50 manually</span>
          </div>
        )}

        {step.extra === 'chat' && (
          <div ref={chatRef}>
            <TypewriterChat inView={chatVisible} />
            <LeadScore inView={chatVisible} />
          </div>
        )}

        {step.extra === 'filter' && (
          <div className="flow__filter-split">
            <div className="flow__filter-box flow__filter-box--cold">
              <p>❌ No budget — Cold</p>
              <p>❌ Just exploring — Cold</p>
              <p>❌ No timeline — Warm (auto follow up)</p>
              <p>❌ No response — Drip sequence</p>
            </div>
            <div className="flow__filter-box flow__filter-box--hot">
              <p>✅ Budget confirmed</p>
              <p>✅ Timeline: 1-3 months</p>
              <p>✅ Clear investment intent</p>
              <p className="flow__filter-arrow">→ SENT TO YOU</p>
            </div>
          </div>
        )}

        {step.extra === 'compare' && (
          <div className="flow__compare">
            <div className="flow__compare-row">
              <span className="flow__compare-label">WITHOUT AUTOMATION</span>
              <span className="flow__compare-value">50 conversations → 2 closings</span>
            </div>
            <div className="flow__compare-divider" />
            <div className="flow__compare-row">
              <span className="flow__compare-label">WITH AUTOMATION</span>
              <span className="flow__compare-value flow__compare-value--highlight">500 leads → 30 hot leads → 8-10 closings</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
