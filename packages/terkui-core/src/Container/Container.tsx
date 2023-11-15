import { forwardRef } from "react";
import { StyledContainer, StyledHeaderContainer } from "./styles";
import { ContainerProps } from "./types";
import { generateStyledComponentPropKeys } from "../utils/generateStyledComponentPropKeys";

export const Container = forwardRef<HTMLDivElement | HTMLHeadingElement, ContainerProps>(
  ({ children, element, ...others }, ref) => {
    if (element === 'header') {
      return (
        <StyledHeaderContainer ref={ref} {...generateStyledComponentPropKeys(others)}>
          {children}
        </StyledHeaderContainer>
      );
    }
    return (
      <StyledContainer ref={ref} {...generateStyledComponentPropKeys(others)}>
        {children}
      </StyledContainer>
    );
  }
);

Container.displayName = "HeaderContainer";
