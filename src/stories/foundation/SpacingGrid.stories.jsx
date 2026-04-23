export default {
  title: 'Foundation/Spacing & Grid',
  parameters: { layout: 'fullscreen' },
};

// Tailwind spacing scale (token → rem → px)
const SPACING = [
  { t: '0',    rem: '0',        px: '0px'   },
  { t: '0.5',  rem: '0.125rem', px: '2px'   },
  { t: '1',    rem: '0.25rem',  px: '4px'   },
  { t: '1.5',  rem: '0.375rem', px: '6px'   },
  { t: '2',    rem: '0.5rem',   px: '8px'   },
  { t: '2.5',  rem: '0.625rem', px: '10px'  },
  { t: '3',    rem: '0.75rem',  px: '12px'  },
  { t: '3.5',  rem: '0.875rem', px: '14px'  },
  { t: '4',    rem: '1rem',     px: '16px'  },
  { t: '5',    rem: '1.25rem',  px: '20px'  },
  { t: '6',    rem: '1.5rem',   px: '24px'  },
  { t: '7',    rem: '1.75rem',  px: '28px'  },
  { t: '8',    rem: '2rem',     px: '32px'  },
  { t: '9',    rem: '2.25rem',  px: '36px'  },
  { t: '10',   rem: '2.5rem',   px: '40px'  },
  { t: '12',   rem: '3rem',     px: '48px'  },
  { t: '14',   rem: '3.5rem',   px: '56px'  },
  { t: '16',   rem: '4rem',     px: '64px'  },
  { t: '20',   rem: '5rem',     px: '80px'  },
  { t: '24',   rem: '6rem',     px: '96px'  },
  { t: '28',   rem: '7rem',     px: '112px' },
  { t: '32',   rem: '8rem',     px: '128px' },
  { t: '36',   rem: '9rem',     px: '144px' },
  { t: '40',   rem: '10rem',    px: '160px' },
  { t: '48',   rem: '12rem',    px: '192px' },
  { t: '56',   rem: '14rem',    px: '224px' },
  { t: '64',   rem: '16rem',    px: '256px' },
  { t: '80',   rem: '20rem',    px: '320px' },
  { t: '96',   rem: '24rem',    px: '384px' },
];

// Gap scale for the grid demo
const GAPS = ['gap-0', 'gap-2', 'gap-4', 'gap-6', 'gap-8'];

function SectionHeading({ label }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h2 className="text-lg font-semibold text-foreground shrink-0">{label}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="bg-background min-h-screen p-8 space-y-16">
      {/* Page header */}
      <div className="space-y-2 border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Foundation</p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Spacing &amp; Grid</h1>
        <p className="text-muted-foreground max-w-xl mt-2">
          Tailwind's default spacing scale (base unit = <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">4px</code>) and
          the 12-column grid system used across layouts.
        </p>
      </div>

      {/* Spacing scale */}
      <section className="space-y-6">
        <SectionHeading label="Spacing Scale" />
        <div className="space-y-2 overflow-x-auto">
          {SPACING.map(({ t, rem, px }) => {
            const pxNum = parseInt(px);
            const barWidth = Math.min(pxNum, 384); // cap visual at 384px
            return (
              <div key={t} className="flex items-center gap-4 min-w-0">
                {/* Token name */}
                <span className="w-10 text-right text-xs font-mono text-muted-foreground shrink-0">{t}</span>
                {/* Bar */}
                <div
                  className="h-5 rounded bg-primary shrink-0"
                  style={{ width: barWidth === 0 ? '2px' : barWidth, opacity: 0.85 }}
                />
                {/* Values */}
                <div className="flex gap-3 text-xs font-mono text-muted-foreground/60 shrink-0">
                  <span>{rem}</span>
                  <span className="text-muted-foreground/40">·</span>
                  <span>{px}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 12-column grid */}
      <section className="space-y-6">
        <SectionHeading label="12-Column Grid" />
        <div className="space-y-4">
          {[
            [12],
            [6, 6],
            [4, 4, 4],
            [3, 3, 3, 3],
            [8, 4],
            [4, 8],
            [3, 6, 3],
            [2, 2, 4, 4],
          ].map((cols, i) => (
            <div key={i} className="grid grid-cols-12 gap-2">
              {cols.map((span, j) => (
                <div
                  key={j}
                  className="rounded-lg bg-primary/10 border border-primary/20 px-2 py-3 text-center"
                  style={{ gridColumn: `span ${span}` }}
                >
                  <span className="text-xs font-mono text-primary">{span}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground font-mono">Numbers indicate column span out of 12</p>
      </section>

      {/* Gap scale */}
      <section className="space-y-6">
        <SectionHeading label="Gap Scale" />
        <div className="space-y-6">
          {GAPS.map((gap) => (
            <div key={gap} className="space-y-2">
              <p className="text-xs font-mono text-muted-foreground">{gap}</p>
              <div className={`grid grid-cols-6 ${gap}`}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-8 rounded-md bg-accent border border-border" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
