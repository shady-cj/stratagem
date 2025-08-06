// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Bind Tailwind's `font-sans` to the Geist font variable
        // sans: ['var(--font-geist-sans)', 'sans-serif'],
        // mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
    backgroundImage: {
        // extend background
    },
    backgroundColor: {
        // extend background colors
    },
    colors: {
        // extend colors
    },
    screens: {
        // extend responsive breakpoints
    },
    spacing: {
        // extend spacing
    },
    fontSize: {
        // extend font sizes
    }

  },
  plugins: [],
};

export default config;