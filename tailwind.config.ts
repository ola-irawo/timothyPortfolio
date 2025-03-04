import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        softblue: "#407BFF"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },      
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        slideIn: 'slideIn 1s ease-out forwards',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme, addUtilities }) {
      addBase({
        body: {
          backgroundColor: theme("colors.background"),
          color: theme("colors.foreground"),
        },
        // h1: {
        //   fontSize: theme("fontSize.4xl"),
        //   fontWeight: theme("fontWeight.bold"),
        // },
        html : {
          scrollBehavior: "smooth",
          padding: 0,
          margin: 0,
        },
      });
      
      addUtilities({
        ".animate-fadeIn": {
          animation: "fadeIn 1s ease-in forwards",
        },
        ".animate-slideIn": {
          animation: "slideIn 1s ease-out forwards",
        },
      });
    }),
  ],
} satisfies Config;
