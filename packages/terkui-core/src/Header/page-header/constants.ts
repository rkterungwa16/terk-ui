import { devices } from "../../util/breakpoints";

export const display = (size: string, type: string) => {
  if (type === "none") {
    return `@media only screen and ${devices[size]} {
      display: none;
    }`;
  }
  if (type === "flex") {
    return `@media only screen and ${devices[size]} {
      display: flex;
    }`;
  }

  if (type === "block") {
    return `@media only screen and ${devices[size]} {
      display: block;
    }`;
  }
};
