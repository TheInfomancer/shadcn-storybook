/**
 * shadcn/ui base color theme presets for Storybook.
 *
 * Values are the exact OKLCH colors from the shadcn/ui v4 registry:
 *   https://github.com/shadcn-ui/ui/tree/main/apps/v4/public/r
 *
 * Because @theme inline in index.css uses `--color-primary: var(--primary)`
 * (a direct reference with no hsl() wrapper), these values must be complete
 * CSS color expressions — not raw HSL channels.
 *
 * The decorator in preview.js writes the active theme's vars to
 * document.documentElement so every component updates instantly.
 *
 * Hue notes (OKLCH hue in degrees):
 *   Neutral  0    — pure achromatic, no hue
 *   Zinc     ~286 — cool blue-gray
 *   Stone    ~49  — warm yellow-gray
 *   Mauve    ~322 — purple-gray
 *   Olive    ~107 — yellow-green gray
 *   Mist     ~214 — blue-teal gray
 *   Taupe    ~43  — warm brown-gray
 */

export const colorThemes = {

  // ── Pure achromatic (no hue shift) ─────────────────────────────────────────
  neutral: {
    label: 'Neutral',
    vars: {
      '--background':           'oklch(1 0 0)',
      '--foreground':           'oklch(0.145 0 0)',
      '--primary':              'oklch(0.205 0 0)',
      '--primary-foreground':   'oklch(0.985 0 0)',
      '--secondary':            'oklch(0.97 0 0)',
      '--secondary-foreground': 'oklch(0.205 0 0)',
      '--muted':                'oklch(0.97 0 0)',
      '--muted-foreground':     'oklch(0.556 0 0)',
      '--accent':               'oklch(0.97 0 0)',
      '--accent-foreground':    'oklch(0.205 0 0)',
      '--border':               'oklch(0.922 0 0)',
      '--input':                'oklch(0.922 0 0)',
      '--ring':                 'oklch(0.708 0 0)',
    },
  },

  // ── Cool blue-gray (~286°) ──────────────────────────────────────────────────
  zinc: {
    label: 'Zinc',
    vars: {
      '--background':           'oklch(1 0 0)',
      '--foreground':           'oklch(0.141 0.005 285.823)',
      '--primary':              'oklch(0.21 0.006 285.885)',
      '--primary-foreground':   'oklch(0.985 0 0)',
      '--secondary':            'oklch(0.967 0.001 286.375)',
      '--secondary-foreground': 'oklch(0.21 0.006 285.885)',
      '--muted':                'oklch(0.967 0.001 286.375)',
      '--muted-foreground':     'oklch(0.705 0.015 286.067)',
      '--accent':               'oklch(0.967 0.001 286.375)',
      '--accent-foreground':    'oklch(0.21 0.006 285.885)',
      '--border':               'oklch(0.92 0.004 286.32)',
      '--input':                'oklch(0.92 0.004 286.32)',
      '--ring':                 'oklch(0.705 0.015 286.067)',
    },
  },

  // ── Warm yellow-gray (~49°) ─────────────────────────────────────────────────
  stone: {
    label: 'Stone',
    vars: {
      '--background':           'oklch(1 0 0)',
      '--foreground':           'oklch(0.147 0.004 49.25)',
      '--primary':              'oklch(0.216 0.006 56.043)',
      '--primary-foreground':   'oklch(0.985 0.001 106.423)',
      '--secondary':            'oklch(0.97 0.001 106.424)',
      '--secondary-foreground': 'oklch(0.216 0.006 56.043)',
      '--muted':                'oklch(0.97 0.001 106.424)',
      '--muted-foreground':     'oklch(0.553 0.013 58.071)',
      '--accent':               'oklch(0.97 0.001 106.424)',
      '--accent-foreground':    'oklch(0.216 0.006 56.043)',
      '--border':               'oklch(0.923 0.003 48.717)',
      '--input':                'oklch(0.923 0.003 48.717)',
      '--ring':                 'oklch(0.709 0.01 56.259)',
    },
  },

  // ── Purple-gray (~322°) ─────────────────────────────────────────────────────
  mauve: {
    label: 'Mauve',
    vars: {
      '--background':           'oklch(1 0 0)',
      '--foreground':           'oklch(0.145 0.008 326)',
      '--primary':              'oklch(0.212 0.019 322.12)',
      '--primary-foreground':   'oklch(0.985 0 0)',
      '--secondary':            'oklch(0.96 0.003 325.6)',
      '--secondary-foreground': 'oklch(0.212 0.019 322.12)',
      '--muted':                'oklch(0.96 0.003 325.6)',
      '--muted-foreground':     'oklch(0.542 0.034 322.5)',
      '--accent':               'oklch(0.96 0.003 325.6)',
      '--accent-foreground':    'oklch(0.212 0.019 322.12)',
      '--border':               'oklch(0.922 0.005 325.62)',
      '--input':                'oklch(0.922 0.005 325.62)',
      '--ring':                 'oklch(0.711 0.019 323.02)',
    },
  },

  // ── Yellow-green gray (~107°) ───────────────────────────────────────────────
  olive: {
    label: 'Olive',
    vars: {
      '--background':           'oklch(1 0 0)',
      '--foreground':           'oklch(0.153 0.006 107.1)',
      '--primary':              'oklch(0.228 0.013 107.4)',
      '--primary-foreground':   'oklch(0.988 0.003 106.5)',
      '--secondary':            'oklch(0.966 0.005 106.5)',
      '--secondary-foreground': 'oklch(0.228 0.013 107.4)',
      '--muted':                'oklch(0.966 0.005 106.5)',
      '--muted-foreground':     'oklch(0.58 0.031 107.3)',
      '--accent':               'oklch(0.966 0.005 106.5)',
      '--accent-foreground':    'oklch(0.228 0.013 107.4)',
      '--border':               'oklch(0.93 0.007 106.5)',
      '--input':                'oklch(0.93 0.007 106.5)',
      '--ring':                 'oklch(0.737 0.021 106.9)',
    },
  },

  // ── Blue-teal gray (~214°) ──────────────────────────────────────────────────
  mist: {
    label: 'Mist',
    vars: {
      '--background':           'oklch(1 0 0)',
      '--foreground':           'oklch(0.148 0.004 228.8)',
      '--primary':              'oklch(0.218 0.008 223.9)',
      '--primary-foreground':   'oklch(0.987 0.002 197.1)',
      '--secondary':            'oklch(0.963 0.002 197.1)',
      '--secondary-foreground': 'oklch(0.218 0.008 223.9)',
      '--muted':                'oklch(0.963 0.002 197.1)',
      '--muted-foreground':     'oklch(0.56 0.021 213.5)',
      '--accent':               'oklch(0.963 0.002 197.1)',
      '--accent-foreground':    'oklch(0.218 0.008 223.9)',
      '--border':               'oklch(0.925 0.005 214.3)',
      '--input':                'oklch(0.925 0.005 214.3)',
      '--ring':                 'oklch(0.723 0.014 214.4)',
    },
  },

  // ── Warm brown-gray (~43°) ──────────────────────────────────────────────────
  taupe: {
    label: 'Taupe',
    vars: {
      '--background':           'oklch(1 0 0)',
      '--foreground':           'oklch(0.147 0.004 49.3)',
      '--primary':              'oklch(0.214 0.009 43.1)',
      '--primary-foreground':   'oklch(0.986 0.002 67.8)',
      '--secondary':            'oklch(0.96 0.002 17.2)',
      '--secondary-foreground': 'oklch(0.214 0.009 43.1)',
      '--muted':                'oklch(0.96 0.002 17.2)',
      '--muted-foreground':     'oklch(0.547 0.021 43.1)',
      '--accent':               'oklch(0.96 0.002 17.2)',
      '--accent-foreground':    'oklch(0.214 0.009 43.1)',
      '--border':               'oklch(0.922 0.005 34.3)',
      '--input':                'oklch(0.922 0.005 34.3)',
      '--ring':                 'oklch(0.714 0.014 41.2)',
    },
  },

};

/**
 * Border radius presets.
 * @theme inline derives --radius-sm/md/lg/xl as proportional multiples of
 * --radius, so changing this one variable reshapes all component corners.
 * Default matches shadcn/ui base (0.625rem = 10px).
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
