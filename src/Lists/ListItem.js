import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { listTheme } from "./theme";

const StyledListItem = styled.li.attrs((props) => ({
  className: props.className,
}))`
  padding: 8px;
  color: ${(props) => props.theme.listItem.color};
  border: 1px solid ${(props) => props.theme.listItem.borderColor};
  background-color: ${(props) => props.theme.listItem.backgroundColor};
  &:hover {
    background-color: ${(props) =>
      props.theme.listItem["&:hover"].backgroundColor};
  }
`;

const ListItem = (props) => {
  const { className, theme } = props;
  return (
    <StyledListItem theme={theme} className={className}>
      {props.children}
    </StyledListItem>
  );
};

ListItem.defaultProps = {
  className: "",
  theme: listTheme,
};

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object,
};

export default ListItem;
