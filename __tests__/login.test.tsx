import '@testing-library/jest-dom'
import LogIn from "@/app/log-in/page";
import { render, screen } from "@testing-library/react";
import mockRouter from 'next-router-mock';


jest.mock("next/navigation", () => require("next-router-mock"));

describe("LogIn", () => {
  beforeEach(() => {
    // Set the initial route for the test
    mockRouter.setCurrentUrl("/log-in");
  });

  it("renders LogIn component", () => {
    render(<LogIn />);
    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("submit")).toBeInTheDocument();
  });
});

