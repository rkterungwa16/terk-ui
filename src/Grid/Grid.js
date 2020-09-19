import React from "react";
import styled from "styled-components";

function getWidthString(span) {
  if (!span) return;
  let width = (span / 12) * 100;
  console.log("span width", span, width);
  return `width: ${width}%;`;
}

export const Row = styled.div`
  content: "";
  clear: both;
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Col = styled.div`
  float: left;
  padding: 10px;
  ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")}
  @media only screen and (min-width: 768px) {
    ${({ sm }) => getWidthString(sm)}
  }
  @media only screen and (min-width: 992px) {
    ${({ md }) => getWidthString(md)}
  }
  @media only screen and (min-width: 1200px) {
    ${({ lg }) => getWidthString(lg)}
  }
`;
