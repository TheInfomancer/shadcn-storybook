import '../src/index.css';
import { colorThemes, radiusPresets } from '../src/themes/themes';

// ── Font family options ────────────────────────────────────────────────────

const FONT_OPTIONS = [
  { value: 'sans',  title: 'Sans',  family: "'Geist Variable', ui-sans-serif, system-ui, sans-serif" },
  { value: 'mono',  title: 'Mono',  family: 'ui-monospace, monospace' },
  { value: 'serif', title: 'Serif', family: 'ui-serif, Georgia, serif' },
];

// ── Type scale — sets font-size on <html>, scaling all rem values ──────────

const TYPE_SCALE_OPTIONS = [
  { value: 'xs',   title: 'XS — 12px', fontSize: '12px' },
  { value: 'sm',   title: 'SM — 14px', fontSize: '14px' },
  { value: 'base', title: 'Base — 16px', fontSize: '16px' },
  { value: 'lg',   title: 'LG — 18px', fontSize: '18px' },
  { value: 'xl',   title: 'XL — 20px', fontSize: '20px' },
];

// ── Font weight — shifts the Tailwind v4 --font-weight-* CSS variables ─────
// Tailwind v4 generates: .font-bold { font-weight: var(--font-weight-bold) }
// so overriding these variables changes every component that uses font-* utilities.

const WEIGHT_OPTIONS = [
  {
    value: 'light', title: 'Light',
    vars: {
      '--font-weight-thin': '100', '--font-weight-extralight': '200',
      '--font-weight-light': '200', '--font-weight-normal': '300',
      '--font-weight-medium': '400', '--font-weight-semibold': '500',
      '--font-weight-bold': '600', '--font-weight-extrabold': '700', '--font-weight-black': '800',
    },
  },
  { value: 'regular', title: 'Regular', vars: {} }, // Tailwind defaults
  {
    value: 'medium', title: 'Medium',
    vars: {
      '--font-weight-normal': '500', '--font-weight-medium': '600',
      '--font-weight-semibold': '700', '--font-weight-bold': '800', '--font-weight-extrabold': '900',
    },
  },
  {
    value: 'bold', title: 'Bold',
    vars: {
      '--font-weight-light': '400', '--font-weight-normal': '600',
      '--font-weight-medium': '700', '--font-weight-semibold': '800',
      '--font-weight-bold': '900', '--font-weight-extrabold': '900',
    },
  },
];

// ── Letter spacing — shifts the Tailwind v4 --tracking-* CSS variables ─────

const TRACKING_OPTIONS = [
  {
    value: 'tight', title: 'Tight',
    vars: {
      '--tracking-tighter': '-0.075em', '--tracking-tight': '-0.05em',
      '--tracking-normal': '-0.025em', '--tracking-wide': '0',
      '--tracking-wider': '0.025em', '--tracking-widest': '0.05em',
    },
  },
  { value: 'normal', title: 'Normal', vars: {} }, // Tailwind defaults
  {
    value: 'wide', title: 'Wide',
    vars: {
      '--tracking-tighter': '-0.025em', '--tracking-tight': '0',
      '--tracking-normal': '0.025em', '--tracking-wide': '0.05em',
      '--tracking-wider': '0.1em', '--tracking-widest': '0.15em',
    },
  },
];

// ── Global toolbar controls ────────────────────────────────────────────────

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Color theme',
    defaultValue: 'neutral',
    toolbar: {
      icon: 'paintbrush',
      items: Object.entries(colorThemes).map(([value, { label }]) => ({ value, title: label })),
      showName: true,
      dynamicTitle: true,
    },
  },
  radius: {
    name: 'Radius',
    description: 'Border radius scale',
    defaultValue: 'default',
    toolbar: {
      icon: 'circlehollow',
      items: Object.entries(radiusPresets).map(([value, px]) => ({
        value,
        title: value === 'default' ? `Default (${px})` : `${value} — ${px}`,
      })),
      showName: true,
      dynamicTitle: true,
    },
  },
  darkMode: {
    name: 'Dark Mode',
    description: 'Light or dark color scheme',
    defaultValue: 'light',
    toolbar: {
      icon: 'moon',
      items: [
        { value: 'light', title: 'Light', icon: 'sun' },
        { value: 'dark',  title: 'Dark',  icon: 'moon' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
  font: {
    name: 'Font',
    description: 'Base font family',
    defaultValue: 'sans',
    toolbar: {
      icon: 'paragraph',
      items: FONT_OPTIONS.map(({ value, title }) => ({ value, title })),
      showName: true,
      dynamicTitle: true,
    },
  },
  typeScale: {
    name: 'Scale',
    description: 'Base font size — scales all rem values',
    defaultValue: 'base',
    toolbar: {
      icon: 'zoom',
      items: TYPE_SCALE_OPTIONS.map(({ value, title }) => ({ value, title })),
      showName: true,
      dynamicTitle: true,
    },
  },
  fontWeight: {
    name: 'Weight',
    description: 'Shift all font-weight utilities up or down',
    defaultValue: 'regular',
    toolbar: {
      icon: 'bold',
      items: WEIGHT_OPTIONS.map(({ value, title }) => ({ value, title })),
      showName: true,
      dynamicTitle: true,
    },
  },
  letterSpacing: {
    name: 'Tracking',
    description: 'Shift all tracking utilities tighter or wider',
    defaultValue: 'normal',
    toolbar: {
      icon: 'ruler',
      items: TRACKING_OPTIONS.map(({ value, title }) => ({ value, title })),
      showName: true,
      dynamicTitle: true,
    },
  },
};

// ── Theme decorator ────────────────────────────────────────────────────────

let _appliedVarKeys = [];

export const decorators = [
  (Story, context) => {
    const { theme: themeName = 'neutral',
            radius: radiusKey = 'default', darkMode = 'light',
            font: fontKey = 'sans', typeScale: scaleKey = 'base',
            fontWeight: weightKey = 'regular', letterSpacing: trackingKey = 'normal' } = context.globals;

    const theme      = colorThemes[themeName] ?? colorThemes.neutral;
    const radius     = radiusPresets[radiusKey] ?? '0.625rem';
    const vars       = darkMode === 'dark' ? theme.dark : theme.light;
    const fontFamily = FONT_OPTIONS.find(f => f.value === fontKey)?.family ?? FONT_OPTIONS[0].family;
    const fontSize   = TYPE_SCALE_OPTIONS.find(f => f.value === scaleKey)?.fontSize ?? '16px';
    const weightVars = WEIGHT_OPTIONS.find(w => w.value === weightKey)?.vars ?? {};
    const trackVars  = TRACKING_OPTIONS.find(t => t.value === trackingKey)?.vars ?? {};

    const root = document.documentElement;

    // Clear previously applied vars
    _appliedVarKeys.forEach(key => root.style.removeProperty(key));

    // Apply theme color vars
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
    // Apply radius
    root.style.setProperty('--radius', radius);
    // Apply Tailwind v4 font-weight vars
    Object.entries(weightVars).forEach(([k, v]) => root.style.setProperty(k, v));
    // Apply Tailwind v4 tracking vars
    Object.entries(trackVars).forEach(([k, v]) => root.style.setProperty(k, v));

    _appliedVarKeys = [
      ...Object.keys(vars),
      '--radius',
      ...Object.keys(weightVars), ...Object.keys(trackVars),
    ];

    // Dark mode class
    root.classList.toggle('dark', darkMode === 'dark');

    // Font family: must go on body (index.css sets font-family on body explicitly)
    document.body.style.fontFamily = fontFamily;

    // Type scale: set font-size on <html> — scales all rem-based utilities
    root.style.fontSize = fontSize;

    return Story();
  },
];

// ── Main preview config ────────────────────────────────────────────────────

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Foundation', [
            'Themes', 'Colours', 'Typography', 'Spacing & Grid', 'Icons', 'Shadows & Blurs',
          ],
          'Atoms', [
            'Button', 'Badge', 'Avatar', 'Input', 'Textarea', 'Label',
            'Checkbox', 'Switch', 'Radio Group', 'Select', 'Native Select',
            'Slider', 'Toggle', 'Toggle Group', 'Separator', 'Progress',
            'Skeleton', 'Spinner', 'Kbd', 'Input OTP', 'Aspect Ratio',
          ],
          'Molecules', [
            'Alert', 'Card', 'Accordion', 'Collapsible', 'Hover Card',
            'Popover', 'Tooltip', 'Breadcrumb', 'Pagination', 'Scroll Area',
            'Table', 'Calendar', 'Sonner', 'Field', 'Empty', 'Item',
            'Button Group', 'Input Group',
          ],
          'Organisms', [
            'Dialog', 'Alert Dialog', 'Sheet', 'Drawer', 'Tabs',
            'Dropdown Menu', 'Context Menu', 'Navigation Menu', 'Menubar',
            'Command', 'Combobox', 'Date Picker', 'Carousel', 'Chart',
            'Resizable', 'Data Table', 'Sidebar',
          ],
        ],
      },
    },
    a11y: { test: 'todo' },
  },
};

export default preview;
