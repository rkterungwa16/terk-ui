import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { listTheme } from "./theme";

const StyledListItem = styled.li.attrs((props) => ({
  className: props.className,
  themeMode: props.themeMode,
}))`
  padding: 8px;
  color: ${(props) => props.theme.listItem.color};
  border: 1px solid
    ${(props) => props.theme.listItem[props.themeMode].borderColor};
  background-color: ${(props) =>
    props.theme.listItem[props.themeMode].backgroundColor};
  &:hover {
    background-color: ${(props) =>
      props.theme.listItem[props.themeMode]["&:hover"].backgroundColor};
  }
`;

StyledListItem.propTypes = {
  themeMode: PropTypes.string,
  className: PropTypes.className,
};

StyledListItem.defaultProps = {
  themeMode: "light",
  theme: listTheme,
};

const ListItem = (props) => {
  const { className } = props;
  return (
    <StyledListItem className={className}>{props.children}</StyledListItem>
  );
};

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ListItem;
