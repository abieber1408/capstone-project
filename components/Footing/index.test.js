import Footing from ".";
import { render, screen } from "@testing-library/react";

test("test", () => {
  render(<Footing>LOGO</Footing>);
  const element = screen.getByText("LOGO");
  expect(element).toBeInTheDocument();
});
