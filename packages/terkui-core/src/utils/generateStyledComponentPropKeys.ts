export const generateStyledComponentPropKeys = (props: {
  [x: string]: string | number;
}) => {
  return Object.keys(props).reduce(
    (prev: { [x: string]: string | number }, curr: string) => {
      if (!prev[curr]) {
        return {
          ...prev,
          [`$${curr}`]: props[curr],
        };
      }
      return prev;
    },
    {},
  );
};
