function Credibility() {
  return (
    <Section
      id="sourcexpress"
      label="Why us · proof of work"
      title="We've already shipped the V2 we're selling."
      kicker="V1toV2 isn't a deck. It's a pattern we've already run on our own operation — and now run for other businesses, with the same bias toward clarity, durability, and day-2 maintainability."
    >
      <div className="cred-grid" style={{
        display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 32,
        alignItems: 'stretch',
      }}>
        {/* Left — narrative */}
        <div style={{
          padding: 40, background: 'var(--card)',
          border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)',
          display: 'flex', flexDirection: 'column', gap: 28,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 12,
              background: 'var(--ink)', color: 'var(--bg)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Geist Mono', fontWeight: 600, fontSize: 22,
              letterSpacing: '-0.02em',
            }}>SX</div>
            <div>
              <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-0.015em' }}>SourceXpress</div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>cross-border logistics · HK ⇄ PH</div>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <Pill tone="accent">Live · in production</Pill>
            </div>
          </div>

          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink)', margin: 0, fontWeight: 400 }}>
            “I built SourceXpress, a real cross-border logistics business and
            web platform handling shipments, sourcing requests, customer records,
            payment flows, and admin workflows. V1toV2 comes from building systems
            for a real operating business — not theory.”
          </p>

          <div className="mono" style={{
            fontSize: 12, color: 'var(--muted)', letterSpacing: '0.02em',
            paddingTop: 20, borderTop: '1px dashed var(--line-2)',
          }}>
            — Founder, V1toV2
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0,
            border: '1px solid var(--line)', borderRadius: 10, overflow: 'hidden',
          }}>
            {[
              ['Real shipments', 'moved end-to-end'],
              ['Real payments', 'collected & reconciled'],
              ['Real customers', 'using it day to day'],
              ['Real edge cases', 'that taught us what works'],
            ].map(([k, v], i) => (
              <div key={i} style={{
                padding: '16px 18px',
                borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none',
                borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
                background: 'var(--bg)',
              }}>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{k}</div>
                <div className="mono" style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual */}
        <SourceXpressVisual />
      </div>

      {/* Operator-led strip */}
      <div className="cred-strip" style={{
        marginTop: 32, padding: '28px 32px',
        border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-tint)',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
      }}>
        {[
          ['Operator-led, not agency', 'No account managers, no decks. The person who builds it is the person you talk to.'],
          ['Built for day 2', 'Boring, observable, fixable. Your team can run and extend the system without us.'],
          ['Honest about fit', 'If automation isn\'t the right move, we\'ll tell you. We turn down work that won\'t earn its ROI.'],
        ].map(([t, d], i) => (
          <div key={i}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--muted-2)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>{`0${i+1}`}</div>
            <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 6 }}>{t}</div>
            <div style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.5 }}>{d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SourceXpressVisual() {
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F8F4 100%)',
      padding: 28,
      display: 'flex', flexDirection: 'column', gap: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="mono" style={{ fontSize: 11, color: 'var(--muted-2)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Example shipment view · SourceXpress</div>
        <Pill tone="accent" size="sm">In transit</Pill>
      </div>

      {/* Route */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '20px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
      }}>
        <div>
          <div className="mono" style={{ fontSize: 10.5, color: 'var(--muted-2)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Origin</div>
          <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em' }}>Hong Kong</div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>HKG · origin</div>
        </div>
        <div style={{ flex: 1, position: 'relative', height: 36, display: 'flex', alignItems: 'center' }}>
          <svg width="100%" height="36" viewBox="0 0 240 36" preserveAspectRatio="none">
            <path d="M0 18 Q 120 -8 240 18" stroke="var(--ink)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
            <circle cx="0" cy="18" r="3.5" fill="var(--ink)" />
            <circle cx="240" cy="18" r="3.5" fill="var(--ink)" />
            <circle cx="142" cy="6" r="5" fill="var(--accent)" stroke="var(--ink)" strokeWidth="1" />
          </svg>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="mono" style={{ fontSize: 10.5, color: 'var(--muted-2)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Destination</div>
          <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em' }}>Manila</div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>MNL · destination</div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 4 }}>
        {[
          ['', 'Order received', 'captured from request', true],
          ['', 'Payment recorded', 'reconciled to ledger', true],
          ['', 'Picked up', 'warehouse → carrier', true],
          ['', 'Customs handled', 'docs prepared in one place', true],
          ['', 'Out for delivery', 'customer kept informed', false],
        ].map(([t, label, sub, done], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{
              width: 10, height: 10, borderRadius: 999,
              background: done ? 'var(--accent)' : 'var(--card)',
              border: '1px solid ' + (done ? 'var(--accent)' : 'var(--line-2)'),
              flexShrink: 0,
            }} />
            <span style={{ fontSize: 13.5, fontWeight: 500, minWidth: 150, color: done ? 'var(--ink)' : 'var(--muted)' }}>{label}</span>
            <span className="mono" style={{ fontSize: 11.5, color: 'var(--muted)' }}>{sub}</span>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 'auto', paddingTop: 16, borderTop: '1px dashed var(--line-2)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div className="mono" style={{ fontSize: 11, color: 'var(--muted-2)', letterSpacing: '0.04em' }}>
          Many manual steps replaced by one connected workflow
        </div>
        <div className="mono" style={{ fontSize: 10.5, color: 'var(--muted-2)' }}>illustrative</div>
      </div>
    </div>
  );
}

Object.assign(window, { Credibility });
