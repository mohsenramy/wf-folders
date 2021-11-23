import axiosClient from "../api/httpClient";
import { TreeNodeType } from "../Interfaces/Tree.types";

export const getFoldersStructureData = async (): Promise<TreeNodeType[]> => {
  return axiosClient.get("").then((response) => response.data);
};
