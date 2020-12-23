import React from "react";
import styled from "styled-components";
import StyleProps from "./styleProps";

export const StyledButton = styled.button.attrs((props) => ({
  className: props.className,
  disabled: props.disabled,
}))`
  ${(props) => {
    return `
      ${StyleProps.button.root}
      ${StyleProps.button.fullWidth[props.fullWidth]}
      ${StyleProps.button.status(
        props.disabled,
        props.theme.button[props.variant],
        props.themeType,
        props.color
      )}
      ${StyleProps.button.size(props.size)}
      ${StyleProps.button.shape(props.shape)}
    `;
  }}
`;

export const StyledButtonGroup = styled.div.attrs((props) => ({
  role: "group",
}))`
  ${(props) => {
    return `
      ${StyleProps.buttonGroup.root}
      ${StyleProps.buttonGroup.shape(props.shape)}
    `;
  }}
`;

export const StyledButtonLabel = styled.span`
  ${StyleProps.buttonLabel.root}
`;

export const StyledStartIcon = styled.span`
  ${StyleProps.startIcon.root}
`;

export const StyledEndIcon = styled.span`
  ${StyleProps.endIcon.root}
`;

export const StyledIconButton = styled.button.attrs((props) => ({
  className: props.className,
  disabled: props.disabled,
  type: "button",
}))`
  ${(props) => {
    return `
    ${StyleProps.iconButton.root}
    ${StyleProps.iconButton.size(props.size)}
    ${StyleProps.iconButton.status(
      props.disabled,
      props.theme.iconButton,
      props.themeType,
      props.color
    )}
    `;
  }}
`;

export const StyledIconButtonLabel = styled.span`
  ${StyleProps.iconButtonLabel.root}
`;
