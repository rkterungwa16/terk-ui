import { FC, MouseEventHandler, ReactElement, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";

import { Header, Nav, NavList, NavListItem } from "..";

import { HeaderNavs, ClientRoutes } from "@routes/client";
import { CustomLink } from "@components/Link";
import { Button } from "@components/Button";
import { ButtonColor, ButtonVariant } from "@components/Button/constants";
import { IconButton } from "@components/Button/icon";
import {
  PageHeaderButtonProps,
  PageHeaderLinkProps,
  PageHeaderIconProps,
  PageHeaderNavItemsProps,
  HeaderComponentTypes
} from "./types";

// for all screen sizes greater or equal to xs di
// display = "none" screenSize = "xs" { flex: { gte: "x" }}
// An array of header contents. Each data in array should have element type
// Element type: menuIcon, brandLogo, navItems
// const arr: (string | number)[] = ['a', 'b', 1, 2];

export type PageHeaderProp = {
  components: (
    | PageHeaderButtonProps
    | PageHeaderLinkProps
    | PageHeaderIconProps
    | PageHeaderNavItemsProps
  )[];
};
export const PageHeader: FC<PageHeaderProp> = ({ components }) => (
  <Header className={""}>
    {components.map((_component) => {
      if (_component.type === HeaderComponentTypes.ICON) {
        return (
          <Nav className={_component.nav?.className} {..._component.nav}>
            <IconButton onClick={_component.handleClick}>
              <Image {..._component.img} />
            </IconButton>
          </Nav>
        );
      }
      if (_component.type === HeaderComponentTypes.LINK) {
        <Nav className={_component.nav?.className} {..._component.nav}>
          <CustomLink component={_component.linkComponent} href={_component.href}>
            <Image {..._component.img} />
          </CustomLink>
        </Nav>;
      }
      if (_component.type === HeaderComponentTypes.BUTTON) {
        <Nav className={_component.nav?.className} {..._component.nav}>
          <Button
            {...{
              ...(_component.href && { href: _component.href }),
              ...(_component.handleClick && { onClick: _component.handleClick }),
              ...(_component.variant && { variant: _component.variant }),
              ...(_component.color && { href: _component.color })
            }}
          >
            {_component.text}
          </Button>
        </Nav>;
      }

      if (_component.type === HeaderComponentTypes.ITEMS) {
        <Nav className={_component.nav?.className} {..._component.nav}>
          <NavList className={_component.list?.className}>
            {_component.items?.map((_item, index) => (
              <NavListItem className={_item.classNames?.item} key={`${_item.route}-${index}`}>
                <CustomLink
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
                </CustomLink>
              </NavListItem>
            ))}
          </NavList>
        </Nav>;
      }
    })}
  </Header>
);
