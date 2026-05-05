function SiteFooter() {
  return (
    <footer style={{
      borderTop: '1px solid var(--line)',
      background: 'var(--bg)',
      padding: '64px 0 32px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div className="footer-grid" style={{
          display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48,
          marginBottom: 56, alignItems: 'flex-start',
        }}>
          <div>
            <Logo />
            <p style={{
              fontSize: 14, color: 'var(--muted)', lineHeight: 1.55,
              marginTop: 16, maxWidth: 320,
            }}>
              Operations as a system. Built by an operator who's done it for real.
            </p>
            <div className="mono" style={{
              marginTop: 24, fontSize: 11.5, color: 'var(--muted-2)',
              letterSpacing: '0.04em',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--accent)' }} />
                Available now · Limited build slots
              </div>
            </div>
          </div>
          {[
            { title: 'Product', links: ['What we build', 'Workflows', 'Packages', 'Process'] },
            { title: 'Company', links: ['Why us', 'SourceXpress', 'Engagement model', 'Contact'] },
            { title: 'Connect', links: ['hello@v1tov2.com', 'LinkedIn', 'Book a free Audit', 'Newsletter'] },
          ].map(col => (
            <div key={col.title}>
              <div className="mono" style={{
                fontSize: 11, color: 'var(--muted-2)', letterSpacing: '0.06em',
                textTransform: 'uppercase', marginBottom: 14,
              }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(l => (
                  <a key={l} href="#" style={{
                    fontSize: 13.5, color: 'var(--ink)', textDecoration: 'none',
                  }}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          padding: '24px 0', borderTop: '1px solid var(--line)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div className="mono" style={{ fontSize: 11.5, color: 'var(--muted-2)', letterSpacing: '0.02em' }}>
            © 2026 V1toV2 · Operations as a system
          </div>
          <div className="mono" style={{ fontSize: 11.5, color: 'var(--muted-2)', display: 'flex', gap: 20 }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
            <span>v2.0.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteFooter });
