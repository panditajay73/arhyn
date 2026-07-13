import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0D10",
          soft: "#12151A",
          raised: "#181C22",
        },
        paper: "#EDEBE4",
        dim: "#9A9CA1",
        line: "rgba(237,235,228,0.09)",
        amber: {
          DEFAULT: "#E8A33D",
          soft: "#F2C879",
          dim: "rgba(232,163,61,0.14)",
        },
        wire: {
          DEFAULT: "#6FA8A0",
          soft: "#9CC4BE",
        },
      },
      fontFamily: {
        display: ["var(--font-grotesk)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        flicker: {
          "0%, 18%, 22%, 25%, 53%, 57%, 100%": { opacity: "1" },
          "20%, 24%, 55%": { opacity: "0.35" },
        },
        drift: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        pulseLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        flicker: "flicker 4.5s ease-in-out 1",
        drift: "drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
