import React from "react";
import styled from "styled-components";

export const Label = styled.label.attrs((props) => ({
  name: props.name,
  selectedName: props.selectedName,
}))`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-overflow: ellipsis;
  cursor: pointer;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0);
  font-weight: 500;
  color: ${(props) =>
    props.name.toLowerCase() === props.selectedName.toLowerCase()
      ? "#00C3E1"
      : "#000000"};
  font-size: 13px;
  z-index: 2;
`;

export const VeriticalDivider = styled.label`
  content: "";
  width: 1px;
  background: rgba(142, 142, 147, 0.15);
  position: absolute;
  top: 14%;
  bottom: 14%;
  border-radius: 10px;
`;

export const Text = styled.span`
  display: block;
  position: relative;
  transition: all 0.2s ease;
`;
