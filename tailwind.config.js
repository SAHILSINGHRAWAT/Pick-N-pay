/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          foreground: '#fff',
        },
        secondary: {
          DEFAULT: '#64748b',
          foreground: '#fff',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#fff',
        },
        muted: {
          DEFAULT: '#f3f4f6',
          foreground: '#374151',
        },
        accent: {
          DEFAULT: '#fbbf24',
          foreground: '#fff',
        },
        popover: {
          DEFAULT: '#fff',
          foreground: '#374151',
        },
        card: {
          DEFAULT: '#fff',
          foreground: '#374151',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
