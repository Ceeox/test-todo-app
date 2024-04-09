import stylex from "@stylexjs/stylex";

const SM = "@media (width < 640px)";
const MD = "@media (width < 768px)";
const LG = "@media (width < 1024px)";
const XL = "@media (width < 1280px)";
const XXL = "@media (width < 1536px)";

// A constant can be used to avoid repeating the media query
const DARK = "@media (prefers-color-scheme: dark)";

// created from https://www.hover.dev/css-color-palette-generator
export const colors = stylex.defineVars({
  primary: "#00ccaa",
  primaryContent: "#000000",
  primaryLight: "#00ffd4",
  primaryDark: "#00997f",

  secondary: "#4400cc",
  secondaryContent: "#ddccff",
  secondaryLight: "#5500ff",
  secondaryDark: "#330099",

  forground: { default: "#fbfbfb", [DARK]: "#232928" },
  background: { default: "#eff1f0", [DARK]: "#181b1b" },

  border: { default: "#dde2e1", [DARK]: "#3b4543" },

  font: { default: "#232928", [DARK]: "#fbfbfb" },
  fontLight: { default: "#5e6e6b", [DARK]: "#d6dcdb" },
  fontLighter: { default: "#849592", [DARK]: "#9facaa" },

  success: "#00cc00",
  warning: "#cccc00",
  error: "#cc0000",

  successContent: "#ccffcc",
  warningContent: "#000000",
  errorContent: "#ffcccc",
});

export const spacing = stylex.defineVars({
  none: "0px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "20px",
  xl: "32px",
  xxl: "48px",
  xxxl: "96px",
});

export const text = stylex.defineVars({
  xs: "0.75rem",
  sm: "0.75rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
});

export const lineHeight = stylex.defineVars({
  xs: "1rem",
  sm: "1.25rem",
  base: "1.5rem",
  lg: "1.75rem",
  xl: "1.75rem",
  "2xl": "2rem",
  "3xl": "2.25rem",
  "4xl": "2.5rem",
  "5xl": "1",
});

export const padding = stylex.defineVars({
  "0": "0px",
  px: "1px",
  "0.5": "0.5rem",
  "1": "0.25rem",
  "1.5": "0.375rem",
  "2": "0.5rem",
  "2.5": "0.625rem",
  "3": "0.75rem",
  "3.5": "0.875rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.75rem",
  "8": "2rem",
  "9": "2.25rem",
  "10": "2.5rem",
  "11": "2.75rem",
  "12": "3rem",
  "14": "3.5rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "28": "7rem",
  "32": "8rem",
  "36": "9rem",
  "40": "10rem",
  "44": "11rem",
  "48": "12rem",
  "52": "13rem",
  "56": "14rem",
  "60": "15rem",
  "64": "16rem",
  "72": "18rem",
  "80": "20rem",
  "96": "24rem",
});
export const margin = padding;

export const borderRadius = stylex.defineVars({
  none: "0px",
  sm: "0.125rem",
  default: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  xxl: "1rem",
  xxxl: "1.5rem",
  full: "9999px",
});

export const borderWidth = stylex.defineVars({
  none: "0px",
  sm: "1px",
  md: "2px",
  lg: "4px",
  xl: "8px",
});

export const blur = stylex.defineVars({
  none: "blur(0)",
  sm: "blur(4px)",
  default: "blur(8px)",
  md: "blur(12px)",
  lg: "blur(16px)",
  xl: "blur(24px)",
  xxl: "blur(40px)",
  xxxl: "blur(64px)",
});

export const shadow = stylex.defineVars({
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05);",
  default: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: " 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  xxl: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  none: "0 0 #0000",
});
