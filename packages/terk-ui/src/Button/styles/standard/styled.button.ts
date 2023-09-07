import styled from "styled-components";
import { ButtonProps } from "../../Button";
import { standardButtonStyle } from "./button.style";

export const StyledStandardButton = styled.button`
  ${(props: ButtonProps) => {
    return `
      ${mapButtonPropsToStyles(props)}
    `;
  }}
`;

export const mapButtonPropsToStyles = (props: ButtonProps) => {
  if (props.buttonType === "standard" && standardButtonStyle.standard) {
    return `
      ${standardButtonStyle.standard?.base}
      ${standardButtonStyle.standard.shape[props?.buttonShape || "square"]}
      ${standardButtonStyle.standard.size[props?.buttonSize || "base"]}
      ${
        standardButtonStyle.standard.variant[props?.buttonVariant || "contained"]?.[
          props?.buttonColor || "primary"
        ]?.[props?.buttonTheme || "light"].active
      }
      ${
        props.disabled &&
        standardButtonStyle.standard.variant[props?.buttonVariant || "contained"]?.[
          props?.buttonColor || "primary"
        ]?.[props?.buttonTheme || "light"].disabled
      }
    `;
  }
};
