import { colorThemes } from '../../themes/themes';

export default {
  title: 'Foundation/Themes',
  parameters: { layout: 'fullscreen' },
};

// Brand tokens to show per card (subset of the full var set)
const BRAND_TOKENS = [
  '--primary',
  '--secondary',
  '--accent',
  '--muted',
  '--border',
  '--ring',
];

const TOKEN_LABELS = {
  '--primary':   'Primary',
  '--secondary': 'Secondary',
  '--accent':    'Accent',
  '--muted':     'Muted',
  '--border':    'Border',
  '--ring':      'Ring',
};

function ThemeCard({ themeKey, theme }) {
  const light = theme.light;

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Colour bar — primary / secondary / accent */}
      <div className="flex h-12">
        <div className="flex-1" style={{ background: light['--primary'] }} />
        <div className="flex-1" style={{ background: light['--secondary'] }} />
        <div className="flex-1" style={{ background: light['--accent'] }} />
      </div>

      <div className="p-5 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="font-semibold text-card-foreground">{theme.label}</span>
          <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded-md">{themeKey}</span>
        </div>

        {/* Token list */}
        <div className="space-y-2">
          {BRAND_TOKENS.map((token) => {
            const value = light[token];
            if (!value) return null;
            return (
              <div key={token} className="flex items-center gap-2.5">
                <div
                  className="w-5 h-5 rounded-full border border-border shrink-0 shadow-sm"
                  style={{ background: value }}
                />
                <span className="text-xs font-mono text-muted-foreground flex-1 truncate">
                  {TOKEN_LABELS[token] ?? token}
                </span>
                <span className="text-xs font-mono text-muted-foreground/60 truncate max-w-[140px]">
                  {value}
                </span>
              </div>
            );
          })}
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
          Switch between colour themes using the toolbar above. Changes apply instantly across all components.
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
