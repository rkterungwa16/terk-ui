import * as React from "react";
import PropTypes from "prop-types";

const SvgIcon = (props) => {
  const { className, color, fontSize, viewBox, children } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox={viewBox}
      className={className}
      fill="currentColor"
      style={{
        color,
        fontSize,
      }}
    >
      {children}
    </svg>
  );
};

SvgIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  viewBox: PropTypes.string,
  children: PropTypes.children,
};

SvgIcon.defaultProps = {
  color: "inherit",
  fontSize: "default",
  viewBox: "0 0 24 24",
};

export default React.memo(SvgIcon);
