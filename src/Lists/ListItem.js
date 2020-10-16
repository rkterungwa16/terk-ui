import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { listTheme } from "./theme";

const StyledListItem = styled.li.attrs((props) => ({
  className: props.className,
  themeMode: props.themeMode,
  divider: props.divider,
  accent: props.accent,
}))`
  position: relative;
  padding: 8px;
  color: ${(props) => props.theme.listItem[props.themeMode].color};
  background-color: ${(props) =>
    props.theme.listItem[props.themeMode].backgroundColor};
  &:hover {
    background-color: ${(props) =>
      props.theme.listItem[props.themeMode]["&:hover"].backgroundColor};
  }
  ${(props) => {
    if (props.divider) {
      return `
      ::before {
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 90%;
        margin: auto;
        height: 0.5px;
        content: "";
        background-color: ${
          props.theme.listItem[props.themeMode]["::before"].backgroundColor
        };
      }
      `;
    }
  }}

  ${(props) => {
    if (props.accent) {
      console.log("props accent", props.accent);
      return `
        border-left: 4px solid ${props.accent};
      `;
    }
  }}
`;

StyledListItem.propTypes = {
  themeMode: PropTypes.string,
  className: PropTypes.string,
  divider: PropTypes.bool,
  accent: PropTypes.string,
};

StyledListItem.defaultProps = {
  themeMode: "dark",
  theme: listTheme,
  divider: false,
};

const ListItem = (props) => {
  return <StyledListItem {...props}>{props.children}</StyledListItem>;
};

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  divider: PropTypes.bool,
  accent: PropTypes.string,
  themeMode: PropTypes.string,
};

export default ListItem;
