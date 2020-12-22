import React from "react";
import PropTypes from "prop-types";

import { StyledButtonGroup } from "./style";
import { buttonTheme } from "./theme";

const ButtonGroup = (props) => {
  const {
    children,
    variant,
    shape,
    size,
    themeType,
    color,
    theme,
    disabled,
    fullWidth,
    className
  } = props;
  return (
    <StyledButtonGroup shape={shape} >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return null;
        }
        return React.cloneElement(child, {
          color,
          shape,
          size,
          theme,
          themeType,
          disabled,
          fullWidth,
          variant,
          className
        })
      })}
    </StyledButtonGroup>
  )
}

ButtonGroup.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["contained", "outlined"]),
  themeType: PropTypes.oneOf(["light", "dark"]),
  shape: PropTypes.oneOf(["standard", "square", "pill"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
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
  disabled: PropTypes.bool,
  children: PropTypes.node
}

ButtonGroup.defaultProps = {
  variant: "contained",
  color: "primary",
  themeType: "light",
  shape: "standard",
  size: "medium",
  theme: buttonTheme,
  fullWidth: false,
  disabled: false,
}

export default ButtonGroup;
