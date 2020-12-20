import React from "react";
import PropTypes from "prop-types";
import {
  StyledButton,
  StyledButtonLabel,
  StyledEndIcon,
  StyledStartIcon
} from "./style";
import { buttonTheme } from "./theme";

const Button = (props) => {
  const startIcon = props.startIcon && (
    <StyledStartIcon>
      {props.startIcon}
    </StyledStartIcon>
  );

  const endIcon = props.endIcon && (
    <StyledEndIcon>
      {props.endIcon}
    </StyledEndIcon>
  );
  return (
    <StyledButton {...props}>
      <StyledButtonLabel>
        {startIcon}
        {props.children}
        {endIcon}
      </StyledButtonLabel>
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  themeType: PropTypes.oneOf(["light", "dark"]),
  shape: PropTypes.oneOf(["standard", "square", "pill"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark"
  ]),
  fullWidth: PropTypes.bool,
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
  themeType: "light",
  shape: "standard",
  theme: buttonTheme,
  fullWidth: false,
  disabled: false,
  size: "medium"
};

export default Button;
