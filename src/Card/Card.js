import React from "react";
import PropTypes from "prop-types";

import { StyledCard } from "./style";

const Card = (props) => {
  return <StyledCard className={props.className}>{props.children}</StyledCard>;
};

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;
