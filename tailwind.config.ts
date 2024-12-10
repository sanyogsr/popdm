import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg: "#f2f2f2",
        shadow: "#00000080",
      },
      boxShadow: {
        brutal: "8px 8px 0px #000",
      },
    },
  },
  plugins: [],
} satisfies Config;
