import { forwardRef } from "react";
import classNames from "classnames";
import { LinkProps } from "./types";

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, active, className, customLink, disabled, href, ...rest }, ref) => {
    if (customLink) {
      const customLinkProps = customLink.props;
      const Component = customLink.component;
      return (
        <Component
          className={classNames(className, { active, disabled })}
          {...(active && { "aria-current": "page" })}
          {...(disabled && { "aria-disabled": true, tabIndex: -1 })}
          {...rest}
          ref={ref}
          href={href}
          {...customLinkProps}
        >
          {children}
        </Component>
      );
    }
    return (
      <a
        className={classNames(className, { active, disabled })}
        {...(active && { "aria-current": "page" })}
        {...(disabled && { "aria-disabled": true, tabIndex: -1 })}
        {...rest}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);
