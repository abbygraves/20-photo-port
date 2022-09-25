import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const mockToggleModal = jest.fn();
const currentPhoto = {
  name: "Park bench",
  category: "landscape",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
  index: 1,
};

afterEach(cleanup);

// MODAL COMPONENT & SNAPSHOT TEST
describe("Modal Component", () => {
  it("Renders", () => {
    // ⬇︎ Baseline Render Component Test
    render(<Modal 
      currentPhoto={currentPhoto} 
      onClose={mockToggleModal} 
    />);
  })
  // Snapshot Test ⬇︎
  it("Matches snapshot DOM node structure", () => {
    // ⬇︎ Arrange: Snapshot - declare variables
    const { asFragment } = render(<Modal 
      currentPhoto={currentPhoto} 
      onClose={mockToggleModal} 
    />);
    // Assert: Expected Matcher ⬇︎
    expect(asFragment()).toMatchSnapshot();
  });
});

// CLICK EVENT TEST
describe("Click Event", () => {
  it("calls onClose handler", () => {
    // Arrange: Render Modal ⬇︎
    const { getByText } = render(<Modal
      onClose={mockToggleModal}
      currentPhoto={currentPhoto}
    />);
    // Act: Simulate click event ⬇︎
    fireEvent.click(screen.getByText('Close this modal'));
    // Assert: Expected Matcher ⬇︎
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
})




