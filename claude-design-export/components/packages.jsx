function Packages() {
  const tiers = [
    {
      name: 'V2 Build',
      tag: 'Most teams start here',
      price: 'from HKD 18,000',
      duration: 'Typically 2\u20138 weeks',
      summary: 'We design and ship a focused V2 system into your live operation \u2014 internal tools, workflow automation, or a custom application your team uses every day.',
      includes: [
        'Workflow audit + V2 blueprint',
        'One production-ready system, end-to-end',
        'Connections to the tools you already use',
        'Data migration, guardrails, and access controls',
        'Team training + adoption support',
        '30 days of post-launch tuning',
      ],
      cta: 'Plan your build',
      featured: true,
    },
    {
      name: 'V2 Operate',
      tag: 'Ongoing partner',
      price: 'from HKD 6,800 / mo',
      duration: 'Rolling',
      summary: 'Your fractional systems team after launch. We tighten what breaks first, ship the next workflow, and keep the system sane as you scale.',
      includes: [
        'Dedicated systems lead',
        'Continuous workflow improvements',
        'New automations and small builds on demand',
        'Monthly health & ROI review',
        'On-call for ops-critical fixes',
      ],
      cta: 'Talk about retainer',
      featured: false,
    },
  ];
  return (
    <Section
      id="packages"
      label="Packages"
      title="Two ways to bring your V2 online."
      kicker="Most businesses start with a V2 Build for one or two systems, then keep us on retainer to Operate as they scale. Every engagement is fixed-scope and operator-priced \u2014 with a free 30-min Audit before anyone commits."
    >
      <div className="pkg-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, alignItems: 'stretch', maxWidth: 880, margin: '0 auto' }}>
        {tiers.map((t, i) => <PackageCard key={i} {...t} />)}
      </div>

      <div className="pkg-audit" style={{
        marginTop: 32, padding: '24px 28px',
        border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)',
        background: 'var(--card)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, flex: '1 1 360px' }}>
          <div style={{
            width: 44, height: 44, borderRadius: 10,
            background: 'var(--accent-soft)', color: 'var(--accent-ink)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Geist Mono', fontWeight: 600, fontSize: 13,
            flexShrink: 0,
          }}>FREE</div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 4 }}>Start with a free V2 Audit (30-min)</div>
            <div style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.5 }}>
              A focused walkthrough of how your operations run today \u2014 and where a proper V2 system would remove the most friction. No pitch. No obligation.
            </div>
          </div>
        </div>
        <a href="#cta" style={{ textDecoration: 'none' }}><Button variant="primary" size="md">Book a V2 Audit</Button></a>
      </div>

      <div style={{
        marginTop: 16, padding: '14px 20px',
        border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-tint)',
        display: 'flex', alignItems: 'flex-start', gap: 12,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--muted-2)', flexShrink: 0, marginTop: 7 }} />
        <div className="mono" style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.01em', lineHeight: 1.5 }}>
          Introductory pricing for selected early clients. Final scope depends on workflow complexity, integrations, and number of users. Every quote is fixed before work begins.
        </div>
      </div>
    </Section>
  );
}

function PackageCard({ name, tag, price, duration, summary, includes, cta, featured }) {
  return (
    <div className="pkg-card" style={{
      position: 'relative',
      background: featured ? 'var(--ink)' : 'var(--card)',
      color: featured ? 'var(--bg)' : 'var(--ink)',
      border: '1px solid ' + (featured ? 'var(--ink)' : 'var(--line)'),
      borderRadius: 'var(--radius-lg)',
      padding: '32px 28px',
      display: 'flex', flexDirection: 'column', gap: 24,
      boxShadow: featured ? '0 24px 60px -30px rgba(11,11,10,0.4)' : 'none',
    }}>
      {featured && (
        <span style={{
          position: 'absolute', top: -12, left: 28,
          background: 'var(--accent)', color: 'var(--ink)',
          fontFamily: 'Geist Mono', fontSize: 11, fontWeight: 500,
          padding: '4px 10px', borderRadius: 999,
          letterSpacing: '0.04em', textTransform: 'uppercase',
        }}>
          \u2605 {tag}
        </span>
      )}

      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
          <h3 style={{
            fontSize: 30, fontWeight: 600, letterSpacing: '-0.025em',
            margin: 0, color: 'inherit',
          }}>{name}</h3>
          {!featured && <span className="mono" style={{ fontSize: 11, color: 'var(--muted-2)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{tag}</span>}
        </div>
        <p style={{
          fontSize: 14, lineHeight: 1.55,
          color: featured ? 'color-mix(in oklab, var(--bg) 70%, transparent)' : 'var(--muted)',
          margin: 0,
        }}>{summary}</p>
      </div>

      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 14,
        paddingTop: 20,
        borderTop: '1px solid ' + (featured ? 'rgba(255,255,255,0.12)' : 'var(--line)'),
        flexWrap: 'wrap',
      }}>
        <div>
          <div className="mono" style={{
            fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: featured ? 'color-mix(in oklab, var(--bg) 55%, transparent)' : 'var(--muted-2)',
            marginBottom: 4,
          }}>Investment</div>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em' }}>{price}</div>
        </div>
        <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
          <div className="mono" style={{
            fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: featured ? 'color-mix(in oklab, var(--bg) 55%, transparent)' : 'var(--muted-2)',
            marginBottom: 4,
          }}>Timeline</div>
          <div style={{ fontSize: 14, fontWeight: 500 }}>{duration}</div>
        </div>
      </div>

      <ul style={{
        listStyle: 'none', padding: 0, margin: 0,
        display: 'flex', flexDirection: 'column', gap: 10,
        flex: 1,
      }}>
        {includes.map((inc, i) => (
          <li key={i} style={{
            fontSize: 13.5, lineHeight: 1.45,
            color: featured ? 'color-mix(in oklab, var(--bg) 88%, transparent)' : 'var(--ink)',
            display: 'flex', gap: 10, alignItems: 'flex-start',
          }}>
            <span style={{
              flexShrink: 0, marginTop: 5,
              width: 5, height: 5, borderRadius: 999,
              background: 'var(--accent)',
              boxShadow: featured ? '0 0 0 3px color-mix(in oklab, var(--accent) 25%, transparent)' : 'none',
            }} />
            {inc}
          </li>
        ))}
      </ul>

      <a href="#cta" style={{ textDecoration: 'none', display: 'block' }}>
        <Button variant={featured ? 'accent' : 'primary'} size="md" style={{ justifyContent: 'center', width: '100%' }}>
          {cta}
        </Button>
      </a>
    </div>
  );
}

Object.assign(window, { Packages });
