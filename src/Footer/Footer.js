import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { footerTheme } from "./theme";

const StyledFooter = styled.div.attrs((props) => ({
  className: props.className,
  themeMode: props.themeMode,
}))`
  display: flex;
  flex: 0 0 50px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  padding: 15px;
  color: ${(props) => props.theme.footer[props.themeMode].color};
  background-color: ${(props) =>
    props.theme.footer[props.themeMode].backgroundColor};
`;

StyledFooter.propTypes = {
  themeMode: PropTypes.string,
};

StyledFooter.defaultProps = {
  themeMode: "light",
  theme: footerTheme,
};
const Footer = (props) => {
  const { className } = props;
  return <StyledFooter className={className}>{props.children}</StyledFooter>;
};

Footer.defaultProps = {
  className: "",
};

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Footer;
