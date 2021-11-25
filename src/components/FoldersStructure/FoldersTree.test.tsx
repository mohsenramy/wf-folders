import { render, screen } from "@testing-library/react";
import FoldersTree from "./FoldersTree";
import userEvent from "@testing-library/user-event";
import utils from "../../utils";
import { TreeNodeType } from "../../types/Tree.types";

const mockedFoldersData = [
  {
    type: "folder",
    name: "Parent",
    children: [
      {
        type: "file",
        name: "test_file.gif",
        size: 1363029,
      },
      {
        type: "file",
        name: "test_file_2.mpg4",
        size: 4723421,
      },
      {
        type: "folder",
        name: "Child",
        children: [],
      },
    ],
  },
];

describe("<FoldersTree />", () => {
  it("Renders without crashing", () => {
    render(<FoldersTree foldersStructureData={mockedFoldersData} />);
  });

  it("Displays loading indicator", () => {
    const { getByText } = render(<FoldersTree />);
    expect(getByText(/Building folders tree.../i)).toBeVisible();
  });

  it("Displays error message if Data is corrupted", () => {
    render(<FoldersTree foldersStructureData={[{}] as TreeNodeType[]} />);
    expect(screen.queryByText(/Building folders tree.../i)).toBeFalsy();
    screen.getByText(/Data processing failed, try again/i);
    screen.getByText(/Retry/i);
    screen.getByText(/Total Files: 0/i);
    screen.getByText(/Total Files Size: 0Bytes/i);
  });

  it("Display correct tree, folders opens and correct files count & size", async () => {
    render(<FoldersTree foldersStructureData={mockedFoldersData} />);

    expect(screen.queryByText(/Building folders tree.../i)).toBeFalsy();
    expect(screen.queryByText(/test_file/i)).toBeFalsy();
    expect(screen.getByText(mockedFoldersData[0].name)).toBeInTheDocument();
    screen.getByText(/Total Files: 2/i);
    screen.getByText(/Total Files Size: 6MB/i);

    userEvent.click(await screen.findByTestId(/FolderNodeBox/i));
    expect(
      screen.getByText(utils.format.fileWithoutExtension(mockedFoldersData[0].children[0].name))
    ).toBeInTheDocument();
    expect(
      screen.getByText(utils.format.fileWithoutExtension(mockedFoldersData[0].children[1].name))
    ).toBeInTheDocument();
    expect(screen.getByText(mockedFoldersData[0].children[2].name)).toBeInTheDocument();
    screen.getByText(/Total Files: 2/i);
    screen.getByText(/Total Files Size: 6MB/i);
  });
});
