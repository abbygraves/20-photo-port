import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "..";

const portrait = {
  name: "portraits",
  description: "Portraits of people in my life",
};

afterEach(cleanup);

// GALLERY COMPONENT & SNAPSHOT TEST
describe("Gallery Component", () => {
  it("renders", () => {
    render(<Gallery currentCategory={portrait} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// h1 TEXT VISIBILITY TEST
describe("h1tag", () => {
  it("displays text", () => {
    render(<Gallery currentCategory={portrait} />);
    expect(screen.getByTestId("h1tag")).toHaveTextContent("Portraits");
  });
});

// !!!: MATCHES GITLAB