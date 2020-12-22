import PropTypes from "prop-types";

import { buttonTheme } from "./theme";

export const ButtonEventsProps = {
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
};

export const ButtonDisplayProps = {
  themeType: PropTypes.oneOf(["light", "dark"]),
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
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
    "dark",
  ]),
};

export const ButtonDefaultProps = {
  variant: "contained",
  color: "primary",
  themeType: "light",
  shape: "standard",
  theme: buttonTheme,
  fullWidth: false,
  disabled: false,
  size: "medium",
};
