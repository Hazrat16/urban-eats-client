// Banner.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Banner from "../pages/Home/Banner/Banner";

// Mocking images to avoid loading actual images in the test environment
jest.mock("../assets/home/01.png", () => "img1");
jest.mock("../assets/home/02.png", () => "img2");
jest.mock("../assets/home/03.png", () => "img3");
jest.mock("../assets/home/04.png", () => "img4");
jest.mock("../assets/home/05.png", () => "img5");
jest.mock("../assets/home/06.png", () => "img6");
jest.mock("../assets/home/07.png", () => "img7");
jest.mock("../assets/home/08.png", () => "img8");
jest.mock("../assets/home/09.png", () => "img9");

describe("Banner Component", () => {
  test("renders Carousel component", () => {
    render(<Banner />);

    // Check if the carousel is rendered
    const carouselElement = screen.getByRole("listbox");
    expect(carouselElement).toBeInTheDocument();
  });

  test("renders all images in the carousel", () => {
    render(<Banner />);

    // Check if all images are rendered
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(9); // Change this number based on your image count
  });

  test("renders images with correct src", () => {
    render(<Banner />);

    // Check if the images have the correct src attribute
    expect(screen.getByRole("img", { name: /img1/i })).toHaveAttribute(
      "src",
      "img1",
    );
    expect(screen.getByRole("img", { name: /img2/i })).toHaveAttribute(
      "src",
      "img2",
    );
    expect(screen.getByRole("img", { name: /img3/i })).toHaveAttribute(
      "src",
      "img3",
    );
    expect(screen.getByRole("img", { name: /img4/i })).toHaveAttribute(
      "src",
      "img4",
    );
    expect(screen.getByRole("img", { name: /img5/i })).toHaveAttribute(
      "src",
      "img5",
    );
    expect(screen.getByRole("img", { name: /img6/i })).toHaveAttribute(
      "src",
      "img6",
    );
    expect(screen.getByRole("img", { name: /img7/i })).toHaveAttribute(
      "src",
      "img7",
    );
    expect(screen.getByRole("img", { name: /img8/i })).toHaveAttribute(
      "src",
      "img8",
    );
    expect(screen.getByRole("img", { name: /img9/i })).toHaveAttribute(
      "src",
      "img9",
    );
  });
});
