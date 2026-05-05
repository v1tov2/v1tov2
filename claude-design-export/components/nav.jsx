function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      backdropFilter: 'saturate(140%) blur(10px)',
      WebkitBackdropFilter: 'saturate(140%) blur(10px)',
      background: scrolled ? 'color-mix(in oklab, var(--bg) 78%, transparent)' : 'color-mix(in oklab, var(--bg) 60%, transparent)',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'all 200ms ease',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Logo />
        <nav className="mono nav-links" style={{
          display: 'flex', alignItems: 'center', gap: 28,
          fontSize: 13, color: 'var(--muted)',
        }}>
          <a href="#what-we-build" style={navLink}>What we build</a>
          <a href="#workflows" style={navLink}>Workflows</a>
          <a href="#packages" style={navLink}>Packages</a>
          <a href="#process" style={navLink}>Process</a>
          <a href="#sourcexpress" style={navLink}>Why us</a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Button variant="quiet" size="sm" icon={false}>Sign in</Button>
            <a href="#cta" style={{ textDecoration: 'none' }}><Button variant="primary" size="sm">Book a free V2 Audit</Button></a>
        </div>
      </div>
    </header>
  );
}

const navLink = {
  textDecoration: 'none', color: 'var(--muted)',
  letterSpacing: '0.005em', transition: 'color 120ms',
};

Object.assign(window, { Nav });
