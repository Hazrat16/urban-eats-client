// src/components/UserHome.test.jsx
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import useAuth from "../hooks/useAuth";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
// Mock the useAuth hook
jest.mock("../hooks/useAuth", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("UserHome", () => {
  it("renders with display name", () => {
    // Set up the mock implementation for useAuth
    useAuth.mockReturnValue({
      user: { displayName: "John Doe" },
    });

    const { getByText } = render(<UserHome />);

    // Check if the greeting with the display name is rendered
    expect(getByText("Hi, Welcome John Doe")).toBeInTheDocument();
  });

  it('renders with "Back" if no display name', () => {
    // Set up the mock implementation for useAuth
    useAuth.mockReturnValue({
      user: {},
    });

    const { getByText } = render(<UserHome />);

    // Check if the greeting with "Back" is rendered
    expect(getByText("Hi, Welcome Back")).toBeInTheDocument();
  });
});
