/**
 * shadcn/ui color theme presets for Storybook.
 *
 * Values are raw HSL channels WITHOUT the hsl() wrapper because
 * tailwind.config.js already wraps them: e.g. `hsl(var(--primary))`.
 * Setting --primary to "240 5.9% 10%" makes bg-primary render as
 * background-color: hsl(240 5.9% 10%) which is correct.
 *
 * The decorator in preview.js writes these directly to document.documentElement
 * via style.setProperty, so every component in the canvas reacts immediately.
 */
export const colorThemes = {
  zinc: {
    label: 'Zinc (Default)',
    vars: {
      '--primary':              '240 5.9% 10%',
      '--primary-foreground':   '0 0% 98%',
      '--secondary':            '240 4.8% 95.9%',
      '--secondary-foreground': '240 5.9% 10%',
      '--accent':               '240 4.8% 95.9%',
      '--accent-foreground':    '240 5.9% 10%',
      '--ring':                 '240 5.9% 10%',
    },
  },
  blue: {
    label: 'Blue',
    vars: {
      '--primary':              '221.2 83.2% 53.3%',
      '--primary-foreground':   '210 40% 98%',
      '--secondary':            '210 40% 96.1%',
      '--secondary-foreground': '222.2 47.4% 11.2%',
      '--accent':               '210 40% 96.1%',
      '--accent-foreground':    '222.2 47.4% 11.2%',
      '--ring':                 '221.2 83.2% 53.3%',
    },
  },
  rose: {
    label: 'Rose',
    vars: {
      '--primary':              '346.8 77.2% 49.8%',
      '--primary-foreground':   '355.7 100% 97.3%',
      '--secondary':            '240 4.8% 95.9%',
      '--secondary-foreground': '240 5.9% 10%',
      '--accent':               '346.8 77.2% 95%',
      '--accent-foreground':    '346.8 77.2% 30%',
      '--ring':                 '346.8 77.2% 49.8%',
    },
  },
  green: {
    label: 'Green',
    vars: {
      '--primary':              '142.1 76.2% 36.3%',
      '--primary-foreground':   '355.7 100% 97.3%',
      '--secondary':            '240 4.8% 95.9%',
      '--secondary-foreground': '240 5.9% 10%',
      '--accent':               '142.1 76.2% 92%',
      '--accent-foreground':    '142.1 76.2% 20%',
      '--ring':                 '142.1 76.2% 36.3%',
    },
  },
  orange: {
    label: 'Orange',
    vars: {
      '--primary':              '24.6 95% 53.1%',
      '--primary-foreground':   '60 9.1% 97.8%',
      '--secondary':            '240 4.8% 95.9%',
      '--secondary-foreground': '240 5.9% 10%',
      '--accent':               '24.6 95% 95%',
      '--accent-foreground':    '24.6 95% 30%',
      '--ring':                 '24.6 95% 53.1%',
    },
  },
  violet: {
    label: 'Violet',
    vars: {
      '--primary':              '263.4 70% 50.4%',
      '--primary-foreground':   '210 40% 98%',
      '--secondary':            '240 4.8% 95.9%',
      '--secondary-foreground': '240 5.9% 10%',
      '--accent':               '263.4 70% 95%',
      '--accent-foreground':    '263.4 70% 30%',
      '--ring':                 '263.4 70% 50.4%',
    },
  },
};

/**
 * Border radius presets.
 * tailwind.config.js maps --radius → rounded-lg, rounded-md, rounded-sm
 * via calc(var(--radius) - Npx), so changing this one var reshapes all components.
 */
export const radiusPresets = {
  none:    '0rem',
  xs:      '0.125rem',
  sm:      '0.25rem',
  md:      '0.375rem',
  default: '0.5rem',
  lg:      '0.75rem',
  xl:      '1rem',
  '2xl':   '1.5rem',
};
