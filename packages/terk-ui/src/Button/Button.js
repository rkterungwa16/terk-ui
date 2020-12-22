import React from "react";
import PropTypes from "prop-types";
import {
  StyledButton,
  StyledButtonLabel,
  StyledEndIcon,
  StyledStartIcon,
} from "./style";

import {
  ButtonDisplayProps,
  ButtonEventsProps,
  ButtonDefaultProps,
} from "./BaseButtonProps";

const Button = (props) => {
  const startIcon = props.startIcon && (
    <StyledStartIcon>{props.startIcon}</StyledStartIcon>
  );

  const endIcon = props.endIcon && (
    <StyledEndIcon>{props.endIcon}</StyledEndIcon>
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
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  ...ButtonDisplayProps,
  ...ButtonEventsProps,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  ...ButtonDefaultProps,
};

export default Button;
