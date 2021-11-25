import { useFoldersStructure } from "../../hooks/useFoldersStructure";
import FolderTree from "../FoldersStructure/FoldersTree";
import Loading from "../common/Loading";
import ErrorMessageWithReload from "../common/ErrorMessageWithReload";

function DynamicData() {
  const { isLoading, isError, data } = useFoldersStructure();

  if (isLoading) {
    return <Loading loadingMessage='Fetching Data ...' />;
  }
  if (isError) {
    return <ErrorMessageWithReload message={"Unable to fetch folders data"} />;
  }
  return <FolderTree foldersStructureData={data} />;
}

export default DynamicData;
