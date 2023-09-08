import { devices } from "../../util/breakpoints";

export enum HeaderNavs {
  HOME = "Home",
  WORKS = "Works",
  BLOG = "Blog",
  CONTACT = "Contact"
}

export const HeaderNavRoutes = {
  [HeaderNavs.HOME]: "/",
  [HeaderNavs.WORKS]: "/works",
  [HeaderNavs.BLOG]: "/blog",
  [HeaderNavs.CONTACT]: "/contact"
};

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
