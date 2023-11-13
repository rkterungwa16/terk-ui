import styled from "styled-components";
import { HeaderProps } from ".";
import { generateComponentBoxAreaStyle } from "../../util/box-area/box-area";

export const StyledHeader = styled.header`
  ${(props: HeaderProps) => {
    const { width, height, p, pb, pt, pl, pr, px, py, m, ml, mr, mt, mb, mx, my } = props;
    const style = `
      height: ${height};
      width: ${width};
      top: 0;
      z-index: 999;
      ${generateComponentBoxAreaStyle({
        p,
        pb,
        pt,
        pl,
        pr,
        px,
        py,
        m,
        ml,
        mr,
        mt,
        mb,
        mx,
        my
      })}
    `;
    if (props.display === "flex") {
      return `
        display: ${props.display};
        justify-content: ${props.justifyContent};
        align-items: ${props.alignItems};
        ${style}
      `;
    }
    return style;
  }}
`;
