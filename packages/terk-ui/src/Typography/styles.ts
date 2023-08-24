import { CSSProperties } from "react";
import styled from "styled-components";


export const CustomStyleFunction = (props: CSSProperties) => {
  return `
    font-size: ${props.fontSize};
    font-weight: ${props.fontWeight};
    color: ${props.color};
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

export const Paragraph = styled.p.attrs(({ style }) => ({
  style
}))`
  ${(props) => {
    return CustomStyleFunction(props);
  }}
`;

export const H1 = styled.h1.attrs(({ style }) => ({
  style
}))`
  ${(props) => {
    return CustomStyleFunction(props);
  }}
`;

export const H2 = styled.h2.attrs(({ style }) => ({
  style
}))`
  ${(props) => {
    return CustomStyleFunction(props);
  }}
`;

export const H3 = styled.h3.attrs(({ style }) => ({
  style
}))`
  ${(props) => {
    return CustomStyleFunction(props);
  }}
`;

export const H4 = styled.h4.attrs(({ style }) => ({
  style
}))`
  ${(props) => {
    return CustomStyleFunction(props);
  }}
`;

export const H5 = styled.h5.attrs(({ style }) => ({
  style
}))`
  ${(props) => {
    return CustomStyleFunction(props);
  }}
`;

export const H6 = styled.h6.attrs(({ style }) => ({
  style
}))`
  ${(props) => {
    return CustomStyleFunction(props);
  }}
`;
