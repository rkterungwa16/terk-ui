import { forwardRef, HTMLAttributes, ReactNode } from "react";
import cx from "classnames";

import { HeaderPosition, defaultPositionClasses } from "./constants";
import { StyledHeader } from "./styles";

export interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  position?: HeaderPosition;
  positionClasses?: { [position: string]: string };
  children?: ReactNode;
}
export const Header = forwardRef<HTMLHeadElement, HeaderProps>(
  (
    {
      position = HeaderPosition.FIXED,
      positionClasses = defaultPositionClasses,
      children,
      className,
      ...others
    },
    ref
  ) => {
    const positionClass = positionClasses[position]
      ? [defaultPositionClasses[position]]
      : [];

    return (
      <StyledHeader
        className={cx(className, [...positionClass])}
        {...others}
        ref={ref}
      >
        {children}
      </StyledHeader>
    );
  }
);

Header.displayName = "Header";
