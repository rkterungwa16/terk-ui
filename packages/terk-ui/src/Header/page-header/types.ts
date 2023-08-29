import { ElementType, MouseEventHandler } from "react";

export type PageHeaderNavProps = {
  className?: string;
  position?: "absolute" | "relative";
  display: "flex" | "none" | "block";
  screenSizeGte: "xs" | "sm" | "md" | "lg";
};

export type PageHeaderImgProps = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

export enum HeaderComponentTypes {
  ICON = "icon",
  ITEMS = "items",
  LINK = "link",
  BUTTON = "button"
}

export type PageHeaderImgComponent = {
  component?: ElementType;
  img?: PageHeaderImgProps;
  nav?: PageHeaderNavProps;
  button?: PageHeaderButtonProps;
  link?: PageHeaderLinkProps;
};
//=====================================
export type PageHeaderIconProps = {
  type: HeaderComponentTypes.ICON;
  component?: ElementType;
  img?: PageHeaderImgProps;
  nav?: PageHeaderNavProps;
  handleClick?: MouseEventHandler<HTMLElement>;
  link?: {
    href: string;
  };
};

// export type PageHeaderLogoProps = {
//   component?: ElementType;
//   img?: PageHeaderImgProps;
//   nav?: PageHeaderNavProps;
//   button?: PageHeaderButtonProps;
//   link?: PageHeaderLinkProps;
// }

export type PageHeaderButtonProps = {
  type: HeaderComponentTypes.BUTTON;
  component?: ElementType;
  variant?: ButtonVariant;
  color?: ButtonColor;
  text?: string;
  handleClick?: MouseEventHandler<HTMLElement>;
  nav?: PageHeaderNavProps;
  img?: PageHeaderImgProps;
  href?: string;
};

export type PageHeaderLinkProps = {
  type: HeaderComponentTypes.LINK;
  component?: ElementType;
  linkComponent?: ElementType;
  href?: string;
  text?: string;
  nav?: PageHeaderNavProps;
  img?: PageHeaderImgProps;
};

export type PageHeaderNavItemsProps = {
  type: HeaderComponentTypes.ITEMS;
  component?: ElementType;
  items?: {
    name: string;
    route: string;
    active: boolean;
    linkComponent?: ElementType;
    classNames?: {
      item?: string;
      active?: string;
      inActive?: string;
    };
  }[];
  list?: {
    className?: string;
  };
  currentRoute?: string;
  nav?: PageHeaderNavProps;
};

//=====================================
