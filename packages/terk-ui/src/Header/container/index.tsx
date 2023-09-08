import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { StyledHeaderContainer } from "./styles";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <StyledHeaderContainer ref={ref} className={className} {...others}>
        {children}
      </StyledHeaderContainer>
    );
  }
);

Container.displayName = "HeaderContainer";
