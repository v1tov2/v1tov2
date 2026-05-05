function Hero() {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      borderBottom: '1px solid var(--line)',
    }}>
      <div className="grid-bg" style={{
        position: 'absolute', inset: 0, opacity: 0.55,
        maskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)',
      }} />
      <div className="hero-wrap" style={{
        position: 'relative', maxWidth: 1200, margin: '0 auto',
        padding: '88px 32px 24px',
      }}>
        <div className="hero-status" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 56, gap: 16, flexWrap: 'wrap' }}>
          <Pill tone="neutral">
            <span style={{
              width: 6, height: 6, borderRadius: 999, background: 'var(--accent)',
              boxShadow: '0 0 0 3px color-mix(in oklab, var(--accent) 30%, transparent)',
            }} />
            Now booking \u00b7 Limited build slots available
          </Pill>
          <div className="mono" style={{ fontSize: 12, color: 'var(--muted-2)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Operator-led \u00b7 est. 2024
          </div>
        </div>

        <h1 className="hero-h1" style={{
          fontSize: 'clamp(36px, 6.6vw, 92px)',
          lineHeight: 0.98,
          letterSpacing: '-0.035em',
          fontWeight: 600,
          margin: 0,
          maxWidth: 1140,
          color: 'var(--ink)',
        }}>
          From manual operations
          <br />to scalable systems.{' '}
          <span style={{ color: 'var(--muted-2)' }}>
            We build your <span style={{
              color: 'var(--ink)',
              background: 'linear-gradient(180deg, transparent 62%, color-mix(in oklab, var(--accent) 75%, transparent) 62%, color-mix(in oklab, var(--accent) 75%, transparent) 92%, transparent 92%)',
              padding: '0 4px',
            }}>V2</span>.
          </span>
        </h1>

        <div className="hero-sub" style={{
          marginTop: 36, display: 'grid', gridTemplateColumns: '1.15fr 1fr',
          gap: 64, alignItems: 'start',
        }}>
          <p style={{
            fontSize: 19, lineHeight: 1.55, color: 'var(--muted)',
            margin: 0, maxWidth: 580, fontWeight: 400,
          }}>
            V1toV2 is a build partner for businesses stuck in manual processes,
            fragmented tools, and spreadsheet-heavy workflows. We design and ship
            the internal tools, automations, and operating systems that let you
            scale \u2014 without adding more headcount or chasing things across tabs.{' '}
            <span style={{ color: 'var(--ink)' }}>Built by an operator who\u2019s done it for real.</span>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, paddingTop: 4 }}>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="#cta" style={{ textDecoration: 'none' }}><Button variant="primary" size="lg">Book a free V2 Audit</Button></a>
              <a href="#workflows" style={{ textDecoration: 'none' }}><Button variant="ghost" size="lg">See example workflows</Button></a>
            </div>
            <div className="mono" style={{ fontSize: 12, color: 'var(--muted-2)', letterSpacing: '0.02em' }}>
              Free 30-min call \u00b7 no pitch \u00b7 no obligation
            </div>
          </div>
        </div>

        <SplitPanel />

        <div className="hero-signal" style={{
          marginTop: 28, paddingTop: 28, borderTop: '1px dashed var(--line-2)',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
        }}>
          {[
            ['Built for', 'SMEs, resellers, service businesses & operators'],
            ['Built around', 'Internal tools, automation & workflow redesign'],
            ['Proof of work', 'SourceXpress \u2014 a real cross-border operation'],
            ['Engagement', 'Fixed-scope builds \u00b7 operator-led \u00b7 day-2 ready'],
          ].map(([k, v], i) => (
            <div key={i} className="hero-signal-cell" style={{
              padding: '4px 20px',
              borderLeft: i === 0 ? 'none' : '1px solid var(--line)',
            }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted-2)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>{k}</div>
              <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.4 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SplitPanel() {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const drag = useRef(false);

  useEffect(() => {
    const onMove = (e) => {
      if (!drag.current || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const p = Math.max(8, Math.min(92, (x / rect.width) * 100));
      setPos(p);
    };
    const onUp = () => { drag.current = false; document.body.style.cursor = ''; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  return (
    <div className="split-panel" style={{ marginTop: 64, position: 'relative' }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 14, gap: 12, flexWrap: 'wrap',
      }}>
        <Eyebrow>Drag to transform \u00b7 V1 \u2192 V2</Eyebrow>
        <div className="mono" style={{ fontSize: 11.5, color: 'var(--muted-2)', display: 'flex', gap: 16 }}>
          <span>SAME OPS</span>
          <span style={{ color: 'var(--line-2)' }}>\u00b7</span>
          <span>DIFFERENT SYSTEM</span>
        </div>
      </div>

      <div ref={ref} className="split-stage" style={{
        position: 'relative', height: 460, borderRadius: 'var(--radius-lg)',
        overflow: 'hidden', border: '1px solid var(--line-2)',
        background: 'var(--card)',
        boxShadow: '0 1px 0 rgba(11,11,10,0.04), 0 30px 60px -30px rgba(11,11,10,0.18)',
        userSelect: 'none', cursor: drag.current ? 'ew-resize' : 'default',
      }}>
        <V2Surface />
        <div style={{
          position: 'absolute', inset: 0,
          clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`,
        }}>
          <V1Surface />
        </div>
        <div style={{
          position: 'absolute', top: 0, bottom: 0, left: `${pos}%`,
          width: 1, background: 'var(--ink)', transform: 'translateX(-0.5px)',
          pointerEvents: 'none',
        }} />
        <div
          onMouseDown={(e) => { drag.current = true; document.body.style.cursor = 'ew-resize'; e.preventDefault(); }}
          onTouchStart={() => { drag.current = true; }}
          style={{
            position: 'absolute', top: '50%', left: `${pos}%`,
            transform: 'translate(-50%, -50%)',
            width: 44, height: 44, borderRadius: 999,
            background: 'var(--ink)', color: 'var(--bg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'ew-resize', boxShadow: '0 6px 20px rgba(11,11,10,0.25)',
            zIndex: 5,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 4L2 8l3 4M11 4l3 4-3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div style={{ position: 'absolute', top: 16, left: 16, zIndex: 4 }}>
          <Pill tone="warn">V1 \u00b7 Today</Pill>
        </div>
        <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 4 }}>
          <Pill tone="accent">V2 \u00b7 After</Pill>
        </div>
      </div>
    </div>
  );
}

function V1Surface() {
  // Mixed manual chaos: email, spreadsheet, sticky notes, generic chat, checklist
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(180deg, #F6F4EE 0%, #EFEDE5 100%)',
    }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.6,
        backgroundImage: 'linear-gradient(rgba(11,11,10,0.05) 1px, transparent 1px)',
        backgroundSize: '100% 22px',
      }} />

      {/* Email window */}
      <div style={{
        position: 'absolute', top: 28, left: 24, width: 246,
        background: '#fff', border: '1px solid #ddd', borderRadius: 6,
        boxShadow: '0 8px 22px rgba(11,11,10,0.08)',
        transform: 'rotate(-1deg)',
        fontSize: 11.5, color: '#333',
      }}>
        <div style={{ background: '#F2F2EC', padding: '6px 10px', borderBottom: '1px solid #e5e5dd', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: '#E96A5A' }} />
          <span style={{ width: 7, height: 7, borderRadius: 999, background: '#E0B341' }} />
          <span style={{ width: 7, height: 7, borderRadius: 999, background: '#9CC36B' }} />
          <span className="mono" style={{ fontSize: 10, color: '#888', marginLeft: 6 }}>inbox \u00b7 47 unread</span>
        </div>
        <div style={{ padding: '10px 12px', borderBottom: '1px solid #f0f0e8' }}>
          <div style={{ fontSize: 10.5, color: '#888' }}>From: trinity.co</div>
          <div style={{ fontWeight: 600, fontSize: 12, marginTop: 2 }}>Can you quote this?</div>
          <div style={{ color: '#666', marginTop: 3, fontSize: 11 }}>Hi \u2014 need a price on the attached list ASAP, customer waiting.</div>
        </div>
        <div style={{ padding: '10px 12px', borderBottom: '1px solid #f0f0e8' }}>
          <div style={{ fontSize: 10.5, color: '#888' }}>From: kld.holdings</div>
          <div style={{ fontWeight: 600, fontSize: 12, marginTop: 2 }}>RE: RE: RE: invoice 8823</div>
          <div style={{ color: '#666', marginTop: 3, fontSize: 11 }}>Following up again \u2014 still haven\u2019t received\u2026</div>
        </div>
        <div style={{ padding: '10px 12px' }}>
          <div style={{ fontSize: 10.5, color: '#888' }}>From: aria.foods</div>
          <div style={{ fontWeight: 600, fontSize: 12, marginTop: 2 }}>where are we on the order?</div>
        </div>
      </div>

      {/* Spreadsheet block */}
      <div style={{
        position: 'absolute', top: 36, right: 30, width: 320,
        background: '#fff', border: '1px solid #ddd', borderRadius: 4,
        fontFamily: 'Geist Mono, monospace', fontSize: 10.5, color: '#333',
        boxShadow: '0 8px 24px rgba(11,11,10,0.06)',
        transform: 'rotate(-1.5deg)',
      }}>
        <div style={{ background: '#E8F0E2', padding: '4px 8px', borderBottom: '1px solid #ccc', fontSize: 10, color: '#456' }}>orders_FINAL_v7_USE_THIS.xlsx</div>
        {[
          ['#', 'CUSTOMER', 'STATUS', 'AMT'],
          ['8821', 'Trinity Co.', 'pending?', '$4,200'],
          ['8822', 'B&M Resel.', 'shipped', '$1,380'],
          ['8823', 'KLD Hold.', '\u2014', ''],
          ['8824', 'Trinity Co.', 'pending?', '$2,100'],
          ['8825', 'Aria Foods', 'paid?', ''],
          ['8826', '???', '', ''],
        ].map((row, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '40px 1fr 80px 60px',
            padding: '3px 8px', borderBottom: '1px solid #eee',
            background: i === 0 ? '#fafafa' : '#fff',
            color: i === 0 ? '#888' : (row[2].includes('?') || row[2] === '\u2014' || row[2] === '') ? '#c44' : '#333',
            fontWeight: i === 0 ? 600 : 400,
          }}>
            {row.map((c, j) => <div key={j} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c}</div>)}
          </div>
        ))}
      </div>

      {/* Generic chat bubbles (no green branding) */}
      <div style={{ position: 'absolute', top: 256, left: 30, width: 220 }}>
        <div className="mono" style={{ fontSize: 9.5, color: 'var(--muted-2)', marginBottom: 4, letterSpacing: '0.06em' }}>OPS DM</div>
        {[
          ['Liza', 'sent the file to Ben, no reply'],
          ['Ben', 'who has the supplier login again'],
        ].map(([who, msg], i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: 8, padding: '5px 9px',
            marginBottom: 5, fontSize: 11.5, color: '#222',
            boxShadow: '0 1px 2px rgba(11,11,10,0.06)',
            transform: `rotate(${(i % 2 ? -0.4 : 0.5)}deg)`,
            border: '1px solid #ececdf',
          }}>
            <span style={{ color: '#666', fontWeight: 600 }}>{who}: </span>{msg}
          </div>
        ))}
      </div>

      {/* Sticky notes */}
      <div style={{
        position: 'absolute', bottom: 32, left: 60, width: 124, height: 100,
        background: '#FCEC8A', padding: 11, fontSize: 11, color: '#3a2f00',
        transform: 'rotate(-3deg)', boxShadow: '0 8px 18px rgba(11,11,10,0.12)',
        fontFamily: 'Geist',
      }}>
        <div style={{ fontWeight: 600, marginBottom: 5 }}>chase Mark</div>
        <div>- supplier list</div>
        <div>- chase invoice 8823</div>
        <div>- pay Liza\u2019s expense</div>
      </div>

      {/* Manual checklist */}
      <div style={{
        position: 'absolute', bottom: 28, left: 200, width: 168,
        background: '#fff', padding: '10px 12px', fontSize: 11, color: '#333',
        transform: 'rotate(1.4deg)', boxShadow: '0 8px 18px rgba(11,11,10,0.1)',
        border: '1px solid #e5e5dd',
      }}>
        <div className="mono" style={{ fontSize: 9.5, color: '#888', letterSpacing: '0.06em', marginBottom: 6 }}>TODO \u00b7 today</div>
        {[
          ['x', 'reply to Trinity quote'],
          ['x', 'call Aria back'],
          ['', 'find pricing sheet'],
          ['', 'invoice KLD'],
          ['', 'who paid 8825??'],
        ].map(([d, t], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 3 }}>
            <span style={{
              width: 11, height: 11, border: '1px solid #999', borderRadius: 2,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 9, color: '#333', background: d ? '#f4f4ee' : '#fff',
            }}>{d}</span>
            <span style={{ textDecoration: d ? 'line-through' : 'none', color: d ? '#999' : '#333' }}>{t}</span>
          </div>
        ))}
      </div>

      {/* Urgent note */}
      <div style={{
        position: 'absolute', bottom: 38, right: 50, width: 140,
        background: '#FFC2C2', padding: 10, fontSize: 11, color: '#5a1a1a',
        transform: 'rotate(2.4deg)', boxShadow: '0 8px 18px rgba(11,11,10,0.12)',
      }}>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>URGENT</div>
        <div>find pricing sheet \u2014 Mark has it on his laptop??</div>
      </div>

      <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} viewBox="0 0 800 460" preserveAspectRatio="none">
        <path d="M 280 160 Q 340 130 400 180" stroke="#c44" strokeWidth="1.5" fill="none" strokeDasharray="3 3"/>
        <path d="M 200 320 Q 260 350 340 310" stroke="#c44" strokeWidth="1.5" fill="none" strokeDasharray="3 3"/>
      </svg>

      <div className="mono" style={{
        position: 'absolute', bottom: 12, left: 16,
        fontSize: 10.5, color: 'oklch(0.45 0.12 30)', letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}>
        ops_runs_on_vibes \u00b7 last edit: 14m ago by 4 people
      </div>
    </div>
  );
}

function V2Surface() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setTick(t => t + 1), 1800);
    return () => clearInterval(i);
  }, []);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F8F4 100%)',
      padding: 24,
      display: 'grid', gridTemplateColumns: '180px 1fr 240px', gap: 16,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div className="mono" style={{ fontSize: 10.5, color: 'var(--muted-2)', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0 8px', marginBottom: 8 }}>Operations OS</div>
        {['Inbox', 'Orders', 'Shipments', 'Suppliers', 'Payments', 'Workflows', 'Reports'].map((l, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '6px 8px', borderRadius: 6,
            background: i === 1 ? 'color-mix(in oklab, var(--accent) 22%, transparent)' : 'transparent',
            color: 'var(--ink)', fontSize: 12.5, fontWeight: i === 1 ? 500 : 400,
          }}>
            <span style={{
              width: 12, height: 12, borderRadius: 3,
              background: i === 1 ? 'var(--ink)' : 'transparent',
              border: i === 1 ? 'none' : '1px solid var(--line-2)',
            }} />
            {l}
            {i === 0 && <span className="mono" style={{ marginLeft: 'auto', fontSize: 10, color: 'var(--muted-2)' }}>3</span>}
          </div>
        ))}
        <div style={{ flex: 1 }} />
        <div style={{
          fontSize: 11, color: 'var(--muted)', padding: '8px',
          borderTop: '1px solid var(--line)', marginTop: 8,
        }}>
          <div className="mono" style={{ fontSize: 10, color: 'var(--muted-2)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>Health</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--accent)' }} />
            <span>All systems normal</span>
          </div>
        </div>
      </div>

      <div style={{
        background: 'var(--card)', border: '1px solid var(--line)',
        borderRadius: 10, overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 16px', borderBottom: '1px solid var(--line)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 500 }}>Active orders</span>
            <Pill tone="ghost" size="sm">14 today</Pill>
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted-2)' }}>auto-synced \u00b7 12s ago</div>
        </div>
        <div>
          {[
            ['#8826', 'Aria Foods', 'PAID', 'In transit', '$2,140', 'accent'],
            ['#8825', 'Trinity Co.', 'PAID', 'Picking', '$4,200', 'accent'],
            ['#8824', 'B&M Resellers', 'PAID', 'Delivered', '$1,380', 'accent'],
            ['#8823', 'KLD Holdings', 'INVOICED', 'Awaiting', '$960', 'neutral'],
            ['#8822', 'Trinity Co.', 'PAID', 'Delivered', '$2,100', 'accent'],
          ].map((r, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '70px 1fr 80px 100px 70px',
              padding: '10px 16px', alignItems: 'center',
              borderBottom: i < 4 ? '1px solid var(--line)' : 'none',
              fontSize: 12.5,
            }}>
              <div className="mono" style={{ color: 'var(--muted)' }}>{r[0]}</div>
              <div style={{ color: 'var(--ink)' }}>{r[1]}</div>
              <div><Pill tone={r[5]} size="sm">{r[2]}</Pill></div>
              <div style={{ color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{
                  width: 5, height: 5, borderRadius: 999,
                  background: r[3] === 'In transit' ? 'var(--accent)' : r[3] === 'Awaiting' ? 'var(--warn)' : 'var(--muted-2)',
                }} />
                {r[3]}
              </div>
              <div className="mono" style={{ color: 'var(--ink)', textAlign: 'right' }}>{r[4]}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{
          background: 'var(--card)', border: '1px solid var(--line)',
          borderRadius: 10, padding: 14,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span className="mono" style={{ fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted-2)' }}>Workflow \u00b7 running</span>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--accent)', boxShadow: '0 0 0 3px color-mix(in oklab, var(--accent) 25%, transparent)' }} />
          </div>
          <div style={{ fontSize: 12.5, fontWeight: 500, marginBottom: 12 }}>order \u2192 invoice \u2192 ship</div>
          {['New PO received', 'Validate inventory', 'Generate invoice', 'Notify ops + customer'].map((s, i) => {
            const done = i <= (tick % 4);
            return (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '5px 0', fontSize: 12,
                color: done ? 'var(--ink)' : 'var(--muted-2)',
                transition: 'color 300ms',
              }}>
                <span style={{
                  width: 14, height: 14, borderRadius: 999,
                  border: '1px solid ' + (done ? 'var(--accent)' : 'var(--line-2)'),
                  background: done ? 'var(--accent)' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 300ms',
                }}>
                  {done && <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1.5 4l1.5 1.5L6.5 2" stroke="var(--ink)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </span>
                {s}
              </div>
            );
          })}
        </div>

        <div style={{
          background: 'var(--card)', border: '1px solid var(--line)',
          borderRadius: 10, padding: 14,
        }}>
          <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: 10 }}>Manual hours saved</div>
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em' }}>
            42<span style={{ color: 'var(--muted-2)', fontSize: 16, fontWeight: 400 }}>hr / wk</span>
          </div>
          <Sparkline />
        </div>
      </div>
    </div>
  );
}

function Sparkline() {
  const pts = [10, 14, 12, 18, 22, 19, 28, 31, 36, 34, 41, 42];
  const w = 180, h = 36;
  const max = Math.max(...pts), min = Math.min(...pts);
  const path = pts.map((p, i) => {
    const x = (i / (pts.length - 1)) * w;
    const y = h - ((p - min) / (max - min)) * (h - 4) - 2;
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');
  return (
    <svg width={w} height={h} style={{ marginTop: 6, display: 'block' }}>
      <path d={`${path} L ${w} ${h} L 0 ${h} Z`} fill="color-mix(in oklab, var(--accent) 25%, transparent)" />
      <path d={path} stroke="var(--ink)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

Object.assign(window, { Hero });
