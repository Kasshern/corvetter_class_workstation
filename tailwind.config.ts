import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0a0e14",
          secondary: "#141d2b",
        },
        foreground: {
          DEFAULT: "#e6edf3",
          muted: "#7d8590",
        },
        accent: {
          amber: "#f0a500",
          cyan: "#00d4ff",
        },
        border: "#1e2a3a",
        success: "#238636",
        warning: "#d29922",
        error: "#da3633",
      },
      fontFamily: {
        sans: ["var(--font-rajdhani)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
