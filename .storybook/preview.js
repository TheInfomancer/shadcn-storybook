import '../src/index.css';
import { colorThemes, radiusPresets } from '../src/themes/themes';

// ── Global toolbar controls ────────────────────────────────────────────────

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Color theme',
    defaultValue: 'zinc',
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
// Applies the selected theme's CSS variables directly to <html> so every
// shadcn component in the canvas inherits them without any wrapper element.

export const decorators = [
  (Story, context) => {
    const themeName = context.globals.theme    ?? 'zinc';
    const radiusKey = context.globals.radius   ?? 'default';
    const darkMode  = context.globals.darkMode ?? 'light';
    const theme     = colorThemes[themeName]   ?? colorThemes.zinc;
    const radius    = radiusPresets[radiusKey] ?? '0.625rem';

    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([key, value]) => root.style.setProperty(key, value));
    root.style.setProperty('--radius', radius);
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
            'Resizable', 'Data Table',
          ],
        ],
      },
    },
    a11y: { test: 'todo' },
  },
};

export default preview;
