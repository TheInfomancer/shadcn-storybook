import { colorThemes } from '../../themes/themes';

export default {
  title: 'Foundation/Themes',
  parameters: { layout: 'fullscreen' },
};

const TOKEN_LABELS = {
  '--primary':              'Primary',
  '--primary-foreground':   'Primary FG',
  '--secondary':            'Secondary',
  '--secondary-foreground': 'Secondary FG',
  '--accent':               'Accent',
  '--accent-foreground':    'Accent FG',
  '--ring':                 'Ring',
};

function ThemeCard({ themeKey, theme }) {
  const primary = theme.vars['--primary'];
  const secondary = theme.vars['--secondary'];
  const accent = theme.vars['--accent'];

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Colour bar */}
      <div className="flex h-12">
        <div className="flex-1" style={{ background: `hsl(${primary})` }} />
        <div className="flex-1" style={{ background: `hsl(${secondary})` }} />
        <div className="flex-1" style={{ background: `hsl(${accent})` }} />
      </div>

      <div className="p-5 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="font-semibold text-card-foreground">{theme.label}</span>
          <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded-md">{themeKey}</span>
        </div>

        {/* Token list */}
        <div className="space-y-2">
          {Object.entries(theme.vars).map(([token, value]) => (
            <div key={token} className="flex items-center gap-2.5">
              <div
                className="w-5 h-5 rounded-full border border-border shrink-0 shadow-sm"
                style={{ background: `hsl(${value})` }}
              />
              <span className="text-xs font-mono text-muted-foreground flex-1 truncate">{TOKEN_LABELS[token] ?? token}</span>
              <span className="text-xs font-mono text-muted-foreground/60 truncate max-w-[120px]">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="bg-background min-h-screen p-8 space-y-10">
      {/* Page header */}
      <div className="space-y-2 border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Foundation</p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Themes</h1>
        <p className="text-muted-foreground max-w-xl mt-2">
          Color themes override the semantic CSS custom properties used by every shadcn/ui component.
          Switch themes live using the <strong className="text-foreground">Theme</strong> toolbar control above.
        </p>
      </div>

      {/* How it works */}
      <div className="rounded-xl border border-border bg-muted/40 p-5 space-y-2 max-w-2xl">
        <p className="text-sm font-semibold text-foreground">How it works</p>
        <p className="text-sm text-muted-foreground">
          Each theme writes HSL channel values to <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">document.documentElement</code> via{' '}
          <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">style.setProperty</code>. Tailwind wraps them in{' '}
          <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">hsl()</code>, so every component reacts instantly without a page reload.
        </p>
      </div>

      {/* Theme grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.entries(colorThemes).map(([key, theme]) => (
          <ThemeCard key={key} themeKey={key} theme={theme} />
        ))}
      </div>
    </div>
  ),
};
