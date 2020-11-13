import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button.attrs((props) => ({
  className: props.className,
  variant: props.variant,
  color: props.color,
  fullWidth: props.fullWidth,
}))`
  min-width: 64;
  padding: 6px 16px;
  color: ${(props) => props.theme.button[props.variant].color};
  border: 1px solid
    ${(props) => props.theme.button[props.variant].borderColor[props.color]};
  background-color: ${(props) =>
    props.theme.button[props.variant].backgroundColor[props.color]};
  box-shadow: ${(props) => props.theme.button[props.variant].boxShadow};
  ${(props) => {
    if (props.fullWidth) {
      return "width: 100%;";
    }
  }}
  height: 42px;
  border-radius: 4px;
  line-height: 1.75;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  display: inline-flex;
  outline: none;
  position: relative;
  align-items: center;
  justify-content: center;

  :focus {
    outline: 0;
  }
`;
