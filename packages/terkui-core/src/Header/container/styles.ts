import styled from "styled-components";
import { ContainerProps } from ".";
import { generateComponentBoxAreaStyle } from "../../util/box-area.util";

export const StyledHeaderContainer = styled.div`
  ${(props: ContainerProps) => {
    const { width, p, pb, pt, pl, pr, px, py, m, ml, mr, mt, mb, mx, my } = props;
    const style = `
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
