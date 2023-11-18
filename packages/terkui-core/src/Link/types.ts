import { AllHTMLAttributes, ElementType } from "react";

export interface LinkAttrProps extends AllHTMLAttributes<HTMLElement> {
  active?: boolean;
  className?: string;
  disabled?: boolean;
  href?: string;
}

export type CustomLinkProps = Record<string, unknown>;
export interface LinkProps extends LinkAttrProps, AllHTMLAttributes<HTMLElement> {
  customLink?: {
    component: ElementType;
    props: CustomLinkProps;
  };
}
