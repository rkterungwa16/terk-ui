import styled from "styled-components";
import { ContainerProps } from "./types";
import { generateComponentBoxAreaStyle } from "../util/box-area/box-area";
import { devices } from "../util/breakpoints/breakpoints";

export const breakpointWidth = {
  /**
   * For all with greater than sm, the width should will not exceed 540px
   * For with less than or equal to sm the width is 100%;
   */
  sm: `
    width: 100%;
    @media ${devices.sm} {
      max-width: 540px
    }
  `,
  /**
   * For all with greater than md, the width should will not exceed 720px
   * For with less than or equal to md the width is 100%;
   */
  md: `
    width: 100%;
    @media ${devices.md} {
      max-width: 720px
    }
  `,
  /**
   * For all with greater than lg, the width should will not exceed 960px
   * For with less than or equal to lg the width is 100%;
   */
  lg: `
    width: 100%;
    @media ${devices.lg} {
      max-width: 960px
    }
  `,
  /**
   * For all with greater than xl, the width should will not exceed 1140px
   * For with less than or equal to xl the width is 100%;
   */
  xl: `
    width: 100%;
    @media ${devices.xl} {
      max-width: 1140px
    }
  `,
  /**
   * For all with greater than 2xl, the width should will not exceed 1320px
   * For with less than or equal to 2xl the width is 100%;
   */
  "2xl": `
    width: 100%;
    @media ${devices["2xl"]} {
      max-width: 1320px
    }
  `,
  fluid: `
    width: 100%;
  `,
};

export const StyledHeaderContainer = styled.div`
  ${(props: ContainerProps) => {
    const {
      width,
      height,
      p,
      pb,
      pt,
      pl,
      pr,
      px,
      py,
      m,
      ml,
      mr,
      mt,
      mb,
      mx,
      my,
      breakpoint,
    } = props;
    const style = `
      width: ${width};
      height: ${height};
      ${breakpointWidth[breakpoint ? breakpoint : "fluid"]}
      top: 0;
      z-index: 999;
      ${generateComponentBoxAreaStyle({
        p,
        pb,
        pt,
        pl,
        pr,
        px,
        py,
        m,
        ml,
        mr,
        mt,
        mb,
        mx,
        my,
      })}
    `;

    if (props.display === "flex") {
      return `
        display: ${props.display};
        justify-content: ${props.justifyContent};
        align-items: ${props.alignItems};
        ${style}
      `;
    }
    return style;
  }}
`;
