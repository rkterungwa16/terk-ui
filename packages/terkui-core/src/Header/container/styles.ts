import styled from "styled-components";
import { ContainerProps } from ".";


export const StyledHeaderContainer = styled.div`
  ${(props: ContainerProps) => {
    const style = `
      width: ${props.width};
      top: 0;
      z-index: 999;
    `
    if (props.display === "flex") {
      return `
        display: ${props.display};
        justify-content: ${props.justifyContent};
        align-items: ${props.alignItems};
        ${style}
      `
    }
    return style;
  }}
`;
