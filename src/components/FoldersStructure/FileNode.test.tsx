import { render, screen } from "@testing-library/react";
import FileNode from "./FileNode";

describe("<FileNode/>", () => {
  it("FileNode is rendered", async () => {
    render(<FileNode fileName={"FileTest.xyz"} size={1258547} />);

    expect(screen.getByText(/FileTest/i)).toBeInTheDocument();
    expect(screen.getByText(/1MB/i)).toBeInTheDocument();
  });
  it("File handles size undefined", async () => {
    render(<FileNode fileName='FileTest.cccc.cccc' size={undefined}></FileNode>);

    expect(screen.getByText(/FileTest/i)).toBeInTheDocument();
    expect(screen.queryByText(/1MB/i)).toBeNull();
    expect(screen.queryByText(/1MB/i)).toBeNull();
  });
});
