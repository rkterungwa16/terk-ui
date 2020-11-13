import React from "react";
import { render } from "@testing-library/react";
import { ToastMessage } from "./ToastMessage";

const remove = jest.fn();
test("renders toast message", () => {
  const { getByText } = render(
    <ToastMessage remove={remove}>Hello there</ToastMessage>
  );
  const linkElement = getByText(/Hello there/i);
  expect(linkElement).toBeInTheDocument();
});
