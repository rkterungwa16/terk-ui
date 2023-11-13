import { forwardRef } from "react";
import { StyledHeaderContainer } from "./styles";
import { ContainerProps } from "./types";

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

