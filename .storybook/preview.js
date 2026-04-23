import '../src/index.css';
import { colorThemes, radiusPresets } from '../src/themes/themes';

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
};

// ── Theme decorator ────────────────────────────────────────────────────────
// Applies the full light or dark var set for the selected theme as inline
// styles on <html>. We clear the previous set first so stale values never
// linger when switching themes or modes.

let _appliedVarKeys = [];

export const decorators = [
  (Story, context) => {
    const themeName = context.globals.theme    ?? 'neutral';
    const radiusKey = context.globals.radius   ?? 'default';
    const darkMode  = context.globals.darkMode ?? 'light';
    const theme     = colorThemes[themeName]   ?? colorThemes.neutral;
    const radius    = radiusPresets[radiusKey] ?? '0.625rem';
    const vars      = darkMode === 'dark' ? theme.dark : theme.light;

    const root = document.documentElement;

    // Clear previously applied inline vars to avoid stale overrides
    _appliedVarKeys.forEach(key => root.style.removeProperty(key));

    // Apply current theme + mode vars
    Object.entries(vars).forEach(([key, value]) => root.style.setProperty(key, value));
    root.style.setProperty('--radius', radius);
    _appliedVarKeys = [...Object.keys(vars), '--radius'];

    // Keep .dark class for Tailwind dark: utility variants
    root.classList.toggle('dark', darkMode === 'dark');

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
