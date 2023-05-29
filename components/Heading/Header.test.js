import Heading from "./Header";
import { render, screen } from "@testing-library/react";

test("test", () => {
  render(<Heading>QUIZme</Heading>);
  const element = screen.getByText("QUIZme");
  expect(element).toBeInTheDocument();
});
