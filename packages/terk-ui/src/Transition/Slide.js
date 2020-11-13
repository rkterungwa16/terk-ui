import * as React from "react";
import { Transition } from "react-transition-group";
import PropTypes from "prop-types";

const duration = 500;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, bottom ${duration}ms ease-in-out`,
  opacity: 0,
  position: "absolute",
  bottom: "0px",
};

const transitionStyles = {
  entering: { opacity: 1, bottom: "20px" },
  entered: { opacity: 1, bottom: "20px" },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};
const SlideInUp = (props) => {
  return (
    <Transition in={props.in} timeout={props.duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {props.children}
        </div>
      )}
    </Transition>
  );
};

SlideInUp.propTypes = {
  in: PropTypes.bool,
  duration: PropTypes.number,
  handleChange: PropTypes.func,
};

export function Example() {
  const [isOpen, setOpen] = React.useState(false);
  const handleSlideup = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <SlideInUp in={isOpen} duration={5000}>
        <span>This is a fade Transition sample code!</span>
      </SlideInUp>
      <button
        style={{
          height: "24px",
          cursor: "pointer",
        }}
        onClick={handleSlideup}
      >
        Show Fade
      </button>
    </div>
  );
}
