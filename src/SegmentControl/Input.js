import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  appearance: none;
  outline: none;
  border: none;
  opacity: 0;
  z-index: 3;
`;

const Input = (props) => {
  return (
    <StyledInput
      type="radio"
      onChange={props.handleChange}
      checked={props.checked}
      name={props.name}
      value={props.name}
    />
  );
};

Input.propTypes = {
  children: PropTypes.node,
  handleChange: PropTypes.func,
  checked: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
