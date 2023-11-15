import styled from "styled-components";
import { generateComponentBoxAreaStyle } from "../../utils/box-area";
import { StyledHeaderProps } from "./types";

export const StyledHeader = styled.header`
  ${(props: StyledHeaderProps) => {
    const {
      $width,
      $height,
      $zIndex,
      $top,
      $bottom,
      $left,
      $right,
      $display,
      $justifyContent,
      $alignItems,
      $background,
      $borderBottom,
      $boxShadow,
      ...others
    } = props;
    const style = `
      ${$width ? `width: ${$width};` : ""}
      ${$height ? `height: ${$height};` : ""}
      ${$zIndex ? `z-index: ${$zIndex};` : ""}
      ${$top ? `top: ${$top};` : ""}
      ${$bottom ? `bottom: ${$bottom};` : ""}
      ${$left ? `right: ${$left};` : ""}
      ${$right ? `right: ${$right};` : ""}

      ${$background ? `background: ${$background};` : ""}
      ${$borderBottom ? `border-bottom: ${$borderBottom};` : ""}
      ${$boxShadow ? `box-shadow: ${$boxShadow};` : ""}

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

