function Workflows() {
  const flows = [
    {
      id: 'order',
      name: 'Order intake → quote → invoice → payment',
      industry: 'Resellers / B2B / SMEs',
      outcome: 'No more chasing orders across chat threads',
      steps: [
        { kind: 'trigger', label: 'Order request received', sub: 'from chat, email, or web form' },
        { kind: 'check', label: 'Quote generated', sub: 'pricing pulled from one source of truth' },
        { kind: 'action', label: 'Order recorded', sub: 'logged in your operating system' },
        { kind: 'action', label: 'Invoice issued', sub: 'with payment link, automatically' },
        { kind: 'check', label: 'Payment tracked', sub: 'paid / overdue visible to whole team' },
        { kind: 'notify', label: 'Customer kept informed', sub: 'status updates without chasing' },
      ],
    },
    {
      id: 'lead',
      name: 'Lead inquiry → qualification → follow-up → CRM',
      industry: 'Service businesses / Operators',
      outcome: 'Every lead followed up. Nothing slips through.',
      steps: [
        { kind: 'trigger', label: 'New inquiry arrives', sub: 'web form, email, or referral' },
        { kind: 'check', label: 'Qualification check', sub: 'fit against your criteria' },
        { kind: 'action', label: 'Owner assigned', sub: 'routed to the right person' },
        { kind: 'action', label: 'Follow-up scheduled', sub: 'reminders so nothing goes cold' },
        { kind: 'notify', label: 'CRM kept current', sub: 'context captured automatically' },
      ],
    },
    {
      id: 'task',
      name: 'Customer request → internal task → owner → status',
      industry: 'Operations / Support',
      outcome: 'Clear ownership. No more “who’s on this?”',
      steps: [
        { kind: 'trigger', label: 'Customer request received', sub: 'from any channel' },
        { kind: 'check', label: 'Categorised', sub: 'invoice, support, change, refund' },
        { kind: 'action', label: 'Internal task created', sub: 'with all context attached' },
        { kind: 'action', label: 'Owner assigned', sub: 'by rule or rotation' },
        { kind: 'notify', label: 'Status visible end-to-end', sub: 'team and customer both see it' },
      ],
    },
    {
      id: 'supplier',
      name: 'Supplier order → reconciliation → shipment & payment',
      industry: 'Logistics / Sourcing',
      outcome: 'Suppliers, payments, and shipments in one ledger',
      steps: [
        { kind: 'trigger', label: 'Supplier order placed', sub: 'manual or auto on stock trigger' },
        { kind: 'action', label: 'Records pulled together', sub: 'orders, invoices, shipping docs' },
        { kind: 'check', label: 'Reconciled to your books', sub: 'mismatches flagged early' },
        { kind: 'action', label: 'Shipment status tracked', sub: 'one place, not five tabs' },
        { kind: 'notify', label: 'Payment status synced', sub: 'finance and ops stay aligned' },
      ],
    },
  ];
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [step, setStep] = useState(0);
  const flow = flows[active];

  useEffect(() => {
    if (!playing) return;
    const i = setInterval(() => {
      setStep(s => (s + 1) % (flow.steps.length + 1));
    }, 1100);
    return () => clearInterval(i);
  }, [playing, flow.steps.length]);

  useEffect(() => { setStep(0); }, [active]);

  return (
    <Section
      id="workflows"
      label="Example workflows"
      title="The kinds of operations we build into systems."
      kicker="Patterns we keep building because they keep working — always shaped to your business, your edge cases, your team. The outcome is the same: fewer manual hours, clearer ownership, faster turnaround."
      muted
    >
      <div style={{
        border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)',
        background: 'var(--card)', overflow: 'hidden',
      }}>
        {/* Tabs */}
        <div className="workflow-tabs" style={{
          display: 'flex', borderBottom: '1px solid var(--line)',
          background: 'var(--bg-tint)', overflow: 'auto',
        }}>
          {flows.map((f, i) => (
            <button key={f.id} onClick={() => setActive(i)}
              className="mono"
              style={{
                flex: 1, padding: '14px 18px', textAlign: 'left',
                background: active === i ? 'var(--card)' : 'transparent',
                border: 'none', borderRight: i < flows.length - 1 ? '1px solid var(--line)' : 'none',
                borderBottom: active === i ? '1px solid var(--card)' : '1px solid var(--line)',
                marginBottom: -1,
                cursor: 'pointer',
                fontSize: 12, color: active === i ? 'var(--ink)' : 'var(--muted)',
                fontWeight: 500, letterSpacing: '0.02em',
                display: 'flex', flexDirection: 'column', gap: 4,
                position: 'relative',
              }}>
              <span style={{ fontSize: 10.5, color: 'var(--muted-2)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {f.industry}
              </span>
              <span style={{ fontSize: 13.5 }}>{f.name}</span>
              {active === i && <span style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: 'var(--accent)',
              }} />}
            </button>
          ))}
        </div>

        {/* Player */}
        <div className="workflow-player" style={{
          display: 'grid', gridTemplateColumns: '1fr 320px', minHeight: 460,
        }}>
          {/* Stage */}
          <div style={{
            padding: '32px 40px', position: 'relative',
            borderRight: '1px solid var(--line)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <Eyebrow>Workflow run · live</Eyebrow>
              <button
                onClick={() => setPlaying(p => !p)}
                className="mono"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: 11, padding: '5px 10px',
                  border: '1px solid var(--line-2)', borderRadius: 999,
                  background: 'var(--card)', cursor: 'pointer',
                  color: 'var(--muted)', letterSpacing: '0.04em',
                }}>
                {playing ? <PauseI /> : <PlayI />} {playing ? 'pause' : 'play'}
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {flow.steps.map((s, i) => {
                const done = i < step;
                const live = i === step;
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'stretch', gap: 16 }}>
                    {/* Rail */}
                    <div style={{ width: 28, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{
                        width: 26, height: 26, borderRadius: 999,
                        background: done ? 'var(--accent)' : live ? 'var(--ink)' : 'var(--card)',
                        border: '1px solid ' + (done ? 'var(--accent)' : live ? 'var(--ink)' : 'var(--line-2)'),
                        color: done ? 'var(--ink)' : live ? 'var(--bg)' : 'var(--muted-2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 12, fontWeight: 600, transition: 'all 250ms',
                        boxShadow: live ? '0 0 0 6px color-mix(in oklab, var(--ink) 12%, transparent)' : 'none',
                      }}>
                        {done ? <CheckI /> : <span>{i + 1}</span>}
                      </div>
                      {i < flow.steps.length - 1 && (
                        <div style={{
                          flex: 1, width: 1, marginTop: 4, marginBottom: 4,
                          background: i < step ? 'var(--accent)' : 'var(--line-2)',
                          transition: 'background 250ms',
                        }} />
                      )}
                    </div>
                    {/* Content */}
                    <div style={{
                      flex: 1, padding: '4px 0 24px',
                      opacity: !done && !live && step > 0 && i > step ? 0.6 : 1,
                      transition: 'opacity 250ms',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                        <Pill tone={s.kind === 'ai' ? 'accent' : 'ghost'} size="sm">
                          {s.kind === 'trigger' ? 'TRIGGER' : s.kind === 'ai' ? 'AI' : s.kind === 'check' ? 'CHECK' : s.kind === 'action' ? 'ACTION' : 'NOTIFY'}
                        </Pill>
                        <span style={{ fontSize: 14.5, fontWeight: 500 }}>{s.label}</span>
                      </div>
                      <div className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>
                        {s.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Side stats */}
          <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div>
              <div className="mono" style={{ fontSize: 10.5, color: 'var(--muted-2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Outcome</div>
              <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.018em', lineHeight: 1.2 }}>{flow.outcome}</div>
            </div>
            <div style={{ paddingTop: 24, borderTop: '1px dashed var(--line-2)' }}>
              <div className="mono" style={{ fontSize: 10.5, color: 'var(--muted-2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>What you typically gain</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: 'var(--ink)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--accent)' }} /> Fewer manual hours each week</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--accent)' }} /> Faster, more predictable turnaround</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--accent)' }} /> Less founder / key-person dependency</div>
              </div>
            </div>
            <div style={{ paddingTop: 24, borderTop: '1px dashed var(--line-2)' }}>
              <div className="mono" style={{ fontSize: 10.5, color: 'var(--muted-2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Build time</div>
              <div style={{ fontSize: 18, fontWeight: 500 }}>2–4 weeks</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>fixed scope, fixed price</div>
            </div>
            <div style={{ marginTop: 'auto' }}>
              <a href="#what-we-build" style={{ textDecoration: 'none' }}><Button variant="ghost" size="sm">See more workflows</Button></a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function PlayI() { return <svg width="9" height="9" viewBox="0 0 9 9"><path d="M2 1.5L7 4.5L2 7.5z" fill="currentColor" /></svg>; }
function PauseI() { return <svg width="9" height="9" viewBox="0 0 9 9"><rect x="2" y="1.5" width="2" height="6" fill="currentColor"/><rect x="5.5" y="1.5" width="2" height="6" fill="currentColor"/></svg>; }
function CheckI() { return <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5L4.5 8L9 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>; }

Object.assign(window, { Workflows });
