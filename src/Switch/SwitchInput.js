import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const StyledInput = styled.input`
  display: none;
  border-color: ${(props) => (props.checked ? "#2819ae" : "")};
`;

export const SwitchInput = (props) => {
  return (
    <StyledInput
      type="checkbox"
      onChange={props.handleChange}
      checked={props.checked}
      name={props.name}
    />
  );
};

SwitchInput.propTypes = {
  children: PropTypes.node,
  handleChange: PropTypes.func,
  checked: PropTypes.bool,
  name: PropTypes.string,
};

export default SwitchInput;
