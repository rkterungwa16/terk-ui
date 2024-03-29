import { useCallback, useEffect, useState, useRef } from "react";
import {
  Breakpoint,
  DESKTOPS,
  LAPTOPS,
  LARGETV,
  MOBILE,
  TABLETS
} from "../breakpoints/breakpoints";

const breakpoints: {
  [breakpoint: string]: (window: Window & typeof globalThis) => boolean;
} = {
  xs: (window: Window & typeof globalThis) => {
    return window.innerWidth <= MOBILE;
  },
  sm: (window: Window & typeof globalThis) => {
    return window.innerWidth <= TABLETS;
  },
  md: (window: Window & typeof globalThis) => {
    return window.innerWidth <= LAPTOPS;
  },
  lg: (window: Window & typeof globalThis) => {
    return window.innerWidth <= DESKTOPS;
  },
  xl: (window: Window & typeof globalThis) => {
    return window.innerWidth <= LARGETV;
  }
};

export function useScreenBreakpoint(breakpoint: Breakpoint) {
  const [screenIsWithinBreakpoint, confirmScreenSizeWithinBreakpoint] = useState(false);

  const timeout = useRef<NodeJS.Timeout | null>(null);

  const handleConfirmScreenSizeWithinBreakpoint = useCallback(() => {
    if (timeout?.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      confirmScreenSizeWithinBreakpoint(breakpoints[breakpoint](window));
    }, 150);
  }, [breakpoint]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleConfirmScreenSizeWithinBreakpoint);
    }
    return () => window.removeEventListener("resize", handleConfirmScreenSizeWithinBreakpoint);
  }, [handleConfirmScreenSizeWithinBreakpoint]);
  return screenIsWithinBreakpoint;
}

export default useScreenBreakpoint;
