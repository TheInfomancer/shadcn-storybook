# shadcn-storybook

A Storybook documentation library for a custom shadcn/ui-based design system, built with Atomic Design principles. Covers Foundation tokens, Atoms, Molecules, and Organisms.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **UI Framework** | React | ^19 |
| **Component Base** | [Base UI](https://base-ui.com) (`@base-ui/react`) | ^1.4 |
| **Styling** | Tailwind CSS v4 | ^4.2 |
| **Tailwind / Vite** | `@tailwindcss/vite` | ^4.2 |
| **Animations** | `tw-animate-css` | ^1.4 |
| **Documentation** | Storybook | ^10.3 |
| **Storybook Builder** | `@storybook/react-vite` | ^10.3 |
| **Build Tool** | Vite | ^8 |
| **Font** | Geist Variable (`@fontsource-variable/geist`) | ^5.2 |
| **Icons** | Lucide React | ^1.8 |
| **Class utilities** | `class-variance-authority`, `clsx`, `tailwind-merge` | latest |

---

## Key Runtime Dependencies

| Package | Purpose |
|---|---|
| `@base-ui/react` | Headless, accessible UI primitives (replaces Radix UI in new shadcn components) |
| `embla-carousel-react` | Carousel engine |
| `input-otp` | OTP input component |
| `react-day-picker` | Calendar / date picker |
| `react-resizable-panels` | Resizable panel layouts |
| `recharts` | Chart components |
| `sonner` | Toast notification system |
| `vaul` | Drawer component |
| `date-fns` | Date formatting utilities |
| `next-themes` | Theme provider for dark/light mode |
| `cmdk` | Command palette |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install

```bash
npm install
```

### Run Storybook (dev)

```bash
npm run storybook
```

Storybook starts at **http://localhost:6006** (falls back to 6007 if occupied).

### Build Storybook (static)

```bash
npm run build-storybook
```

### Run Vite dev server

```bash
npm run dev
```

---

## Project Structure

```
shadcn-storybook/
├── .storybook/
│   ├── main.js          # Storybook addons & builder config
│   └── preview.js       # Global decorators, theme/dark-mode toolbar controls
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui component files
│   ├── hooks/           # Custom hooks (e.g. use-mobile)
│   ├── lib/             # Utilities (cn, utils)
│   ├── stories/
│   │   ├── foundation/  # Design token stories (Colours, Typography, Spacing, Icons, …)
│   │   ├── *.stories.jsx   # Atom / Molecule / Organism stories
│   ├── themes/
│   │   └── themes.js    # Colour theme presets (Zinc, Slate, Stone, …)
│   └── index.css        # Tailwind v4 entry + CSS custom properties
├── vite.config.js        # Vite + @tailwindcss/vite + Storybook test config
├── postcss.config.js     # Empty — Tailwind handled by Vite plugin
└── package.json
```

---

## Tailwind v4 Setup

This project uses **Tailwind CSS v4** with the official Vite plugin (`@tailwindcss/vite`). There is **no `tailwind.config.js`** — all theme configuration lives in `src/index.css`.

### How theming works

```
index.css
  └── @theme inline { --color-primary: hsl(var(--primary)); … }
        └── :root { --primary: 240 5.9% 10%; }       ← light defaults
        └── .dark { --primary: 0 0% 98%; }            ← dark overrides
```

Storybook's toolbar controls (Theme, Radius, Dark Mode) update the `:root` CSS variables at runtime via JavaScript. Because `@theme inline` uses live variable references rather than baked-in values, every component reacts instantly.

### Adding a new color token

1. Add the HSL channel variable to `:root` (and `.dark` if needed) in `index.css`
2. Add the `--color-*` mapping in `@theme inline`
3. Use `bg-<name>`, `text-<name>`, `border-<name>` etc. as Tailwind utilities

---

## Storybook Features

| Feature | Details |
|---|---|
| **Dark mode toggle** | Toolbar button — applies `.dark` to `<html>` |
| **Theme switcher** | 8 colour themes (Zinc, Slate, Stone, Gray, Neutral, Red, Rose, Orange) |
| **Radius switcher** | 5 radius presets (None → Full) |
| **Foundation stories** | Themes, Colours, Typography, Spacing & Grid, Icons, Shadows & Blurs |
| **Atomic Design** | Atoms → Molecules → Organisms hierarchy |
| **Visual tests** | `@storybook/addon-vitest` + Playwright Chromium |
| **Accessibility** | `@storybook/addon-a11y` panel |

---

## Component Coverage

### Foundation
Themes · Colours · Typography · Spacing & Grid · Icons · Shadows & Blurs

### Atoms
Aspect Ratio · Avatar · Badge · Button · Checkbox · Input · Input OTP · Kbd · Label · Native Select · Progress · Radio Group · Select · Separator · Skeleton · Slider · Spinner · Switch · Textarea · Toggle · Toggle Group

### Molecules
Accordion · Alert · Breadcrumb · Button Group · Calendar · Card · Collapsible · Empty · Field · Hover Card · Input Group · Item · Pagination · Popover · Scroll Area · Sonner · Table · Tooltip

### Organisms
Alert Dialog · Carousel · Chart · Command · Combobox · Context Menu · Data Table · Date Picker · Dialog · Drawer · Dropdown Menu · Menubar · Navigation Menu · Resizable · Sheet · Sidebar · Tabs

---

## Notes

- **Toast** — shadcn deprecated `Toast` in favour of Sonner. This library uses Sonner only.
- **Typography** — covered by the Foundation/Typography story rather than a separate component story.
- **Direction** — a shadcn utility (RTL support), not a visual component.
- The `tailwind.config.js.v3-backup` file in the root is kept for reference only — it is not used.
