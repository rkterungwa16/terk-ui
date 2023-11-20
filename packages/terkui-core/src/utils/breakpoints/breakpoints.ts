export const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
};

// Mobile Devices – 320px—480px
export const MOBILE = 480;
// iPads and Tablets – 481px—768px
export const TABLETS = 768;
// Laptops and small screen – 769px—1024px
export const LAPTOPS = 1024;
// Large screens and Desktops – 1025px—1200px
export const DESKTOPS = 1200;
// TV and Extra Large Screens – 1201px and more
export const LARGETV = 1536;

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type Devices = {
  [size: string]: string;
};

export const devices: Devices = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  "2xl": `(min-width: ${breakpoints["2xl"]})`
};
