import React from "react";
import { Transition } from "react-transition-group";
import PropTypes from "prop-types";
import { sidebarTheme } from "./theme";

const Sidebar = (props) => {
  const defaultStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
    zIndex: 1030,
    order: -1,
    display: "flex",
    flex: `0 0 ${props.width}px`,
    flexDirection: "column",
    width: `${props.width}px`,
    transition: ".15s ease-out",
    color: `${props.theme.sidebar[props.themeMode].color}`,
    backgroundColor: `${props.theme.sidebar[props.themeMode].backgroundColor}`,
  };

  const transitionStyles = {
    entering: { opacity: 1, transform: `translateX(-${props.width}px)` },
    entered: { opacity: 1, transform: `translateX(-${props.width}px)` },
    exiting: { opacity: 1 },
    exited: { opacity: 1 },
  };
  return (
    <Transition in={props.isOpen} timeout={props.timeout}>
      {(state) => {
        return (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {props.children}
          </div>
        );
      }}
    </Transition>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  timeout: PropTypes.number,
  theme: PropTypes.object,
  themeMode: PropTypes.string,
  width: PropTypes.number,
};

Sidebar.defaultProps = {
  isOpen: false,
  timeout: 150,
  theme: sidebarTheme,
  width: 256,
  themeMode: "dark",
};

export default Sidebar;
