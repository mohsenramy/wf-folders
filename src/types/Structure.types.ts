import { FilesDataType } from "./Tree.types";

export type CreateFolderStructureResult = {
  structure: React.ReactElement[] | null;
  files: FilesDataType;
  error: Error | null;
};
