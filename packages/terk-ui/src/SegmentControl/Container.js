import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { segmentControlTheme } from "./theme";

const Container = styled.div.attrs((props) => ({
  width: props.width,
}))`
  position: relative;
  background: #efeff0;
  border-radius: 9px;
  background-color: ${(props) =>
    props.theme.segmentControl.container.backgroundColor};
  margin: 0;
  padding: 2px;
  border: none;
  outline: none;
  display: flex;
  height: 30px;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
`;

Container.propTypes = {
  number: PropTypes.number,
};

Container.defaultProps = {
  number: 3,
  theme: segmentControlTheme,
};

export default Container;
