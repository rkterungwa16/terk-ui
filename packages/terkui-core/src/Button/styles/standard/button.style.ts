
import { ButtonClasses } from "../../types";
import { buttonShapeStyles } from "./shape";
import { buttonSizeStyles } from "./size";
import { buttonContainedColorStyles } from "./variant";

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

