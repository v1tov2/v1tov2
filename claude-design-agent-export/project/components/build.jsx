function Build() {
  const items = [
    {
      tag: '01',
      title: 'Internal tools & dashboards',
      desc: 'One place where your team sees orders, customers, requests, and payments — without duct-taping six tabs together.',
      bullets: ['Custom admin panels', 'Live operational dashboards', 'Role-based access', 'Built around your data'],
      visual: 'dashboard',
    },
    {
      tag: '02',
      title: 'Workflow automation',
      desc: 'The repetitive work your team does every day — captured, automated, observable. Humans handle the exceptions, not the routine.',
      bullets: ['Order → invoice → payment', 'Lead → follow-up → CRM', 'Request → task → owner', 'Reliable, with retries & logs'],
      visual: 'flow',
    },
    {
      tag: '03',
      title: 'Practical AI, where it earns it',
      desc: 'Not AI everywhere — AI in the specific places where it removes manual reading, drafting, or routing, behind clear guardrails.',
      bullets: ['Drafting & summarising', 'Classifying & routing', 'Extracting from documents', 'Quality checks & review'],
      visual: 'ai',
    },
    {
      tag: '04',
      title: 'Custom business systems',
      desc: 'When off-the-shelf doesn\'t fit. Real software, shaped around how your operation runs — and built to be maintained beyond launch.',
      bullets: ['Customer portals', 'Supplier and partner apps', 'Inventory & ops platforms', 'Built for day 2'],
      visual: 'system',
    },
  ];
  return (
    <Section
      id="what-we-build"
      label="What we build"
      title="We don’t advise. We ship."
      kicker="Four things we keep building because they keep working. Each one shaped to your operation — fewer manual hours, fewer dropped handoffs, less depending on the same one or two people to keep things moving."
    >
      <div className="build-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24,
      }}>
        {items.map((it, i) => (
          <BuildCard key={i} {...it} />
        ))}
      </div>
    </Section>
  );
}

function BuildCard({ tag, title, desc, bullets, visual }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        padding: 32, background: 'var(--card)',
        border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)',
        display: 'flex', flexDirection: 'column', gap: 24,
        transition: 'all 200ms ease',
        boxShadow: hover ? '0 1px 0 rgba(11,11,10,0.04), 0 20px 40px -25px rgba(11,11,10,0.18)' : 'none',
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <Pill tone="ghost">{tag}</Pill>
        <BuildVisual kind={visual} active={hover} />
      </div>
      <div>
        <h3 style={{
          fontSize: 26, fontWeight: 600, letterSpacing: '-0.022em',
          lineHeight: 1.15, margin: '0 0 10px 0',
        }}>{title}</h3>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.55, margin: 0 }}>{desc}</p>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px',
        paddingTop: 20, borderTop: '1px dashed var(--line-2)',
      }}>
        {bullets.map((b, i) => (
          <div key={i} style={{ fontSize: 13.5, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--accent)' }} />
            {b}
          </div>
        ))}
      </div>
    </div>
  );
}

function BuildVisual({ kind, active }) {
  const w = 100, h = 60;
  const stroke = active ? 'var(--ink)' : 'var(--muted-2)';
  const fill = active ? 'color-mix(in oklab, var(--accent) 30%, transparent)' : 'transparent';
  if (kind === 'dashboard') {
    return (
      <svg width={w} height={h} style={{ transition: 'all 200ms' }}>
        <rect x="1" y="1" width="98" height="58" rx="3" stroke={stroke} fill="none" />
        <rect x="6" y="6" width="20" height="48" rx="2" fill="var(--bg-tint)" />
        <rect x="30" y="6" width="64" height="14" rx="2" fill={fill} stroke={stroke} />
        <rect x="30" y="24" width="30" height="30" rx="2" stroke={stroke} fill="none" />
        <rect x="64" y="24" width="30" height="30" rx="2" stroke={stroke} fill="none" />
        <path d="M34 44 L40 36 L46 40 L52 32 L58 38" stroke={active ? 'var(--accent-ink)' : stroke} fill="none" strokeWidth="1.2" />
      </svg>
    );
  }
  if (kind === 'flow') {
    return (
      <svg width={w} height={h} style={{ transition: 'all 200ms' }}>
        <circle cx="12" cy="30" r="8" stroke={stroke} fill={fill} />
        <circle cx="50" cy="14" r="8" stroke={stroke} fill="none" />
        <circle cx="50" cy="46" r="8" stroke={stroke} fill="none" />
        <circle cx="88" cy="30" r="8" stroke={stroke} fill={active ? fill : 'none'} />
        <path d="M20 28 L42 16" stroke={stroke} strokeDasharray={active ? '0' : '2 2'} />
        <path d="M20 32 L42 44" stroke={stroke} strokeDasharray={active ? '0' : '2 2'} />
        <path d="M58 14 L80 28" stroke={stroke} strokeDasharray={active ? '0' : '2 2'} />
        <path d="M58 46 L80 32" stroke={stroke} strokeDasharray={active ? '0' : '2 2'} />
      </svg>
    );
  }
  if (kind === 'ai') {
    return (
      <svg width={w} height={h} style={{ transition: 'all 200ms' }}>
        <rect x="1" y="1" width="98" height="58" rx="3" stroke={stroke} fill="none" />
        <text x="7" y="22" fontFamily="Geist Mono" fontSize="8" fill={stroke}>input</text>
        <path d="M22 19 L33 19" stroke={stroke} strokeWidth="1" />
        <rect x="34" y="12" width="32" height="14" rx="2" fill={fill} stroke={stroke} />
        <text x="40" y="22" fontFamily="Geist Mono" fontSize="8" fill="var(--ink)">model</text>
        <path d="M67 19 L78 19" stroke={stroke} strokeWidth="1" />
        <text x="79" y="22" fontFamily="Geist Mono" fontSize="8" fill={stroke}>out</text>
        <rect x="10" y="36" width="80" height="14" rx="2" stroke={stroke} fill="none" strokeDasharray="2 2" />
        <text x="36" y="46" fontFamily="Geist Mono" fontSize="8" fill="var(--muted)">guardrails</text>
      </svg>
    );
  }
  return (
    <svg width={w} height={h} style={{ transition: 'all 200ms' }}>
      <rect x="1" y="1" width="98" height="58" rx="3" stroke={stroke} fill="none" />
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={8 + i * 30} y="10" width="24" height="40" rx="2" fill={i === 1 && active ? fill : 'var(--bg-tint)'} stroke={stroke} />
          <line x1={8 + i * 30 + 4} y1="20" x2={8 + i * 30 + 20} y2="20" stroke={stroke} strokeWidth="0.8" />
          <line x1={8 + i * 30 + 4} y1="26" x2={8 + i * 30 + 16} y2="26" stroke={stroke} strokeWidth="0.8" />
          <line x1={8 + i * 30 + 4} y1="32" x2={8 + i * 30 + 18} y2="32" stroke={stroke} strokeWidth="0.8" />
        </g>
      ))}
    </svg>
  );
}

Object.assign(window, { Build });
