import * as React from "react";
import PropTypes from "prop-types";
import RadioGroupContext from "./RadioGroupContext";
import { StyledRadioGroup } from "./styles";

const RadioGroup = (props) => {
  const { name, onChange, value: valueProp } = props;
  const [value, setValue] = React.useState("");

  const handleChange = (
    event
  ) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event, event.target.checked);
    }
  };

  React.useEffect(() => {
    if (value !== valueProp) {
      setValue(valueProp);
    }
  }, [valueProp, value]);

  return (
    <RadioGroupContext.Provider value={{ name, onChange: handleChange, value }}>
      <StyledRadioGroup>{props.children}</StyledRadioGroup>
    </RadioGroupContext.Provider>
  );
};

RadioGroupProp.PropTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default React.memo(RadioGroup);
