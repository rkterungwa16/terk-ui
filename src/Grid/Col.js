import React from "react";
import PropTypes from "prop-types";

import { StyledCol } from "./styles";

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
