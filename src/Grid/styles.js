import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { getWidthString } from "./utils";

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

  ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")}
  @media only screen and (min-width: 768px) {
    ${({ sm }) => getWidthString(sm)}
  }
  @media only screen and (min-width: 992px) {
    ${({ md }) => getWidthString(md)}
  }
  @media only screen and (min-width: 1200px) {
    ${({ lg }) => getWidthString(lg)}
  }
`;
