import React from "react";
import PropTypes from "prop-types";
import { StyledTextArea } from "./styles/textarea";

const TextArea = (props) => {
  const { className } = props;
  return (
    <StyledTextArea className={className}>{props.children}</StyledTextArea>
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default TextArea;
