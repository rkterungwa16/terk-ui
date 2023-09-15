import styled from "styled-components";
import { HeaderProps } from ".";

export const StyledHeader = styled.header`
  ${(props: HeaderProps) => {
    const style = `
      height: ${props.height};
      width: ${props.width};
      top: 0;
      z-index: 999;
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
