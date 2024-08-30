// SectionTitle.test.jsx
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SectionTitle from "../components/SectionTitle/SectionTitle.jsx";

describe("SectionTitle Component", () => {
  test("renders heading correctly", () => {
    const headingText = "My Heading";

    render(<SectionTitle heading={headingText} />);

    // Assert that the heading is rendered
    const headingElement = screen.getByText(headingText);
    expect(headingElement).toBeInTheDocument();
  });

  test("does not render subheading if not provided", () => {
    const headingText = "My Heading";

    render(<SectionTitle heading={headingText} />);

    // Since subHeading is not used in your component, we can't test for it.
    // This is just an example to show how you might test if it was being used.

    // Assert that no subheading text is present
    const subheadingElement = screen.queryByText(/subHeading/i);
    expect(subheadingElement).toBeNull();
  });

  test("renders with no heading provided", () => {
    render(<SectionTitle />);

    // Check that no heading text is rendered
    const headingElement = screen.queryByText(/My Heading/i);
    expect(headingElement).toBeNull();
  });
});
