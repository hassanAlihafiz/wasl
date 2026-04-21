/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050810",
          900: "#060a14",
          800: "#0a1020",
          700: "#0f1728",
          600: "#152238",
        },
        brand: {
          blue: "#2563eb",
          glow: "#3b5bdb",
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255,255,255,0.06) inset",
        nav: "0 12px 40px rgba(0, 0, 0, 0.45)",
        cta: "0 8px 24px rgba(37, 99, 235, 0.35)",
      },
    },
  },
  plugins: [],
};