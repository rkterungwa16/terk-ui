import { FC, forwardRef, HTMLAttributes, ReactNode } from "react";
import cx from "classnames";
import styles from "./styles.module.css";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <div ref={ref} className={cx(styles.Container, className)} {...others}>
        {children}
      </div>
    );
  }
);

Container.displayName = "HeaderContainer";
