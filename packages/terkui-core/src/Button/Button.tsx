// import PropTypes from "prop-types";
import {
  ButtonType,
  ButtonColor,
  ButtonSize,
  ButtonVariant,
  ButtonClasses,
  ButtonShape
} from "./types";

// import {  ButtonDefaultProps } from "./BaseButtonProps";
import { ReactNode, forwardRef } from "react";
import { StyledStandardButton } from "./styles/standard/styled.button";

export interface ButtonProps {
  $buttonType?: ButtonType;
  $buttonColor?: ButtonColor;
  $buttonSize?: ButtonSize;
  $buttonShape?: ButtonShape;
  $buttonVariant?: ButtonVariant;
  $buttonTheme?: "light" | "dark";
  // Custom class property is to be defined in a context at the app route
  // All buttons in the application use this value.
  customClasses?: ButtonClasses;
  className?: string;
  href?: string;
  disabled?: boolean;
  children?: ReactNode;
  $startIcon?: ReactNode;
  $endIcon?: ReactNode;
  $fullWidth?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  if (props.$buttonType === 'icon') return;
  if (props.$buttonType === 'text') return;
  return (
    <StyledStandardButton {...props} ref={ref}>
      {props.children}
    </StyledStandardButton>
  );
});

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
