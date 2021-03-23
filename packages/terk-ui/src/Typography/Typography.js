import styled from "styled-components";
import PropTypes from "prop-types";

const CustomPropsFunction = (props) => ({
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  fontColor: props.fontColor,
  marginTop: props.marginTop,
  marginBottom: props.marginBottom,
  marginLeft: props.marginLeft,
  marginRight: props.marginRight,
  margin: props.margin,
  letterSpacing: props.letterSpacing,
  position: props.position,
  top: props.top,
  left: props.left,
  width: props.width,
  height: props.height,
});
const CustomStyleFunction = (props) => {
  return `
    font-size: ${props.fontSize};
    font-weight: ${props.fontWeight};
    color: ${props.fontColor};
    margin-top: ${props.marginTop};
    margin-bottom: ${props.marginBottom};
    ${props.marginLeft ? `margin-left: ${props.marginLeft};` : ""}
    ${props.marginRight ? `margin-right: ${props.marginRight};` : ""}
    ${props.letterSpacing ? `letter-spacing: ${props.letterSpacing};` : ""}
    ${props.position ? `position: ${props.position};` : ""}
    ${props.top ? `top: ${props.top};` : ""}
    ${props.left ? `left: ${props.left};` : ""}
    ${props.height ? `height: ${props.height};` : ""}
    ${props.width ? `width: ${props.width};` : ""}
  `;
};
const Paragraph = styled.p.attrs(CustomPropsFunction)`
  ${(props) => {
    return CustomStyleFunction(props);
  }}
`;

const H1 = styled.h1.attrs(CustomPropsFunction)`
  ${(props) => {
    return CustomStyleFunction(props);
  }}
`;

const mapVariantsToComponent = {
  p: Paragraph,
  h1: H1,
};

const Typography = (props) => {
  const Component = mapVariantsToComponent[props.variant];
  return <Component {...props} />;
};

Typography.defaultProps = {
  fontColor: "#263D61",
  fontWeight: "400",
  fontSize: "18px",
  marginTop: "0",
  marginBottom: "0",
  variant: "p",
};

Typography.propTypes = {
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  fontColor: PropTypes.string,
  fontWidth: PropTypes.string,
  height: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
  margin: PropTypes.string,
  position: "absolute" | "relative" | "fixed" | "sticky",
  top: PropTypes.string,
  width: PropTypes.string,
  left: PropTypes.string,
  letterSpacing: PropTypes.string,
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p",
}

export default Typography;
