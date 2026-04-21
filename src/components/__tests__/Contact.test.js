import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Test cases for Contact us component", () => {
  it("should load a contact component", () => {
    render(<Contact />);

    //Querying
    const heading = screen.getByRole("heading");

    //Asssertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button of Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should load button of Contact Component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  it("should load inputName of Contact Component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  it("should load multiple input boxes of Contact Component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
