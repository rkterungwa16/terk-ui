import { ButtonColorStyles } from "../../../types";

export const buttonContainedColorStyles: ButtonColorStyles = {
  default: {
    light: {
      active: `
        .Button--default {
          color: var(--white);
          background: var(--dark-grey);

          .Button--default:hover {
            opacity: 0.6;
          }
        }
      `,
      disabled: `
        .Button--disabled {
          opacity: 0.5;
        }
      `
    },
    dark: {
      active: `
        .Button--default {
          color: var(--white);
          background: var(--dark-grey);

          .Button--default:hover {
            opacity: 0.6;
          }
        }
      `,
      disabled: `
        .Button--disabled {
          opacity: 0.5;
        }
      `
    }
  },
  primary: {
    light: {
      active: `
      .Button--primary {
        background: var(--dark-green);
        color: var(--white);
      }

      .Button--primary:hover {
        opacity: 0.6;
      }
    `,
      disabled: ``
    },
    dark: {
      active: `
      .Button--primary {
        background: var(--dark-green);
        color: var(--white);
      }

      .Button--primary:hover {
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
