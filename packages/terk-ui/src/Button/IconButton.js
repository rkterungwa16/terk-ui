import React from "react";
import PropTypes from "prop-types";
import { StyledIconButton, StyledIconButtonLabel } from "./style";
import { buttonTheme } from "./theme";

const IconButton = React.forwardRef((props, ref) => {
  return (
    <StyledIconButton ref={ref} {...props}>
      <StyledIconButtonLabel>{props.children}</StyledIconButtonLabel>
    </StyledIconButton>
  );
});

IconButton.propTypes = {
  themeType: PropTypes.oneOf(["light", "dark"]),
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
    "dark",
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
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
  children: PropTypes.node,
};

IconButton.defaultProps = {
  color: "primary",
  size: "medium",
  themeType: "light",
  theme: buttonTheme,
  disabled: false,
};

export default IconButton;
