import React from "react";
import PropTypes from "prop-types";
import { StyledInputRadio, StyledRadioWrapper } from "./styles";
import RadioOuterCircleIcon from "./RadioOuterCircleIcon";
import RadioInnerCircleIcon from "./RadioInnerCircleIcon";
import RadioGroupContext from "./RadioGroupContext";

const Radio = (props) => {
  const { disabled } = props;
  const radioGroup = React.useContext(RadioGroupContext);
  return (
    <StyledRadioWrapper>
      <StyledInputRadio
        onChange={radioGroup.onChange}
        disabled={disabled}
        name={radioGroup.name}
        value={props.value}
        checked={props.value === radioGroup.value}
      />
      <RadioOuterCircleIcon />
      {props.value === radioGroup.value ? <RadioInnerCircleIcon /> : null}
    </StyledRadioWrapper>
  );
};

Radio.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  checked: PropTypes.bool
}

Radio.defaultProps = {
  checked: false,
};

export default Radio;
