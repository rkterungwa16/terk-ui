import React from "react";
import { render } from "@testing-library/react";
import { ToastMessage } from "./ToastMessage";

test("renders learn react link", () => {
  const { getByText } = render(<ToastMessage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
