import { forwardRef } from "react";
import { StyledContainer } from "./styles";
import { ContainerProps } from "./types";
import { generateStyledComponentPropKeys } from "../utils/generateStyledComponentPropKeys";

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...others }, ref) => {
    return (
      <StyledContainer ref={ref} {...generateStyledComponentPropKeys(others)}>
        {children}
      </StyledContainer>
    );
  }
);

Container.displayName = "HeaderContainer";
