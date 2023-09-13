import { ButtonShapeStyles } from "../../types";

export const buttonShapeStyles: ButtonShapeStyles = {
  rounded: `
    .Button--rounded {
      border-radius: 0.50rem;
    }
  `,
  pill: `
    .Button--pill {
      border-radius: 50rem;
    }
  `,
  square: `
    .Button--square {
      border-radius: 0;
    }
  `
};
