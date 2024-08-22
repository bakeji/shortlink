import '@testing-library/jest-dom'
import LandingPage from '@/app/page';
import { render, screen } from "@testing-library/react";

describe("LandingPage", () => {
  it("renders LandingPage component", () => {
    render(<LandingPage />);
    expect(screen.getByTestId("get-started")).toBeInTheDocument();
    expect(screen.getByTestId("home")).toBeInTheDocument();
    expect(screen.getByTestId("About")).toBeInTheDocument();
    expect(screen.getByTestId("features")).toBeInTheDocument();
    expect(screen.getByTestId("contact")).toBeInTheDocument();
    expect(screen.getByTestId("log-in")).toBeInTheDocument();
    expect(screen.getByTestId("sign-up")).toBeInTheDocument();
  })

    
});

