import { useQuery } from "react-query";
import { getFoldersStructureData } from "../services/foldersStructure";

export const useFoldersStructure = () => {
  return useQuery("FolderStructure", getFoldersStructureData, {
    retry: false,
    // enabled: false,
    retryOnMount: false,
  });
};
