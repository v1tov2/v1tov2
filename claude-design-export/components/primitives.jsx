// Shared primitives: Section, Eyebrow, Button, Pill, Logo, Marker

function Section({ id, children, label, title, kicker, className = '', muted = false, ...props }) {
  return (
    <section id={id} className={className} style={{
      padding: '120px 0',
      borderTop: '1px solid var(--line)',
      background: muted ? 'var(--bg-tint)' : 'transparent',
      position: 'relative',
    }} {...props}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        {(label || title || kicker) && (
          <div style={{ marginBottom: 64, maxWidth: 760 }}>
            {label && <Eyebrow>{label}</Eyebrow>}
            {title && <h2 style={{
              fontSize: 'clamp(34px, 4.2vw, 56px)',
              lineHeight: 1.04,
              letterSpacing: '-0.025em',
              fontWeight: 600,
              margin: '20px 0 0 0',
              color: 'var(--ink)',
            }}>{title}</h2>}
            {kicker && <p style={{
              fontSize: 19, lineHeight: 1.55, color: 'var(--muted)',
              margin: '20px 0 0 0', maxWidth: 620, fontWeight: 400,
            }}>{kicker}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function Eyebrow({ children, dot = true }) {
  return (
    <div className="mono" style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase',
      color: 'var(--muted)', fontWeight: 500,
    }}>
      {dot && <span style={{
        width: 6, height: 6, borderRadius: 999, background: 'var(--accent)',
        boxShadow: '0 0 0 3px color-mix(in oklab, var(--accent) 25%, transparent)',
      }} />}
      <span>{children}</span>
    </div>
  );
}

function Button({ children, variant = 'primary', size = 'md', icon, ...props }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontFamily: 'inherit', fontWeight: 500, letterSpacing: '-0.005em',
    cursor: 'pointer', transition: 'all 140ms ease',
    border: '1px solid transparent', textDecoration: 'none',
    borderRadius: 8,
  };
  const sizes = {
    sm: { padding: '8px 14px', fontSize: 13 },
    md: { padding: '12px 18px', fontSize: 14.5 },
    lg: { padding: '14px 22px', fontSize: 15 },
  };
  const variants = {
    primary: {
      background: 'var(--ink)', color: 'var(--bg)',
      borderColor: 'var(--ink)',
      boxShadow: '0 1px 0 0 rgba(255,255,255,0.08) inset, 0 1px 2px rgba(11,11,10,0.12)',
    },
    accent: {
      background: 'var(--accent)', color: 'var(--ink)',
      borderColor: 'color-mix(in oklab, var(--accent) 60%, var(--ink) 5%)',
      boxShadow: '0 1px 0 0 rgba(255,255,255,0.4) inset, 0 1px 2px rgba(11,11,10,0.06)',
    },
    ghost: {
      background: 'transparent', color: 'var(--ink)',
      borderColor: 'var(--line-2)',
    },
    quiet: {
      background: 'transparent', color: 'var(--muted)',
      borderColor: 'transparent',
    },
  };
  const [hover, setHover] = useState(false);
  const hoverStyle = hover ? (
    variant === 'primary' ? { background: 'var(--ink-2)' } :
    variant === 'accent' ? { transform: 'translateY(-1px)' } :
    variant === 'ghost' ? { borderColor: 'var(--ink)', background: 'var(--card)' } :
    { color: 'var(--ink)' }
  ) : {};
  return (
    <button {...props}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...base, ...sizes[size], ...variants[variant], ...hoverStyle, ...(props.style || {}) }}>
      {children}
      {icon !== false && variant !== 'quiet' && <ArrowRight />}
    </button>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Pill({ children, tone = 'neutral', size = 'sm' }) {
  const tones = {
    neutral: { bg: 'var(--card)', fg: 'var(--ink)', bd: 'var(--line-2)' },
    accent: { bg: 'var(--accent-soft)', fg: 'var(--accent-ink)', bd: 'color-mix(in oklab, var(--accent) 35%, transparent)' },
    warn: { bg: 'var(--warn-soft)', fg: 'oklch(0.45 0.16 30)', bd: 'color-mix(in oklab, var(--warn) 35%, transparent)' },
    ghost: { bg: 'transparent', fg: 'var(--muted)', bd: 'var(--line-2)' },
  };
  const t = tones[tone];
  const sizes = { sm: { fontSize: 11.5, padding: '3px 8px' }, md: { fontSize: 12.5, padding: '4px 10px' } };
  return (
    <span className="mono" style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: t.bg, color: t.fg, border: `1px solid ${t.bd}`,
      borderRadius: 999, lineHeight: 1.3, letterSpacing: '0.02em',
      fontWeight: 500, ...sizes[size],
    }}>{children}</span>
  );
}

function Logo({ size = 22 }) {
  return (
    <a href="#" style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      textDecoration: 'none', color: 'var(--ink)',
    }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="1.25" y="1.25" width="21.5" height="21.5" rx="5" stroke="var(--ink)" strokeWidth="1.5" />
        <path d="M6 8.5L9 15.5L12 9.5" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 15.5C14 13.5 17.5 13 17.5 11C17.5 9.8 16.5 9 15.2 9C14 9 13 9.7 13 11" stroke="var(--accent-ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 15.5H17.8" stroke="var(--accent-ink)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <span style={{ fontWeight: 600, letterSpacing: '-0.015em', fontSize: 16 }}>
        V1<span style={{ color: 'var(--muted-2)', margin: '0 2px' }}>→</span>V2
      </span>
    </a>
  );
}

// Mini chart helpers used across cards
function CornerMark() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" style={{ position: 'absolute' }}>
      <path d="M0 0H4M0 0V4" stroke="var(--line-2)" strokeWidth="1" />
    </svg>
  );
}

function Corners() {
  return (
    <>
      <span style={{ position: 'absolute', top: -1, left: -1 }}><CornerMark /></span>
      <span style={{ position: 'absolute', top: -1, right: -1, transform: 'scaleX(-1)' }}><CornerMark /></span>
      <span style={{ position: 'absolute', bottom: -1, left: -1, transform: 'scaleY(-1)' }}><CornerMark /></span>
      <span style={{ position: 'absolute', bottom: -1, right: -1, transform: 'scale(-1,-1)' }}><CornerMark /></span>
    </>
  );
}

Object.assign(window, { Section, Eyebrow, Button, ArrowRight, Pill, Logo, Corners });
