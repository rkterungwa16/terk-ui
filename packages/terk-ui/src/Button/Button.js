import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styles";
import { buttonTheme } from "./theme";

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined"]),
  color: PropTypes.oneOf(["primary", "secondary", "danger"]),
  fullWidth: PropTypes.bool,
  borderRadius: PropTypes.number,
  onClick: PropTypes.func,
  onDragLeave: PropTypes.func,
  onFocus: PropTypes.func,
  onFocusVisible: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchStart: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
  theme: buttonTheme,
  fullWidth: false,
  disabled: false,
};

export default Button;
