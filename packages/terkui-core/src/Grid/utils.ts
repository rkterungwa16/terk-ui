import { devices } from "../utils/breakpoints/breakpoints";

/**
 *
 * @param {Number} size
 */
export function generateGridWidth(size?: string | number) {
  if (!size) return "max-width: 100%;";
  const width = (Number(size) / 12) * 100;
  return `max-width: ${width}%;`;
}

export interface BreakpointProps {
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
}

/**
 *
 * @param {Object} props
 * @param {Number} props.xs breakpoint width for mobile devices
 * @param {Number} props.sm breakpoint width for mobile devices
 * @param {Number} props.md breakpoint width for tablets
 * @param {Number} props.lg breakpoint width for desktop
 *
 * @returns {String} media queries
 */
export function generateMediaQueries({ xs, sm, md, lg }: BreakpointProps) {
  return `
    ${
      xs
        ? `
        ${generateGridWidth(xs)}
        flex-basis: ${(Number(xs) / 12) * 100}%;
        box-sizing: border-box;
      `
        : ""
    }
    ${
      sm
        ? `@media only screen and ${devices.sm} {
        ${generateGridWidth(sm)}
        flex-basis: ${(Number(sm) / 12) * 100}%;
        box-sizing: border-box;
      }`
        : ""
    }
    ${
      md
        ? `@media only screen and ${devices.md} {
        ${generateGridWidth(md)}
        flex-basis: ${(Number(md) / 12) * 100}%;
        box-sizing: border-box;
      }`
        : ""
    }
    ${
      lg
        ? `@media only screen and ${devices.lg} {
        ${generateGridWidth(lg)}
        flex-basis: ${(Number(lg) / 12) * 100}%;
        box-sizing: border-box;
      }`
        : ""
    }
  `;
}

export interface FlexStyleProps {
  direction?: string;
  justify?: string;
  alignItems?: string;
  alignContent?: string;
  flex?: boolean;
}

/**
 *
 * @param {Object} flexProperties
 * @param {String} flexProperties.direction
 * @param {String} flexProperties.justify
 * @param {String} flexProperties.alignItems
 * @param {String} flexProperties.alignContent
 * @param {String} flexProperties.xs
 *
 * @returns {String} flex styles
 */
export function generateFlexStyle({
  direction,
  justify,
  alignItems,
  alignContent,
  flex
}: FlexStyleProps) {
  return `
    ${flex ? `display: flex;` : ""}
    ${direction ? `flex-direction: ${direction};` : ""}
    ${justify ? `justify-content: ${justify};` : ""}
    ${alignItems ? `align-items: ${alignItems};` : ""}
    ${alignContent ? `align-content: ${alignContent};` : ""}
    flex-grow: 1;
  `;
}
