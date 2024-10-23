import { describe } from "node:test";
import { Button } from "./button";
import { render } from "@testing-library/react";

// describe("Button Component", () => {
//   test("renders a deffault buuton", () => {
//     const { getByText } = render(<Button>Click here</Button>);
//     expect(getByText("Click here")).toBeInTheDocument();
//   });
// });
describe("Button Component", () => {
  test("renders a default button", () => {
    const { getByText } = render(<Button>click here</Button>);
    expect(getByText("click here")).toBeInTheDocument();
  });
});
