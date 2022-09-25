import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

// CONTACT COMPONENT & SNAPSHOT TEST
describe("Contact Component", () => {
  it("renders", () => {
    render(<Contact />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// h1 TEXT MATCHES EXPECTED TEST
describe("h1tag", () => {
  it("Displays 'Contact Me'", () => {
    render(<Contact />);
    expect(screen.getByTestId("h1-contact")).toHaveTextContent("Contact me");
  });
});

// SUBMIT BUTTON TEXT MATCHES EXPECTED TEST
describe("submit button", () => {
  it("Displays 'Submit'", () => {
    render(<Contact />);
    expect(screen.getByTestId("submitBtn")).toHaveTextContent("Submit");
  });
});


// !!!: MATCHES GITLAB