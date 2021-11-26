import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("Renders without crashes", () => {
    render(<App />);
  });
  it("Renders Header, Footer & correct GitHub link", async () => {
    render(<App />);
    expect(await screen.findByTestId(/Header/i)).toBeInTheDocument();
    expect(await screen.findByTestId(/Footer/i)).toBeInTheDocument();

    expect(screen.getByText(/GitHub Repo/i).closest("a")).toHaveAttribute(
      "href",
      "https://github.com/mohsenramy/wf-folders"
    );
  });
});
