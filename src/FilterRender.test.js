import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Search test input ", () => {
  let searchInput;
  beforeEach(() => {
    render(<App />);
    searchInput = screen.getByLabelText("TestInput");
  });
  test("input render filter", () => {
    const value = "100";
    userEvent.type(searchInput, value);
    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
