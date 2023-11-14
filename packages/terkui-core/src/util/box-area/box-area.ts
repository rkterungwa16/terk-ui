import { StyledBoxAreaProps, boxAreaProps } from "./types";

// margin-bottom: 0;
export const boxAreas: {
  [x: string]: string;
} = {
  p: "padding",
  m: "margin"
};

export const boxSides: {
  [x: string]: string;
} = {
  t: "top",
  b: "bottom",
  l: "left",
  r: "right",
  x: "left right",
  y: "top bottom"
};

const spacing: {
  [x: number]: number;
} = {
  0: 0,
  1: 0.25,
  2: 0.5,
  3: 1,
  4: 1.5,
  5: 2,
  6: 2.5,
  7: 3,
  8: 3.5,
  9: 4,
  10: 4.5
};

export const generateBoxAreaStyle = (props: string) => {
  const [boxAreaSide, spacingValue] = props.split("-");
  const [boxArea, boxSide] = boxAreaSide.split("");
  if (!boxSide) {
    return `${boxAreas[boxArea]}: ${spacing[Number(spacingValue)]}rem;`;
  }
  if (boxSides[boxSide]?.split(" ").length === 2) {
    const [first, second] = boxSides[boxSide].split(" ");
    return `
    ${boxAreas[boxArea]}-${first}: ${spacing[Number(spacingValue)]}rem;
    ${boxAreas[boxArea]}-${second}: ${spacing[Number(spacingValue)]}rem;
    `;
  }
  return `${boxAreas[boxArea]}-${boxSides[boxSide]}: ${spacing[Number(spacingValue)]}rem;`;
};

export const generateComponentBoxAreaStyle = (props: StyledBoxAreaProps) => {
  const modifiedProps = Object.keys(props)
    .filter((_key) => _key && boxAreaProps.includes(_key.replace("$", "")))
    .map((_key) => props[_key as keyof StyledBoxAreaProps]);
  return modifiedProps
    .filter((_prop) => _prop)
    .reduce((prev, curr) => {
      return `
      ${prev}
      ${curr ? generateBoxAreaStyle(curr) : ""}
    `;
    }, "");
};
