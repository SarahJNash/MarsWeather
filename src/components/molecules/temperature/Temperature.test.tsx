import React from "react";
import { render, screen } from "@testing-library/react";
import Temperature from "./Temperature";

test("renders the temperature component", () => {
  render(<Temperature tempMax={10} tempMin={45.23122} />);
  const elements = screen.getAllByTestId("measurement");
  validateTemp(elements[0], "max", "10.00°C");
  validateTemp(elements[1], "min", "45.23°C");
});

const validateTemp = (
  container: Element,
  labelText: string,
  valueText: string
) => {
  const labels = container.getElementsByClassName("label");
  const label = labels[0] as HTMLSpanElement;
  expect(label.textContent).toBe(labelText);

  const values = container.getElementsByClassName("value");
  const value = values[0] as HTMLSpanElement;
  expect(value.textContent).toBe(valueText);
};
