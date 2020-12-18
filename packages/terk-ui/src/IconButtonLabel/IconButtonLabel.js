import React from "react";
import PropTypes from "prop-types";
import { StyledIconButtonLabel } from "./style";

const IconButtonLabel = (props) => {
  return (
    <StyledIconButtonLabel {...props}>{props.children}</StyledIconButtonLabel>
  );
};

IconButtonLabel.propTypes = {
  children: PropTypes.node,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: PropTypes.any,
};

export default IconButtonLabel;
