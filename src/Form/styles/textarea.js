import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { inputTheme } from "../theme";

export const StyledTextArea = styled.textarea.attrs((props) => ({
  className: props.className,
  themeMode: props.themeMode,
}))`
  height: 71px;
  border-radius: 5px;
  color: ${(props) => props.theme.input[props.themeMode].textarea.color};
  background-color: ${(props) =>
    props.theme.input[props.themeMode].textarea.backgroundColor};
  border: 1px solid
    ${(props) => props.theme.input[props.themeMode].textarea.backgroundColor};
`;

StyledTextArea.propTypes = {
  themeMode: PropTypes.string,
};
StyledTextArea.defaultProps = {
  theme: inputTheme,
  themeMode: "light",
};
