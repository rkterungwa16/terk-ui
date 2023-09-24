import styled from "styled-components";
import { standardButtonStyle } from "./button.style";
import { ButtonProps } from "../../Button";

export const StyledStandardButton = styled.button<ButtonProps>`
  ${(props: ButtonProps) => {
    return `
      ${mapButtonPropsToStyles(props)}
    `;
  }}
`;

export const mapButtonPropsToStyles = (props: ButtonProps) => {
  if (props.$buttonType === "standard" && standardButtonStyle.standard) {
    return `
      ${standardButtonStyle.standard?.base}
      ${standardButtonStyle.standard.shape[props?.$buttonShape || "square"]}
      ${standardButtonStyle.standard.size[props?.$buttonSize || "base"]}
      ${
        standardButtonStyle.standard.variant[props?.$buttonVariant || "contained"]?.[
          props?.$buttonColor || "primary"
        ]?.[props?.$buttonTheme || "light"].active
      }
      ${
        props.disabled &&
        standardButtonStyle.standard.variant[props?.$buttonVariant || "contained"]?.[
          props?.$buttonColor || "primary"
        ]?.[props?.$buttonTheme || "light"].disabled
      }
    `;
  }
};
