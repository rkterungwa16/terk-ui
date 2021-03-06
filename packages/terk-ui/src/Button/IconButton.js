import React from "react";
import PropTypes from "prop-types";
import { StyledIconButton, StyledIconButtonLabel } from "./style";
import {
  ButtonEventsProps,
  ButtonDisplayProps,
  ButtonDefaultProps,
} from "./BaseButtonProps";

const IconButton = React.forwardRef((props, ref) => {
  return (
    <StyledIconButton ref={ref} {...props}>
      <StyledIconButtonLabel>{props.children}</StyledIconButtonLabel>
    </StyledIconButton>
  );
});

const { shape, variant, ...ModifiedButtonDisplayProps } = ButtonDisplayProps;

const {
  variant,
  shape,
  fullWidth,
  ...ModifiedButtonDefaultProps
} = ButtonDefaultProps;

IconButton.propTypes = {
  disabled: PropTypes.bool,
  ...ButtonEventsProps,
  ...ModifiedButtonDisplayProps,
  children: PropTypes.node,
};

IconButton.defaultProps = {
  ...ModifiedButtonDefaultProps,
};

export default IconButton;
