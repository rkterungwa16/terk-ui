import { forwardRef } from "react";

import { Container } from "../../Container/Container";
import { HeaderProps } from "./types";
import { StyledHeader } from "./styles";
import { generateStyledComponentPropKeys } from "../../utils/generateStyledComponentPropKeys";

export const Header = forwardRef<HTMLHeadingElement, HeaderProps>(
  ({ children, ...others }, ref) => {
    return (
      <StyledHeader {...generateStyledComponentPropKeys(others)} ref={ref}>
        <Container breakpoint="fluid" {...others}>
          {children}
        </Container>
      </StyledHeader>
    );
  }
);

Header.displayName = "Header";
