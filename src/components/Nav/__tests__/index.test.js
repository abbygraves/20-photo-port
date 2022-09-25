import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const categories = [
  { name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

// NAV COMPONENT & SNAPSHOT TEST
describe("Nav Component", () => {
  // baseline test
  it("renders", () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
  });
  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

// EMOJI VISIBILITY TEST
describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    // Arrange
    // const { getByLabelText } =
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    // Assert
    expect(screen.getByLabelText("camera")).toHaveTextContent("📸");
  });
});

// LINK VISIBILITY TEST
describe("links are visible", () => {
  it("inserts text into the links", () => {
    // Arrange
    // const { getByTestId } =
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    // Assert
    expect(screen.getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(screen.getByTestId("about")).toHaveTextContent("About me");
  });
});


describe('onClick events', () => {
  it('calls the click handler when clicked', () => {
    render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);
    fireEvent.click(screen.getByText('About me'))
    fireEvent.click(screen.getByText('Contact'))
    fireEvent.click(screen.getByText('Portraits'))

    expect(mockSetContactSelected).toHaveBeenCalledTimes(3);
  });
});
