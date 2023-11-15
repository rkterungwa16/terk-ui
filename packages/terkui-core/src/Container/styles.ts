import styled from "styled-components";
import { generateComponentBoxAreaStyle } from "../utils/box-area";
import { StyledContainerProps } from "./types";
import { devices } from "../utils/breakpoints/breakpoints";

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
  `
};

export const StyledContainer = styled.div`
  ${(props: StyledContainerProps) => {
    const {
      $width,
      $height,
      $breakpoint,
      $zIndex,
      $top,
      $bottom,
      $left,
      $right,
      $display,
      $justifyContent,
      $alignItems,
      ...others
    } = props;
    const style = `
      ${$breakpoint ? breakpointWidth[$breakpoint] : ""}
      ${$width ? `width: ${$width};` : ""}
      ${$height ? `height: ${$height};` : ""}
      ${$zIndex ? `z-index: ${$zIndex};` : ""}
      ${$top ? `top: ${$top};` : ""}
      ${$bottom ? `bottom: ${$bottom};` : ""}
      ${$left ? `right: ${$left};` : ""}
      ${$right ? `right: ${$right};` : ""}

      ${$display ? `display: ${$display};` : ""}
      ${$justifyContent ? `justify-content: ${$justifyContent};` : ""}
      ${$alignItems ? `align-items: ${$alignItems};` : ""}
      ${generateComponentBoxAreaStyle({
        ...others
      })}
    `;
    return style;
  }}
`;

export const StyledHeaderContainer = styled.header`
  ${(props: StyledContainerProps) => {
    const {
      $width,
      $height,
      $breakpoint,
      $zIndex,
      $top,
      $bottom,
      $left,
      $right,
      $display,
      $justifyContent,
      $alignItems,
      ...others
    } = props;
    const style = `
      ${$breakpoint ? breakpointWidth[$breakpoint] : ""}
      ${$width ? `width: ${$width};` : ""}
      ${$height ? `height: ${$height};` : ""}
      ${$zIndex ? `z-index: ${$zIndex};` : ""}
      ${$top ? `top: ${$top};` : ""}
      ${$bottom ? `bottom: ${$bottom};` : ""}
      ${$left ? `right: ${$left};` : ""}
      ${$right ? `right: ${$right};` : ""}

      ${$display ? `display: ${$display};` : ""}
      ${$justifyContent ? `justify-content: ${$justifyContent};` : ""}
      ${$alignItems ? `align-items: ${$alignItems};` : ""}
      ${generateComponentBoxAreaStyle({
        ...others
      })}
    `;
    return style;
  }}
`;
