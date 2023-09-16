import { CSSProperties, forwardRef, ReactNode } from "react";
import { StyledHeaderContainer } from "./styles";
import { BoxAreaProps } from "../types";

export interface ContainerProps extends BoxAreaProps {
  children?: ReactNode;
  position?: CSSProperties["position"];
  display?: "flex" | "none";
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  width?: CSSProperties["width"];
  className?: string;

}
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...others }, ref) => {
    return (
      <StyledHeaderContainer ref={ref} {...others}>
        {children}
      </StyledHeaderContainer>
    );
  }
);

Container.displayName = "HeaderContainer";
