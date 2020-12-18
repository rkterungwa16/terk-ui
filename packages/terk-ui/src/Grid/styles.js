import * as React from "react";
import styled from "styled-components";

import { generateMediaQueries, generateFlexStyle } from "./utils";
// TODO: Remove props from top object.
// TODO: Create PropTypes
export const StyledGrid = styled.div.attrs((props) => ({
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
  className: `${props.className ? props.className : ""} ${
    props.container ? "container" : "item"
  }`,
}))`
  ${(props) => {
    return `${generateMediaQueries(props)}`;
  }}
  ${(props) => {
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
