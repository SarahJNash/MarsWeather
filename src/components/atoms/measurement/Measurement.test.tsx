import React from "react";
import { render, screen } from "@testing-library/react";
import Measurement from "./Measurement";

test("renders the label correctly", () => {
  render(<Measurement label="a label" value={12} units="mph" />);
  const element = screen.getByText("a label");
  expect(element).toBeInTheDocument();
  expect(element.classList.contains("label")).toBeTruthy();
});

test("renders the value correctly when int", () => {
  render(<Measurement label="a label" value={12} units="mph" />);
  const element = screen.getByText("12.00");
  expect(element).toBeInTheDocument();
  expect(element.classList.contains("value")).toBeTruthy();
});

test("renders the value correctly when float", () => {
  render(<Measurement label="a label" value={12.344545364} units="mph" />);
  const element = screen.getByText("12.34");
  expect(element).toBeInTheDocument();
});

test("renders the unit correctly", () => {
  render(<Measurement label="a label" value={12} units="mph" />);
  const element = screen.getByText("mph");
  expect(element).toBeInTheDocument();
  expect(element.classList.contains("units")).toBeTruthy();
});

test("adds aditional styling", () => {
  render(
    <Measurement label="a label" value={12} units="mph" styling="extra" />
  );
  const element = screen.getByTestId("measurement");
  expect(element.classList.contains("extra")).toBeTruthy();
});
