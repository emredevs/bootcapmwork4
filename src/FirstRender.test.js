import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import emojiList from "./emojiList.json";
describe("first render 20 emoji", () => {
  beforeEach(() => {
    render(<App />);
  });
  test("20 emoji render", () => {
    const emoji = emojiList.slice(0, 20);
    emoji.map((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
