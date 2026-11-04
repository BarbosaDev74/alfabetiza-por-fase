import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './config/**/*.ts'],
  theme: {
    extend: {
      colors: {
        creme: '#FDF8F0',
        tinta: '#1F2A37',
        suave: '#4B5563',
        teal: { DEFAULT: '#0F6E6E', escuro: '#0B5555', claro: '#E3F1F0' },
        compra: { DEFAULT: '#F2994A', hover: '#EE8530' },
        f1: { DEFAULT: '#F28B82', pastel: '#FDE8E6', forte: '#B4433A' },
        f2: { DEFAULT: '#F2994A', pastel: '#FDEBDB', forte: '#A35512' },
        f3: { DEFAULT: '#F2C14E', pastel: '#FCF2D6', forte: '#8A6408' },
        f4: { DEFAULT: '#5CB85C', pastel: '#E3F3E3', forte: '#2E7D32' },
      },
      fontFamily: {
        titulo: ['var(--font-fredoka)', 'ui-rounded', 'system-ui', 'sans-serif'],
        corpo: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: ['clamp(2.25rem, 1.6rem + 2.9vw, 3.75rem)', { lineHeight: '1.08' }],
        h2: ['clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)', { lineHeight: '1.12' }],
        corpo: ['1.125rem', { lineHeight: '1.65' }],
      },
      borderRadius: { card: '1.5rem', grande: '1.75rem', medio: '1.25rem' },
      boxShadow: {
        suave: '0 1px 2px rgba(31,42,55,.04), 0 8px 24px -8px rgba(31,42,55,.12)',
        alta: '0 2px 4px rgba(31,42,55,.05), 0 24px 48px -16px rgba(31,42,55,.22)',
        folha: '0 1px 2px rgba(31,42,55,.08), 0 12px 28px -10px rgba(31,42,55,.28)',
      },
      maxWidth: { site: '76rem' },
    },
  },
  plugins: [],
};
export default config;
