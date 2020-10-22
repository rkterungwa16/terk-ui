import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const StyledCard = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  margin-bottom: 1.5rem;
  word-wrap: break-word;
  background-clip: border-box;
  border-radius: 10px;
  background-color: #efeff0;
`;

StyledCard.propTypes = {
  className: PropTypes.string,
};

export const StyledCardbody = styled.div.attrs((props) => ({
  className: props.className,
}))`
  padding: 20px;
`;

StyledCardbody.propTypes = {
  className: PropTypes.string,
};
