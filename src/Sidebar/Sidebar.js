import React from "react";
import { Transition } from "react-transition-group";
import PropTypes from "prop-types";
import { sidebarTheme } from "./theme";
import { useClickOutside } from "../hooks/clickOutside";

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

  const sidebarRef = React.useRef(null);
  useClickOutside(sidebarRef, props.handleClose);
  return (
    <Transition in={props.isClose} timeout={props.timeout}>
      {(state) => {
        return (
          <div
            ref={sidebarRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            className={props.className}
          >
            {props.children}
          </div>
        );
      }}
    </Transition>
  );
};

Sidebar.propTypes = {
  isClose: PropTypes.bool,
  timeout: PropTypes.number,
  theme: PropTypes.object,
  themeMode: PropTypes.string,
  width: PropTypes.number,
  className: PropTypes.string,
  handleClose: PropTypes.func,
};

Sidebar.defaultProps = {
  isClose: false,
  timeout: 150,
  theme: sidebarTheme,
  width: 256,
  themeMode: "dark",
};

export default Sidebar;
