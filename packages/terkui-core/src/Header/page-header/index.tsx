import { FC } from "react";

import cx from "classnames";

import { Nav, NavList, NavListItem } from "../nav";
import { Header, HeaderProps } from "../header";

import {
  PageHeaderButtonProps,
  PageHeaderLinkProps,
  PageHeaderIconProps,
  PageHeaderNavItemsProps,
  HeaderComponentTypes
} from "./types";
import { Container, ContainerProps } from "../container";

// for all screen sizes greater or equal to xs di
// display = "none" screenSize = "xs" { flex: { gte: "x" }}
// An array of header contents. Each data in array should have element type
// Element type: menuIcon, brandLogo, navItems
// const arr: (string | number)[] = ['a', 'b', 1, 2];

export type PageHeaderProp = {
  headerProps?: HeaderProps;
  headerContainerProps?: ContainerProps;
  currentRoute?: string;
  components: (
    | PageHeaderButtonProps
    | PageHeaderLinkProps
    | PageHeaderIconProps
    | PageHeaderNavItemsProps
  )[];
};
export const PageHeader: FC<PageHeaderProp> = ({
  components,
  currentRoute,
  headerContainerProps,
  headerProps
}) => (
  <Container {...headerContainerProps}>
    <Header {...headerProps}>
      {components.map((_component, index) => {
        if (_component.type === HeaderComponentTypes.ICON) {
          return (
            <Nav
              className={_component.nav?.className}
              {..._component.nav}
              key={`${_component.type}-${index}`}
            >
              {_component.Component && <_component.Component onClick={_component.handleClick} />}
              {/* <IconButton onClick={_component.handleClick}>
              <Image {..._component.img} />
            </IconButton> */}
            </Nav>
          );
        }
        if (_component.type === HeaderComponentTypes.LINK) {
          return (
            <Nav
              className={_component.nav?.className}
              {..._component.nav}
              key={`${_component.type}-${index}`}
            >
              {_component.Component && <_component.Component href={_component.href} />}
              {/* <CustomLink component={_component.linkComponent} href={_component.href}>
            <Image {..._component.img} />
          </CustomLink> */}
            </Nav>
          );
        }
        if (_component.type === HeaderComponentTypes.BUTTON) {
          return (
            <Nav
              className={_component.nav?.className}
              {..._component.nav}
              key={`${_component.type}-${index}`}
            >
              {_component.Component && (
                <_component.Component
                  {...{
                    ...(_component.href && { href: _component.href }),
                    ...(_component.handleClick && { onClick: _component.handleClick }),
                    ...(_component.variant && { variant: _component.variant }),
                    ...(_component.color && { href: _component.color })
                  }}
                >
                  {_component.text}
                </_component.Component>
              )}
              {/* <Button
            {...{
              ...(_component.href && { href: _component.href }),
              ...(_component.handleClick && { onClick: _component.handleClick }),
              ...(_component.variant && { variant: _component.variant }),
              ...(_component.color && { href: _component.color })
            }}
          >
            {_component.text}
          </Button> */}
            </Nav>
          );
        }

        if (_component.type === HeaderComponentTypes.ITEMS) {
          console.log("_component items", _component);
          console.log("_current route", currentRoute);
          return (
            <Nav {...(_component?.nav && _component.nav)} key={`${_component.type}-${index}`}>
              <NavList className={_component?.list?.className || ""}>
                {_component.items?.map((_item, index) => (
                  <NavListItem
                    className={_item?.classNames?.item || ""}
                    key={`${_item.route}-${index}`}
                  >
                    {_component.Component && (
                      <_component.Component
                        className={cx({
                          ...(_item.classNames?.active && {
                            [_item.classNames?.active]: _item.route === currentRoute
                          }),
                          ...(_item.classNames?.inActive && {
                            [_item.classNames?.inActive]: _item.route !== currentRoute
                          })
                        })}
                        href={_item.route}
                      >
                        {_item.name}
                      </_component.Component>
                    )}
                    {/* <CustomLink
                  className={cx({
                    ...(_item.classNames?.active && { [_item.classNames?.active]: _item.active }),
                    ...(_item.classNames?.inActive && {
                      [_item.classNames?.inActive]: !_item.active
                    })
                  })}
                  component={_item.linkComponent}
                  href={_item.route}
                >
                  {_item.name}
                </CustomLink> */}
                  </NavListItem>
                ))}
              </NavList>
            </Nav>
          );
        }
      })}
    </Header>
  </Container>
);
