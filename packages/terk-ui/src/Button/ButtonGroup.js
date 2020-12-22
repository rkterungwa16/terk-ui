import React from "react";
import PropTypes from "prop-types";

import { StyledButtonGroup } from "./style";
import { ButtonDefaultProps, ButtonDisplayProps } from "./BaseButtonProps";

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
    className,
  } = props;
  return (
    <StyledButtonGroup shape={shape}>
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
          className,
        });
      })}
    </StyledButtonGroup>
  );
};

ButtonGroup.propTypes = {
  ...ButtonDisplayProps,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

ButtonGroup.defaultProps = {
  ...ButtonDefaultProps,
};

export default ButtonGroup;
