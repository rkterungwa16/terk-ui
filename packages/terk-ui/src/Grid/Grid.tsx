import { FC } from "react";
import PropTypes from "prop-types";

import { GridProps, StyledGrid } from "./styles";

export const Grid: FC<GridProps> = (props) => {
  return <StyledGrid {...props}>{props.children}</StyledGrid>;
};

Grid.defaultProps = {
  item: false,
  container: false
};

Grid.propTypes = {
  className: PropTypes.string,
  xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  direction: PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]),
  justify: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  alignContent: PropTypes.oneOf([
    "stretch",
    "center",
    "flex-start",
    "flex-end",
    "space-between",
    "space-around"
  ]),
  alignItems: PropTypes.oneOf(["flex-start", "center", "flex-end", "stretch", "baseline"]),
  item: PropTypes.bool,
  container: PropTypes.bool,
  children: PropTypes.node,
  flex: PropTypes.bool,
  spacing: PropTypes.number
};

export default Grid;

