import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledListGroup = styled.ul.attrs((props) => ({
  className: props.className,
}))`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListGroup = (props) => {
  const { className } = props;
  return (
    <StyledListGroup className={className}>{props.children}</StyledListGroup>
  );
};

ListGroup.defaultProps = {
  className: "",
};

ListGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ListGroup;
