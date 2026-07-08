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
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.12)',
      },
      borderRadius: {
        card: '8px',
      },
    },
  },
  plugins: [],
} satisfies Config;
