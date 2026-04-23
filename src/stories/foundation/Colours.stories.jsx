import { useState } from 'react';

export default {
  title: 'Foundation/Colours',
  parameters: { layout: 'fullscreen' },
};

// ── Semantic tokens ────────────────────────────────────────────────────────

const TOKEN_GROUPS = [
  {
    name: 'Surfaces',
    description: 'Page, card and overlay backgrounds',
    tokens: [
      { label: 'Background', bg: '--background', fg: '--foreground' },
      { label: 'Card',       bg: '--card',        fg: '--card-foreground' },
      { label: 'Popover',    bg: '--popover',     fg: '--popover-foreground' },
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
      <div className="h-20 w-full flex items-end p-3" style={{ background: bgVal, color: fgVal }}>
        {mono && <div className="w-full h-3 rounded-full" style={{ background: fgVal, opacity: 0.25 }} />}
      </div>
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
        {group.tokens.map((t) => <SwatchCard key={t.bg} {...t} />)}
      </div>
    </section>
  );
}

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="bg-background min-h-screen p-8 space-y-12">
      <div className="space-y-2 border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Foundation</p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Colours</h1>
        <p className="text-muted-foreground max-w-xl mt-2">
          Colour tokens used across components. They adapt automatically to the active theme and dark mode.
        </p>
      </div>
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
      {TOKEN_GROUPS.map((g) => <TokenGroup key={g.name} group={g} />)}
    </div>
  ),
};

// ── Brand Palette ──────────────────────────────────────────────────────────

const SHADES = [150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5];

const PALETTE = {
  Blue: {
    150: { hex: '#001E33', oklch: 'oklch(22.6% 0.0545 242.9)' },
    140: { hex: '#002D4D', oklch: 'oklch(28.8% 0.0742 246.1)' },
    130: { hex: '#003C66', oklch: 'oklch(34.7% 0.0914 247.1)' },
    120: { hex: '#004A80', oklch: 'oklch(40.1% 0.1104 248.9)' },
    110: { hex: '#005999', oklch: 'oklch(45.5% 0.1262 249.2)' },
    100: { hex: '#0069B4', oklch: 'oklch(51.2% 0.143 249.5)' },
    90:  { hex: '#007AD1', oklch: 'oklch(57% 0.1607 249.8)' },
    80:  { hex: '#008FF5', oklch: 'oklch(64.1% 0.1822 250.2)' },
    70:  { hex: '#149DFF', oklch: 'oklch(67.9% 0.1782 248.1)' },
    60:  { hex: '#33AAFF', oklch: 'oklch(71.3% 0.1606 245.1)' },
    50:  { hex: '#52B7FF', oklch: 'oklch(75% 0.1401 242.9)' },
    40:  { hex: '#70C4FF', oklch: 'oklch(79% 0.1177 241)' },
    30:  { hex: '#94D2FF', oklch: 'oklch(83.8% 0.0896 240.7)' },
    20:  { hex: '#B3DFFF', oklch: 'oklch(88.3% 0.0639 240)' },
    10:  { hex: '#D1ECFF', oklch: 'oklch(92.9% 0.0386 238.6)' },
    5:   { hex: '#F0F9FF', oklch: 'oklch(97.7% 0.0126 236.8)' },
  },
  Gray: {
    150: { hex: '#080808', oklch: 'oklch(13.4% 0 263.3)' },
    140: { hex: '#1A1A1A', oklch: 'oklch(21.8% 0 263.3)' },
    130: { hex: '#262626', oklch: 'oklch(26.9% 0 263.3)' },
    120: { hex: '#333333', oklch: 'oklch(32.1% 0 263.3)' },
    110: { hex: '#404040', oklch: 'oklch(37.1% 0 263.3)' },
    100: { hex: '#525252', oklch: 'oklch(43.9% 0 263.3)' },
    90:  { hex: '#5C5C5C', oklch: 'oklch(47.5% 0 263.3)' },
    80:  { hex: '#6E6E6E', oklch: 'oklch(53.8% 0 263.3)' },
    70:  { hex: '#7D7D7D', oklch: 'oklch(59% 0 263.3)' },
    60:  { hex: '#8F8F8F', oklch: 'oklch(65% 0.0001 263.3)' },
    50:  { hex: '#9E9E9E', oklch: 'oklch(69.9% 0.0001 263.3)' },
    40:  { hex: '#B0B0B0', oklch: 'oklch(75.7% 0.0001 263.3)' },
    30:  { hex: '#BFBFBF', oklch: 'oklch(80.5% 0.0001 263.3)' },
    20:  { hex: '#D1D1D1', oklch: 'oklch(86.1% 0.0001 263.3)' },
    10:  { hex: '#E0E0E0', oklch: 'oklch(90.7% 0.0001 263.3)' },
    5:   { hex: '#F2F2F2', oklch: 'oklch(96.1% 0.0001 263.3)' },
  },
  Green: {
    150: { hex: '#1F5625', oklch: 'oklch(40.4% 0.0977 145.5)' },
    140: { hex: '#26682D', oklch: 'oklch(46% 0.1132 145.3)' },
    130: { hex: '#2D7B35', oklch: 'oklch(51.8% 0.1296 145.2)' },
    120: { hex: '#348E3D', oklch: 'oklch(57.4% 0.1454 145.1)' },
    110: { hex: '#3BA045', oklch: 'oklch(62.6% 0.1595 145.1)' },
    100: { hex: '#42B34D', oklch: 'oklch(68% 0.1746 145)' },
    90:  { hex: '#50BF5B', oklch: 'oklch(71.7% 0.1723 145.3)' },
    80:  { hex: '#62C56C', oklch: 'oklch(74.2% 0.1562 145.9)' },
    70:  { hex: '#75CC7E', oklch: 'oklch(77.1% 0.1386 146.4)' },
    60:  { hex: '#88D38F', oklch: 'oklch(80% 0.121 146.6)' },
    50:  { hex: '#9ADAA1', oklch: 'oklch(83% 0.1024 147.4)' },
    40:  { hex: '#A9E0AF', oklch: 'oklch(85.6% 0.088 147.7)' },
    30:  { hex: '#B8E5BD', oklch: 'oklch(87.9% 0.0718 148)' },
    20:  { hex: '#C7EACB', oklch: 'oklch(90.3% 0.0556 148.4)' },
    10:  { hex: '#D6F0D9', oklch: 'oklch(93% 0.0411 148.7)' },
    5:   { hex: '#E9F7EA', oklch: 'oklch(96.2% 0.0226 147.6)' },
  },
  Orange: {
    150: { hex: '#804400', oklch: 'oklch(45.2% 0.107 58.9)' },
    140: { hex: '#995100', oklch: 'oklch(51.2% 0.1226 57.8)' },
    130: { hex: '#B25E00', oklch: 'oklch(57% 0.1378 57)' },
    120: { hex: '#CC6C00', oklch: 'oklch(63% 0.1528 56.7)' },
    110: { hex: '#E57900', oklch: 'oklch(68.5% 0.1672 56.2)' },
    100: { hex: '#FF8700', oklch: 'oklch(74.3% 0.1817 56)' },
    90:  { hex: '#FF911A', oklch: 'oklch(75.9% 0.1733 59.2)' },
    80:  { hex: '#FF9B2E', oklch: 'oklch(77.7% 0.1639 62.1)' },
    70:  { hex: '#FFA747', oklch: 'oklch(79.9% 0.1497 64.7)' },
    60:  { hex: '#FFB15C', oklch: 'oklch(81.9% 0.1357 66.2)' },
    50:  { hex: '#FFBD75', oklch: 'oklch(84.4% 0.1171 67.5)' },
    40:  { hex: '#FFC78A', oklch: 'oklch(86.6% 0.1003 68.2)' },
    30:  { hex: '#FFD3A3', oklch: 'oklch(89.3% 0.0794 69)' },
    20:  { hex: '#FFDDB8', oklch: 'oklch(91.7% 0.0614 69.3)' },
    10:  { hex: '#FFE9D1', oklch: 'oklch(94.6% 0.0397 69.7)' },
    5:   { hex: '#FFF3E5', oklch: 'oklch(97% 0.0225 71.8)' },
  },
  Red: {
    150: { hex: '#630D0D', oklch: 'oklch(32.4% 0.1186 27)' },
    140: { hex: '#7A1010', oklch: 'oklch(37.4% 0.1395 27.3)' },
    130: { hex: '#901313', oklch: 'oklch(42% 0.1586 27.5)' },
    120: { hex: '#A61616', oklch: 'oklch(46.5% 0.1771 27.7)' },
    110: { hex: '#BD1919', oklch: 'oklch(51.1% 0.1959 27.8)' },
    100: { hex: '#D21C1C', oklch: 'oklch(55.2% 0.2125 27.9)' },
    90:  { hex: '#E22727', oklch: 'oklch(58.9% 0.2197 27.3)' },
    80:  { hex: '#E53E3E', oklch: 'oklch(61.4% 0.2039 25.6)' },
    70:  { hex: '#E85454', oklch: 'oklch(64.5% 0.1837 23.8)' },
    60:  { hex: '#EB6B6B', oklch: 'oklch(68.3% 0.1591 22.2)' },
    50:  { hex: '#EE8181', oklch: 'oklch(72.4% 0.1341 20.9)' },
    40:  { hex: '#F19898', oklch: 'oklch(77% 0.1073 19.8)' },
    30:  { hex: '#F4AEAE', oklch: 'oklch(81.7% 0.0824 19)' },
    20:  { hex: '#F7C5C5', oklch: 'oklch(86.7% 0.0572 18.3)' },
    10:  { hex: '#FADBDB', oklch: 'oklch(91.7% 0.0344 17.7)' },
    5:   { hex: '#FDEDED', oklch: 'oklch(95.9% 0.0173 17.2)' },
  },
};

const FAMILIES = Object.keys(PALETTE);

function isDark(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) < 128;
}

function PaletteCell({ hex, oklch, shade, onCopy, copied }) {
  const key = `${hex}-${shade}`;
  const dark = isDark(hex);
  return (
    <button
      onClick={() => onCopy(key, oklch)}
      title={`Copy OKLCH: ${oklch}`}
      className="group relative h-12 w-full flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-ring"
      style={{ background: hex }}
    >
      <span
        className="opacity-0 group-hover:opacity-100 transition-opacity text-[9px] font-mono font-semibold px-1"
        style={{ color: dark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.75)' }}
      >
        {copied === key ? '✓ copied' : oklch.replace('oklch(', '').replace(')', '')}
      </span>
    </button>
  );
}

export const Palette = {
  name: 'Brand Palette',
  render: () => {
    const [copied, setCopied] = useState(null);

    function handleCopy(key, value) {
      navigator.clipboard?.writeText(value).catch(() => {});
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    }

    return (
      <div className="bg-background min-h-screen p-8 space-y-10">
        <div className="space-y-2 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Foundation</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Brand Palette</h1>
          <p className="text-muted-foreground max-w-xl mt-2">
            5 colour families × 16 shades (5–150). Values are in{' '}
            <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">oklch()</code>.
            Hover any swatch to preview the value; click to copy.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-xs font-mono text-muted-foreground pb-3 pr-4 w-12">Shade</th>
                {FAMILIES.map((f) => (
                  <th key={f} className="text-left text-xs font-semibold text-foreground pb-3 px-1">{f}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SHADES.map((shade) => (
                <tr key={shade} className={shade === 100 ? 'ring-1 ring-inset ring-border' : ''}>
                  <td className="text-xs font-mono text-muted-foreground pr-4 py-0 align-middle">{shade}</td>
                  {FAMILIES.map((family) => {
                    const { hex, oklch } = PALETTE[family][shade];
                    return (
                      <td key={family} className="px-1 py-0.5">
                        <div className="rounded overflow-hidden">
                          <PaletteCell
                            hex={hex}
                            oklch={oklch}
                            shade={shade}
                            onCopy={handleCopy}
                            copied={copied}
                          />
                          <div className="bg-card border border-t-0 border-border px-2 py-1 space-y-0.5">
                            <p className="text-[9px] font-mono text-muted-foreground">{hex}</p>
                          </div>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  },
};
