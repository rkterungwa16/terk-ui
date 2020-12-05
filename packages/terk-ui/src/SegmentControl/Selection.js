import React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

const defaultStyle = {
  position: "absolute",
  background: "#ffffff",
  border: ".5px solid rgb(0 0 0 / 4%)",
  boxShadow: "0 3px 8px 0 rgba(0,0,0,0.12), 0 3px 1px 0 rgba(0,0,0,0.04)",
  borderRadius: "7px",
  zIndex: 2,
  height: "93%",
  left: "0px",
  top: "0px",
  transition: ".15s ease-out",
};

const Selection = (props) => {
  const [width, setWidth] = React.useState(400);
  React.useEffect(() => {
    if (props.width !== width) {
      setWidth(props.width);
    }
  }, [props.width]);
  const transitionStyles = {
    entering: {
      opacity: 1,
      transform: `translateX(${(props.selected * width) / props.number}px)`,
    },
    entered: {
      opacity: 1,
      transform: `translateX(${(props.selected * width) / props.number}px)`,
    },
    exiting: { opacity: 1 },
    exited: { opacity: 1 },
  };
  return (
    <Transition in={Boolean(props.selected)} timeout={props.duration}>
      {(state) => {
        return (
          <span
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
              width: `${width / props.number}px`,
            }}
          >
            {props.children}
          </span>
        );
      }}
    </Transition>
  );
};

Selection.propTypes = {
  in: PropTypes.bool,
  timeout: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.number,
  number: PropTypes.number,
  selected: PropTypes.number,
};

Selection.defaultProps = {
  in: false,
  timeout: 150,
  color: "#c23d38",
  number: 3,
};

export default Selection;
