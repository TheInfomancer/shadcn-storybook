/**
 * shadcn/ui color theme presets for Storybook.
 *
 * Values are complete OKLCH colors because @theme inline in index.css uses
 * `--color-primary: var(--primary)` — a direct reference with no hsl() wrapper.
 * The decorator in preview.js writes these to document.documentElement via
 * style.setProperty, so every component in the canvas reacts immediately.
 *
 * Hue references (approximate):
 *   0   = red/rose    50  = orange    90  = yellow
 *   145 = green       200 = teal      260 = blue
 *   285 = violet      330 = pink
 */

export const colorThemes = {
  neutral: {
    label: 'Neutral (Default)',
    vars: {
      '--primary':              'oklch(0.205 0 0)',
      '--primary-foreground':   'oklch(0.985 0 0)',
      '--secondary':            'oklch(0.97 0 0)',
      '--secondary-foreground': 'oklch(0.205 0 0)',
      '--accent':               'oklch(0.97 0 0)',
      '--accent-foreground':    'oklch(0.205 0 0)',
      '--ring':                 'oklch(0.708 0 0)',
    },
  },
  blue: {
    label: 'Blue',
    vars: {
      '--primary':              'oklch(0.546 0.215 262)',
      '--primary-foreground':   'oklch(0.97 0.01 262)',
      '--secondary':            'oklch(0.94 0.03 262)',
      '--secondary-foreground': 'oklch(0.2 0.05 262)',
      '--accent':               'oklch(0.94 0.03 262)',
      '--accent-foreground':    'oklch(0.2 0.05 262)',
      '--ring':                 'oklch(0.546 0.215 262)',
    },
  },
  rose: {
    label: 'Rose',
    vars: {
      '--primary':              'oklch(0.567 0.229 12)',
      '--primary-foreground':   'oklch(0.97 0.01 12)',
      '--secondary':            'oklch(0.94 0.02 12)',
      '--secondary-foreground': 'oklch(0.2 0.05 12)',
      '--accent':               'oklch(0.94 0.02 12)',
      '--accent-foreground':    'oklch(0.2 0.05 12)',
      '--ring':                 'oklch(0.567 0.229 12)',
    },
  },
  green: {
    label: 'Green',
    vars: {
      '--primary':              'oklch(0.527 0.163 145)',
      '--primary-foreground':   'oklch(0.97 0.01 145)',
      '--secondary':            'oklch(0.93 0.04 145)',
      '--secondary-foreground': 'oklch(0.2 0.05 145)',
      '--accent':               'oklch(0.93 0.04 145)',
      '--accent-foreground':    'oklch(0.2 0.05 145)',
      '--ring':                 'oklch(0.527 0.163 145)',
    },
  },
  orange: {
    label: 'Orange',
    vars: {
      '--primary':              'oklch(0.705 0.19 53)',
      '--primary-foreground':   'oklch(0.2 0.04 53)',
      '--secondary':            'oklch(0.94 0.04 53)',
      '--secondary-foreground': 'oklch(0.2 0.05 53)',
      '--accent':               'oklch(0.94 0.04 53)',
      '--accent-foreground':    'oklch(0.2 0.05 53)',
      '--ring':                 'oklch(0.705 0.19 53)',
    },
  },
  violet: {
    label: 'Violet',
    vars: {
      '--primary':              'oklch(0.542 0.222 285)',
      '--primary-foreground':   'oklch(0.97 0.01 285)',
      '--secondary':            'oklch(0.93 0.04 285)',
      '--secondary-foreground': 'oklch(0.2 0.05 285)',
      '--accent':               'oklch(0.93 0.04 285)',
      '--accent-foreground':    'oklch(0.2 0.05 285)',
      '--ring':                 'oklch(0.542 0.222 285)',
    },
  },
};

/**
 * Border radius presets.
 * The @theme inline block derives --radius-sm/md/lg/xl as proportional
 * multiples of --radius, so changing this one variable reshapes all corners.
 * Default matches the shadcn/ui base (0.625rem = 10px).
 */
export const radiusPresets = {
  none:    '0rem',
  xs:      '0.125rem',
  sm:      '0.25rem',
  md:      '0.375rem',
  default: '0.625rem',
  lg:      '0.75rem',
  xl:      '1rem',
  '2xl':   '1.5rem',
};
