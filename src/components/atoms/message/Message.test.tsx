import React from "react";
import { render, screen } from "@testing-library/react";

import Message from "./Message";

test("renders the message", () => {
  render(<Message message="some message" />);
  const element = screen.getByText("some message");
  expect(element).toBeInTheDocument();
});
