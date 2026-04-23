import { useState, useMemo } from 'react';
import * as LucideIcons from 'lucide-react';

export default {
  title: 'Foundation/Icons',
  parameters: { layout: 'fullscreen' },
};

// Dynamically pull every exported icon component (PascalCase, excludes helpers)
const ALL_ICONS = Object.entries(LucideIcons)
  .filter(([name, val]) => typeof val === 'function' && /^[A-Z][a-zA-Z0-9]+$/.test(name) && name !== 'createLucideIcon')
  .map(([name, Icon]) => ({ name, Icon }))
  .sort((a, b) => a.name.localeCompare(b.name));

function IconCard({ name, Icon, onCopy, copied }) {
  return (
    <button
      title={`Copy "${name}"`}
      onClick={() => onCopy(name)}
      className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-3
                 hover:border-primary/40 hover:bg-accent/30 hover:shadow-sm
                 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative w-8 h-8 flex items-center justify-center text-foreground group-hover:text-primary transition-colors">
        {copied === name ? (
          <LucideIcons.Check className="w-5 h-5 text-green-500" />
        ) : (
          <Icon className="w-5 h-5" />
        )}
      </div>
      <span className="text-[10px] font-mono text-muted-foreground text-center leading-tight line-clamp-2 break-all">
        {name}
      </span>
    </button>
  );
}

function IconsPage() {
  const [query, setQuery]   = useState('');
  const [copied, setCopied] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? ALL_ICONS.filter(({ name }) => name.toLowerCase().includes(q)) : ALL_ICONS;
  }, [query]);

  function handleCopy(name) {
    navigator.clipboard?.writeText(name).catch(() => {});
    setCopied(name);
    setTimeout(() => setCopied(null), 1500);
  }

  return (
    <div className="bg-background min-h-screen p-8 space-y-8">
      {/* Page header */}
      <div className="space-y-2 border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Foundation</p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Icons</h1>
        <p className="text-muted-foreground max-w-xl mt-2">
          All <strong className="text-foreground">{ALL_ICONS.length}</strong> icons from{' '}
          <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">lucide-react</code>.
          Click any icon to copy its component name to the clipboard.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <LucideIcons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Search icons…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border border-input bg-background pl-9 pr-4 py-2 text-sm
                     placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <LucideIcons.X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Count */}
      <p className="text-sm text-muted-foreground">
        {filtered.length === ALL_ICONS.length
          ? `${ALL_ICONS.length} icons`
          : `${filtered.length} of ${ALL_ICONS.length} icons`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-2">
          {filtered.map(({ name, Icon }) => (
            <IconCard key={name} name={name} Icon={Icon} onCopy={handleCopy} copied={copied} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-muted-foreground space-y-3">
          <LucideIcons.SearchX className="w-10 h-10 opacity-40" />
          <p className="text-sm">No icons match &ldquo;{query}&rdquo;</p>
        </div>
      )}
    </div>
  );
}

export const Overview = {
  name: 'Overview',
  render: () => <IconsPage />,
};
