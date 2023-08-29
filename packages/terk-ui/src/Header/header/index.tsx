import { forwardRef, HTMLAttributes, ReactNode } from "react";
import cx from "classnames";

import { HeaderPosition, defaultPositionClasses } from "./constants";

import styles from "./styles.module.css";

export interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  position?: HeaderPosition;
  positionClasses?: { [position: string]: string };
  children?: ReactNode;
}
export const Header = forwardRef<HTMLDivElement, HeaderProps>(
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
      <header
        className={cx(className, styles.Header, [...positionClass])}
        {...others}
        ref={ref}
      >
        {children}
      </header>
    );
  }
);

Header.displayName = "Header";
