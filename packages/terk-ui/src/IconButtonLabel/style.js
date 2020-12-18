import React from "react";
import styled from "styled-components";

export const StyledIconButtonLabel = styled.span.attrs((props) => ({
  className: props.className,
  autoFocus: props.autoFocus,
  defaultChecked: props.defaultChecked,
  id: props.id,
  inputProps: props.inputProps,
  name: props.name,
  onBlur: props.onBlur,
  onChange: props.onChange,
  onFocus: props.onFocus,
  value: props.value,
  required: props.required,
}))`
  display: flex;
  color: #06c1e1;
  border-radius: 3px;
  height: 30px;
  width: 30px;
  border: 0;
  cursor: pointer;
  margin: 0;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
`;
