import React from "react";
import PropTypes from "prop-types";
import SwitchInput from "./SwitchInput";
import SwitchLabel from "./SwitchLabel";
import SwitchSlider from "./SwitchSlider";
import SwitchSliderWrapper from "./SwitchSliderWrapper";

const Switch = (props) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    console.log("width", ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);
  return (
    <>
      <SwitchLabel>
        <SwitchInput
          checked={props.checked}
          handleChange={props.handleChange}
          name={props.name}
        />
        <SwitchSliderWrapper ref={ref} color={props.color}>
          <SwitchSlider in={props.checked} duration={150} />
        </SwitchSliderWrapper>
      </SwitchLabel>
    </>
  );
};

Switch.propTypes = {
  name: PropTypes.string,
  handleChange: PropTypes.func,
  checked: PropTypes.bool,
  color: PropTypes.string,
};

Switch.defaultProps = {
  color: "#c23d38",
  checked: false,
};

export default Switch;
