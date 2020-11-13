import React from "react";
import PropTypes from "prop-types";

import { StyledCardbody } from "./style";

const Cardbody = (props) => {
  return (
    <StyledCardbody className={props.className}>
      {props.children}
    </StyledCardbody>
  );
};

Cardbody.propTypes = {
  className: PropTypes.string,
};

export default Cardbody;
