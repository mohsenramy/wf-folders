import { render, screen } from "@testing-library/react";
import { useFoldersStructure } from "../../hooks/useCurrentWeather";
import DynamicData from ".";
import userEvent from "@testing-library/user-event";
import utils from "../../utils";

const mocUseFoldersStructure = useFoldersStructure as jest.Mock<any>;
jest.mock("../../hooks/useFoldersStructure");
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
describe("<DynamicData />", () => {
  beforeEach(() => {
    mocUseFoldersStructure.mockImplementation(() => ({ isLoading: true }));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders without crashing", () => {
    render(<DynamicData />);
  });

  it("Fetching Data", () => {
    render(<DynamicData />);

    expect(useFoldersStructure).toHaveBeenCalled();
    expect(useFoldersStructure).toHaveBeenCalledTimes(1);
  });

  it("Displays loading indicator", () => {
    const { getByText } = render(<DynamicData />);
    expect(getByText(/Fetching data.../i)).toBeVisible();
  });

  it("Displays error message", () => {
    mocUseFoldersStructure.mockImplementation(() => ({
      isLoading: false,
      isError: true,
      error: new Error("Unable to fetch folders structure data"),
    }));
    render(<DynamicData />);

    expect(screen.queryByText(/Fetching data/i)).toBeFalsy(); // We don't want the loading flag to be displayed
    screen.getByText(/Unable to fetch folders data/i);
    screen.getByText(/Retry/i);
  });

  it("Displays data", async () => {
    mocUseFoldersStructure.mockImplementation(() => ({
      isLoading: false,
      data: mockedFoldersData,
    }));

    render(<DynamicData />);

    expect(screen.queryByText(/fetching data/i)).toBeFalsy();
    expect(screen.queryByText(/test_file/i)).toBeFalsy();
    expect(screen.getByText(mockedFoldersData[0].name)).toBeInTheDocument();

    userEvent.click(await screen.findByTestId(/FolderNodeBox/i));

    expect(
      screen.getByText(utils.format.fileWithoutExtension(mockedFoldersData[0].children[0].name))
    ).toBeInTheDocument();
    expect(
      screen.getByText(utils.format.fileWithoutExtension(mockedFoldersData[0].children[1].name))
    ).toBeInTheDocument();
    expect(screen.getByText(mockedFoldersData[0].children[2].name)).toBeInTheDocument();
  });
});
