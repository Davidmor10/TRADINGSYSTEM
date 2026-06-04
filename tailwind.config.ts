import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          0: '#030305',
          1: '#07070d',
          2: '#0c0c14',
          3: '#111119',
          4: '#16161f',
          5: '#1c1c27',
        },
        border: {
          DEFAULT: '#2a2a3a',
          bright:  '#3d3d52',
          gold:    'rgba(201,168,76,0.3)',
        },
        gold: {
          DEFAULT: '#c9a84c',
          bright:  '#e2b96f',
          dim:     '#a07830',
          muted:   'rgba(201,168,76,0.12)',
          glow:    'rgba(201,168,76,0.25)',
        },
        silver: {
          DEFAULT: '#a8a8c0',
          bright:  '#d0d0e8',
          dim:     '#707088',
          muted:   'rgba(168,168,192,0.10)',
        },
        bull:  { DEFAULT: '#3dba78', dim: '#2d9660', muted: 'rgba(61,186,120,0.12)' },
        bear:  { DEFAULT: '#e05555', dim: '#b83e3e', muted: 'rgba(224,85,85,0.12)'  },
        brand: { DEFAULT: '#c9a84c', dim: '#a07830', glow: 'rgba(201,168,76,0.25)' },
        ink: {
          0: '#ffffff',
          1: '#eeeef8',
          2: '#b8b8cc',
          3: '#707088',
          4: '#404055',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        gold:    '0 0 24px rgba(201,168,76,0.35)',
        'gold-sm': '0 0 10px rgba(201,168,76,0.2)',
        card:    '0 1px 4px rgba(0,0,0,0.7)',
        inner:   'inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9a84c 0%, #e2b96f 50%, #a07830 100%)',
        'card-gradient': 'linear-gradient(160deg, #111119 0%, #0c0c14 100%)',
        'hero-gradient': 'radial-gradient(ellipse at top, rgba(201,168,76,0.08) 0%, transparent 60%)',
      },
      animation: {
        'fade-in':    'fadeIn 0.2s ease',
        'slide-up':   'slideUp 0.25s ease',
        'pulse-slow': 'pulse 3s infinite',
        'shimmer':    'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn:  { from: { opacity: '0' },                           to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(12px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        shimmer: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.5' } },
      },
    },
  },
  plugins: [],
}

export default config
