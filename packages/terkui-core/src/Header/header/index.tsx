import { CSSProperties, forwardRef, ReactNode } from "react";
import { BoxAreaProps } from "../types";
import { ContainerProps } from "../../Container/types";
import { Container } from "../../Container/Container";

export interface HeaderProps extends BoxAreaProps {
  position?: CSSProperties["position"];
  display?: "flex" | "none";
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  className?: string;
  children?: ReactNode;
}
export const Header = forwardRef<HTMLHeadingElement, ContainerProps>(({ children, ...others }, ref) => {
  return (
    <Container element="header" {...others} ref={ref}>
      {children}
    </Container>
  );
});

Header.displayName = "Header";
