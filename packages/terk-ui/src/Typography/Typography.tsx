import PropTypes from "prop-types";
import { CSSProperties, FC } from "react";
import { Paragraph, H1, H2, H3, H4, H5, H6 } from "./styles";

const mapVariantsToComponent = {
  p: Paragraph,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6
};

export interface TypographyProps extends CSSProperties {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}
const Typography: FC<TypographyProps> = ({ variant, ...props }) => {
  const Component = mapVariantsToComponent[variant || "p"];
  return Component ? <Component style={props} /> : null;
};

Typography.defaultProps = {
  color: "#263D61",
  fontWeight: "400",
  fontSize: "18px",
  marginTop: "0",
  marginBottom: "0",
  variant: "p"
};

Typography.propTypes = {
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
  margin: PropTypes.string,
  position: PropTypes.oneOf(["absolute", "relative", "fixed", "sticky"]),
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]),
  top: PropTypes.string,
  width: PropTypes.string,
  left: PropTypes.string,
  letterSpacing: PropTypes.string
};

export default Typography;
