import { expect, beforeEach, it, describe } from "vitest";
import Greeting from "./Greeting";
import { render, screen, fireEvent } from "../utils/test-utils";

describe("Greeting component", () => {
  beforeEach(() => {
    // Arrange
    render(<Greeting />);
  });

  describe("renders all text", () => {
    // Assert
    it("renders Hello World", () => {
      const h1 = screen.getByText("Hello World");
      expect(h1).toBeInTheDocument();
    });

    it("renders button text", () => {
      // Assert
      const button = screen.getByText("Change Text!");
      expect(button).toBeInTheDocument();
    });
  });

  describe("renders text conditionally", () => {
    it("renders 'how are you?' if button was NOT clicked", () => {
      // Assert
      const text = screen.getByText("How are you?");
      expect(text).toBeInTheDocument();
    });

    it("renders 'text changed!' when button IS clicked", () => {
      // Act
      const button = screen.getByRole("button");
      fireEvent.click(button);

      // Assert
      const text = screen.getByText("Text Changed!");
      expect(text).toBeInTheDocument();
    });

    it("don't render 'how are you?' after button click", () => {
      const button = screen.getByRole('button')
      fireEvent.click(button)

      const text = screen.queryByText("How are you?")
      expect(text).toBeNull()
    })
  });
});
