export default {
  title: 'Foundation/Shadows & Blurs',
  parameters: { layout: 'fullscreen' },
};

const SHADOWS = [
  { cls: 'shadow-none',   label: 'shadow-none',   desc: 'No shadow' },
  { cls: 'shadow-sm',     label: 'shadow-sm',     desc: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
  { cls: 'shadow',        label: 'shadow',         desc: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' },
  { cls: 'shadow-md',     label: 'shadow-md',     desc: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
  { cls: 'shadow-lg',     label: 'shadow-lg',     desc: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
  { cls: 'shadow-xl',     label: 'shadow-xl',     desc: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
  { cls: 'shadow-2xl',    label: 'shadow-2xl',    desc: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
  { cls: 'shadow-inner',  label: 'shadow-inner',  desc: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)' },
];

const BLURS = [
  { cls: 'blur-none',   label: 'blur-none',   value: 'blur(0)'      },
  { cls: 'blur-sm',     label: 'blur-sm',     value: 'blur(4px)'    },
  { cls: 'blur',        label: 'blur',         value: 'blur(8px)'    },
  { cls: 'blur-md',     label: 'blur-md',     value: 'blur(12px)'   },
  { cls: 'blur-lg',     label: 'blur-lg',     value: 'blur(16px)'   },
  { cls: 'blur-xl',     label: 'blur-xl',     value: 'blur(24px)'   },
  { cls: 'blur-2xl',    label: 'blur-2xl',    value: 'blur(40px)'   },
  { cls: 'blur-3xl',    label: 'blur-3xl',    value: 'blur(64px)'   },
];

const BACKDROP_BLURS = [
  { cls: 'backdrop-blur-none', label: 'backdrop-blur-none', value: 'backdrop-filter: blur(0)' },
  { cls: 'backdrop-blur-sm',   label: 'backdrop-blur-sm',   value: 'backdrop-filter: blur(4px)' },
  { cls: 'backdrop-blur',      label: 'backdrop-blur',       value: 'backdrop-filter: blur(8px)' },
  { cls: 'backdrop-blur-md',   label: 'backdrop-blur-md',   value: 'backdrop-filter: blur(12px)' },
  { cls: 'backdrop-blur-lg',   label: 'backdrop-blur-lg',   value: 'backdrop-filter: blur(16px)' },
  { cls: 'backdrop-blur-xl',   label: 'backdrop-blur-xl',   value: 'backdrop-filter: blur(24px)' },
  { cls: 'backdrop-blur-2xl',  label: 'backdrop-blur-2xl',  value: 'backdrop-filter: blur(40px)' },
  { cls: 'backdrop-blur-3xl',  label: 'backdrop-blur-3xl',  value: 'backdrop-filter: blur(64px)' },
];

// Colourful noise pattern as a stable SVG data-uri for the blur/backdrop backgrounds
const NOISE_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='3'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

function SectionHeading({ label }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h2 className="text-lg font-semibold text-foreground shrink-0">{label}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function ShadowCard({ cls, label, desc }) {
  return (
    <div className="space-y-4 flex flex-col items-center">
      <div className={`w-full h-24 rounded-xl bg-card border border-border ${cls} transition-shadow`} />
      <div className="w-full space-y-0.5">
        <p className="text-xs font-mono font-semibold text-foreground">{label}</p>
        <p className="text-[10px] font-mono text-muted-foreground/60 leading-relaxed break-all">{desc}</p>
      </div>
    </div>
  );
}

function BlurCard({ cls, label, value }) {
  return (
    <div className="space-y-3 flex flex-col items-center">
      {/* Blurred colourful square */}
      <div className="w-full h-20 rounded-xl overflow-hidden relative border border-border">
        <div className="absolute inset-0" style={{ backgroundImage: NOISE_BG, backgroundSize: 'cover' }} />
        <div className={`absolute inset-0 ${cls}`} />
      </div>
      <div className="w-full space-y-0.5">
        <p className="text-xs font-mono font-semibold text-foreground">{label}</p>
        <p className="text-[10px] font-mono text-muted-foreground/60">{value}</p>
      </div>
    </div>
  );
}

function BackdropBlurCard({ cls, label, value }) {
  return (
    <div className="space-y-3 flex flex-col items-center">
      <div className="w-full h-20 rounded-xl overflow-hidden relative border border-border">
        {/* Colourful background behind the glass */}
        <div className="absolute inset-0" style={{ backgroundImage: NOISE_BG, backgroundSize: 'cover' }} />
        {/* Frosted glass overlay */}
        <div className={`absolute inset-0 ${cls} bg-white/20`} />
        {/* Label on glass */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-white drop-shadow">Glass</span>
        </div>
      </div>
      <div className="w-full space-y-0.5">
        <p className="text-xs font-mono font-semibold text-foreground">{label}</p>
        <p className="text-[10px] font-mono text-muted-foreground/60">{value}</p>
      </div>
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
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Shadows &amp; Blurs</h1>
        <p className="text-muted-foreground max-w-xl mt-2">
          Tailwind's built-in shadow, blur and backdrop-blur scales. All classes are available out of the box — no extra config needed.
        </p>
      </div>

      {/* Box Shadows */}
      <section className="space-y-6">
        <SectionHeading label="Box Shadow" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {SHADOWS.map((s) => <ShadowCard key={s.cls} {...s} />)}
        </div>
      </section>

      {/* Filter Blur */}
      <section className="space-y-6">
        <SectionHeading label="Filter Blur (blur-*)" />
        <p className="text-sm text-muted-foreground -mt-2 mb-4">
          Applies <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">filter: blur()</code> to the element itself.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {BLURS.map((b) => <BlurCard key={b.cls} {...b} />)}
        </div>
      </section>

      {/* Backdrop Blur */}
      <section className="space-y-6">
        <SectionHeading label="Backdrop Blur (backdrop-blur-*)" />
        <p className="text-sm text-muted-foreground -mt-2 mb-4">
          Applies <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">backdrop-filter: blur()</code> — frosted-glass effect on overlays.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {BACKDROP_BLURS.map((b) => <BackdropBlurCard key={b.cls} {...b} />)}
        </div>
      </section>
    </div>
  ),
};
