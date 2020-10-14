import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { inputTheme } from "./theme";

const StyledTextArea = styled.textarea.attrs((props) => ({
  className: props.className,
}))`
  height: 71px;
  border-radius: 5px;
  color: ${(props) => props.theme.input.textarea.color};
  background-color: ${(props) => props.theme.input.textarea.backgroundColor};
  border: 1px solid ${(props) => props.theme.input.textarea.backgroundColor};
`;

StyledTextArea.defaultProps = {
  theme: inputTheme,
};

const TextArea = (props) => {
  const { className } = props;
  return (
    <StyledTextArea className={className}>{props.children}</StyledTextArea>
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default TextArea;
