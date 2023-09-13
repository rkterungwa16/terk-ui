// margin-bottom: 0;
export const padding: {
  [x: string]: string;
} = {
  p: "padding: {spacing};",
  pb: "padding-bottom: {spacing};",
  pt: "padding-top {spacing};",
  pl: "padding-left {spacing};",
  pr: "padding-right {spacing};",
  px: `
    padding-right: {spacing};
    padding-left: {spacing};
  `,
  py: `
    padding-top: {spacing};
    padding-bottom: {spacing};
  `
};
// mb-0
// mx-1
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

export const generatePaddingStyle = (props: string) => {
  const [paddingType, spacingValue] = props.split("-");
  return padding[paddingType].replace("{spacing}", `${spacing[Number(spacingValue)]}`);
};
