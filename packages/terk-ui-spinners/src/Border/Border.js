import React from "react";
import PropTypes from "prop-types";

import { StyledBorderCircle, StyledBorderSvg, StyledBorderContainer } from "./style";

const Border = (props) => {
  return (
    <StyledBorderContainer {...props}>
      <StyledBorderSvg {...props}>
        <StyledBorderCircle {...props} />
      </StyledBorderSvg>
    </StyledBorderContainer>

  )
}

Border.propTypes = {
  size: PropTypes.number,
  thickness: PropTypes.number,
  className: PropTypes.string,
}

Border.defaultProps = {
  size: 40,
  thickness: 3.6
}

export default Border;
