import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        coal: '#111827',
        paper: '#f8fafc',
        mist: '#e2e8f0',
        cyan: '#0891b2',
        blue: '#2563eb',
        night: '#070b14',
        navy: '#0a1224',
        electric: '#22d3ee',
        gold: '#d6a84b',
        bronze: '#9a652d',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.12)',
        deep: '0 30px 80px rgba(2, 6, 23, 0.38)',
        glow: '0 0 0 1px rgba(34, 211, 238, 0.18), 0 24px 70px rgba(8, 145, 178, 0.18)',
      },
      borderRadius: {
        card: '14px',
      },
    },
  },
  plugins: [],
} satisfies Config;
