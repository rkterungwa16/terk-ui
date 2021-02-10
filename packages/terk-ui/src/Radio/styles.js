import styled from "styled-components";

export const StyledRadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const StyledInputRadio = styled.input.attrs((props) => ({
  type: "radio",
}))`
  top: 0;
  left: 0;
  width: 100%;
  cursor: inherit;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  z-index: 1;
  position: absolute;
  background: transparent;
`;

export const StyledRadioOuterCircelIcon = styled.svg.attrs((props) => ({
  viewBox: "0 0 24 24",
}))`
  fill: currentColor;
  position: absolute;
  width: 50px;
  height: 50px;
  display: inline-block;
  color: #6f54bf;
`;

export const StyledRadioInnerFilledCircelIcon = styled.svg.attrs((props) => ({
  viewBox: "0 0 24 24",
}))`
  fill: currentColor;
  position: absolute;
  width: 50px;
  height: 50px;
  display: inline-block;
  color: #6f54bf;
`;

export const StyledRadioWrapper = styled.span`
  display: flex;
  height: 50px;
  width: 50px;
  cursor: pointer;
  position: relative;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
`;

export const StyledRadioLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
`;

export const StyledLabelText = styled.span`
  margin-left: 10px;
  font-size: 25px;
  color: #5270bc;
`;
