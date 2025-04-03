import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Color System
      colors: {
        // Base colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Brand colors
        purple: {
          50: "#f5f0ff",
          100: "#e9d8ff",
          200: "#d6bcff",
          300: "#9d78ff",
          DEFAULT: "#663399",
          600: "#5b2e8a",
          700: "#4a2370",
          800: "#3a1c57",
          900: "#2a143f",
        },

        // Semantic colors
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Sidebar colors
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      // Border Radius
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // Animations
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { transform: "translateX(-20px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "spin-reverse": {
          to: { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-in": "slide-in 0.5s ease-out forwards",
        "spin-slow": "spin 3s linear infinite",
        "spin-reverse": "spin-reverse 3s linear infinite",
      },

      // Custom Utilities
      boxShadow: {
        glow: "0 0 10px 2px hsl(var(--ring))",
        "glow-sm": "0 0 5px 1px hsl(var(--ring))",
      },
    },
  },
  plugins: [
    animatePlugin,
    plugin(({ addUtilities }) => {
      addUtilities({
        // Scrollbar styling
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "hsl(var(--muted)) hsl(var(--background))",
        },
        ".scrollbar-hidden": {
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        },
        
        // Text stroke
        ".text-stroke": {
          "-webkit-text-stroke": "1px hsl(var(--foreground))",
          "text-stroke": "1px hsl(var(--foreground))",
        },
      });
    }),
  ],
} satisfies Config;