import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe("Contact component renders", () => {
  it("renders", () => {
    render(<Contact />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("h1tag", () => {
  it("mtches", () => {
    render(<Contact />);
    expect(screen.getByTestId("h1-contact")).toHaveTextContent("Contact me");
  });

  describe("submit button", () => {
    render(<Contact />);
    expect(screen.getByTestId("submitBtn")).toHaveTextContent("Submit");
  });
});
