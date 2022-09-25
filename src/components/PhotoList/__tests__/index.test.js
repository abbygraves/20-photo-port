import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PhotoList from "..";

afterEach(cleanup);

// PHOTOLIST COMPONENT & SNAPSHOT TEST
describe("PhotoList Component", () => {
  it("renders", () => {
    render(<PhotoList />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<PhotoList />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// !!!: MATCHES GITLAB