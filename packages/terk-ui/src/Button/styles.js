import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button.attrs((props) => ({
  className: props.className,
  disabled: props.disabled,
}))`
  min-width: 64px;
  padding: 6px 16px;
  ${(props) => {
    if (props.disabled) {
      return `
        background: #e2e4e7;
        box-shadow: none;
        color: #c6c9d0;
        cursor: default;
        pointer-events: none;
        ${props.fullWidth ? "width: 100%;" : ""}
      `;
    }

    if (!props.disabled) {
      return `
        border: 1px solid ${
          props.theme.button[props.variant].borderColor[props.color]
        };
        color: ${props.theme.button[props.variant].color};
        background-color: ${
          props.theme.button[props.variant].backgroundColor[props.color]
        };
        box-shadow: ${props.theme.button[props.variant].boxShadow};
        cursor: pointer;
        ${props.fullWidth ? "width: 100%;" : ""}
      `;
    }
  }}
  height: 42px;
  border-radius: 4px;
  line-height: 1.75;
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
