import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button.attrs((props) => ({
  className: props.className,
  disabled: props.disabled,
}))`
  min-width: 64px;
  ${(props) => {
    return setButtonStatus(
      props.disabled,
      props.fullWidth,
      props.theme.button[props.variant],
      props.themeType,
      props.color,
    )
  }}
  ${(props) => {
    return setButtonShape(props.shape);
  }}
  ${(props) => {
    return setButtonSize(props.size);
  }}
  height: 42px;
  line-height: 1.75;
  text-decoration: none;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  display: inline-flex;
  outline: none;
  position: relative;
  align-items: center;
  justify-content: center;

  :not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  :not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const setButtonShape = (shape) => {
  const buttonShapeStyle = {
    square: "border-radius: 0;",
    standard: "border-radius: 4px;",
    pill: "border-radius: 21px;"
  }

  return buttonShapeStyle[shape];
}

const setButtonSize = (size) => {
  const buttonSizeStyle = {
    small: `
      padding: 4px 10px;
      font-size: 0.8125rem;
    `,
    medium: `
      padding: 6px 16px;
      font-size: 0.875rem;
    `,
    large: `
      padding: 8px 22px;
      font-size: 0.9375rem;
    `
  }
  return buttonSizeStyle[size];
}

const setButtonStatus = (
  isDisabled,
  fullWidth,
  variantTheme,
  themeType,
  color
) => {
  const buttonStatusTheme = isDisabled ? variantTheme[themeType][color].disabled : variantTheme[themeType][color].active;
  const buttonStatusStyle = {
    true: `
      background: ${buttonStatusTheme.backgroundColor};
      color: ${buttonStatusTheme.color};
      border: 1px solid ${buttonStatusTheme.borderColor};
      cursor: default;
      pointer-events: none;
      opacity: .65;
      ${fullWidth ? "width: 100%;" : ""}
  `,
    false: `
      border: 1px solid ${buttonStatusTheme.borderColor};
      color: ${buttonStatusTheme.color};
      background-color: ${buttonStatusTheme.backgroundColor};
      cursor: pointer;
      ${fullWidth ? "width: 100%;" : ""}
    `
  }
  return buttonStatusStyle[isDisabled];
}

export const StyledButtonGroup = styled.div.attrs((props) => ({
  role: "group"
}))`
  ${(props) => {
      return setButtonShape(props.shape);
  }}
  display: inline-flex;
`;

export const StyledButtonLabel = styled.span`
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`;

export const StyledStartIcon = styled.span`
  display: inherit;
  margin-left: -8px;
  margin-right: 8px;
`;

export const StyledEndIcon = styled.span`
  display: inherit;
  margin-left: 8px;
  margin-right: -8px;
`;