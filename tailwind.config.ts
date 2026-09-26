import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ---- Surfaces: warm cream/white base — intentionally NOT a dark/black
        // theme. Soft ivory steps replace the previous near-black charcoal
        // scale so the site reads light, warm and airy. ----
        surface: "#faf6ee",
        "surface-dim": "#efe6d3",
        "surface-bright": "#fffdf8",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f6f0e3",
        "surface-container": "#f1e9d7",
        "surface-container-high": "#eadfc6",
        "surface-container-highest": "#e2d4b4",
        "surface-variant": "#e8dcc0",
        "on-surface": "#2b241c",
        "on-surface-variant": "#6f6350",
        "inverse-surface": "#2b241c",
        "inverse-on-surface": "#faf6ee",
        outline: "#cbbd9e",
        "outline-variant": "#e2d4b4",
        "surface-tint": "#d6127c",
        background: "#faf6ee",
        "on-background": "#2b241c",

        // ---- Primary: the ONE brand accent — SPORTIME magenta/pink, taken
        // from the logo's gradient ring. No second accent hue elsewhere. ----
        primary: "#d6127c",
        "on-primary": "#ffffff",
        "primary-container": "#d6127c",
        "on-primary-container": "#ffffff",
        "inverse-primary": "#d6127c",
        "primary-fixed": "#f6d9ea",
        "primary-fixed-dim": "#d6127c",
        "on-primary-fixed": "#2b241c",
        "on-primary-fixed-variant": "#7a0e49",

        // ---- Secondary: warm neutral grayscale for body copy ----
        secondary: "#867a63",
        "on-secondary": "#ffffff",
        "secondary-container": "#e8dcc0",
        "on-secondary-container": "#4a4030",
        "secondary-fixed": "#f1e9d7",
        "secondary-fixed-dim": "#a89a7c",
        "on-secondary-fixed": "#2b241c",
        "on-secondary-fixed-variant": "#5c5140",

        // ---- Tertiary: retired as a color accent — aliased to the dark
        // neutral ink tone so status-dot usage reads as plain neutral. ----
        tertiary: "#2b241c",
        "on-tertiary": "#faf6ee",
        "tertiary-container": "#e2d4b4",
        "on-tertiary-container": "#2b241c",
        "tertiary-fixed": "#eadfc6",
        "tertiary-fixed-dim": "#4a4030",
        "on-tertiary-fixed": "#2b241c",
        "on-tertiary-fixed-variant": "#4a4030",

        // ---- Error: kept semantic, distinct enough from the brand pink ----
        error: "#c4261a",
        "on-error": "#ffffff",
        "error-container": "#ffdad4",
        "on-error-container": "#410e0b",

        // WhatsApp CTA: neutral dark-ink action button, chat icon carries
        // the meaning instead of a green fill.
        whatsapp: "#2b241c",
      },
      fontFamily: {
        "display-xl": ["var(--font-manrope)"],
        "display-lg": ["var(--font-manrope)"],
        "headline-lg": ["var(--font-manrope)"],
        "headline-md": ["var(--font-manrope)"],
        "body-lg": ["var(--font-manrope)"],
        "body-md": ["var(--font-manrope)"],
        "body-sm": ["var(--font-manrope)"],
        "label-lg": ["var(--font-manrope)"],
        "label-md": ["var(--font-manrope)"],
        "label-sm": ["var(--font-manrope)"],
      },
      fontSize: {
        // Headings: Manrope 700–800 — strong hierarchy, still legible (no
        // condensed/bodybuilding-style face).
        "display-xl": ["76px", { lineHeight: "80px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-xl-mobile": ["42px", { lineHeight: "46px", letterSpacing: "-0.01em", fontWeight: "800" }],
        "display-lg": ["52px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-lg-mobile": ["34px", { lineHeight: "38px", letterSpacing: "-0.01em", fontWeight: "800" }],
        "headline-lg": ["30px", { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-md": ["22px", { lineHeight: "28px", letterSpacing: "-0.005em", fontWeight: "700" }],
        // Body: Manrope 400
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["15px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["13px", { lineHeight: "20px", fontWeight: "400" }],
        // Labels / UI accents: Manrope 500–600, tracking eased slightly
        // (was 0.06–0.1em) for a calmer, less "shouty" uppercase feel.
        "label-lg": ["14px", { lineHeight: "18px", letterSpacing: "0.04em", fontWeight: "600" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "500" }],
        "label-sm": ["10px", { lineHeight: "14px", letterSpacing: "0.08em", fontWeight: "500" }],
      },
      spacing: {
        gutter: "1.5rem",
        "gutter-mobile": "1rem",
        margin: "3rem",
        "margin-mobile": "1.25rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "3rem",
      },
      // Restrained, mostly-sharp scale. Not forced to 0 anymore — a "çok
      // hafif" radius is now available for future component work, but
      // nothing in the current components applies a `rounded` class, so
      // this introduces no visual change on its own.
      borderRadius: {
        none: "0px",
        DEFAULT: "2px",
        sm: "2px",
        md: "4px",
        lg: "6px",
        xl: "8px",
        full: "9999px",
      },
      // Shadows pulled way back from Tailwind's soft/glowy defaults —
      // tighter spread, darker, less blur. Premium relies on spacing and
      // contrast, not drop-shadow glow.
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.30)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.35)",
        md: "0 4px 10px -2px rgb(0 0 0 / 0.35)",
        lg: "0 8px 20px -4px rgb(0 0 0 / 0.35)",
        xl: "0 12px 28px -6px rgb(0 0 0 / 0.35)",
        "2xl": "0 16px 32px -8px rgb(0 0 0 / 0.35)",
        none: "none",
      },
      // Global default transition feel (applies wherever a component uses
      // a bare `transition` / `transition-colors` / `transition-all` class
      // with no explicit duration-*/ease-* override). A touch slower and
      // smoother than Tailwind's snappy default — closer to an Apple-style
      // deceleration curve.
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
