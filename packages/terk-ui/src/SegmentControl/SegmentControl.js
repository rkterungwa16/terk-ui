import React from "react";
import PropTypes from "prop-types";
import Container from "./Container";
import Selection from "./Selection";
import Option from "./Option";
import Input from "./Input";
import { Label, Text, VeriticalDivider } from "./Labels";

const SegmentControl = (props) => {
  const [width, setWidth] = React.useState(400);
  const segementElement = React.useRef(null);

  React.useEffect(() => {
    function handleResize() {
      const currentWidth = segementElement.current.parentElement.clientWidth;
      setWidth(currentWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const selected = props.names
    .map((name) => name.toLowerCase())
    .indexOf(props.selected);
  return (
    <Container ref={segementElement}>
      <Selection
        in={props.checked}
        duration={150}
        selected={selected}
        number={props.names.length}
        width={width}
      />
      {props.names.map((name) => (
        <Option key={name}>
          <Input
            checked={props.checked}
            handleChange={props.handleChange}
            name={name.toLowerCase()}
            value={name.toLowerCase()}
          />
          <Label htmlFor={name} name={name} selectedName={props.selected}>
            <Text>{name}</Text>
          </Label>
          <VeriticalDivider />
        </Option>
      ))}
    </Container>
  );
};

SegmentControl.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func,
  checked: PropTypes.bool,
  color: PropTypes.string,
  value: PropTypes.string,
  selected: PropTypes.string,
};

SegmentControl.defaultProps = {
  color: "#c23d38",
  checked: false,
};

export default SegmentControl;
