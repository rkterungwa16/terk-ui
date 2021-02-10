import React from "react";
import PropTypes from "prop-types";
import { StyledRadioLabel, StyledLabelText } from "./styles";


const RadioLabel = (props) => {
  const { label, control, disabled, value } = props;

  const controlProps = {
    disabled,
    value,
  };

  ["checked", "name", "onChange", "value", "inputRef"].forEach((key) => {
    if (control.props[key] !== undefined) {
      controlProps[key] = control.props[key];
    }
  });
  return (
    <StyledRadioLabel>
      {React.cloneElement(control, controlProps)}
      <StyledLabelText>{label}</StyledLabelText>
    </StyledRadioLabel>
  );
};

RadioLabel.PropTypes = {
  checked: PropTypes.bool,
  control: PropTypes.element,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default RadioLabel;
