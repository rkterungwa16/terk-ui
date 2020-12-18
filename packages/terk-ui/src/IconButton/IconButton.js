import React from "react";
import PropTypes from "prop-types";
import { StyledButtonBase, StyledButtonLabel } from "./style";
import { buttonTheme } from "./theme";

const IconButton = React.forwardRef((props, ref) => {
  return (
    <StyledButtonBase ref={ref} {...props}>
      <StyledButtonLabel {...props}>{props.children}</StyledButtonLabel>
    </StyledButtonBase>
  );
});

IconButton.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined"]),
  color: PropTypes.oneOf(["primary", "secondary", "danger"]),
  borderRadius: PropTypes.number,
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
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

IconButton.defaultProps = {
  variant: "contained",
  color: "primary",
  theme: buttonTheme,
  disabled: false,
};

export default IconButton;
