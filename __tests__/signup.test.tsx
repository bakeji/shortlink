import '@testing-library/jest-dom'
import LogIn from "@/app/log-in/page";
import { render, screen, fireEvent } from "@testing-library/react";
import mockRouter from 'next-router-mock';
import SignUp from '@/app/sign-up/page';

jest.mock("next/navigation", () => require("next-router-mock"));

describe("signup", () => {
  beforeEach(() => {
    // Set the initial route for the test
    mockRouter.setCurrentUrl("/sign-up");
  });

  it("renders LogIn component", () => {
    render(<SignUp />);
    expect(screen.getByTestId("name")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("submit")).toBeInTheDocument();
  });
});

