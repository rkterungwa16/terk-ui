import React from "react";
import styled from "styled-components";

const SIZE = 44;

export const StyledBorderContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
    ${(props) => {
    return `
      width: ${props.size}px;
      height: ${props.size}px;
      position: absolute;
    `
  }}
`
export const StyledBorderSvg = styled.svg.attrs((props) => ({
  className: props.className,
  viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`
}))`
    animation: rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: auto;

    keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
  `;
export const StyledBorderCircle = styled.circle.attrs((props) => ({
  className: props.className,
  cx: `${SIZE}`,
  cy: `${SIZE}`,
  r: `${(SIZE - props.thickness) / 2}`,
  fill: "none",
  stroke: "#06c3e1",
  strokeWidth: `${props.thickness}`
}))`
    stroke-dasharray: 150,200;
    stroke-dashoffset: -10;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes dash {
        0% {
          stroke-dasharray: 1,200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89,200;
          stroke-dashoffset: -35;
        }
        100% {
          stroke-dasharray: 89,200;
          stroke-dashoffset: -124;
        }
    }

    @keyframes color {
        0% {
          stroke: #06c3e1;
        }
        40% {
          stroke: #06c3e1;
        }
        66% {
          stroke: #06c3e1;
        }
        80%, 90% {
          stroke: #06c3e1;
        }
    }

`;
