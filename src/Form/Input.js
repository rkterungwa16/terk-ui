import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { inputTheme } from "./theme";

const StyledInput = styled.input.attrs((props) => ({
  className: props.className,
  themeMode: props.themeMode,
}))`
  height: 30px;
  border-radius: 5px;
  color: ${(props) => props.theme.input[props.themeMode].normal.color};
  background-color: ${(props) =>
    props.theme.input[props.themeMode].normal.backgroundColor};
  border: 1px solid
    ${(props) => props.theme.input[props.themeMode].normal.backgroundColor};
`;

StyledInput.propTypes = {
  themeMode: PropTypes.string,
};
StyledInput.defaultProps = {
  theme: inputTheme,
  themeMode: "light",
};

const Input = (props) => {
  const { className, type } = props;
  return (
    <StyledInput type={type} className={className}>
      {props.children}
    </StyledInput>
  );
};

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(["text", "password", "email"]),
};

export default Input;
