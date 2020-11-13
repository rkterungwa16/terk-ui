import * as React from "react";
import PropTypes from "prop-types";

import { StyledRow } from "./styles";

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
