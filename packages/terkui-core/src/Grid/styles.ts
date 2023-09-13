import { ReactNode } from "react";
import styled from "styled-components";

import { generateMediaQueries, generateFlexStyle, BreakpointProps, FlexStyleProps } from "./utils";

// TODO: Remove props from top object.
// TODO: Create PropTypes
export interface GridProps extends FlexStyleProps, BreakpointProps {
  className?: string;
  container?: boolean;
  item?: boolean;
  spacing?: number;
  children?: ReactNode;
}
export const StyledGrid = styled.div.attrs((props: GridProps) => ({
  xs: props.xs,
  sm: props.sm,
  md: props.md,
  lg: props.lg,
  item: props.item,
  container: props.container,
  direction: props.direction,
  justify: props.justify,
  alignContent: props.alignContent,
  alignItems: props.alignItems,
  flex: props.flex,
  spacing: props.spacing,
  className: `${props.className ? props.className : ""} ${props.container ? "container" : "item"}`
}))`
  ${(props: GridProps) => {
    return `${generateMediaQueries(props)}`;
  }}
  ${(props: GridProps) => {
    if (props.container && !props.item) {
      return `
        &.container {
          flex-wrap: wrap;
          display: flex;
          box-sizing: border-box;
          ${generateFlexStyle(props)}
        }
        ${
          props.spacing
            ? `
            &.container > &.item {
              padding: ${props.spacing * 4}px
            }
            &.container {
              width: calc(100% + ${props.spacing * 8}px);
              margin: -${props.spacing * 4}px;
            }
            `
            : ""
        }
      `;
    }

    if (props.item && !props.container) {
      return `
        &.item {
          ${generateMediaQueries(props)}
          ${generateFlexStyle(props)}
        }
      `;
    }
  }}
`;
