const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },

        "r11y-red": "rgb(var(--r11y-red) / <alpha-value>)",
        "r11y-orange": "rgb(var(--r11y-orange) / <alpha-value>)",
        "r11y-yellow": "rgb(var(--r11y-yellow) / <alpha-value>)",
        "r11y-lime": "rgb(var(--r11y-lime) / <alpha-value>)",
        "r11y-green": "rgb(var(--r11y-green) / <alpha-value>)",
        "r11y-emerald": "rgb(var(--r11y-emerald) / <alpha-value>)",
        "r11y-cyan": "rgb(var(--r11y-cyan) / <alpha-value>)",
        "r11y-blue": "rgb(var(--r11y-blue) / <alpha-value>)",
        "r11y-indigo": "rgb(var(--r11y-indigo) / <alpha-value>)",
        "r11y-purple": "rgb(var(--r11y-purple) / <alpha-value>)",
        "r11y-fuchsia": "rgb(var(--r11y-fuchsia) / <alpha-value>)",
        "r11y-pink": "rgb(var(--r11y-pink) / <alpha-value>)",
      },
      fontFamily: {
        r11y: ["Reactuality"],
      },
    },
  },

  plugins: [forms({ strategy: "class" }), typography],
};

module.exports = config;
