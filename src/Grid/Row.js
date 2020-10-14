import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledRow = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Row = (props) => {
  const { className, children } = props;
  return <StyledRow className={className}>{children}</StyledRow>;
};

Row.defaultProps = {
  className: "",
};

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Row;
