import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function getWidthString(span) {
  if (!span) return;
  let width = (Number(span) / 12) * 100;
  return `width: ${width}%;`;
}

const StyledCol = styled.div.attrs((props) => ({
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

const Col = (props) => {
  const { className, xs, sm, md, lg } = props;
  return (
    <StyledCol className={className} xs={xs} sm={sm} md={md} lg={lg}>
      {props.children}
    </StyledCol>
  );
};

Col.defaultProps = {
  className: "",
};

Col.propTypes = {
  className: PropTypes.string,
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  children: PropTypes.node,
};

export default Col;
