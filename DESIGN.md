# V1toV2 Design System

## Brand feel
Operator-led, practical, premium, minimal. Inspired by the Claude Design output: warm off-white surfaces, fine borders, mono labels, quiet green accent, and no generic SaaS gradients.

The site should feel like a real operating system / productized service, not a generic agency landing page.

## Layout
- Main content width: `max-w-[1200px]`
- Horizontal padding: `px-5 sm:px-6 md:px-8`
- Sections should align to the same content grid.
- Prefer left-aligned headings.
- Avoid independently centering cards, tables, or panels unless they are intentionally inset.
- If a component is inset, make that decision explicit and keep surrounding text aligned to the main grid.
- Use generous vertical rhythm, but avoid huge empty gaps between adjacent sections.
- Mobile layouts should prioritize readability and avoid horizontal overflow.

## Background rhythm
Use subtle alternation so sections do not blend together.

Recommended surfaces:
- Warm off-white: `#F5F4EF`
- Light warm white: `#FAFAF7`
- Card/panel surface: `#FDFCF7`
- Dark CTA section: near black / zinc-950

Avoid stacking too many sections with the exact same background color. Use subtle top/bottom borders when needed:
- `border-zinc-200/70`
- `border-zinc-300/70`
- dark mode: `border-zinc-800`

## Colors
- Primary text: near black / `zinc-950`
- Body text: `zinc-700`
- Muted text: `zinc-500` / `zinc-600`
- Main warm background: `#F5F4EF`
- Light warm background: `#FAFAF7`
- Card surface: `#FDFCF7`
- Green accent: `oklch(0.86 0.22 142)`
- Borders: `zinc-200/70`, `zinc-300/70`

Avoid default blue / sky colors unless there is a deliberate reason.

## Typography
- Headlines should be strong, tight, and editorial.
- Use mono uppercase labels for eyebrows.
- Eyebrows usually use a small green dot.
- Avoid blue eyebrows.
- Keep line lengths readable.
- Use real typographic punctuation:
  - `’`
  - `—`
  - `–`
  - `→`
  - `·`
- Do not use escaped unicode like `\u2019`, `\u2014`, `\u2192`, or `\u00b7`.

## Components
- Cards: warm surfaces, fine borders, subtle or no shadows.
- Avoid heavy gradients and generic SaaS-looking glow effects.
- Buttons:
  - Primary: black background, white text.
  - Secondary: light background, fine border.
  - Green: only for key action highlights or system accent states.
- Tables/panels:
  - Warm header bands.
  - Fine dividers.
  - Rounded corners around `12px` to `14px`.
- Mobile:
  - Avoid drag-only interactions.
  - Use toggles/tabs where needed.
  - Buttons should be comfortable height and full-width when appropriate.

## Section-specific notes
### Hero
- Desktop can use the V1→V2 drag/split mockup.
- Mobile should use V1 Today / V2 After toggle instead of drag-only.
- Keep CTA buttons large and comfortable on mobile.
- Keep “Now booking” and “Operator-led · Est. 2025” style details.

### V1 vs V2
- Warm background.
- Table should align with the hero content grid.
- Toggle should work without shifting the layout.

### Pain points
- Use mosaic/table-style grid.
- Copy should feel specific and grounded.
- Bottom audit strip should be compact and clear.

### What we build
- Lighter background with warm cards.
- Heading: “We don’t advise. We ship.”
- Keep system-spec feel, not feature-carousel feel.

### Example workflows
- Warm background.
- System panel with tabs, workflow run, outcome column.
- Avoid detached/random buttons.

### Packages
- Pricing cards may be intentionally inset.
- Audit strip and pricing note should align with main section width unless intentionally changed.
- V2 Operate price is currently `from HKD 3,000/month`.

### SourceXpress proof
- Use SourceXpress as proof of operator-led experience.
- Keep SXP icon.
- Keep operations mockup readable and illustrative.

### Final CTA
- Dark section.
- Right panel can be an audit snapshot instead of a fake calendar.
- Keep primary CTA and email fallback clear.

## Copy tone
Practical, direct, operator-led.

Avoid:
- vague agency promises
- hype-heavy AI language
- “digital transformation” clichés
- broad strategy-only positioning

Prefer:
- “we build”
- “we ship”
- “fixed scope”
- “operator-led”
- “day-2 maintainability”
- “real operations”
- “less manual chasing”
- “clear ownership”

## Guardrails for future Cursor edits
Before changing any visual section, check this file first.
If a change introduces:
- blue accents,
- generic SaaS gradients,
- arbitrary centering,
- escaped unicode,
- or inconsistent widths,

pause and align it back to this guide.
