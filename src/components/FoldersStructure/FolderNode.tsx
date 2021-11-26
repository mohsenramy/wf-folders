import { useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

export type FolderNodeProps = {
  folderName: string;
  children?: React.ReactNode | undefined;
};

export const FolderNode = ({ folderName, children }: FolderNodeProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const onFolderNodeClick = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <Box
        data-testid='FolderNodeBox'
        sx={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",

          cursor: "pointer",

          "&:hover": {
            opacity: [1.0, 1.0, 0.7],
          },
        }}
        onClick={onFolderNodeClick}>
        {isCollapsed ? (
          <>
            <KeyboardArrowRightIcon color='action' fontSize='small' />
            <FolderIcon color='action' />
          </>
        ) : (
          <>
            <KeyboardArrowDownIcon color='action' fontSize='small' />
            <FolderOpenIcon color='action' />
          </>
        )}
        <Typography
          variant='body1'
          fontWeight='500'
          style={{ margin: "0.3rem 0.6rem 0.3rem 0.6rem" }}>
          {folderName}
        </Typography>
      </Box>
      <Box>
        {!isCollapsed ? (
          <Box
            sx={{
              marginLeft: "2rem",
              height: isCollapsed ? 0 : "auto",
            }}>
            {children}
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default FolderNode;
