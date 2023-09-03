// import PropTypes from "prop-types";
import { StyledButton, StyledButtonLabel, StyledEndIcon, StyledStartIcon } from "./style";

// import {  ButtonDefaultProps } from "./BaseButtonProps";
import { FC, ReactNode } from "react";

export type ButtonProps = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  // themeType: "light" | "dark";
  variant?: "contained" | "outlined" | "text";
  shape?: "standard" | "square" | "pill";
  size?: "small" | "medium" | "large";
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "light"
    | "dark";
};
const Button: FC<ButtonProps> = (props) => {
  const startIcon = props.startIcon && <StyledStartIcon>{props.startIcon}</StyledStartIcon>;

  const endIcon = props.endIcon && <StyledEndIcon>{props.endIcon}</StyledEndIcon>;
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

// Button.propTypes = {
//   startIcon: PropTypes.node,
//   endIcon: PropTypes.node,
//   ...ButtonDisplayProps,
//   ...ButtonEventsProps,
//   fullWidth: PropTypes.bool,
//   disabled: PropTypes.bool,
//   children: PropTypes.node
// };

// Button.defaultProps = {
//   ...ButtonDefaultProps
// };

export default Button;
