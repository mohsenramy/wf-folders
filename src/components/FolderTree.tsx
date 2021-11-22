import FolderNode from "./FolderNode";
import FileNode from "./FileNode";
import treeData from "./data.json";
import React, { useCallback, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import utils from "../utils";
import { FilesDataType, TreeNodeType } from "../Interfaces/Tree.types";

export const FolderTree = () => {
  const [foldersTreeData, setFoldersTreeData] = useState<
    React.ReactElement[] | null
  >([] as React.ReactElement[]);
  const [treeFiles, setTreeFiles] = useState<FilesDataType>({
    count: 0,
    size: 0,
  });

  const parseData = useCallback(
    (
      data: TreeNodeType[],
      filesData: FilesDataType
    ): React.ReactElement[] | null => {
      const folderTree = data.map((node, index) => {
        if (node.type === "folder") {
          return (
            <FolderNode key={index} name={node.name}>
              {parseData(node.children as TreeNodeType[], filesData)}
            </FolderNode>
          );
        } else {
          filesData.count++;
          filesData.size += node.size ?? 0;
          return <FileNode key={index} name={node.name} size={node.size} />;
        }
      });

      setTreeFiles(filesData);
      return folderTree;
    },
    []
  );

  useEffect(() => {
    if (treeData) {
      // const tree = ;
      setFoldersTreeData(parseData(treeData, treeFiles));
    }
    return () => {};
  }, [parseData, treeFiles]);

  return (
    <Box
      component='div'
      sx={{
        p: 2,
        border: "1px dashed grey",
        // width: "80%",
        msAlignSelf: "ceneter",
        paddingBottom: "30px",
      }}>
      {foldersTreeData}
      <Box sx={{ borderTop: "1px solid" }}>
        <Typography>Total Files: {treeFiles.count}</Typography>
        <Typography>
          Total Filesize: {utils.format.formatBytes(treeFiles.size)}
        </Typography>
      </Box>
    </Box>
  );
};

export default FolderTree;
