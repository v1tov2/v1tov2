function Process() {
  const steps = [
    {
      n: '01', name: 'Understand your V1', dur: 'Week 1',
      desc: 'We sit with the people doing the work. Map the real workflow, including the hacks that keep you afloat. No assumptions, no slide deck templates.',
      out: ['Workflow map', 'Pain inventory', 'Constraint list'],
    },
    {
      n: '02', name: 'Design your V2', dur: 'Week 1–2',
      desc: 'We pick what to standardise, automate, integrate, or rebuild — prioritised by leverage and risk. You see the plan before we touch a line of code.',
      out: ['V2 blueprint', 'Stack choice', 'Build sequence'],
    },
    {
      n: '03', name: 'Build & implement', dur: 'Week 2–8',
      desc: 'We ship in slices. Each slice goes live in your business, gets used, and earns its keep. No big-bang launches. No write-only docs.',
      out: ['Working systems', 'Team training', 'Adoption support'],
    },
    {
      n: '04', name: 'Refine & scale', dur: 'Ongoing',
      desc: 'We tighten what breaks first, expand what earns ROI next, and keep the system sane as volume grows. Or we hand it off cleanly to your team.',
      out: ['Health reviews', 'New workflows', 'Day-2 maintenance'],
    },
  ];
  return (
    <Section
      id="process"
      label="How we work"
      title="Simple. Practical. Around your reality."
      kicker="Four steps. Priorities first, fluff never. Most engagements move from V1 audit to live V2 system in 4–8 weeks."
      muted
    >
      <div className="process-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
        border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)',
        background: 'var(--card)', overflow: 'hidden', position: 'relative',
      }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            padding: 28, position: 'relative',
            borderRight: i < steps.length - 1 ? '1px solid var(--line)' : 'none',
            display: 'flex', flexDirection: 'column', gap: 16, minHeight: 320,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="mono" style={{
                fontSize: 11, color: 'var(--muted-2)', letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>{s.n}</span>
              <Pill tone="ghost" size="sm">{s.dur}</Pill>
            </div>
            <h3 style={{
              fontSize: 22, fontWeight: 600, letterSpacing: '-0.022em',
              lineHeight: 1.15, margin: 0,
            }}>{s.name}</h3>
            <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.55, margin: 0 }}>
              {s.desc}
            </p>
            <div style={{
              marginTop: 'auto', paddingTop: 16,
              borderTop: '1px dashed var(--line-2)',
              display: 'flex', flexDirection: 'column', gap: 6,
            }}>
              <div className="mono" style={{ fontSize: 10.5, color: 'var(--muted-2)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>You leave with</div>
              {s.out.map(o => (
                <div key={o} style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--accent)' }} />
                  {o}
                </div>
              ))}
            </div>
            {/* connector */}
            {i < steps.length - 1 && (
              <div style={{
                position: 'absolute', right: -7, top: 38,
                width: 14, height: 14, borderRadius: 999,
                background: 'var(--card)', border: '1px solid var(--line-2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 2,
              }}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M2 1.5L5 4L2 6.5" stroke="var(--muted)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

Object.assign(window, { Process });
