import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FileNode from "./FileNode";
import FolderNode from "./FolderNode";

describe("<FolderNode/>", () => {
  test("Folder with children, display closed folder", async () => {
    render(
      <FolderNode folderName={"FolderTest"}>
        {<FileNode fileName='FileTest' size={1258547}></FileNode>}
      </FolderNode>
    );
    expect(await screen.findByTestId(/KeyboardArrowRightIcon/i)).toBeInTheDocument();
    expect(await screen.findByTestId(/FolderIcon/i)).toBeInTheDocument();
    expect(screen.getByText(/FolderTest/i)).toBeInTheDocument();

    expect(screen.queryByTestId(/KeyboardArrowDownIcon/i)).toBeNull(); //.toBeInTheDocument();
    expect(screen.queryByTestId(/FolderOpenIcon/i)).toBeNull();
    expect(screen.queryByText(/FileTest/i)).toBeNull();
  });
  test("Folder with children, display children & change icons on Click", async () => {
    render(
      <FolderNode folderName={"FolderTest"}>
        {<FileNode fileName='FileTest' size={1258547}></FileNode>}
      </FolderNode>
    );
    userEvent.click(await screen.findByTestId(/FolderNodeBox/i));
    expect(await screen.findByTestId(/KeyboardArrowDownIcon/i)).toBeInTheDocument();
    expect(await screen.findByTestId(/FolderOpenIcon/i)).toBeInTheDocument();
    expect(screen.getByText(/FileTest/i)).toBeInTheDocument();
    expect(screen.getByText(/1MB/i)).toBeInTheDocument();
    expect(screen.getByText(/FolderTest/i)).toBeInTheDocument();

    expect(screen.queryByTestId(/KeyboardArrowRightIcon/i)).toBeNull(); //.toBeInTheDocument();
    expect(screen.queryByTestId(/FolderIcon/i)).toBeNull();
  });
  test("Folder with children opened, Hides children & change icons on Click", async () => {
    render(
      <FolderNode folderName={"FolderTest"}>
        {<FileNode fileName='FileTest' size={1258547}></FileNode>}
      </FolderNode>
    );
    userEvent.click(await screen.findByTestId(/FolderNodeBox/i));
    userEvent.click(await screen.findByTestId(/FolderNodeBox/i));
    expect(await screen.findByTestId(/KeyboardArrowRightIcon/i)).toBeInTheDocument();
    expect(await screen.findByTestId(/FolderIcon/i)).toBeInTheDocument();
    expect(screen.getByText(/FolderTest/i)).toBeInTheDocument();

    expect(screen.queryByTestId(/KeyboardArrowDownIcon/i)).toBeNull(); //.toBeInTheDocument();
    expect(screen.queryByTestId(/FolderOpenIcon/i)).toBeNull();
    expect(screen.queryByText(/FileTest/i)).toBeNull();
  });
  test("Folder withOut children opened, Hides children & change icons on Click", async () => {
    render(<FolderNode folderName={"FolderTest"}></FolderNode>);
    userEvent.click(await screen.findByTestId(/FolderNodeBox/i));
    userEvent.click(await screen.findByTestId(/FolderNodeBox/i));
    expect(await screen.findByTestId(/KeyboardArrowRightIcon/i)).toBeInTheDocument();
    expect(await screen.findByTestId(/FolderIcon/i)).toBeInTheDocument();
    expect(screen.getByText(/FolderTest/i)).toBeInTheDocument();

    expect(screen.queryByTestId(/KeyboardArrowDownIcon/i)).toBeNull(); //.toBeInTheDocument();
    expect(screen.queryByTestId(/FolderOpenIcon/i)).toBeNull();
    // expect(screen.queryByText(/FileTest/i)).toBeNull();
  });
});
