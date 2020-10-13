import React from "react";
import { Transition } from "react-transition-group";
import PropTypes from "prop-types";

const defaultStyle = {
  position: "absolute",
  top: "3px",
  left: "2px",
  height: "20px",
  width: "20px",
  cursor: "pointer",
  borderRadius: ".25rem",
  transition: ".15s ease-out",
};

const transitionStyles = {
  entering: { opacity: 1, transform: "translateX(12px)" },
  entered: { opacity: 1, transform: "translateX(12px)" },
  exiting: { opacity: 1 },
  exited: { opacity: 1 },
};

const SwitchSlider = (props) => {
  return (
    <Transition in={props.in} timeout={props.duration}>
      {(state) => {
        return (
          <span
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
              backgroundColor: props.in ? props.color : "#ffffff",
              border: `1px solid ${props.color}`,
            }}
          >
            {props.children}
          </span>
        );
      }}
    </Transition>
  );
};

SwitchSlider.propTypes = {
  in: PropTypes.bool,
  timeout: PropTypes.number,
  color: PropTypes.string,
};

SwitchSlider.defaultProps = {
  in: false,
  timeout: 150,
  color: "#c23d38",
};

export default SwitchSlider;
