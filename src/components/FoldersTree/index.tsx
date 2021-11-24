import FolderNode from "./FolderNode";
import FileNode from "./FileNode";
import React, { useCallback, useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import utils from "../../utils";
import { FilesDataType, TreeNodeType } from "../../types/Tree.types";

export type FoldersTreeProps = {
  foldersStructureData?: TreeNodeType[];
};
export const FoldersTree = (props: FoldersTreeProps) => {
  const [foldersTreeStructure, setFoldersTreeStructure] = useState<React.ReactElement[] | null>(
    [] as React.ReactElement[]
  );
  const [treeFiles, setTreeFiles] = useState<FilesDataType>({
    count: 0,
    size: 0,
  });

  const parseData = useCallback(
    (data: TreeNodeType[], filesData: FilesDataType): React.ReactElement[] | null => {
      const folderTree = data.map((node, index) => {
        if (node.type === "folder") {
          return (
            <FolderNode key={index} folderName={node.name}>
              {parseData(node.children as TreeNodeType[], filesData)}
            </FolderNode>
          );
        } else {
          filesData.count++;
          filesData.size += node.size ?? 0;
          return <FileNode key={index} fileName={node.name} size={node.size} />;
        }
      });

      setTreeFiles(filesData);
      return folderTree;
    },
    []
  );

  useEffect(() => {
    // if (treeData) {
    //   // const tree = ;
    //   setFoldersTreeStructure(parseData(treeData, treeFiles));
    // }
    if (props.foldersStructureData) {
      // const tree = ;
      setFoldersTreeStructure(parseData(props.foldersStructureData, treeFiles));
    }
    return () => {
      setTreeFiles({ count: 0, size: 0 });
    };
  }, [parseData, props.foldersStructureData, treeFiles]);

  return (
    <>
      <Box
        component='div'
        sx={{
          p: 5,
          // border: "1px dashed grey",
          // width: "80%",
          // msAlignSelf: "ceneter",
          margin: "1rem 0 0 0",
        }}>
        {foldersTreeStructure}
      </Box>
      <Divider variant='middle' sx={{ borderBottomWidth: 2 }} />
      <Box sx={{ margin: "1rem 0 0 2.5rem" }}>
        <Typography variant='subtitle1' fontWeight='500'>
          Total Files: {treeFiles.count}
        </Typography>
        <Typography variant='subtitle1' fontWeight='500'>
          Total Files Size: {utils.format.formatBytes(treeFiles.size)}
        </Typography>
      </Box>
    </>
  );
};

export default FoldersTree;
