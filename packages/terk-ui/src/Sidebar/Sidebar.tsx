import React, { CSSProperties, FC, ReactNode } from "react";
import { Transition } from "react-transition-group";
import PropTypes from "prop-types";
import { SidebarThemeProps, sidebarTheme } from "./theme";
import { useClickOutside } from "../hooks/clickOutside";

export type SidebarProps = {
  isClose?: boolean;
  timeout: number;
  themeMode?: string;
  theme: SidebarThemeProps;
  width?: number;
  className?: string;
  handleClose: () => void;
  children?: ReactNode;
};

const Sidebar: FC<SidebarProps> = (props) => {
  const [isClose, setClose] = React.useState(props.isClose);
  const defaultStyle: CSSProperties = {
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
    color: `${props.theme.sidebar[props.themeMode || ""].color}`,
    backgroundColor: `${props.theme.sidebar[props.themeMode || ""].backgroundColor}`
  };

  const transitionStyles: {
    [state: string]: {
      [attr: string]: number | string;
    };
  } = {
    entering: { opacity: 1, transform: `translateX(-${props.width}px)` },
    entered: { opacity: 1, transform: `translateX(-${props.width}px)` },
    exiting: { opacity: 1 },
    exited: { opacity: 1 }
  };

  React.useEffect(() => {
    if (props.isClose !== isClose) {
      setClose(props.isClose);
    }
  }, [props.isClose, isClose]);

  const sidebarRef = React.useRef(null);
  useClickOutside(sidebarRef, props.handleClose);
  return (
    <Transition in={isClose} timeout={props.timeout}>
      {(state) => {
        return (
          <div
            ref={sidebarRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
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
  timeout: PropTypes.number.isRequired,
  themeMode: PropTypes.string,
  width: PropTypes.number,
  className: PropTypes.string,
  handleClose: PropTypes.func.isRequired
};

Sidebar.defaultProps = {
  isClose: false,
  timeout: 150,
  theme: sidebarTheme,
  width: 256,
  themeMode: "dark"
};

export default Sidebar;
