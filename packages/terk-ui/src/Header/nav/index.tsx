import { forwardRef, HtmlHTMLAttributes, ReactNode } from "react";
import { StyledNav, StyledNavList, StyledNavListItem } from "./styles";

export interface NavProps extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode;
}
export const Nav = forwardRef<HTMLElement, NavProps>(({ children, ...others }, ref) => {
  console.log('nav___', children)
  return (
    <StyledNav ref={ref} {...others}>
      {children}
    </StyledNav>
  );
});

Nav.displayName = "Nav";

export interface NavListProps extends HtmlHTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export const NavList = forwardRef<HTMLUListElement, NavListProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <StyledNavList className={className} {...others} ref={ref}>
        {children}
      </StyledNavList>
    );
  }
);

NavList.displayName = "NavList";

export interface NavListItemProps extends HtmlHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

export const NavListItem = forwardRef<HTMLLIElement, NavListItemProps>(
  ({ children, ...others }, ref) => {
    return (
      <StyledNavListItem ref={ref} {...others}>
        {children}
      </StyledNavListItem>
    );
  }
);

NavListItem.displayName = "NavListItem";

