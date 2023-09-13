import { CSSProperties, forwardRef, ReactNode } from "react";
import { StyledHeader } from "./styles";

export interface HeaderProps {
  position?: CSSProperties["position"];
  display?: "flex" | "none";
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  className?: string;
  children?: ReactNode;
}
export const Header = forwardRef<HTMLHeadElement, HeaderProps>(({ children, ...others }, ref) => {
  return (
    <StyledHeader {...others} ref={ref}>
      {children}
    </StyledHeader>
  );
});

Header.displayName = "Header";
