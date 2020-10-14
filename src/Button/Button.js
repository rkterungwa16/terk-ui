import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { buttonTheme } from "./theme";

const StyledButton = styled.button.attrs((props) => ({
  className: props.className,
  variant: props.variant,
  width: props.width,
  height: props.height,
  color: props.color,
}))`
  padding: 8px;
  color: ${(props) => props.theme.button[props.variant].color};
  border: 1px solid
    ${(props) => props.theme.button[props.variant].borderColor[props.color]};
  background-color: ${(props) =>
    props.theme.button[props.variant].backgroundColor[props.color]};
  box-shadow: ${(props) => props.theme.button[props.variant].boxShadow};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.borderRadius}px;
`;

StyledButton.propTypes = {
  variant: PropTypes.oneOf(["normal", "outline"]),
  width: PropTypes.number,
  height: PropTypes.number,
  borderRadius: PropTypes.number,
  color: PropTypes.oneOf(["primary", "secondary", "danger"]),
};

StyledButton.defaultProps = {
  variant: "normal",
  color: "primary",
  width: 141,
  height: 40,
  borderRadius: 4,
  theme: buttonTheme,
};

const Button = (props) => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

Button.propTypes = {
  variant: PropTypes.oneOf(["normal", "outline"]),
  width: PropTypes.number,
  height: PropTypes.number,
  text: PropTypes.string,
  borderRadius: PropTypes.number,
};

export default Button;
