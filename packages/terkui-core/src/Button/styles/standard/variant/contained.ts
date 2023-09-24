import { ButtonColorStyles } from "../../../types";

export const buttonContainedColorStyles: ButtonColorStyles = {
  default: {
    light: {
      active: `
        color: var(--white);
        background: var(--dark-grey);
        &:hover {
          opacity: 0.6;
        }
      `,
      disabled: `
        opacity: 0.5;
      `
    },
    dark: {
      active: `
        color: var(--white);
        background: var(--dark-grey);
        &:hover {
          opacity: 0.6;
        }
      `,
      disabled: `
        opacity: 0.5;
      `
    }
  },
  primary: {
    light: {
      active: `
        background: var(--dark-green);
        color: var(--white);

      &:hover {
        opacity: 0.6;
      }
    `,
      disabled: ``
    },
    dark: {
      active: `
        background: var(--dark-green);
        color: var(--white);

        &:hover {
          opacity: 0.6;
        }
    `,
      disabled: ``
    }
  },
  secondary: {
    light: {
      active: ``,
      disabled: ``
    },
    dark: {
      active: ``,
      disabled: ``
    }
  }
};
