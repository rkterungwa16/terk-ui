import { ButtonSizeStyles } from "../../types";

export const buttonSizeStyles: ButtonSizeStyles = {
  xs: `
    .ButtonSize--xs {
      min-width: 3.5em;
      min-height: 2.5rem;
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 1rem;
    }
  `,
  sm: `
    .ButtonSize--sm {
      min-width: 6.3125rem;
      min-height: 2.125rem;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.25rem;
    }
  `,
  base: `
    .ButtonSize--base {
      min-width: 6.8125rem;
      min-height: 2.375rem;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  `,
  l: `
    .ButtonSize--l {
      min-width: 7.5rem;
      min-height: 2.625rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  `,
  xl: `
    .ButtonSize--xl {
      min-width: 8.5rem;
      min-height: 3.125rem;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  `
};
