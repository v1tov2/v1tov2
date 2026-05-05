function Compare() {
  const rows = [
    { area: 'Order intake', v1: 'Requests scattered across chat, email, and screenshots', v2: 'One intake. Typed records. Every time.' },
    { area: 'Status visibility', v1: '“Where are we on this?” — chased on demand', v2: 'Live dashboard, one source of truth' },
    { area: 'Repeat work', v1: 'Done by hand by whoever is around', v2: 'Automated; humans handle exceptions only' },
    { area: 'Invoicing & payments', v1: 'Manual generation, late chasing', v2: 'Triggered on event, reminders auto-sent' },
    { area: 'Knowledge', v1: 'Lives in a few people’s heads', v2: 'Encoded in workflows your team can run' },
    { area: 'Scaling', v1: 'Hire more people to manage the chaos', v2: 'Same headcount handles more volume' },
    { area: 'Day-2 maintenance', v1: 'Heroic effort and weekend rescues', v2: 'Boring, observable, fixable' },
  ];
  const [active, setActive] = useState('v2');
  return (
    <Section
      id="compare"
      label="V1 vs V2"
      title="Same business. Different operating system."
      kicker="Most teams aren’t broken — their wiring is. Here’s what the same operation looks like running on V1 instincts versus a real V2 system. Same people. Fewer manual hours. Clearer visibility."
    >
      {/* Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <Toggle value={active} onChange={setActive} />
        <span className="mono" style={{ fontSize: 11.5, color: 'var(--muted-2)', letterSpacing: '0.04em' }}>
          {active === 'v1' ? 'showing the chaos' : 'showing the system'}
        </span>
      </div>

      <div style={{
        border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)',
        background: 'var(--card)', overflow: 'hidden',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          padding: '14px 22px', borderBottom: '1px solid var(--line)',
          background: 'var(--bg-tint)',
        }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-2)' }}>Area</div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-2)', display: 'flex', alignItems: 'center', gap: 8 }}>
            V1 <span style={{ color: 'var(--muted-2)' }}>· today</span>
          </div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-2)', display: 'flex', alignItems: 'center', gap: 8 }}>
            V2 <span style={{ color: 'var(--muted-2)' }}>· what we build</span>
          </div>
        </div>
        {rows.map((r, i) => {
          const dimV1 = active === 'v2';
          const dimV2 = active === 'v1';
          return (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
              padding: '20px 22px',
              borderBottom: i < rows.length - 1 ? '1px solid var(--line)' : 'none',
              alignItems: 'center',
            }}>
              <div style={{ fontSize: 14.5, fontWeight: 500 }}>{r.area}</div>
              <div style={{
                display: 'flex', alignItems: 'flex-start', gap: 10,
                fontSize: 14, color: dimV1 ? 'var(--muted-2)' : 'var(--ink)',
                transition: 'color 200ms',
              }}>
                <DotMark tone="warn" dim={dimV1} />
                <span>{r.v1}</span>
              </div>
              <div style={{
                display: 'flex', alignItems: 'flex-start', gap: 10,
                fontSize: 14, color: dimV2 ? 'var(--muted-2)' : 'var(--ink)',
                transition: 'color 200ms',
              }}>
                <DotMark tone="accent" dim={dimV2} />
                <span>{r.v2}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function DotMark({ tone, dim }) {
  const color = tone === 'accent' ? 'var(--accent)' : 'var(--warn)';
  return (
    <span style={{
      width: 14, height: 14, borderRadius: 999, marginTop: 3, flexShrink: 0,
      border: `1px solid ${dim ? 'var(--line-2)' : color}`,
      background: dim ? 'transparent' : `color-mix(in oklab, ${color} 30%, transparent)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'all 200ms',
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: 999,
        background: dim ? 'var(--line-2)' : color,
      }} />
    </span>
  );
}

function Toggle({ value, onChange }) {
  return (
    <div style={{
      display: 'inline-flex', padding: 4, background: 'var(--card)',
      border: '1px solid var(--line-2)', borderRadius: 999, position: 'relative',
    }}>
      {['v1', 'v2'].map(v => (
        <button key={v}
          onClick={() => onChange(v)}
          className="mono"
          style={{
            position: 'relative', zIndex: 1, padding: '6px 16px',
            background: value === v ? (v === 'v2' ? 'var(--accent)' : 'var(--ink)') : 'transparent',
            color: value === v ? (v === 'v2' ? 'var(--ink)' : 'var(--bg)') : 'var(--muted)',
            border: 'none', borderRadius: 999, fontSize: 12, fontWeight: 500,
            letterSpacing: '0.04em', textTransform: 'uppercase', cursor: 'pointer',
            transition: 'all 160ms',
          }}>{v}</button>
      ))}
    </div>
  );
}

Object.assign(window, { Compare });
