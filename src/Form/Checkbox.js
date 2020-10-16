import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { inputTheme } from "./theme";

const CheckboxLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 12px;
  user-select: none;
`;

const CheckboxMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 18.5px;
  height: 17.73px;
  background-color: ${(props) => props.theme.input.checkbox.backgroundColor};

  ::before {
    position: absolute;
    left: 0;
    top: 50%;
    height: 34%;
    width: 2px;
    background-color: #336699;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }

  ::after {
    position: absolute;
    left: 1px;
    bottom: 3px;
    height: 2px;
    width: 55%;
    background-color: #336699;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
`;

CheckboxMark.defaultProps = {
  theme: inputTheme,
};

const StyledCheckbox = styled.input.attrs((props) => ({
  className: props.className,
}))`
  width: 18.5px;
  height: 17.73px;
  border-radius: 5px;
  color: ${(props) => props.theme.input.checkbox.color};
  background-color: ${(props) => props.theme.input.checkbox.backgroundColor};
  border: 1.5px solid ${(props) => props.theme.input.checkbox.color};
`;

StyledCheckbox.defaultProps = {
  theme: inputTheme,
};

const Checkbox = (props) => {
  const { className, type } = props;
  return (
    <CheckboxLabel>
      <StyledCheckbox type={type} className={className}>
        {props.children}
      </StyledCheckbox>
      <CheckboxMark />
    </CheckboxLabel>
  );
};

Checkbox.defaultProps = {
  type: "checkbox",
};

Checkbox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(["checkbox"]),
};

export default Checkbox;
