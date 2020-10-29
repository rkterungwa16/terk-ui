import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import {
  generateGridWidth,
  generateMediaQueries,
  generateFlexStyle,
} from "./utils";

export const StyledRow = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

StyledRow.propTypes = {
  className: PropTypes.string,
};

export const StyledCol = styled.div.attrs((props) => ({
  className: props.className,
  xs: props.xs,
  sm: props.sm,
  md: props.md,
  lg: props.lg,
}))`
  float: left;
  padding: 10px;
  box-sizing: border-box;
  ${({ xs }) => (xs ? generateGridWidth(xs) : "width: 100%")}
  @media only screen and (min-width: 768px) {
    ${({ sm }) => generateGridWidth(sm)}
  }
  @media only screen and (min-width: 992px) {
    ${({ md }) => generateGridWidth(md)}
  }
  @media only screen and (min-width: 1200px) {
    ${({ lg }) => generateGridWidth(lg)}
  }
`;

StyledRow.propTypes = {
  className: PropTypes.string,
};

export const StyledGrid = styled.div.attrs((props) => ({
  className: props.className,
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
  gutter: props.gutter,
}))`
  ${(props) => {
    if (props.container && !props.item) {
      return `
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        width: 100%;
        box-sizing: border-box;
      `;
    }

    if (props.item && !props.container) {
      return `
        ${generateMediaQueries(props)}
        ${generateFlexStyle(props)}
        ${props.gutter ? `margin: ${props.gutter}px` : ""};
      `;
    }
  }}
`;
