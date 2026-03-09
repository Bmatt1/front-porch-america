import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0a0a0a',
        charcoal: {
          900: '#0a0a0a',
          800: '#141414',
          700: '#1e1e1e',
          600: '#2a2a2a',
        },
        porch: {
          red: '#c41e3a',
          'red-glow': 'rgba(196,30,58,0.4)',
          blue: '#0a3161',
          cream: '#f5f5dc',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'cinematic': 'clamp(3rem, 8vw, 7rem)',
        'cinematic-sm': 'clamp(2rem, 5vw, 4.5rem)',
      },
    },
  },
  plugins: [],
};
export default config;
