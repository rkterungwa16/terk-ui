import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { footerTheme } from "./theme";

const StyledFooter = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  flex: 0 0 50px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  padding: 15px;
  color: ${(props) => props.theme.footer.color};
  background-color: ${(props) => props.theme.footer.backgroundColor};
`;

const Footer = (props) => {
  const { className, theme } = props;
  return (
    <StyledFooter theme={theme} className={className}>
      {props.children}
    </StyledFooter>
  );
};

Footer.defaultProps = {
  className: "",
  theme: footerTheme,
};

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object,
};

export default Footer;
