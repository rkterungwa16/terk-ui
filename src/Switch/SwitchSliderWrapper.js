import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const SwitchSliderWrapper = styled.span.attrs((props) => ({
  color: props.color,
}))`
  background-color: #fff;
  border: 1px solid ${(props) => props.color};
  position: relative;
  display: block;
  height: inherit;
  cursor: pointer;
  border-radius: 0.25rem;
`;

SwitchSliderWrapper.propTypes = {
  color: PropTypes.string,
};

SwitchSliderWrapper.defaultProps = {
  color: "#c23d38",
};

export default SwitchSliderWrapper;
