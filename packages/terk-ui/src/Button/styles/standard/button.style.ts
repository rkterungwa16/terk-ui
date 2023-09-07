import { buttonContainedColorStyles, buttonShapeStyles, buttonSizeStyles } from "..";
import { ButtonClasses } from "../../types";

export const standardButtonStyle: ButtonClasses = {
  standard: {
    base: `
      .Button--standard {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.375rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        outline: 0;
        border: 0;
      }
    `,
    size: {
      ...buttonSizeStyles
    },
    shape: {
      ...buttonShapeStyles
    },
    variant: {
      contained: {
        ...buttonContainedColorStyles
      }
    }
  }
};

