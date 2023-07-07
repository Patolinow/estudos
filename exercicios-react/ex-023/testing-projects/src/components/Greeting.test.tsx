import { expect,  beforeEach, it, describe } from "vitest";
import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

describe("Greeting component", () => {
  // extends Vitest's expect method with methods from react-testing-library


  // runs a cleanup after each test case (e.g. clearing jsdom)
  beforeEach(() => {
    render(<Greeting/>)
  })

  it("renders Hello World", () => {
    const h1 = screen.getByText('Hello World')
    expect(h1).toBeInTheDocument()
  });

  it("renders Hello and greetings", () => {
    const p = screen.getByText('How are you?')
    expect(p).toBeInTheDocument()
  });
});
