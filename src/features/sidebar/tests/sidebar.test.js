import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "../sidebar";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
  usePathname() {
    return {
      prefetch: () => null,
    };
  },
}));

it("Sidebar test", () => {
  render(<Sidebar />);
  expect(screen.getByTestId("brand-title")).toBeInTheDocument();
});

it("Brand title would don´t be in document when it is closed", () => {
  render(<Sidebar />);
  const brandTitle = screen.getByTestId("brand-title");
  expect(screen.getByTestId("bug-icon")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("bug-icon"));
  expect(brandTitle).not.toBeInTheDocument();
});
