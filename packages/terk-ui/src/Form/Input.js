import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./styles/input";

const Input = (props) => {
  const { className, type } = props;
  return (
    <StyledInput type={type} className={className}>
      {props.children}
    </StyledInput>
  );
};

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(["text", "password", "email"]),
};

export default Input;
