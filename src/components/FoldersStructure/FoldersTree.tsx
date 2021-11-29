import FolderNode from "./FolderNode";
import FileNode from "./FileNode";
import { useCallback, useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import utils from "../../utils";
import { FilesDataType, TreeNodeType } from "../../types/Tree.types";
import { CreateFolderStructureResult } from "../../types/Structure.types";
import ErrorMessageWithReload from "../common/ErrorMessageWithReload";
import Loading from "../common/Loading";
import { DataPresenter } from "../DataFetcher";

type FoldersTreeProps = DataPresenter<TreeNodeType>;
export const initialState: CreateFolderStructureResult = {
  structure: null,
  files: { count: 0, size: 0 },
  error: null,
};

export const FoldersTree = (props: FoldersTreeProps) => {
  const [structureBuilder, setStructureBuilder] = useState<CreateFolderStructureResult>({
    structure: null,
    files: { count: 0, size: 0 },
    error: null,
  });

  const crateFolderStructure = useCallback(
    (data: TreeNodeType[], filesData: FilesDataType): CreateFolderStructureResult => {
      try {
        const folderTree = data.map((node, index) => {
          switch (node.type) {
            case "folder":
              return (
                <FolderNode key={index} folderName={node.name}>
                  {crateFolderStructure(node.children as TreeNodeType[], filesData).structure}
                </FolderNode>
              );
            case "file":
              filesData.count++;
              filesData.size += node.size ?? 0;
              return <FileNode key={index} fileName={node.name} size={node.size} />;
            default:
              throw new Error("Corrupted data!");
          }
        });

        return { structure: folderTree, files: filesData, error: null };
      } catch (e) {
        return { structure: null, files: filesData, error: e as Error };
      }
    },
    []
  );

  useEffect(() => {
    if (props.serverData && Array.isArray(props.serverData)) {
      setStructureBuilder(crateFolderStructure(props.serverData, structureBuilder.files));
    }
  }, [crateFolderStructure, props.serverData, structureBuilder.files]);

  return (
    <>
      {structureBuilder.structure ? (
        <Box
          component='div'
          sx={{
            padding: "1rem",
            margin: "1rem 0 0 1rem",
          }}>
          {structureBuilder.structure}
        </Box>
      ) : structureBuilder.error ? (
        <ErrorMessageWithReload message={"Data processing failed, try again"} />
      ) : (
        <Loading loadingMessage='Building folders tree...' />
      )}
      <Divider variant='middle' sx={{ borderBottomWidth: 3 }} />
      <Box sx={{ margin: "1rem 0 1rem 2.5rem" }}>
        <Typography variant='subtitle1' fontWeight='500'>
          Total Files: {structureBuilder.files.count}
        </Typography>
        <Typography variant='subtitle1' fontWeight='500'>
          Total Files Size: {utils.format.formatBytes(structureBuilder.files.size)}
        </Typography>
      </Box>
    </>
  );
};

export default FoldersTree;
