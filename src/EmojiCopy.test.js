import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Emoji copy", () => {
  let listElement;
  beforeEach(() => {
    render(<App />);
    listElement = screen.getByText("Grinning");
  });
  test("copy emoji test", () => {
    userEvent.click(listElement);
    expect(
      listElement.parentElement.getAttribute("data-clipboard-text")
    ).toMatch("💯");
  });
});
