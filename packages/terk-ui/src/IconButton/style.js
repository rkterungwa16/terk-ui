import React from "react";
import styled from "styled-components";

export const StyledButtonBase = styled.button.attrs((props) => ({
  className: props.className,
  disabled: props.disabled,
  type: "button",
}))`
  flex: 0 0 auto;
  cursor: pointer;
  margin: 0;
  outline: 0;
  padding: 12px;
  border: 0;
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 50%;
  background-color: transparent;
  :hover {
    background-color: rgba(6, 195, 225, 0.1);
  }
`;

export const StyledButtonLabel = styled.span.attrs((props) => ({
  className: props.className,
}))`
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
`;
