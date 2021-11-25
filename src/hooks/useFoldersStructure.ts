import { useQuery } from "react-query";
import { getFoldersStructureData } from "../services/foldersStructure";

export const useFoldersStructure = () => {
  return useQuery("FolderStructure", getFoldersStructureData, {
    retry: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,
  });
};
