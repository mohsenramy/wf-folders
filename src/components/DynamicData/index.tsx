import { useFoldersStructure } from "../../hooks/useFoldersStructure";
import FolderTree from "../FoldersStructure/FoldersTree";
import Loading from "../common/Loading";
import ErrorMessageWithReload from "../common/ErrorMessageWithReload";

function DynamicData() {
  // const theme = useTheme();

  const { isLoading, isError, data } = useFoldersStructure();
  // first argument is a string to cache and track the query result

  if (isLoading) {
    return <Loading loadingMessage='Fetching Data ...' />;
  }
  if (isError) {
    return <ErrorMessageWithReload message={"Unable to fetch folders data"} />;
  }

  return <FolderTree foldersStructureData={data} />;
}

export default DynamicData;
