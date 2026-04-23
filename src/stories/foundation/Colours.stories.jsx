export default {
  title: 'Foundation/Colours',
  parameters: { layout: 'fullscreen' },
};

// All semantic tokens grouped by role
const TOKEN_GROUPS = [
  {
    name: 'Surfaces',
    description: 'Page, card and overlay backgrounds',
    tokens: [
      { label: 'Background',       bg: '--background',  fg: '--foreground' },
      { label: 'Card',             bg: '--card',         fg: '--card-foreground' },
      { label: 'Popover',          bg: '--popover',      fg: '--popover-foreground' },
    ],
  },
  {
    name: 'Brand',
    description: 'Interactive and emphasis colours',
    tokens: [
      { label: 'Primary',   bg: '--primary',   fg: '--primary-foreground' },
      { label: 'Secondary', bg: '--secondary', fg: '--secondary-foreground' },
      { label: 'Muted',     bg: '--muted',     fg: '--muted-foreground' },
      { label: 'Accent',    bg: '--accent',    fg: '--accent-foreground' },
    ],
  },
  {
    name: 'Feedback',
    description: 'Status and validation colours',
    tokens: [
      { label: 'Destructive', bg: '--destructive', fg: '--destructive-foreground' },
    ],
  },
  {
    name: 'Structural',
    description: 'Borders, inputs and focus rings',
    tokens: [
      { label: 'Border', bg: '--border', fg: '--foreground', mono: true },
      { label: 'Input',  bg: '--input',  fg: '--foreground', mono: true },
      { label: 'Ring',   bg: '--ring',   fg: '--foreground', mono: true },
    ],
  },
];

function getCSSVar(name) {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function SwatchCard({ label, bg, fg, mono }) {
  const bgVal = getCSSVar(bg);
  const fgVal = getCSSVar(fg);

  return (
    <div className="rounded-xl border border-border overflow-hidden shadow-sm">
      {/* Swatch */}
      <div
        className="h-20 w-full flex items-end p-3"
        style={{ background: `hsl(${bgVal})`, color: `hsl(${fgVal})` }}
      >
        {mono && (
          <div className="w-full h-3 rounded-full" style={{ background: `hsl(${fgVal})`, opacity: 0.25 }} />
        )}
      </div>
      {/* Info */}
      <div className="bg-card p-3 space-y-1">
        <p className="text-sm font-semibold text-card-foreground">{label}</p>
        <p className="text-xs font-mono text-muted-foreground">{bg}</p>
        <p className="text-xs font-mono text-muted-foreground/60 truncate">{bgVal || '—'}</p>
      </div>
    </div>
  );
}

function TokenGroup({ group }) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground">{group.name}</h2>
        <p className="text-sm text-muted-foreground">{group.description}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {group.tokens.map((t) => (
          <SwatchCard key={t.bg} {...t} />
        ))}
      </div>
    </section>
  );
}

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="bg-background min-h-screen p-8 space-y-12">
      {/* Page header */}
      <div className="space-y-2 border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Foundation</p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Colours</h1>
        <p className="text-muted-foreground max-w-xl mt-2">
          Semantic colour tokens that adapt to the active theme and dark mode.
          All values are raw HSL channels consumed by Tailwind as{' '}
          <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">hsl(var(--token))</code>.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-primary" />
          <span>Background colour</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border border-border bg-card" />
          <span>Foreground / on-colour text</span>
        </div>
      </div>

      {TOKEN_GROUPS.map((g) => (
        <TokenGroup key={g.name} group={g} />
      ))}
    </div>
  ),
};
