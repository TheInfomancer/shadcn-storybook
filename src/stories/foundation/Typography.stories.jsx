export default {
  title: 'Foundation/Typography',
  parameters: { layout: 'fullscreen' },
};

const TYPE_SCALE = [
  { name: 'text-xs',   size: '12px', lh: '16px',  cls: 'text-xs' },
  { name: 'text-sm',   size: '14px', lh: '20px',  cls: 'text-sm' },
  { name: 'text-base', size: '16px', lh: '24px',  cls: 'text-base' },
  { name: 'text-lg',   size: '18px', lh: '28px',  cls: 'text-lg' },
  { name: 'text-xl',   size: '20px', lh: '28px',  cls: 'text-xl' },
  { name: 'text-2xl',  size: '24px', lh: '32px',  cls: 'text-2xl' },
  { name: 'text-3xl',  size: '30px', lh: '36px',  cls: 'text-3xl' },
  { name: 'text-4xl',  size: '36px', lh: '40px',  cls: 'text-4xl' },
  { name: 'text-5xl',  size: '48px', lh: '1',     cls: 'text-5xl' },
  { name: 'text-6xl',  size: '60px', lh: '1',     cls: 'text-6xl' },
];

const WEIGHTS = [
  { name: 'Thin',        cls: 'font-thin',       w: '100' },
  { name: 'ExtraLight',  cls: 'font-extralight',  w: '200' },
  { name: 'Light',       cls: 'font-light',       w: '300' },
  { name: 'Normal',      cls: 'font-normal',      w: '400' },
  { name: 'Medium',      cls: 'font-medium',      w: '500' },
  { name: 'SemiBold',    cls: 'font-semibold',    w: '600' },
  { name: 'Bold',        cls: 'font-bold',        w: '700' },
  { name: 'ExtraBold',   cls: 'font-extrabold',   w: '800' },
  { name: 'Black',       cls: 'font-black',       w: '900' },
];

const TRACKING = [
  { name: 'tracking-tighter', label: 'Tighter', cls: 'tracking-tighter' },
  { name: 'tracking-tight',   label: 'Tight',   cls: 'tracking-tight' },
  { name: 'tracking-normal',  label: 'Normal',  cls: 'tracking-normal' },
  { name: 'tracking-wide',    label: 'Wide',    cls: 'tracking-wide' },
  { name: 'tracking-wider',   label: 'Wider',   cls: 'tracking-wider' },
  { name: 'tracking-widest',  label: 'Widest',  cls: 'tracking-widest' },
];

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
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Typography</h1>
        <p className="text-muted-foreground max-w-xl mt-2">
          Type scale, weights, and spacing — all using{' '}
          <strong className="text-foreground">Geist Variable</strong>, the default sans-serif for this design system.
        </p>
      </div>

      {/* Font specimen */}
      <section className="space-y-6">
        <SectionHeading label="Font Family" />
        <div className="rounded-2xl border border-border bg-card p-8 space-y-4">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Geist Variable — Sans Serif</p>
          <p className="text-5xl font-semibold text-foreground leading-tight tracking-tight">
            The quick brown fox<br />jumps over the lazy dog
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
            abcdefghijklmnopqrstuvwxyz<br />
            0123456789 !@#$%^&amp;*()
          </p>
        </div>
      </section>

      {/* Type scale */}
      <section className="space-y-6">
        <SectionHeading label="Type Scale" />
        <div className="space-y-1">
          {TYPE_SCALE.map(({ name, size, lh, cls }) => (
            <div key={name} className="flex items-baseline gap-6 py-3 border-b border-border last:border-0">
              <div className="w-28 shrink-0 space-y-0.5">
                <p className="text-xs font-mono text-muted-foreground">{name}</p>
                <p className="text-xs font-mono text-muted-foreground/50">{size} / {lh}</p>
              </div>
              <p className={`${cls} font-normal text-foreground leading-none`}>
                The quick brown fox
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Font weights */}
      <section className="space-y-6">
        <SectionHeading label="Font Weights" />
        <div className="space-y-1">
          {WEIGHTS.map(({ name, cls, w }) => (
            <div key={name} className="flex items-baseline gap-6 py-3 border-b border-border last:border-0">
              <div className="w-28 shrink-0 space-y-0.5">
                <p className="text-xs font-mono text-muted-foreground">{cls}</p>
                <p className="text-xs font-mono text-muted-foreground/50">{w}</p>
              </div>
              <p className={`text-2xl ${cls} text-foreground`}>{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Letter spacing */}
      <section className="space-y-6">
        <SectionHeading label="Letter Spacing" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {TRACKING.map(({ name, label, cls }) => (
            <div key={name} className="rounded-xl border border-border bg-card p-4 space-y-2">
              <p className={`text-lg font-medium text-foreground ${cls}`}>Aa Bb Cc</p>
              <p className="text-xs font-mono text-muted-foreground">{name}</p>
              <p className="text-xs text-muted-foreground/60">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prose sample */}
      <section className="space-y-6">
        <SectionHeading label="Prose Sample" />
        <div className="rounded-2xl border border-border bg-card p-8 max-w-2xl space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Design systems at scale</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A well-structured design system provides consistency across all surfaces of your product.
            By encoding decisions about colour, spacing, and typography into reusable tokens,
            teams can move faster while maintaining visual coherence.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Good components are predictable, accessible, and easy to extend — so designers and
            developers can focus on building great products instead of reinventing the wheel.
          </p>
        </div>
      </section>
    </div>
  ),
};
