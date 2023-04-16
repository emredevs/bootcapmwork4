import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@babel/preset-react";
import Header from "./Header";
describe("header render edildimi", () => {
  let header;
  beforeEach(() => {
    render(<Header />);
    header = screen.getByText("Emoji Search");
  });
  test("header render edildi", () => {
    expect(header).toBeInTheDocument();
  });
});
