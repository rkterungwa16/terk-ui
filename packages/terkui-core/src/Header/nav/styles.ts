import styled from "styled-components";
import PropTypes from "prop-types";
import { display } from "./utils";

export interface NavProps {
  className?: string;
  size?: string;
  display?: string;
}

export const StyledNav = styled.nav.attrs((props: NavProps) => ({
  className: props.className,
  size: props.size,
  display: props.display
}))`
  ${(props: NavProps) => {
    return `${display(props?.size || "", props?.display || "")}`;
  }}
`;

StyledNav.propTypes = {
  className: PropTypes.string
};

export const StyledNavList = styled.ul.attrs((props) => ({
  className: props.className
}))`
  list-style: none;
  display: flex;
`;

StyledNavList.propTypes = {
  className: PropTypes.string
};

export const StyledNavListItem = styled.li.attrs((props) => ({
  className: props.className
}))``;

StyledNavListItem.propTypes = {
  className: PropTypes.string
};
