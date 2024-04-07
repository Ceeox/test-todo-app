import stylex from "@stylexjs/stylex";

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

export const width = stylex.defineVars({
  none: "0px",
  xs: "1px",
  sm: "2px",
  md: "4px",
  lg: "8px",
  xl: "16px",
  xxl: "32px",
  xxxl: "48px",
});
