function PainPoints() {
  const pains = [
    { quote: '"Where are we on this order?"', context: 'asked 14× across email, chat, and DMs this week', tag: 'no visibility' },
    { quote: '"Only Mark knows how to do that."', context: 'Mark is on holiday. The business is on hold.', tag: 'key-person risk' },
    { quote: '"I\u2019ll just do it manually for now."', context: 'said three months ago. still doing it manually.', tag: 'compounding debt' },
    { quote: '"Send me the latest spreadsheet."', context: 'orders_FINAL_v7_USE_THIS.xlsx', tag: 'no source of truth' },
    { quote: '"We need to hire someone for this."', context: 'or you could build the system once.', tag: 'wrong lever' },
    { quote: '"Who was supposed to follow up on this?"', context: 'the handoff fell between three tools.', tag: 'dropped handoffs' },
  ];
  return (
    <Section
      id="pains"
      label="If this sounds like you"
      title="You\u2019re probably still in V1 if any of these get said this week."
      kicker="None of these mean the business is failing. They mean operations are becoming the ceiling \u2014 and that scaling further means hiring more people just to keep up. We\u2019re built for exactly this moment."
      muted
    >
      <div className="pain-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
        border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)',
        background: 'var(--card)', overflow: 'hidden',
      }}>
        {pains.map((p, i) => {
          const col = i % 3, row = Math.floor(i / 3);
          return (
            <div key={i} className="pain-cell" style={{
              padding: '32px 28px', position: 'relative',
              borderRight: col < 2 ? '1px solid var(--line)' : 'none',
              borderBottom: row < 1 ? '1px solid var(--line)' : 'none',
              minHeight: 200,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  fontSize: 22, fontWeight: 500, letterSpacing: '-0.018em',
                  lineHeight: 1.25, color: 'var(--ink)', marginBottom: 14,
                }}>
                  {p.quote}
                </div>
                <div style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.5 }}>
                  {p.context}
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <Pill tone="ghost" size="sm">
                  <span style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--warn)' }} />
                  {p.tag}
                </Pill>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pain-cta" style={{
        marginTop: 32, padding: 24,
        border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)',
        background: 'var(--bg)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        flexWrap: 'wrap',
      }}>
        <div>
          <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 4 }}>Not sure if you\u2019re in V1?</div>
          <div style={{ fontSize: 14, color: 'var(--muted)' }}>Free 30-min call. We\u2019ll tell you honestly. No pitch, no obligation.</div>
        </div>
        <a href="#cta" style={{ textDecoration: 'none' }}><Button variant="primary">Book a free V2 Audit</Button></a>
      </div>
    </Section>
  );
}

Object.assign(window, { PainPoints });
