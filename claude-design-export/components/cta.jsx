function FinalCTA() {
  return (
    <section id="cta" style={{
      borderTop: '1px solid var(--line)',
      padding: '120px 0',
      background: 'var(--ink)',
      color: 'var(--bg)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.4,
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%)',
      }} />
      <div className="cta-grid" style={{
        position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 32px',
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'center',
      }}>
        <div>
          <div className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 12, color: 'color-mix(in oklab, var(--bg) 60%, transparent)',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '5px 12px', borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.15)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--accent)', boxShadow: '0 0 0 3px color-mix(in oklab, var(--accent) 25%, transparent)' }} />
            Now booking · Limited build slots available
          </div>
          <h2 style={{
            fontSize: 'clamp(40px, 5.6vw, 80px)',
            lineHeight: 1, letterSpacing: '-0.035em',
            fontWeight: 600, margin: '24px 0 0 0',
          }}>
            Ready for your V2?
          </h2>
          <p style={{
            fontSize: 19, lineHeight: 1.55, marginTop: 24, maxWidth: 520,
            color: 'color-mix(in oklab, var(--bg) 78%, transparent)',
          }}>
            Free 30-min call. We’ll walk through how your business runs today and where
            a steadier operating system would pay back fastest. Priorities first,
            fluff never. No pitch, no obligation.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <Button variant="accent" size="lg">Book a free V2 Audit</Button>
            <a href="mailto:hello@v1tov2.com" className="mono" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 22px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 8, color: 'var(--bg)', textDecoration: 'none',
              fontSize: 13.5, letterSpacing: '0.005em',
            }}>
              hello@v1tov2.com
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 3h6v6M3 9l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right side calendar mock */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 'var(--radius-lg)',
          padding: 24, backdropFilter: 'blur(10px)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, gap: 12, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 500 }}>Free 30-min V2 Audit call</div>
              <div className="mono" style={{ fontSize: 11.5, color: 'color-mix(in oklab, var(--bg) 50%, transparent)', marginTop: 3 }}>
                with founder · video call
              </div>
            </div>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M2 6h12M5 1.5v3M11 1.5v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6,
            marginBottom: 14,
          }}>
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
              <div key={i} className="mono" style={{
                fontSize: 10, color: 'color-mix(in oklab, var(--bg) 45%, transparent)',
                textAlign: 'center', letterSpacing: '0.04em',
              }}>{d}</div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 1;
              const isPast = day < 5;
              const isAvail = [9, 10, 12, 16, 17, 19].includes(day);
              const isSel = day === 12;
              return (
                <div key={i} style={{
                  aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11.5, fontFamily: 'Geist Mono',
                  borderRadius: 6,
                  background: isSel ? 'var(--accent)' : isAvail ? 'rgba(255,255,255,0.06)' : 'transparent',
                  color: isSel ? 'var(--ink)' : isPast ? 'color-mix(in oklab, var(--bg) 25%, transparent)' : isAvail ? 'var(--bg)' : 'color-mix(in oklab, var(--bg) 50%, transparent)',
                  border: isSel ? '1px solid var(--accent)' : '1px solid transparent',
                  fontWeight: isSel ? 600 : 400,
                  cursor: isAvail || isSel ? 'pointer' : 'default',
                }}>{day > 0 && day <= 30 ? day : ''}</div>
              );
            })}
          </div>
          <div style={{
            paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', flexDirection: 'column', gap: 6,
          }}>
            <div className="mono" style={{ fontSize: 10.5, color: 'color-mix(in oklab, var(--bg) 50%, transparent)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>
              Thursday · May 14
            </div>
            {['09:30', '11:00', '14:30', '16:00'].map((t, i) => (
              <div key={t} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '8px 12px',
                background: i === 1 ? 'var(--accent)' : 'rgba(255,255,255,0.04)',
                color: i === 1 ? 'var(--ink)' : 'var(--bg)',
                borderRadius: 6,
                fontSize: 13, fontFamily: 'Geist Mono',
                border: '1px solid ' + (i === 1 ? 'var(--accent)' : 'rgba(255,255,255,0.08)'),
                fontWeight: i === 1 ? 600 : 400,
              }}>
                <span>{t}</span>
                {i === 1 && <span style={{ fontSize: 11 }}>selected</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FinalCTA });
